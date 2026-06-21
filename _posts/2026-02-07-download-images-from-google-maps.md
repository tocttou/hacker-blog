---
title: Download Images from Google Maps in Full Resolution - no addons or extensions
published: true
---

Here is a way to download high resolution images from Google Maps without additional software or browser extensions.

1. Right-click a picture from the list on the left and click inspect.
2. Above the highlighted element should be a div with role="img" that contains a image URL.
3. Near the end of the URL, replace the w###-h### with s16383 and save as a picture.

Presumably,
```
w = width
h = height
s = size
```

The image contains the original metadata too, which is interesting.

![GIF demo saving pictures from Google Maps](/assets/images/3731de930dd578edd688ff9777f7bbbc24bdd50c.gif)

Why 16383?
Entering any number larger than the largest dimension of the original image will download the original file from what I can tell. I discovered by trial and error that 16383 is the largest number it will accept. Apparently 16383 = 0x3FFF the maximum value that can be expressed with 14 bits, a limitation of the Webp image format.