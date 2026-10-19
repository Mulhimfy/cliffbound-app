package com.mulhimfy.cliffbound;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        // the app's own native plugins, registered before the bridge starts
        registerPlugin(RemindersPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
