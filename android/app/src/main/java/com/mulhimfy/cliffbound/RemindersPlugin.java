package com.mulhimfy.cliffbound;

import android.Manifest;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import androidx.core.app.NotificationManagerCompat;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * Evening reminders with a picture, made on the phone: the game plans them (src/game/notify.ts),
 * this plugin arms an alarm per reminder, ReminderReceiver shows it, ReminderBootReceiver re-arms
 * them after a reboot. No push service and no account.
 */
@CapacitorPlugin(name = "Reminders", permissions = { @Permission(strings = { Manifest.permission.POST_NOTIFICATIONS }, alias = "display") })
public class RemindersPlugin extends Plugin {

    @Override
    public void load() {
        ReminderNotifier.channels(getContext());
        // opened from a reminder while the app was closed: the game picks the route up when it listens
        emitRoute(getActivity().getIntent());
    }

    @Override
    protected void handleOnNewIntent(Intent intent) {
        super.handleOnNewIntent(intent);
        emitRoute(intent);
    }

    private void emitRoute(Intent intent) {
        if (intent == null || !ReminderNotifier.ACTION_OPEN.equals(intent.getAction())) return;
        String route = intent.getStringExtra(ReminderNotifier.EXTRA_ROUTE);
        // consume it, so a recreated activity does not replay the tap
        intent.setAction(Intent.ACTION_MAIN);
        intent.removeExtra(ReminderNotifier.EXTRA_ROUTE);
        JSObject data = new JSObject();
        data.put("route", route == null ? "home" : route);
        notifyListeners("tap", data, true);
    }

    private JSObject statusObject() {
        boolean enabled = NotificationManagerCompat.from(getContext()).areNotificationsEnabled();
        String display;
        if (Build.VERSION.SDK_INT >= 33) {
            PermissionState s = getPermissionState("display");
            if (s == PermissionState.GRANTED) display = enabled ? "granted" : "denied";
            else if (s == PermissionState.DENIED) display = "denied";
            else display = "prompt";
        } else {
            display = enabled ? "granted" : "denied";
        }
        JSObject o = new JSObject();
        o.put("display", display);
        return o;
    }

    @PluginMethod
    public void status(PluginCall call) {
        call.resolve(statusObject());
    }

    @PluginMethod
    public void request(PluginCall call) {
        if (Build.VERSION.SDK_INT < 33 || getPermissionState("display") == PermissionState.GRANTED) {
            call.resolve(statusObject());
            return;
        }
        requestPermissionForAlias("display", call, "permissionDone");
    }

    @PermissionCallback
    private void permissionDone(PluginCall call) {
        call.resolve(statusObject());
    }

    @PluginMethod
    public void openSettings(PluginCall call) {
        String pkg = getContext().getPackageName();
        Intent i = Build.VERSION.SDK_INT >= 26
            ? new Intent(Settings.ACTION_APP_NOTIFICATION_SETTINGS).putExtra(Settings.EXTRA_APP_PACKAGE, pkg)
            : new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.parse("package:" + pkg));
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        try {
            getActivity().startActivity(i);
        } catch (Exception e) {
            getActivity().startActivity(new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.parse("package:" + pkg)).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));
        }
        call.resolve();
    }

    /** Replaces every planned reminder with `items`. */
    @PluginMethod
    public void schedule(PluginCall call) {
        JSArray items = call.getArray("items");
        if (items == null) {
            call.reject("items missing");
            return;
        }
        try {
            int n = ReminderScheduler.replaceAll(getContext(), new JSONArray(items.toString()));
            JSObject o = new JSObject();
            o.put("scheduled", n);
            call.resolve(o);
        } catch (JSONException e) {
            call.reject("bad items", e);
        }
    }

    @PluginMethod
    public void cancelAll(PluginCall call) {
        ReminderScheduler.replaceAll(getContext(), new JSONArray());
        call.resolve();
    }

    @PluginMethod
    public void pending(PluginCall call) {
        JSObject o = new JSObject();
        try {
            o.put("items", new JSArray(ReminderStore.load(getContext()).toString()));
        } catch (JSONException e) {
            o.put("items", new JSArray());
        }
        call.resolve(o);
    }
}
