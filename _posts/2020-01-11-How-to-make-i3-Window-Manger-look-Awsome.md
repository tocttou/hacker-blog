---
title: How to make i3 Window Manager look Awesome -aav
---
<p>If you like your desktop environment then you should try window manger but then you have to choose the best one. The best one that I can find is the i3 window manager. It is the best one that suits me well. If you install i3 then you well see it looks very ugly.</p>
<img src="https://i3wm.org/screenshots/i3-9.png">
<p>But here I am going to tell you how to make it look like Taylor swift(means awesome). If you never used the window manger then it is very different from the desktop environment. You have to edit the config file of i3 like <a href="https://amanajayvarma.tk/How-make-Vim-bautiful-as-God"> vim</a>.</p>
<h3>Installing i3</h3>
<pre>sudo apt-get install i3</pre>
<h3>Editing i3 config file</h3>
<p>Go to the i3 config file.</p>
<pre>cd .config/i3/config</pre>
Then open the `config` file. And Copy the Gist text & Paste in it.
<script src="https://gist.github.com/AmanAjayVarma/23e71fe3e9863968b4ced547176ba96b.js?file=i3"></script>
Now go back home dir `cd`.
<h3>Editing i3status config file</h3>
<p>Now we are going to edit the i3 status bar. Here we are going to use the same steps as the first one.</p>
<p>Go to i3status config file</p>
<pre>cd .config/i3status/config</pre>
Then open the `config` file. And Copy the Gist text & Paste in it.
<script src="https://gist.github.com/AmanAjayVarma/23e71fe3e9863968b4ced547176ba96b.js?file=i3status"></script>
<h3>Making it Dark and Transparent and more</h3>
<p>Installing packages</p>
<pre>sudo apt-get install compton hsetroot rxvt-unicode xsel rofi fonts-noto fonts-mplus xsettingsd lxappearance scrot viewniori copyq redshift-gtk</pre>
<p>Making it dark & transprent. Open terminal and Enter.</p>
<pre>rofi-theme-selector</pre>
Now select the `DarkBlue` theme and Now it well look like this ⬇️ .
<img src="https://cf.mastohost.com/v1/AUTH_91eb37814936490c95da7b85993cc2ff/fosstodon/media_attachments/files/003/611/740/original/60855983672cb622.png">
<p>The i3wm is simple and lightweight then other window manager. And customization also a very easy and powerful aspect of it also. You can make more beautiful if you do more research on it.If you have any problem then tell me in comments and I will try to repose early as possible.</p>
