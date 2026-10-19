package com.mulhimfy.cliffbound;

import android.content.Context;
import android.content.SharedPreferences;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/** The planned reminders, kept so a reboot can re-arm them (alarms do not survive one). */
final class ReminderStore {

    private static final String PREFS = "cliffbound.reminders";
    private static final String KEY = "items";

    private ReminderStore() {}

    private static SharedPreferences prefs(Context ctx) {
        return ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }

    static synchronized JSONArray load(Context ctx) {
        try {
            return new JSONArray(prefs(ctx).getString(KEY, "[]"));
        } catch (JSONException e) {
            return new JSONArray();
        }
    }

    static synchronized void save(Context ctx, JSONArray items) {
        prefs(ctx).edit().putString(KEY, items.toString()).commit();
    }

    /** Removes and returns the reminder with this id (null if it was replaced meanwhile). */
    static synchronized JSONObject take(Context ctx, int id) {
        JSONArray all = load(ctx);
        JSONArray keep = new JSONArray();
        JSONObject hit = null;
        for (int i = 0; i < all.length(); i++) {
            JSONObject it = all.optJSONObject(i);
            if (it == null) continue;
            if (hit == null && it.optInt("id", -1) == id) hit = it;
            else keep.put(it);
        }
        if (hit != null) save(ctx, keep);
        return hit;
    }
}
