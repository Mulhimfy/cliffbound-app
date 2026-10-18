#!/usr/bin/env bash
# Emulator smoke test for Cliffbound (runs inside android-emulator-runner).
set -u
mkdir -p smoke-out
PKG=com.mulhimfy.cliffbound
adb install -r smoke.apk
adb logcat -c
adb shell am start -n "$PKG/.MainActivity"
sleep 35
adb exec-out screencap -p > smoke-out/01-home.png
SIZE=$(adb shell wm size | grep -oE '[0-9]+x[0-9]+' | tail -1)
W=${SIZE%x*}
H=${SIZE#*x}
# tap CLIMB (bottom button), then play a few swipes
adb shell input tap $((W / 2)) $((H * 76 / 100))
sleep 14
adb exec-out screencap -p > smoke-out/02-run.png
for d in left right up down right left; do
  case $d in
    left) adb shell input swipe $((W * 6 / 10)) $((H / 2)) $((W * 3 / 10)) $((H / 2)) 80 ;;
    right) adb shell input swipe $((W * 4 / 10)) $((H / 2)) $((W * 7 / 10)) $((H / 2)) 80 ;;
    up) adb shell input swipe $((W / 2)) $((H * 6 / 10)) $((W / 2)) $((H * 3 / 10)) 80 ;;
    down) adb shell input swipe $((W / 2)) $((H * 4 / 10)) $((W / 2)) $((H * 7 / 10)) 80 ;;
  esac
  sleep 2
done
adb exec-out screencap -p > smoke-out/03-run.png
sleep 20
adb exec-out screencap -p > smoke-out/04-later.png
adb logcat -d > smoke-out/logcat.txt
grep -E "Capacitor|chromium|Console|AndroidRuntime|FATAL|WebGL|GL_" smoke-out/logcat.txt | grep -v -E "^$|primcount is 0" | tail -400 > smoke-out/app-log.txt || true
echo "---- app log (tail) ----"
tail -80 smoke-out/app-log.txt
if grep -q "FATAL EXCEPTION" smoke-out/logcat.txt; then
  echo "::error::Native crash"
  exit 1
fi
if grep -E "Uncaught|TypeError|ReferenceError" smoke-out/app-log.txt | grep -v "favicon"; then
  echo "::error::JavaScript error in the WebView"
  exit 1
fi
if ! adb shell pidof "$PKG" > /dev/null; then
  if grep -q "Killing .*$PKG.*depends on provider" smoke-out/logcat.txt; then
    echo "::warning::The emulator killed the app because a system provider died (not an app crash)"
  else
    echo "::error::App is not running any more"
    exit 1
  fi
fi
echo "Smoke test passed"
