---
title: How to Install Voice Access on Sonim XP5Plus XP5900
published: true
---

Here are my notes on installing Google Voice Access (for Voice-to-Text) on a Sonim XP5Plus XP5900.

Find Android version: `adb shell getprop ro.build.version.release`

`11`

Find CPU architecture: `adb shell getprop ro.product.cpu.abi`

`arm64-v8a`

Download Voice Access 6.2.617256942 (arm64-v8a) (nodpi) (Android 9.0+) from [apkmirror](https://www.apkmirror.com/apk/google-inc/voice-access/voice-access-6-2-617256942-release/voice-access-6-2-617256942-3-android-apk-download/)

Install with adb:

`adb install com.google.android.apps.accessibility.voiceaccess_6.2.617256942-85126_minAPI28(arm64-v8a)(nodpi)_apkmirror.com.apk`

Go to Settings > Accessibility > Voice Access. Toggle Use Voice Access and follow the setup wizard. [Scrcpy](https://github.com/Genymobile/scrcpy) is helpful.

To set a physical activation key, go to Voice Access Settings > Configure activation key. I used the speaker button above the green Send key.

After selecting the activation key, you have to click an invisible OK button to save the change. It should be just below the last letter of `KEYCODE_SPEAKER` in screenshot below:

![Selecting invisible button for activation key](/assets/images/voice-access-activation-key.png)

Set the Activation key behavior to 'Press and hold to start, release to stop'