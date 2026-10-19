#!/usr/bin/env bash
# Emulator smoke test for Cliffbound (runs inside android-emulator-runner).
set -u
mkdir -p smoke-out
PKG=com.mulhimfy.cliffbound
adb install -r smoke.apk
# reminders: allow notifications up front (Android 13+ asks at runtime), as a player who said yes
adb shell pm grant "$PKG" android.permission.POST_NOTIFICATIONS || true
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
# ── evening reminders: planned on launch, armed as alarms, shown with a picture when one comes due
adb shell input keyevent KEYCODE_HOME
sleep 4
adb shell run-as "$PKG" cat shared_prefs/cliffbound.reminders.xml > smoke-out/reminders.xml 2>/dev/null || true
echo "---- planned reminders ----"
python3 - <<'PY2' | tee smoke-out/reminders.txt
import html, json, re
raw = open('smoke-out/reminders.xml').read()
m = re.search(r'<string name="items">(.*?)</string>', raw, re.S)
items = json.loads(html.unescape(m.group(1))) if m else []
for it in items:
    print(f"{it['day']} {it['minute'] // 60:02d}:{it['minute'] % 60:02d} [{it['channel']}] {it['title']} | {it['body']} | {it['picture']} -> {it['route']}{' (live)' if it.get('live') else ''}")
if items:
    open('smoke-out/first.txt', 'w').write(f"{items[0]['day']} {items[0]['minute']}")
PY2
ALARMS=$(adb shell dumpsys alarm | grep -c "$PKG" || true)
echo "armed reminder alarms: $ALARMS"
if [ ! -s smoke-out/first.txt ] || [ "${ALARMS:-0}" -lt 1 ]; then
  echo "::error::No reminders were planned / armed"
  adb logcat -d > smoke-out/logcat.txt
  exit 1
fi
# jump the clock to one minute after the first reminder: the alarm fires as it would that evening
read -r DAY MIN < smoke-out/first.txt
adb root > /dev/null 2>&1 || true
adb wait-for-device
adb shell settings put global auto_time 0
STAMP=$(python3 -c "import sys; d,m=sys.argv[1],int(sys.argv[2])+1; y,mo,da=d.split('-'); print(f'{mo}{da}{m//60:02d}{m%60:02d}{y}.00')" "$DAY" "$MIN")
adb shell date "$STAMP" > /dev/null
sleep 25
adb shell dumpsys notification --noredact > smoke-out/notifications.txt
if ! grep -q "pkg=$PKG" smoke-out/notifications.txt; then
  echo "::error::The reminder did not show"
  adb logcat -d > smoke-out/logcat.txt
  exit 1
fi
grep -E "android.title=|android.text=|BigPictureStyle|android.picture" smoke-out/notifications.txt | grep -v -i "token" | head -8
grep -q "BigPictureStyle" smoke-out/notifications.txt || echo "::warning::Reminder shown without its picture"
adb shell cmd statusbar expand-notifications
sleep 3
adb exec-out screencap -p > smoke-out/05-reminder.png
adb shell cmd statusbar collapse
# a tap on it opens the screen it talks about
adb shell am start -n "$PKG/.MainActivity" -a com.mulhimfy.cliffbound.REMINDER_OPEN --es cb_route daily > /dev/null
sleep 8
adb exec-out screencap -p > smoke-out/06-from-reminder.png
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
