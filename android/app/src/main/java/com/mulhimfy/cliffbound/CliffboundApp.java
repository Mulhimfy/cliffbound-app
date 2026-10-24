package com.mulhimfy.cliffbound;

import android.app.Application;
import com.google.android.gms.games.PlayGamesSdk;

/** Starts Google Play Games Services v2, which signs the player in automatically at launch. */
public class CliffboundApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        PlayGamesSdk.initialize(this);
    }
}
