package com.mulhimfy.cliffbound;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.text.NumberFormat;
import java.util.Calendar;
import java.util.Locale;
import org.json.JSONObject;

/**
 * An alarm went off: show its reminder. A daily-climb reminder can carry a `live` template that is
 * filled with that day's real numbers at this moment ("1,204 climbers took today's daily"); with
 * no connection, or too few climbers yet, the plain text is shown instead.
 */
public class ReminderReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent == null || !ReminderScheduler.ACTION_FIRE.equals(intent.getAction())) return;
        final Context ctx = context.getApplicationContext();
        final JSONObject it = ReminderStore.take(ctx, intent.getIntExtra("id", -1));
        if (it == null) return;
        long late = System.currentTimeMillis() - ReminderScheduler.triggerAt(it);
        // delivered hours late (phone off, deep sleep) or in the middle of the night: drop it
        if (late > it.optInt("window", 120) * 60_000L || late < -5 * 60_000L) return;
        int hour = Calendar.getInstance().get(Calendar.HOUR_OF_DAY);
        if (!it.optBoolean("test") && (hour >= 23 || hour < 8)) return;
        final PendingResult pending = goAsync();
        deliver(ctx, it, pending::finish);
    }

    /** Shows a reminder now, filling in the day's numbers first if it has a live template. */
    static void deliver(Context ctx, JSONObject it, Runnable done) {
        final JSONObject live = it.optJSONObject("live");
        if (live == null) {
            try {
                ReminderNotifier.show(ctx, it, null);
            } finally {
                done.run();
            }
            return;
        }
        new Thread(() -> {
            try {
                ReminderNotifier.show(ctx, it, fill(live));
            } finally {
                done.run();
            }
        }, "cliffbound-reminder").start();
    }

    /** {title, body} with the day's numbers, or null to keep the plain text. Never throws. */
    static String[] fill(JSONObject live) {
        HttpURLConnection con = null;
        try {
            URL url = new URL(live.getString("url"));
            if (!"https".equals(url.getProtocol())) return null;
            con = (HttpURLConnection) url.openConnection();
            con.setConnectTimeout(3500);
            con.setReadTimeout(3500);
            con.setRequestProperty("Accept", "application/json");
            if (con.getResponseCode() != 200) return null;
            JSONObject s = new JSONObject(read(con.getInputStream()));
            int n = s.optInt("n", 0);
            int p50 = s.optInt("p50", 0);
            if (n < live.optInt("min", 10) || p50 < 25) return null;
            NumberFormat f = NumberFormat.getIntegerInstance(Locale.US);
            String[] out = { live.optString("title"), live.optString("body") };
            for (int i = 0; i < 2; i++) {
                out[i] = out[i].replace("{n}", f.format(n)).replace("{p50}", f.format(p50)).replace("{p90}", f.format(s.optInt("p90", 0)));
            }
            return out[0].isEmpty() ? null : out;
        } catch (Exception e) {
            return null;
        } finally {
            if (con != null) con.disconnect();
        }
    }

    private static String read(InputStream in) throws java.io.IOException {
        try (InputStream s = in) {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buf = new byte[4096];
            int r;
            while ((r = s.read(buf)) != -1 && out.size() < 256 * 1024) out.write(buf, 0, r);
            return new String(out.toByteArray(), StandardCharsets.UTF_8);
        }
    }
}
