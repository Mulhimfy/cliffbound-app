package com.mulhimfy.cliffbound;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import java.util.Calendar;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 * Arms one alarm per reminder. A reminder names a local day and a minute of that day (so it follows
 * the phone into a new time zone), or an absolute `at` (tests). Alarms are inexact on purpose: no
 * exact-alarm permission, and Android still delivers them within the hour, usually within minutes.
 */
final class ReminderScheduler {

    static final String ACTION_FIRE = "com.mulhimfy.cliffbound.REMINDER_FIRE";

    private ReminderScheduler() {}

    /** Wall-clock trigger time in ms, in the phone's current time zone (0 = invalid). */
    static long triggerAt(JSONObject it) {
        long at = it.optLong("at", 0);
        if (at > 0) return at;
        String day = it.optString("day", "");
        int minute = it.optInt("minute", -1);
        if (day.length() != 10 || minute < 0 || minute >= 24 * 60) return 0;
        try {
            int y = Integer.parseInt(day.substring(0, 4));
            int m = Integer.parseInt(day.substring(5, 7));
            int d = Integer.parseInt(day.substring(8, 10));
            Calendar c = Calendar.getInstance();
            c.clear();
            c.set(y, m - 1, d, minute / 60, minute % 60, 0);
            return c.getTimeInMillis();
        } catch (NumberFormatException e) {
            return 0;
        }
    }

    private static PendingIntent fireIntent(Context ctx, int id, int flags) {
        Intent i = new Intent(ctx, ReminderReceiver.class)
            .setAction(ACTION_FIRE)
            .setData(Uri.parse("cliffbound://reminder/" + id))
            .putExtra("id", id);
        return PendingIntent.getBroadcast(ctx, id, i, PendingIntent.FLAG_IMMUTABLE | flags);
    }

    /** Replaces every armed reminder with these; returns how many are still ahead and armed. */
    static synchronized int replaceAll(Context ctx, JSONArray items) {
        JSONArray old = ReminderStore.load(ctx);
        for (int i = 0; i < old.length(); i++) {
            JSONObject it = old.optJSONObject(i);
            if (it != null) disarm(ctx, it.optInt("id", -1));
        }
        JSONArray keep = new JSONArray();
        long now = System.currentTimeMillis();
        for (int i = 0; i < items.length(); i++) {
            JSONObject it = items.optJSONObject(i);
            if (it == null || !it.has("id")) continue;
            long at = triggerAt(it);
            if (at <= now) continue;
            keep.put(it);
            arm(ctx, it.optInt("id"), at);
        }
        ReminderStore.save(ctx, keep);
        return keep.length();
    }

    /** After a reboot, an app update or a time zone change: re-arm what is still ahead. */
    static void restore(Context ctx) {
        replaceAll(ctx, ReminderStore.load(ctx));
    }

    private static void arm(Context ctx, int id, long at) {
        AlarmManager am = (AlarmManager) ctx.getSystemService(Context.ALARM_SERVICE);
        if (am == null) return;
        am.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, at, fireIntent(ctx, id, PendingIntent.FLAG_UPDATE_CURRENT));
    }

    private static void disarm(Context ctx, int id) {
        AlarmManager am = (AlarmManager) ctx.getSystemService(Context.ALARM_SERVICE);
        PendingIntent pi = fireIntent(ctx, id, PendingIntent.FLAG_NO_CREATE);
        if (pi == null) return;
        if (am != null) am.cancel(pi);
        pi.cancel();
    }
}
