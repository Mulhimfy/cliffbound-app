package com.mulhimfy.cliffbound;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

/** Alarms die with a reboot and an app update; a new time zone moves "21:00". Re-arm them all. */
public class ReminderBootReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        String a = intent == null ? null : intent.getAction();
        if (Intent.ACTION_BOOT_COMPLETED.equals(a) || Intent.ACTION_MY_PACKAGE_REPLACED.equals(a) || Intent.ACTION_TIMEZONE_CHANGED.equals(a)) {
            ReminderScheduler.restore(context.getApplicationContext());
        }
    }
}
