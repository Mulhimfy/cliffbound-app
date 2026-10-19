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
python3 - <<'PY2'
import html, json, re
raw = open('smoke-out/reminders.xml').read()
m = re.search(r'<string name="items">(.*?)</string>', raw, re.S)
items = json.loads(html.unescape(m.group(1))) if m else []
with open('smoke-out/items.tsv', 'w') as f:
    for it in items:
        print(f"{it['day']} {it['minute'] // 60:02d}:{it['minute'] % 60:02d} [{it['channel']}] {it['title']} | {it['body']} | {it['picture']} -> {it['route']}{' (live)' if it.get('live') else ''}")
        f.write(f"{it['id']}\t{it['day']}\t{it['minute']}\t{it['title']}\n")
PY2
adb shell dumpsys alarm > smoke-out/alarms-before.txt
ALARMS=$(grep -c "$PKG" smoke-out/alarms-before.txt || true)
echo "armed reminder alarms: $ALARMS"
if [ "$(wc -l < smoke-out/items.tsv)" -lt 2 ] || [ "${ALARMS:-0}" -lt 2 ]; then
  echo "::error::No reminders were planned / armed"
  adb logcat -d > smoke-out/logcat.txt
  exit 1
fi
stamp() { python3 -c "import sys; d,s=sys.argv[1],int(sys.argv[2]); y,mo,da=d.split('-'); print(f'{mo}{da}{s//3600:02d}{s//60%60:02d}{y}.{s%60:02d}')" "$1" "$2"; }
shown() { adb shell dumpsys notification --noredact > smoke-out/notifications.txt; grep -F "android.title=String ($1)" smoke-out/notifications.txt > /dev/null; }
adb root > /dev/null 2>&1 || true
adb wait-for-device
adb shell settings put global auto_time 0
# A · the notification: at the first reminder's time, its receiver shows it with its picture
IFS=$'\t' read -r ID1 DAY1 MIN1 TITLE1 < <(sed -n 1p smoke-out/items.tsv)
adb shell date "$(stamp "$DAY1" $((MIN1 * 60 + 60)))" > /dev/null
adb shell am set-standby-bucket "$PKG" active
adb shell am broadcast -n "$PKG/.ReminderReceiver" -a com.mulhimfy.cliffbound.REMINDER_FIRE --ei id "$ID1" > /dev/null
sleep 12
if ! shown "$TITLE1"; then
  echo "::error::The reminder did not show: $TITLE1"
  adb logcat -d > smoke-out/logcat.txt
  exit 1
fi
echo "shown: $TITLE1"
grep -E "android.template=|android.picture=" smoke-out/notifications.txt | head -3
grep -q "BigPictureStyle" smoke-out/notifications.txt || echo "::warning::Reminder shown without its picture"
adb shell cmd statusbar expand-notifications
sleep 3
adb exec-out screencap -p > smoke-out/05-reminder.png
adb shell cmd statusbar collapse
# B · the alarm: 20 s before the next reminder, Android itself must deliver it (window: 10 min)
IFS=$'\t' read -r ID2 DAY2 MIN2 TITLE2 < <(sed -n 2p smoke-out/items.tsv)
adb shell date "$(stamp "$DAY2" $((MIN2 * 60 - 20)))" > /dev/null
adb shell am set-standby-bucket "$PKG" active
OK=0
for i in $(seq 1 48); do
  sleep 15
  if shown "$TITLE2"; then OK=1; echo "alarm delivered after ~$((i * 15)) s: $TITLE2"; break; fi
done
if [ "$OK" != 1 ]; then
  adb shell dumpsys alarm > smoke-out/alarms-after.txt
  echo "::error::The alarm for the next reminder never fired: $TITLE2"
  adb logcat -d > smoke-out/logcat.txt
  exit 1
fi
# a tap on a reminder opens the screen it talks about
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
