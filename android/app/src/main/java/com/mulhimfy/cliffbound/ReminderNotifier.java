package com.mulhimfy.cliffbound;

import android.Manifest;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Build;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.core.content.ContextCompat;
import java.io.InputStream;
import org.json.JSONObject;

/** Builds and posts a reminder: big picture from the app's own art, tap opens the right screen. */
final class ReminderNotifier {

    static final String ACTION_OPEN = "com.mulhimfy.cliffbound.REMINDER_OPEN";
    static final String EXTRA_ROUTE = "cb_route";
    /** one slot in the shade: a new reminder replaces an unread older one instead of stacking */
    private static final int SHOWN_ID = 7001;
    private static final String TAG = "cliffbound";
    /** brand signal orange */
    private static final int ACCENT = 0xFFFF5A1F;

    private ReminderNotifier() {}

    static void channels(Context ctx) {
        if (Build.VERSION.SDK_INT < 26) return;
        NotificationManager nm = ctx.getSystemService(NotificationManager.class);
        if (nm == null) return;
        NotificationChannel daily = new NotificationChannel("daily", "Daily climb", NotificationManager.IMPORTANCE_DEFAULT);
        daily.setDescription("When a new daily climb opens and your streak needs you");
        NotificationChannel progress = new NotificationChannel("progress", "Climb reminders", NotificationManager.IMPORTANCE_DEFAULT);
        progress.setDescription("Your next summit, missions and climbers to unlock");
        nm.createNotificationChannel(daily);
        nm.createNotificationChannel(progress);
    }

    static void show(Context ctx, JSONObject it, String[] live) {
        if (!NotificationManagerCompat.from(ctx).areNotificationsEnabled()) return;
        if (Build.VERSION.SDK_INT >= 33 && ContextCompat.checkSelfPermission(ctx, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) return;
        channels(ctx);
        String title = live != null ? live[0] : it.optString("title");
        String body = live != null ? live[1] : it.optString("body");
        if (title.isEmpty()) return;
        String channel = "daily".equals(it.optString("channel")) ? "daily" : "progress";
        Intent open = new Intent(ctx, MainActivity.class)
            .setAction(ACTION_OPEN)
            .putExtra(EXTRA_ROUTE, it.optString("route", "home"))
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        PendingIntent tap = PendingIntent.getActivity(ctx, SHOWN_ID, open, PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
        NotificationCompat.Builder b = new NotificationCompat.Builder(ctx, channel)
            .setSmallIcon(R.drawable.ic_stat_cliffbound)
            .setColor(ACCENT)
            .setContentTitle(title)
            .setContentText(body)
            .setContentIntent(tap)
            .setAutoCancel(true)
            .setOnlyAlertOnce(true)
            .setCategory(NotificationCompat.CATEGORY_REMINDER)
            .setPriority(NotificationCompat.PRIORITY_DEFAULT);
        Bitmap pic = picture(ctx, it.optString("picture", ""));
        if (pic != null) {
            // collapsed: a square thumbnail; expanded: the full-width picture under the text
            b.setLargeIcon(square(pic, 256));
            b.setStyle(new NotificationCompat.BigPictureStyle().bigPicture(pic).bigLargeIcon((Bitmap) null).setBigContentTitle(title).setSummaryText(body));
        } else {
            b.setStyle(new NotificationCompat.BigTextStyle().bigText(body));
        }
        try {
            NotificationManagerCompat.from(ctx).notify(TAG, SHOWN_ID, b.build());
        } catch (SecurityException ignored) {
            // permission withdrawn between the check and the post
        }
    }

    /** Art shipped with the web bundle (dist/notify/…, packaged under assets/public/). */
    private static Bitmap picture(Context ctx, String path) {
        if (path.isEmpty() || path.contains("..")) return null;
        try (InputStream in = ctx.getAssets().open("public/" + path)) {
            return BitmapFactory.decodeStream(in);
        } catch (Exception e) {
            return null;
        }
    }

    private static Bitmap square(Bitmap src, int size) {
        int side = Math.min(src.getWidth(), src.getHeight());
        Bitmap crop = Bitmap.createBitmap(src, (src.getWidth() - side) / 2, (src.getHeight() - side) / 2, side, side);
        return Bitmap.createScaledBitmap(crop, size, size, true);
    }
}
