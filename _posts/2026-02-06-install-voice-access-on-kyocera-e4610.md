---
title: How to Install Voice Access on Kyocera DuraXV E4610
published: true
---

Here are my notes on installing Google Voice Access (for Voice-to-Text) on a Kyocera DuraXV E4610.

Find Android version: `adb shell getprop ro.build.version.release`

`7.1.1`

Find CPU architecture: `adb shell getprop ro.product.cpu.abi`

`armeabi-v7a`

Download Voice Access 5.5.436750297 (arm-v7a) (nodpi) (Android 6.0+) from [apkmirror](https://www.apkmirror.com/apk/google-inc/voice-access/voice-access-5-5-436750297-release/voice-access-5-5-436750297-2-android-apk-download)

Install with adb:

`adb install 'com.google.android.apps.accessibility.voiceaccess_5.5.436750297-65195_minAPI23(armeabi-v7a)(nodpi)_apkmirror.com.apk'`

Launch voice access:

`adb shell am start -n com.google.android.apps.accessibility.voiceaccess/.activities.LaunchActivity`

Configure the app. [Scrcpy](https://github.com/Genymobile/scrcpy) is helpful. Enable Voice Access, grant permissions, configure hardware activation key, etc. (I used the Voice Command key right above the END key and set it to record while the button is held.)