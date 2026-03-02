<style>
@import url('https://raw.githubusercontent.com/ThakaRashard/BUBBLEGUMPOP_SEVYN/master/_sass/_default_colors.scss');
@import url('https://raw.githubusercontent.com/ThakaRashard/BUBBLEGUMPOP_SEVYN/master/_sass/rouge-base16-dark.scss');
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Permanent+Marker&family=Play:wght@400;700&family=Raleway:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Russo+One&family=Space+Grotesk:wght@300;400;500;600;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');


$body-background: $cod-grey !default;
$body-foreground: $gallery !default;
$header: $conifer !default;
$blockquote-color: $silver-chalice !default;
$blockquote-border: $dove-grey !default;
$container-max-width: 1000px;

@mixin media-max-width($max-width) {
  @media (max-width: $max-width) {
      @content;
  }
}

body {
  margin: 0;
  padding: 0;
  background: $body-background url("../images/bkg.png") 0 0;
  color: $body-foreground;
  font-size: 16px;
  line-height: 1.5;
  font-family: Monaco, "Bitstream Vera Sans Mono", "Lucida Console", Terminal, monospace;
}

/* General & 'Reset' Stuff */

.container {
  width: 90%;
  max-width: $container-max-width;
  margin: 0 auto;
}

section {
  display: block;
  margin: 0 0 20px 0;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 20px;
}

li {
  line-height: 1.4 ;
}

/* Header, <header>
   header   - container
   h1       - project name
   h2       - project description
*/

header {
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border-bottom: 1px dashed $conifer; //header;
  padding: 20px 0;
  margin: 0 0 40px 0;
}

header h1 {
  font-size: 30px;
  line-height: 1.5;
  margin: 0 0 0 -40px;
  font-weight: bold;
  font-family: Monaco, "Bitstream Vera Sans Mono", "Lucida Console", Terminal, monospace;
  color: $conifer;//$header;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
               0 0 5px rgba(181, 232, 83, 0.1),
               0 0 10px rgba(181, 232, 83, 0.1);
  letter-spacing: -1px;
  -webkit-font-smoothing: antialiased;
  @include media-max-width($container-max-width) {
    margin-left: 0;
  }
}


header h1:before {
 /* content: "./ "; */
  font-size: 24px;
}

header h2 {
  font-size: 18px;
  font-weight: 300;
  color: #666;
}

#downloads .btn {
  display: inline-block;
  text-align: center;
  margin: 0;
}

/* Main Content
*/

#main_content {
  width: 100%;
  -webkit-font-smoothing: antialiased;
}
section img {
  max-width: 100%
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  font-family: Monaco, "Bitstream Vera Sans Mono", "Lucida Console", Terminal, monospace;
  color: $header;
  letter-spacing: -0.03em;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
               0 0 5px rgba(181, 232, 83, 0.1),
               0 0 10px rgba(181, 232, 83, 0.1);
}

#main_content h1 {
  font-size: 30px;
}

#main_content h2 {
  font-size: 24px;
}

#main_content h3 {
  font-size: 18px;
}

#main_content h4 {
  font-size: 14px;
}

#main_content h5 {
  font-size: 12px;
  text-transform: uppercase;
  margin: 0 0 5px 0;
}

#main_content h6 {
  font-size: 12px;
  text-transform: uppercase;
  color: #999;
  margin: 0 0 5px 0;
}

dt {
  font-style: italic;
  font-weight: bold;
}

ul li {
  list-style-image:url('../images/bullet.png');
}

blockquote {
  color: $blockquote-color;
  padding-left: 10px;
  border-left: 1px dotted $blockquote-border;
}

pre {
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px;
  font-size: 16px;
  color: #b5e853;
  border-radius: 2px;
  word-wrap: normal;
  overflow: auto;
  overflow-y: hidden;
}

code.highlighter-rouge {
  background: rgba(0,0,0,0.9);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0px 3px;
  margin: 0px -3px;
  color: #aa759f;
  border-radius: 2px;
}

table {
  width: 100%;
  margin: 0 0 20px 0;
}

th {
  text-align: left;
  border-bottom: 1px dashed #b5e853;
  padding: 5px 10px;
}

td {
  padding: 5px 10px;
}

hr {
  height: 0;
  border: 0;
  border-bottom: 1px dashed #b5e853;
  color: #b5e853;
}

/* Buttons
*/

.btn {
  display: inline-block;
  background: -webkit-linear-gradient(top, rgba(40, 40, 40, 0.3), rgba(35, 35, 35, 0.3) 50%, rgba(10, 10, 10, 0.3) 50%, rgba(0, 0, 0, 0.3));
  padding: 8px 18px;
  border-radius: 0px;
  border: 2px solid rgba(0, 0, 0, 0.7);
  border-bottom: 2px solid rgba(0, 0, 0, 0.7);
  border-top: 2px solid rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 0.8);
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 13px;
  text-decoration: none;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.75);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.btn:hover {
  background: -webkit-linear-gradient(top, rgba(40, 40, 40, 0.6), rgba(35, 35, 35, 0.6) 50%, rgba(10, 10, 10, 0.8) 50%, rgba(0, 0, 0, 0.8));
}

.btn .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 1px 8px 0 0;
  float: left;
}

.btn-github .icon {
  opacity: 0.6;
  background: url("../images/blacktocat.png") 0 0 no-repeat;
}

/* Links
   a, a:hover, a:visited
*/

a {
  color: #63c0f5;
  text-shadow: 0 0 5px rgba(104, 182, 255, 0.5);
}

/* Clearfix */

.cf:before, .cf:after {
  content:"";
  display:table;
}

.cf:after {
  clear:both;
}

.cf {
  zoom:1;
}

#a-title {
  text-decoration: none;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
main_content,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: "Lucida Console", -apple-system, Monaco,
    "Bitstream Vera Sans Mono", Terminal, monospace, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
    sans-serif;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  margin: 0;
  padding: 0;
}
	
	
body {

}

iframe {
  margin: 0px;
  padding: 0px;
  background-image: url("https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/bd_type1_car.jpg");
  border: none;
}

p
{
  background-image: url("https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/halfscreen-black.gif");
}
	
img {
  padding: 0px;
  margin: 0px;
  width: 100%;
}

h2,
h1,
h3 {
  color: white;
  background: transparent
    url(https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/halfscreen-gray.gif)
    center repeat;
  font-family: "Helvetica Neue", "Bitstream Vera Sans Mono", sans-serif, -apple-system, Monaco, 
    "Lucida Console", Terminal, monospace, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell;
  font-weight: 900;
  padding: 0px;
  margin: 0px;
  text-align: left;
  font-variant-caps: small-caps;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,
    0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
}

h2 {
font-weight: 900;
font-family: "Helvetica Neue", sans-serif, "Lucida Console", Terminal;
padding: 0px;
margin: 0px;
text-align: left;

}
.firstcharacter {
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  font-family: -apple-system, Monaco, "Bitstream Vera Sans Mono",
    "Lucida Console", Terminal, monospace, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  float: left;
  font-size: 75px;
  line-height: 60px;
  padding-top: 7px;
  padding-right: 8px;
  padding-left: 3px;
}

.neonText {
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  font-family: -apple-system, Monaco, "Bitstream Vera Sans Mono",
    "Lucida Console", Terminal, monospace, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.storyBox {
  width: 100%;
  position: relative;
  display: flex;
}

.storyBox .card {
  position: relative;
  cursor: pointer;
}

.storyBox .card .face {
  width: 100%;
  height: 200px;
  transition: 0.5s;
}

.storyBox .card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.storyBox .card:hover .face.face1 {
  background: #00c2ff;
  transform: translateY(0);
}

.storyBox .card .face.face1 .storycontent {
  opacity: 0.2;
  transition: 0.5s;
}

.storyBox .card:hover .face.face1 .storycontent {
  opacity: 1;
}

.storyBox .card .face.face1 .storycontent img {
  max-width: 100px;
}

.storyBox .card .face.face1 .storycontent h3 {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}

.storyBox .card .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
}

.storyBox .card:hover .face.face2 {
  transform: translateY(0);
}

.storyBox .card .face.face2 .storycontent p {
  margin: 0;
  padding: 0;
}

.storyBox .card .face.face2 .storycontent a {
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
}

.storyBox .card .face.face2 .storycontent a:hover {
  background: #333;
  color: #fff;
}

	
.some-page-wrapper {
  margin: 15px;
  background-color: ##23b2ff;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  overflow: hidden;
}

.double-column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2;
  overflow: hidden;
}

.blue-column {
  background-color: #23ff32;
  
}

.green-column {
    
    background-color: #c9ff23;
}	
	/* ------------------------------------------- */	
	
	
.twoPanelSpread {
  margin: 0px;
  padding: 0px;
  background: url( https://i.giphy.com/media/ddZXIrimeaXY0xclfC/giphy.webp )
    center repeat;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.panelColumn {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  overflow: hidden;
}

.leftColumn {
  background-color: #2470ff;
  width: 100%;
}

.leftColumn img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.rightColumn {
  background-color: #c9ff23;
}
.rightColumn img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
a:hover {
  color: #c9ff23;
}

.divAlbumReview {
  background-image: url("https://m.media-amazon.com/images/I/41QKR5BJVZL.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
  clear: both;
  margin: 0px;
  border-bottom: 0px dashed #c9ff23;
  font-size: 20px;
  color: white;
  font-family: Monaco, "Bitstream Vera Sans Mono", "Lucida Console", Terminal,
    monospace;
}

.pdivAlbumReview {
  background: rgba(255, 108, 35, 0.5);
}

.broken-width {
  width: 100%;
}

.right-width {
  min-width: 100%;
}

audio {
  -webkit-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  transition: all 0.5s linear;
  -moz-box-shadow: 2px 2px 4px 0px #006773;
  -webkit-box-shadow: 2px 2px 4px 0px #006773;
  box-shadow: 2px 2px 4px 0px #006773;
  -moz-border-radius: 7px 7px 7px 7px;
  -webkit-border-radius: 7px 7px 7px 7px;
  border-radius: 7px 7px 7px 7px;
}

audio:hover,
audio:focus,
audio:active {
  -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  transform: scale(1.05);
}

#row_image  {
border: 5px solid #ccc;
background: #666;
  max-width: 100%;
  padding: 50px;
  background-image: url("https://www.whosampled.com/static/track_images_100/mr11753_2010108_73251697983.jpg");
  background-repeat: repeat;
	}

	
.gallery {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 50%;
  box-shadow:
    inset 0 0 50px #fff,
    inset 20px 0 80px ##FFF300,
    inset -20px 0 80px #0AFF00,
    inset 20px 0 300px ##FFF300,
    inset -20px 0 300px #0AFF00,
    0 0 50px #fff,
    -10px 0 80px #FFF300,
    10px 0 80px #0AFF00;
  
}
.image {
  width: 100px;
  flex: 1 0 auto;
}
.featured-image {
  flex: 0 0 100%;
}

/* GiTHUB_LOGO##TEAM_SPiRiT!!! */

	/* IMAN_FRUM_SOMALiA_MY_MOMMA */
.pinupGallery {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
   object-fit: contain;
}
.pinupImage {
  width: 100px;
  flex: 1 0 auto;
}
.featured-pinupImage {
  flex: 0 0 100%;
}	
	
/* General presentation stuff */
.post-content {
	max-width: 100%;
	margin: 0 auto;
}

/* img {	max-width: 100%; }  ###MAY_BE_BREAKING_SOME_SOME_IMAGES */

/* Set content grid so it respects order values */
.post-content {
	display: grid;
}

/*
Style image if there is an image right after the heading
Use order to put it above the heading
Relative position for absolute caption
*/
.post-content h1 + .kg-image-card {
	margin: 0 -24px;
	order: -1;
	position: relative;
}


/* Style image's caption if there is an image right after the heading */
.post-content h1 + .kg-image-card figcaption {
	bottom: 0;
	left: 0;
	right: 0;
	padding: 1rem 1rem 1.2rem;
	opacity: 0.5;
	background: white;
}
	
/* FLEX_BOX_FOR_3_IMAGES */
.flex-container {

    display: flex;
     align-items: stretch; 
     flex-flow: row nowrap;  
    flex-direction: row; 
    flex-wrap: nowrap; 
    justify-content: center;
    align-content: stretch;
    height: 100%;
    padding: 15px;
    gap: 5px;

  }

  .flex-container > div{
   
    border: 1px solid #c9ff23;
    border-radius: 1px;
    padding: 8px;
  }




	
	
</style>

## Hole To Another Universe


```
1 # HOLE_TO_ANOTHER_UNiVERSE##############################
2 # TO####################################################
3 # ANOTHER###############################################
4 # UNiVERSE#######################################SEVYN##
```

<img src="https://media.self.com/photos/5991ee1fdc7f316973d3f403/master/pass/sevyn-streeter-1.jpg" alt="##SEVYN_IS_MY_WIFE">
<img src="https://raw.githubusercontent.com/ThakaRashard/BUBBLEGUMPOP_SEVYN/999c5735f26c909e9e7b9454909e7ca3d00f6c5e/assets/images/Untitled.png">
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/719304115&color=%235c4444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"><a href="https://soundcloud.com/quincy1-music" title="Quincy" target="_blank" style="color: #cccccc; text-decoration: none;">Quincy</a> · <a href="https://soundcloud.com/quincy1-music/bruce-lee-mc" title="Bruce Lee Mc" target="_blank" style="color: #cccccc; text-decoration: none;">Bruce Lee Mc</a></div>

# Jekyll_Headings

<hr>

# HEADiNG1
## HEADinG2
### HEADiNG3
#### HEADinG4
##### HEADiNG5
###### HEADiNG6
<hr>

# HTML_HEADiNGS
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

<hr>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="vYLZYqQ" data-editable="true" data-user="bhadupranjal" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/bhadupranjal/pen/vYLZYqQ">
  Glowing buttons</a> by Pranjal Bhadu (<a href="https://codepen.io/bhadupranjal">@bhadupranjal</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


## How to play games in the Internet Arcade

[HOW_TO_PLAY_THESE_AWESOME_GAMES - TUTORiAL_HERE##CLiCK](https://armchairarcade.com/perspectives/2014/11/06/quick-guide-on-how-to-play-on-the-internet-arcade/)
<img src="http://adb.arcadeitalia.net/media/mame.current/marquees/nibbler.png?release=205">
<img src="https://e7.pngegg.com/pngimages/32/535/png-clipart-dig-dug-ii-namco-museum-sky-kid-pac-land-dig-dug-text-logo.png" alt="##BABEE_MAYKiN_IS_ABOWTTAH_COMMINCE">
<img src="https://arcademarquee.com/wp-content/uploads/2015/02/dig-dug_marquee-scaled.jpg">
<iframe src="https://archive.org/embed/arcade_digdug" width="100%" height="500" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<img src="http://adb.arcadeitalia.net/media/mame.current/marquees/paperboy.png?release=205">

<iframe src="https://archive.org/embed/arcade_paperboy" width="100%" height="450" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="bGvjMEe" data-editable="true" data-user="web-dot-dev" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/web-dot-dev/pen/bGvjMEe">
  Handwritten shopping list with custom markers</a> by web.dev (<a href="https://codepen.io/web-dot-dev">@web-dot-dev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
![AMON_TOBIN_SOLID_STEEL](https://ninjatune.net/images/releases/solid-steel-presents-amon-tobin-main.jpg)
![AMON_TOBIN##PERMUTATION##](https://f4.bcbits.com/img/a1983715436_10.jpg)
[DOWNLOAD_AMON_TOBIN_PERMUTATION_FROM_BANDCAMP](https://music.amontobin.com/album/permutation)
[Spiderman Cartoon-1967 Season 1 Episode 19]([https://youtu.be/aBzotaBgoRo)
[DELiRiUM:BY::##ELLiE_GOULDING## ##FAV_TRACK## ## ](https://youtu.be/cLWv0f2Tt8E) 
[DiSCOGS:##ENTRY](https://www.discogs.com/release/8118343-Ellie-Goulding-Delirium)
## #ZEXOR_WAS_MURDERED_LOOKiNG_FOR_HiS_FAMiLY
https://forum.12ozprophet.com/topic/88098-rip-zexor/
<iframe width="100%" height="315" src="https://www.youtube.com/embed/AT-Km8ToCGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<a href="https://www.youtube.com/c/TapeDeckWreck" target="_blank"> <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/Capture.PNG" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" > </a>	
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_cluster/bd_cluster_example1.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_aquatico/bd_aquatico_example1.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_supper/bd_supper_example1.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_supper/bd_supper_example5.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_apotheke/bd_apotheke_example1.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_rainbow/bd_rainbow_example3.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_rainbow/bd_rainbow_example1.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://burodestruct.net/sites/default/files/styles/bd_wide_2x/public/bd_type1_car.jpg?itok=fr33wXWz" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://burodestruct.net/sites/default/files/styles/bd_wide_2x/public/bd_type1_grave.jpg?itok=zKHQ2_XK" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://burodestruct.net/sites/default/files/styles/bd_wide_2x/public/bd_type1_demo_tshirt2.jpg?itok=Z-FDybri" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://burodestruct.net/sites/default/files/styles/bd_wide_2x/public/bd_type1_demonstration.jpg?itok=CyDRb7ye" /> </a>
![NiRVANA_i_APOLOGiZE](https://pbs.twimg.com/media/ELGYaVYUUAIpygF?format=jpg&name=small)
[CSS Hovers and Rollovers](https://accessibility.psu.edu/css/rollovers/)
[Law – Unreleased Jungle Selection](https://www.youtube.com/watch?v=h7T8br7jO80)
[DJ SHARPEY presents, Route Into Darkness - Jungle DNB Mix | 1994 1995 | Vinyl Only](https://www.youtube.com/watch?v=VspuYfZcjQ4)
[1994 - 2004 Jungle / Drum & Bass Old Skool Mix (Mickey Beam)](https://www.youtube.com/watch?v=PCXuCLbFGo4)

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1006480420&color=%23607064&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theclassicmixcdseries" title="The Classic Mix CD Series" target="_blank" style="color: #cccccc; text-decoration: none;">The Classic Mix CD Series</a> · <a href="https://soundcloud.com/theclassicmixcdseries/dj-food-dk-now-listen" title="785 - Solid Steel pres. DJ Food &amp; DK - Now, Listen! (2001)" target="_blank" style="color: #cccccc; text-decoration: none;">785 - Solid Steel pres. DJ Food &amp; DK - Now, Listen! (2001)</a></div>
<img src="https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/03/17/187670-untitled-design-34.jpg" alt="Me_and_Sevyn_ENERGY">
<img src="https://www.goodnewsnetwork.org/wp-content/uploads/2021/04/juno-nasa-jpl-caltech-swri-msss-brian-swift.jpg">
<img src="https://api.time.com/wp-content/uploads/2017/05/nasa-juno-mission-jupiter.jpg" alt="Erika_RulingPlanet_IS_JUPITER">
<img src="https://d2xkkdgjnsfvb0.cloudfront.net/Vault/Thumb?VaultID=36050&Interlaced=1&Mode=R&ResX=960&OutputFormat=jpg&Quality=75&ts=1656511106">
<img src="https://cdn.kqed.org/wp-content/uploads/sites/35/2021/01/image_5608_2e-Jupiter-NASA-JPL-Caltech-SwRI-MSSS-David-Marriott-1020x628.jpg">

<iframe width="100%" height="480" src="https://www.youtube.com/embed/4uMLVRWwEg8" title="Young Man's Fancy (1952)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[How Our Organization Improved Web Accessibility (Case Study)](https://www.smashingmagazine.com/2022/08/organization-improved-web-accessibility-case-study/)


  <a href="https://youtu.be/DFMEBquxeO8" target="_blank"><img src="https://www.typedifferent.com/fonts/bd_rainbow/bd_rainbow_example1.jpg" /> </a>


<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/Screenshot%202022-07-10%204.21.33%20AM.png">
<img src="https://www.adbranch.com/wp-content/uploads/chrysler_dodge_charger_1970-610x307.jpg">
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://www.graffiti.org/sfb/refa2002oakland04.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.pinimg.com/originals/3d/d1/9f/3dd19f9c5c7f126af27ba530d94ab168.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>	
  {% highlight ruby %}
  1 # HOLE_TO_ANOTHER_UNiVERSE##############################
  2 # TO####################################################
  3 # ANOTHER###############################################
  4 # UNiVERSE##############################################
  {% endhighlight %}
<iframe width="100%" height="315" src="https://www.youtube.com/embed/pZ7Cc-OVTGg" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/8BCwDA67CqY" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
 <a href="http://www.wefunkradio.com/"> #### TUNE_IN --> WeFunK_RADIO ##STREAMING## </a>
<a href="http://www.wefunkradio.com/show/498/play_aa"> WeFunk_RADIO_BACK_EPISODE  EPISODE_498 </a>
<a href="https://slate.com/technology/2017/03/did-the-cia-really-astrally-project-to-mars-in-1984.html">##DID_THE_CIA##ASTRAL_PROJECT_TO_MARS</a>
<a href="https://comicbook.com/irl/news/cia-documents-leak-extrasensory-perception-mind-telepathy-reveal/">##EXTRA_SENSORY_PERCEPTION##</a>
<a href="https://www.vice.com/en/article/7k9qag/how-to-escape-the-confines-of-time-and-space-according-to-the-cia">##RAVEN_AT_VICE_KNOWS_PSYCHIC_SHIT##</a>
<a href="https://www.nsa.gov/portals/75/documents/news-features/declassified-documents/cryptologs/cryptolog_85.pdf">##NSA_TYPESHIT_wit_DAH_SOViETS</a>
<a href="https://jamesaconrad.com/TK/US-government-interest-in-telekinesis-and-psychokinesis.html">##PSYCHIC_ARMY##ALEX_JONES_and_DAVID_ICK_KNOW_ALL_ABOUT_IT</a>
<a href="https://youtu.be/tWpQNexUZUQ">##LETHAL_ENFORCERS_2##GUN_FIGHTERS##</a><a href="https://youtu.be/6nwA8oPkaSg">##FORZA5_STi</a><a href="https://www.youtube.com/embed/O9MIvIVWq3E">##SQUARE_ENIX_KNOWS_THAKA_WANTS##A_DRIVING_GAME##</a> <a href="https://en.wikipedia.org/wiki/Stargate_Project">##STARGATE_PROJECT##</a>
<a href="https://www.californiapsychics.com/blog/psychic-tools-abilities/benefits-reading-remote-viewing-psychic.html">The Benefits of Reading with a Remote Viewing Psychic</a><a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00792R000700620001-2.pdf">##PARAPSYCHOLOGY_COMMUNiCATiON_BARRiERS</a>
<a href="https://www.gaia.com/article/what-is-remote-viewing">What is Remote Viewing?</a>
<a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00787R000200080050-9.pdf">##TELEPATHY_COULD_BE_REAL##</a> <a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00792R000300420008-1.pdf"> ##PSYCHIC_MAGNIFICATION## </a><a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00789R003300190006-0.pdf">##NONiNVASiVE_BRAiN_WORK##</a>
<a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00792R000400030001-0.pdf"> EXPERIMENTAL DREAM TELEPATHY-CLAIRVOYANCE AND GEOMAGNETIC ACTIVITY (MICHAEL PERSINGER) </a> <a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00787R000300180001-1.pdf"> ##EFFORTS_TO_IMPROVE_REMOTE_VIEWING##</a>
<a href="https://www.cia.gov/readingroom/docs/NSA-RDP96X00790R000100040012-1.pdf"> ##TELEKINESIS## </a>
<a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00792R000400100005-8.pdf"> PARAPSYCHOLOGY ##THE_ANGLOS_-->VS<--_THE_LATiNS##</a>
<a href="https://www.cia.gov/readingroom/freedom-information-act-5-usc-%C2%A7552"> 
  
  
  ---
  layout: default
  ---

  Text can be **bold**, _italic_, ~~strikethrough~~ or `keyword`.

  [Link to another page](./another-page.html).

  There should be whitespace between paragraphs.

  There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

  # Header 1

  This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

  ## Header 2

  > This is a blockquote following a header.
  >
  > When something is important enough, you do it even if the odds are not in your favor.

  ### Header 3

  ```js
  // Javascript code with syntax highlighting.
  var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
  }
  ```

  ```ruby
  # Ruby code with syntax highlighting
  GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
  end
  ```

  #### Header 4

  * This is an unordered list following a header.
  * This is an unordered list following a header.
  * This is an unordered list following a header.

  ##### Header 5

  1. This is an ordered list following a header.
  2. This is an ordered list following a header.
  3. This is an ordered list following a header.

  ###### Header 6

  | head1 | head two | three |
  |:-------------|:------------------|:------|
  | ok | good swedish fish | nice |
  | out of stock | good and plenty | nice |
  | ok | good `oreos` | hmm |
  | ok | good `zoute` drop | yumm |

  ### There's a horizontal rule below this.

  * * *

  ### Here is an unordered list:

  * Item foo
  * Item bar
  * Item baz
  * Item zip

  ### And an ordered list:

  1. Item one
  1. Item two
  1. Item three
  1. Item four

  ### And a nested list:

  - level 1 item
  - level 2 item
  - level 2 item
  - level 3 item
  - level 3 item
  - level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
  - level 1 item
  - level 2 item
  - level 2 item
  - level 1 item

  ### Small image

  ![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

  ### Large image

  ![Branching](https://guides.github.com/activities/hello-world/branching.png)

  ### Definition lists can be used with HTML syntax.

  <dl>
    <dt>Name</dt>
    <dd>Godzilla</dd>
    <dt>Born</dt>
    <dd>1952</dd>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
    <dt>Color</dt>
    <dd>Green</dd>
  </dl>

  ```
  Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
  ```

  ```
  The final elemenT.
  ```

>>>>>>> c3f5f937a168763fa77dd9a9990a105d3351f975

<div class="pinupGallery">
  <img class="pinupImage featured-pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
  <img class="pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
  <img class="pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
  <img class="pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
</div>
<div class="flex-container">
   
    <div class="item1">                        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SartUBreast_inTOXiCATE_Me.gif" /></div>
    <div class="item2">                        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SartUBreast_inTOXiCATE_Me.gif" /></div>
    <div class="item3">                        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SartUBreast_inTOXiCATE_Me.gif" /></div>
</div>
[CSS performance optimization](https://developer.mozilla.org/en-US/docs/Learn/Performance/CSS)
[HTML_CSS_RENDERiNG_PERFORMANCE_BASiCS](https://developer.mozilla.org/en-US/docs/Web/Performance/Fundamentals)
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643348296&color=%2312bad0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
[FoNT_FALLBACK](https://medium.com/swlh/full-text-styling-with-a-single-line-of-css-838e8c666f4d)

<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/I_HAVE_NOT_LOGGED_IN_IN_OVER_TWO_WEEKS.PNG">	
<p>  <span class="firstcharacter">PiNTEREST LocksOutFATHERS"</span> 
It has been over two weeks since I have logged in. I found Sartu, my kidnapped wife from Ethiopia via ##ALPHARETTA. The previous time I found her she exclaimed "That's My Husband!!", and the captors refused to let her go. Im at a point in my life where I have gathered my life partners. The truth is that is too much power. I went to ##DANCE411 in Atlanta for sometime between parenting, working as a ##DevOps_ENGiNEER, and ##JiUJiTSU. A group of women that are blowing up the RnB Chitlin_Circuit of today chose me as thier dance husband... My from my understanding 4th cousin Muna and 8th cousin Sartu from ##ETHiO_SOMOLiA and about 10 other women decided we would start a business to support our artistic endevors and care for our children. They were all kidnapped with our children and sold into a ##PROSTiTUTION_MARKET_in_SOUTHERN_CALiFORNiA... We have relationships outdoors, but the pimps rape them systematically for use in a global ##SEX_TOURiSM_TRADE. The Human traffickers stole and steal everything I reaccquire to get on the internet. And when I travel to use computers at local librays in #LOS_ANGELES_COUNTY, I am severely stalked, attacked, poisoned with chemical weapons and randomly aharrassed. I was using pinterest to serve up internet content for our large families spiritual needs. Those of us from Africa are Muslims, and we had a semi-healthy stint with Jehovahs Witnesses. So we are a very spiritually minded family. However many of the pimps are anti god that we are dealing with... People on the late night show and everything are involved. Long story short.. Pinterest was our watering hole. I could post content bulletin board #style, and interact with my wives and children in passing as we wait for my old job JPL to step in   the CIA/FBi/US_MARSHALLS and other services in law enforcement has helped us contact since Erikas dissapearance was taken in by the ##DEKALB_COUNTY_SHRIFFs office and they told me to post constantly to stay visible... People dissapear when the dont post in this era of ##ECONOMIC_ASSASINATION_of_FATHERS_FOR_THE_PURPOSE_OF_PROSTITUTITUING_HEALTHY_FAMiLiES
	
	

</p>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/596188557&color=%236c5c34&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

<iframe src="https://gcp-embeds.datpiff.com/mixtape/1021737/" width="100%" height="270" frameborder="0"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1202841862&color=%23211f21&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293177372&color=%23a09c94&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe src="https://gcp-embeds.datpiff.com/mixtape/770917/" width="100%" height="270" frameborder="0"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/899207614&color=%23053c78&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe src="https://gcp-embeds.datpiff.com/mixtape/26747/" width="100%" height="270" frameborder="0"></iframe>
<img src="https://www.graffiti.org/sfb/dashdkrip_refa1.jpg" >
<p>  <span class="firstcharacter">Dash</span> R.I.P. by Refa1

I rocked this Burner(Freestyle)...for a lil' homie who was Murdered (2005) by the gang drama in Oakland. His Name was "Dash"DK-crew. This Kid was a young 16 yr old aspiring Writer/Artist Who's life was stolen by the ignorance of the white power mind- control media. That same media which possesses the latino gangs of Oakland through self hatred. I felt that it was necessary to give him a royal burial because his potential was cut off...no one knows what this young man could've been. When we as a community don't take responsibility for our children and each other, we are cutting our futures short. Our potential is to be living free and moving in harmony with the universe. This slave system is working to murder and steal our future,we can not allow that to take place. Stand up for your people, Love them, Respect them and defend our future. Lil' Dash's spirit lives on... Rest in Power young warrior, be one with the Sun.
-Refa TNS ...East Side Oakland</p>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/529255686&color=%236c6c54&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/erfun-almasi" title="Erfun Almasi" target="_blank" style="color: #cccccc; text-decoration: none;">Erfun Almasi</a> · <a href="https://soundcloud.com/erfun-almasi/an-ending-a-beginning" title="Dustin O&#x27;Halloran - An Ending, A Beginning" target="_blank" style="color: #cccccc; text-decoration: none;">##DEAR_REFA__THAT_SONGs_FOR_##DASH##</a></div>
<img src="https://www.graffiti.org/sfb/05204.jpg">
<img src="https://www.graffiti.org/sfb/zore_skew_krash_king_oakland.jpg">
<img src="https://www.graffiti.org/sfb/apex_sfb2005b.jpg">


<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://www.graffiti.org/sfb/refa2002oakland04.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://www.graffiti.org/sfb/refa2002oakland04.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>	

<img src="https://www.graffiti.org/atl/3161842448_f805cdca4f_o.jpg">
<img src="https://www.graffiti.org/atl/viper_totem2_54266a_o.jpg">
<img src="https://www.vibe.com/wp-content/uploads/2018/02/donuts570-1518104684.jpg" >
<img src="https://www.graffiti.org/atl/viper_totem2_4038f9c_o.jpg" alt="##ATLANTA_GRAFFiTi##IS_HERE_TO_STAY" >	
<audio controls class="broken-width">
  <source src="https://github.com/ThakaRashard/bubblegumpop/raw/gh-pages/audio/Imaginary_Playmates128kbps_RNE_and_ANGELA.mp3" type="audio/mp3" />
  Your browser does not support the <code>audio</code> element.
</audio>

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.pinimg.com/564x/7c/12/0f/7c120fcfaba943300a402cd1d86e99ed.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://image-aws-us-west-2.vsco.co/12f8b0/56497/5fc4b3191d78313c14000005/vsco5fc4b35d36f40.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>	
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://akns-images.eonline.com/eol_images/Entire_Site/20191026/rs_634x951-191126075307-Normani-634.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.pinimg.com/originals/54/a5/60/54a5602868bda61c73bad1c97c3448d5.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>	
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.pinimg.com/originals/b1/a5/31/b1a531387792bd946642e80ac2a1487d.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/oct-digital-cover-11-12-1573592748.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>		
<div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <img src="https://lh4.googleusercontent.com/vcr_xIzszUWnLC0ed3ONKnIrRQ9WKyQS-SmwPyRGHGBAPa1Ujiws2G7QH_4R8u2cXq5bSJ9WPIncccXCdmgqqBd30CMlfu9rfKHoms4W0sR3dgSgpXNF2mHyvBMDQacn1NpLWrYW" alt="Girl in a jacket" >
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <img src="https://lh4.googleusercontent.com/vcr_xIzszUWnLC0ed3ONKnIrRQ9WKyQS-SmwPyRGHGBAPa1Ujiws2G7QH_4R8u2cXq5bSJ9WPIncccXCdmgqqBd30CMlfu9rfKHoms4W0sR3dgSgpXNF2mHyvBMDQacn1NpLWrYW" alt="Girl in a jacket" >
 </div>
 </div>
 </div>
</div>
<img src="https://assets.vogue.com/photos/5f9089a160138c079b7b38d5/16:9/w_1280,c_limit/00_social.jpg">

<img src="https://im.vsco.co/aws-us-west-2/12f8b0/56497/5fc45a98e1ebb64f08283c25/vsco5fc45a9961d50.jpg" alt="Girl in a jacket" >
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://d1a3azwbayblep.cloudfront.net/etwatermark.php?image=media765/0007655105/0007655105_SM_1433397196.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://d1a3azwbayblep.cloudfront.net/etwatermark.php?image=media765/0007655105/0007655105_SM_1433397196.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div class="pinupGallery">
  <img class="pinupImage featured-pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
  <img class="pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
  <img class="pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
  <img class="pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
</div>
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/National-Geographics-Madagascar-Pages-LOWQ-2000P.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SARTU2600.PNG">
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SARTU2600c.PNG">
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SARTU2600b.PNG">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/vfJxDuHkpz4" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
<img src="https://www.graffiti.org/atl/over_never_marietta_pawn_shop.jpg">
<img src="https://www.graffiti.org/atl/totem2_bua_wall_2_6_2006.jpg">
<img src="https://www.graffiti.org/atl/mylk_bua_wall_2_1_2006.jpg">
<img src="https://www.graffiti.org/atl/farwall_5_2006.jpg">
<img src="https://www.graffiti.org/atl/farwall_3_2006.jpg">
<img src="https://www.graffiti.org/atl/farwall_7_2006.jpg">
<img src="https://www.graffiti.org/atl/bua_wall_3_3_2006.jpg">
<img src="https://www.graffiti.org/atl/bua_column_3_2006.jpg">
<img src="https://www.graffiti.org/atl/wall_4_3_2006.jpg">
<img src="https://www.graffiti.org/atl/rine_atl11.jpg">
<img src="https://www.graffiti.org/atl/rine_atl09.jpg">
<img src="https://www.graffiti.org/atl/rine_atl10.jpg">
<img src="https://www.graffiti.org/atl/severam7.jpg">
<img src="https://www.graffiti.org/atl/revsev.jpg">
<img src="https://www.graffiti.org/atl/hence.jpg">
<img src="https://www.graffiti.org/atl/joe1.jpg">
<img src="https://www.graffiti.org/atl/eros1.jpg">
<img src="https://www.graffiti.org/atl/kast1.jpg">
<img src="https://www.graffiti.org/atl/62tm.jpg">
<img  src="https://www.graffiti.org/atl/61tm.jpg">
<img src="https://www.graffiti.org/atl/68tm.jpg">
<img src="https://www.graffiti.org/atl/63tm.jpg">
<img src="https://www.graffiti.org/atl/am71.jpg"> 

<img src="https://www.graffiti.org/atl/anime4.jpg">
<img src="https://www.graffiti.org/atl/man.jpg">
<img src="https://www.graffiti.org/atl/noah.jpg">
<img src="https://www.graffiti.org/atl/civicwall.jpg">
<img src="http://www.patrikwallner.com/wp-content/uploads/2015/10/National-Geographics-Madagascar-Pages-LOWQ-2000P.jpg">
<img src="https://www.graffiti.org/mesa/such-pink-tackz.jpg" alt="Such, Lady Pink, Tackz AM7">
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/291997699&color=%23919191&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1011790114&color=%2370543c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1202773675&color=%23f40c38&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1283041291&color=%23b3b18d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1284508618&color=%234cb4e4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1259032933&color=%23f40c38&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/668365295&color=%239c142a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1154264626&color=%239c142a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/477282462&color=%23c18d76&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="350" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308016226&color=%23646464&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280458113&color=%23b4e4f4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293177372&color=%23a09c94&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1296091366&color=%2370543c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/425539491&color=%234cacb4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1044274951&color=%23845424&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1298136826&color=%234cacb4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>



<img src="https://apod.nasa.gov/apod/image/1803/Cycle-Panel-1024px.jpg">

<center>
<b> Phases of the Moon </b> <br> 

<b>Image Credit &
<a href="lib/about_apod.html#srapply">Copyright</a>: </b>

<a href="http://www.jfgout.com">Jean-Francois Gout</a>,
<a href="http://www.pbase.com/polakis/">Tom Polakis</a>

</center> <p> 

<b> Explanation: </b> 

<a href="ap171203.html">Look at the Moon</a>
every night and its visible sunlit portion gradually changes.

<a href="https://svs.gsfc.nasa.gov/4604">In phases progressing</a>
from New Moon to Full Moon to New Moon again,
a lunar cycle or lunation is completed in about 29.5 days.

Top left to bottom right, these frames show the range of
lunar phases for 25 consecutive nights beginning on January 18,
following an
<a href="https://www.youtube.com/watch?v=iLTgUvGLxxA">almost
complete lunation</a>.

They skip the 2 days just after and 2 days before
<a href="http://www.astrophoto.fr/new_moon_2013july8.html">New Moon</a>,
when the lunar phase is at best a narrow crescent, close to the Sun
and <a href="ap080411.html">really hard to see</a>.

Of course, mostly clear Arizona night skies and a little help from
a friend were required to complete this lunar cycle project,
imaging in early evening for the first half and
late evening and early morning for the second half of the lunation.

For extra credit, the cycle was centered on the Full Moon of January 31.

That was the second Full Moon in January, when the Moon was near lunar
orbit perigee and took on reddish hues during a
<a href="https://www.nasa.gov/feature/
super-blue-blood-moon-coming-jan-31">total lunar eclipse</a>.

</div>
<img src="https://apod.nasa.gov/apod/image/2009/PairsMoonPace.jpg">

<center>
<b> Moon Pairs and the Synodic Month </b> <br>

<b>Image Credit &
<a href="lib/about_apod.html#srapply">Copyright</a>: </b>

<a href="https://greenflash.photo/about-me/">Marcella Giulia Pace</a>

</center> <p> 

<b> Explanation: </b> 

<a href="https://moon.nasa.gov/observe-the-moon-night/about/overview/">Observe the Moon</a> each night and
its visible sunlit portion will gradually change.

<a href="https://svs.gsfc.nasa.gov/Gallery/moonphase.html">In phases progressing</a>
from New Moon to Full Moon to New Moon again, a lunar cycle or
<a href="http://astropixels.com/ephemeris/moon/synodicmonth2001.html">synodic month</a>
is completed in about 29.5 days.

They look full, but top left to bottom right these panels do
show the range of lunar phases for a complete
<a href="https://greenflash.photo/portfolio/august-2019-all-moon-phases-in-a-month/">synodic month during August 2019</a>
from Ragusa, Sicily, Italy, planet Earth.

For this lunar cycle project the panels organize
images of the lunar phases in pairs.

Each individual image is paired with another image separated by
about 15 days, or approximately half a synodic month.

As a result the opposite sunlit portions complete the
lunar disk and the shadow line at the boundary of lunar night and day, the
terminator, steadily marches across the Moon's
<a href="http://lroc.sese.asu.edu/posts/293">familiar nearside</a>.

For extra credit, what lunar phase would you pair with the Moon tonight?


<img src="https://apod.nasa.gov/apod/image/1505/AuroraNorway_Richardsen_1080.jpg" > 
<b> An Unexpected Aurora over Norway </b> <br> 
<b> Image Credit & Copyright: </b> 
<a href="http://trichardsen.smugmug.com/About-me">Tommy Richardsen</a>
 <p> 

<b> Explanation: </b> 
Sometimes the sky lights up unexpectedly.

A trip to northern Norway to photograph 
<a href="http://www.nasa.gov/mission_pages/sunearth/news/gallery/aurora-index.html"
>auroras</a> was not going as well as hoped.
It was now past midnight in 
<a href="http://en.wikipedia.org/wiki/Nordreisa">Steinsvik</a>, 
<a href="http://en.wikipedia.org/wiki/Troms">Troms</a>, in northern 
<a href="http://en.wikipedia.org/wiki/Norway">Norway</a>, and the date was 2014 February 8. 

Despite 
<a href="http://spaceweather.com/archive.php?view=1&day=08&month=02&year=2014"
>recent activity</a> on the Sun, the skies were 
<a href="http://www.shizarium.ru/wp-content/gallery/animals5/34520-114759-ba1d04b3a7e17d10d0a272533ca71316.jpg">disappointing</a>.
Therefore, the astrophotographer began packing up to go.

His brother began searching for a missing lens cap.

When the sky suddenly exploded with 
<a href="ap141103.html">spectacular aurora</a>.

Reacting quickly, 
<a href="http://www.tommyrichardsen.com/Store/Nightscapes/i-27DK9gn"
>a sequence</a> detailing dramatic 
<a href="http://www.webexhibits.org/causesofcolor/4D.html">green</a> curtains was captured, 
with the bright Moon near the image center, and the lens-cap seeking brother on the far right. 
The <a href="ap110328.html">auroral flare</a> lasted only a few minutes, 
but the memory of this event, the photographer speculates, will last much longer. 

<div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <img src="https://apod.nasa.gov/apod/image/9701/pillars3_hst.jpg" alt="Girl in a jacket" >
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <img src="https://apod.nasa.gov/apod/image/9701/pillars3_hst.jpg" alt="Girl in a jacket" >
 </div>
 </div>
 </div>##THE_SOCIAL_MEDIA_COMPANIES_VIOLATED##THE_FREEDOM_OF_INFORMATION_ACT_IN_SUPRESSING
 THE_SEARCH_FOR_THAKA_BEKELE_SELASSIE_aka_RASHARD_IMAN_KELLY_AHMEDs_FAMILY##
	
	
	
	
	
<iframe width="100%" height="315" src="https://www.youtube.com/embed/kg3bXR-JyVs" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<div>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <img src="https://i.ibb.co/bHzN2nZ/DEHi-Ji-A-LOVELY-Open-Mi-C.png" alt="Girl in a jacket" >
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <img src="https://i.ibb.co/bHzN2nZ/DEHi-Ji-A-LOVELY-Open-Mi-C.png" alt="Girl in a jacket" >
 </div>
 </div>
 <div class='column'>
 <div class='blue-column'>
 <img src="https://i.ibb.co/bHzN2nZ/DEHi-Ji-A-LOVELY-Open-Mi-C.png" alt="Girl in a jacket" >
 </div>
 </div> 
 </div>
 

Desolate, alone, tearfully searching, suddenly blinded by a tall dark and dreadlocked beauty. She painted a perfect picture around a perfect face and frame. She didn't bother to learn about his past cause she's caught up in this moment of visual bliss.

She took him in knowing fully well that she's not the only flower he's sippin nectar from. She's misguided by her mixed up illusions of love. Either she's watched too many fake ass love/drama movies, read too many romance novels, watched her parents in a disfunctional relationship spiraling down hill (thinking that's just how it is), or she just doesn't know what a real man is.

When the two of them make love (have sex), her mind is blown into the clouds, she returns to Atlantis, her spirit uplifted. Ready she is to plan their future garden, ignoring the weeds mixed in with the seed.

He drops hints of annoyance, never goes out of his way any more for her cause she's caught. Another fish in his sea. So she gives him space thinking absense makes the heart grow fonder. If you let someone go, and then they return, they belong to you, right?

Late at night her fingers wonder over the buttons on the phone, dialing his number, wanting some of what she's been missing some of his good "love".

He answers and quickly agrees at this late hour to come and give her a dosed of his medicine so that she may dream lovely dream. She no longer tossing and turning in bed. Twenty five minutes is all he needs and he will be there. Preperation begins. Mad dash to shower, shave (its winter so legs sometimes are forgotten with out the sun), light candles and incense, sheets fresh, madina oil dabed in all the right places, for this "her man" that is on his way.

Confusion

He KNOWS it's just sex, "we just kicking it, just chillin, connnecting even", he thinks in his head as he drives to her house. He imagines the hurting he's gonna put on her, giving her what she wants, right?

On the other end she's confusing and equating the feeling she gets when he's inside of her, the movement his body makes in sync with her's, the sweet and soft kisses of passion (lust), the eagerness of his return to her temple, with L-O-V-E.

Who is wrong in this situation, her assumptions or his free mind state? No boundaries were set, no plan. Many women fall into this catagory of believing love and sex go hand in hand. While Men, if not told directly what the intent is, will think nothing of having sex without commitment. The answer to all of this I believe is communication in the very begging, and waiting to explore the sexual realms of each other. Spirituallity should be the basis for all relationships, but as of right now 8 out of 10 times it's sex, in my researched, experienced opinion.

Lets start listening as well as speaking our hearts, instead of painting false pictures of clear situations. Love yourself and your divine mate will apear before your eyes, with no searching involved. But you must me ready physically, mentally, culturally, and spiritually.

just my view on thangs - Dehejia


 </div>


 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <img src="https://i.ibb.co/wJvpMx2/DEHi-Ji-A-LOVELY.png" alt="Girl in a jacket" >
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <img src="https://i.ibb.co/wJvpMx2/DEHi-Ji-A-LOVELY.png" alt="Girl in a jacket" >
 </div>
 </div>
 </div>
Desolate, alone, tearfully searching, suddenly blinded by a tall dark and dreadlocked beauty. She painted a perfect picture around a perfect face and frame. She didn't bother to learn about his past cause she's caught up in this moment of visual bliss.

She took him in knowing fully well that she's not the only flower he's sippin nectar from. She's misguided by her mixed up illusions of love. Either she's watched too many fake ass love/drama movies, read too many romance novels, watched her parents in a disfunctional relationship spiraling down hill (thinking that's just how it is), or she just doesn't know what a real man is.

When the two of them make love (have sex), her mind is blown into the clouds, she returns to Atlantis, her spirit uplifted. Ready she is to plan their future garden, ignoring the weeds mixed in with the seed.

He drops hints of annoyance, never goes out of his way any more for her cause she's caught. Another fish in his sea. So she gives him space thinking absense makes the heart grow fonder. If you let someone go, and then they return, they belong to you, right?

Late at night her fingers wonder over the buttons on the phone, dialing his number, wanting some of what she's been missing some of his good "love".

He answers and quickly agrees at this late hour to come and give her a dosed of his medicine so that she may dream lovely dream. She no longer tossing and turning in bed. Twenty five minutes is all he needs and he will be there. Preperation begins. Mad dash to shower, shave (its winter so legs sometimes are forgotten with out the sun), light candles and incense, sheets fresh, madina oil dabed in all the right places, for this "her man" that is on his way.

Confusion

He KNOWS it's just sex, "we just kicking it, just chillin, connnecting even", he thinks in his head as he drives to her house. He imagines the hurting he's gonna put on her, giving her what she wants, right?

On the other end she's confusing and equating the feeling she gets when he's inside of her, the movement his body makes in sync with her's, the sweet and soft kisses of passion (lust), the eagerness of his return to her temple, with L-O-V-E.

Who is wrong in this situation, her assumptions or his free mind state? No boundaries were set, no plan. Many women fall into this catagory of believing love and sex go hand in hand. While Men, if not told directly what the intent is, will think nothing of having sex without commitment. The answer to all of this I believe is communication in the very begging, and waiting to explore the sexual realms of each other. Spirituallity should be the basis for all relationships, but as of right now 8 out of 10 times it's sex, in my researched, experienced opinion.

Lets start listening as well as speaking our hearts, instead of painting false pictures of clear situations. Love yourself and your divine mate will apear before your eyes, with no searching involved. But you must me ready physically, mentally, culturally, and spiritually.

just my view on thangs - Dehejia 



<a href="https://board.okayplayer.com/okp.php?az=show_mesg&forum=20&topic_id=7575&mesg_id=7589&page=" >###OKAY_PLAYER_SLUM_VILLAGE_ENTRY_BY_MY_DEPARTED_FRIEND##ALPHONSO_GREGORY##</a>
Check it my flow be 3 parts like a Trinity
But me be one man rolling through Infinity\
I walk miles and miles through Slum Villages
Looking for MC�s to start scrimmages\ But they
styles is all Tainted so when I came with the realness
they all fainted\ They hearts are weak like heart attack patients\
My flows like blood they just couldn�t take it\
The blood I pump its turns to acid burning you Kats
with my hot classics\ I call you Kats XBOX�s
because your games can fit in my pocket\ Moving through
engines like a piston my style you can call it mad Precision\
I�m built Ford tough but I�m Focused\ No smoking mirrors no hocus-pocus
My flows no joke like the city of Detroit wrote this\ Writing rhymes heavy like
T3, Baatin, and Elzhi\ I be the rhyme synthesizer I size up rhymes to make
them liver so when I cut ya it feels like the barber\
My competition had them all wishing that I would quite this game because I got them
all looking lame like kids walking cripple my girl she got big nipples and she
throws fits when she thinks she got a big pimple those holes in her face are called
dimples\ Most of you Kats got holes in your rhymes and that�s why the XBOX is
Mine



"Thoughts and dreams drip from your mouth, onto my tongue, down my throat to my heart"-symphonygoddess

"I wish I wasn't me sometimes"-BiLal

"The slowest melodies coated me, soothing rhythms stoked the fire in my belly, music was the lamb that made a loin out of me"-esthero

Po'ADDiX http://www.geocities.com/sb202us/index.htm 

"Thoughts and dreams drip from your mouth, onto my tongue, down my throat to my heart"-symphonygoddess

"I wish I wasn't me sometimes"-BiLal



##_TOKIMONSTA##IS_COMING##IN_Ah_BOUT_10_DAYS_OR_LESS
<iframe width="100%" height="315" src="https://www.youtube.com/embed/9ENMHp4DKEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/Jf63Wv6Atl8" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/zrY8TPi0kIs" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
<video controls preload="none"controls width="100%">
    <source src="https://mirkoreisser.de/wp-content/uploads/2022/03/NFT_DAIMforUkraine_ArtistForUkraine_2022_Preview.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_5554c002_rf_5_2mm_f_2_8l_dual_1633518555_1665911.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://static.bhphoto.com/images/multiple_images/images500x500/1633518955_IMG_1616416.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<img src="https://i.discogs.com/4fW7p6CcV1euzfubea03VC9oD3x2tqASxnfjOdeMItI/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDk5/MzUyLTE0OTE1OTE2/NzEtODIwMS5qcGVn.jpeg" >
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.discogs.com/rPv_MZPxS8iZgQITvzOgEo2WV5yd-gbWldGRhwedjpU/rs:fit/g:sm/q:90/h:371/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDk5/MzUyLTE0OTE1OTE2/NzEtMzY0Ni5qcGVn.jpeg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAYaHOLE_TO_ANOTHER_UNIVERSE_IS_OUR_FANART_FROM_THE_SQUARE_ENIX_GAME_LIFE_IS_STRANGE" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.discogs.com/rPv_MZPxS8iZgQITvzOgEo2WV5yd-gbWldGRhwedjpU/rs:fit/g:sm/q:90/h:371/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDk5/MzUyLTE0OTE1OTE2/NzEtMzY0Ni5qcGVn.jpeg" alt="HOLE_TO_ANOTHER_UNIVERSE_IS_MY_FANART_FROM_THE_SQUARE_ENIX_GAME_LIFE_IS_STRANGE" >
      </div>
    </div>
  </div>
</div>
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/Screenshot%202022-07-01%2012.48.33%20AM.png" >

<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/Screenshot%202022-07-01%2012.49.16%20AM.png" >
	
 https://youtu.be/QaR843im04A
 <div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <a href="https://www.youtube.com/watch?v=7TRStCd7qYU"> <img src="https://github.com/ThakaRashard/holetoanotheruniverse/blob/gh-pages/img/vsco5cfd9f85d1d95.jpg?raw=true" alt="Girl in a jacket" > </a>
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <a href="https://www.youtube.com/watch?v=rOGWygPcv78"> <img src="https://github.com/ThakaRashard/holetoanotheruniverse/blob/gh-pages/img/vsco5cfd9f85d1d95.jpg?raw=true" alt="Girl in a jacket" > </a>
 </div>
 </div>
 </div>
</div>
 
 
 <div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <a href="https://www.youtube.com/watch?v=ARtRsMnTqQc"> <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/WEenNWEE.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <a href="https://youtu.be/ZmPfxMBNilg"> <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/WEenNWEE.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://upload.wikimedia.org/wikipedia/en/4/42/Mulatto_%22Bitch_from_Da_Souf%22.png" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://images.genius.com/e340ddf6971616a68049fecc163ec30c.1000x1000x1.png" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
  </div>
 </div>

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://mirkoreisser.de/wp-admin/admin-ajax.php?action=kernel&p=image&src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC8yMDE5XC8xMFwvTWlya28tUmVpc3Nlci1EQUlNX0ZpbmVBcnQtUHJpbnRzX21yZjMxNzU2LTY0OS5qcGciLFtbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&hash=41e376ca3b4a1a3be4163f0ca652ae78" alt="##DAiM_IS_HERE_TO_STAY_WiTH_BUBBLEGUMPOP" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://mirkoreisser.de/wp-admin/admin-ajax.php?action=kernel&p=image&src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC8yMDE5XC8xMFwvTWlya28tUmVpc3Nlci1EQUlNX0ZpbmVBcnQtUHJpbnRzX21yZjMxNzU2LTY0OS5qcGciLFtbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&hash=41e376ca3b4a1a3be4163f0ca652ae78" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1254671677&color=%23a89c90&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1297575751&color=%23cbcbcb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<img src="https://www.graffiti.org/atl/sever_totem2_hense_b12df1_b.jpg" >
<img src="https://im.vsco.co/aws-us-west-2/12f8b0/56497/5fc456bce1ebb64f08283bf2/vsco5fc456bd41267.jpg" >				
<img src="https://im.vsco.co/aws-us-west-2/12f8b0/56497/5fc458d2e1ebb64f08283c10/vsco5fc458d330a8d.jpg" >
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153502092&color=%236c3f42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<img src="https://ftp.icm.edu.pl/packages/graffiti.old/boston/zelot_rath_turn_kem5_prey06.jpg" >
<img src="https://im.vsco.co/aws-us-west-2/12f8b0/56497/5fc45b01e1ebb64f08283c31/vsco5fc45b027a916.jpg" >
<img src="https://ftp.icm.edu.pl/packages/graffiti.old/boston/zealot_aves_mise_tint_boston_2006.jpg" >
<img src="https://im.vsco.co/aws-us-west-2/12f8b0/56497/5fc538211d7831291c000007/vsco5fc538244c543.jpg" >
<img src="https://www.graffiti.org/boston/mise_back_boston_2006_71.jpg" >
<img src="https://im.vsco.co/aws-us-west-2/12f8b0/56497/600b63321d78311648000003/vsco600b633468109.jpg" >
<img src="https://www.graffiti.org/boston/a36wet.jpg" >
<img src="https://im.vsco.co/aws-us-west-2/12f8b0/56497/600b63321d78311648000001/vsco600b633af04a1.jpg" >
<img src="https://www.graffiti.org/atl/haze7.jpg" >
<img src="https://image-aws-us-west-2.vsco.co/12f8b0/56497/60218c77ef098d3a41bfa7ad/vsco60218c793112f.jpg" >
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1208259943&color=%236c3f42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/747778534&color=%236c3f42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/390462771&color=%238c8c8c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="//im.vsco.co/aws-us-west-2/12f8b0/56497/60256dab80d02b397eaa596b/vsco60256daca8c2c.jpg?w=350&dpr=1" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="//im.vsco.co/aws-us-west-2/12f8b0/56497/60256dab80d02b397eaa596b/vsco60256daca8c2c.jpg?w=350&dpr=1" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
  </div>
</div>
<img src="https://i.discogs.com/jNB0ym679sbB-AhjVnk9FExyO0XNV3h_gNV5jTZUtW4/rs:fit/g:sm/q:90/h:355/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTYwOTEw/LTEzODg4MDIxNzEt/Nzk0NC5qcGVn.jpeg" >
<img src="https://thesource.com/wp-content/uploads/2022/02/AB3A9173-700x400.jpg" >
<div class="divAlbumReview" style="background-image: url( https://i.slkimg.com/isv1/artist/v5aa5fa46a24672bf/168214/1290171/web/3/center/5,0/300x300.jpg); no-repeat center center fixed" >
 <img style="float:left;width:50%;" src="https://i.discogs.com/FXr1dApzVjeUrr1_Zvd8EfnrH2llviPnYdRWS3nGeFA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMTE3/MjEtMTYyNjU5NjYx/NS02NTMyLmpwZWc.jpeg" /> 
  
  <img style="float:right;width:50%;" src="https://i.discogs.com/l6EPHxxFytxo2nyj9SOhUPaaKusc6l41wE7EdtN9BvQ/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMTE3/MjEtMTYyNjU5NjYx/NS02MjQ2LmpwZWc.jpeg" />
 <p class="pdivAlbumReview"> 
 
<span class="firstcharacter">The Supremes – I Hear A Symphony
Label:	Motown – M5-147V1</span>
From DiSCOGS, the free encyclopedia
	 

Format:	
Vinyl, LP, Album, Reissue
Country:	US
Released:	1981
Genre:	Funk / Soul, Pop
Style:	Rhythm & Blues, Soul
A1		Stranger In Paradise
Composed By [Music] – Alexander Borodin
Written-By – George Forrest, Robert Craig Wright
A2		Yesterday
Producer – Norman Whitfield
Written-By – Lennon-McCartney
A3		I Hear A Symphony
Written-By – Holland-Dozier-Holland
A4		Unchained Melody
Written-By – Alex North, Hy Zaret
A5		With A Song In My Heart
Written-By – Rodgers & Hart
A6		Without A Song
Written-By – Billy Rose, Edward Eliscu, Vincent Youmans
B1		My World Is Empty Without You
Written-By – Holland-Dozier-Holland
B2		A Lover's Concerto
Written-By – Denny Randell, Sandy Linzer
B3		Any Girl In Love (Knows What I'm Going Through)
Written-By – Holland-Dozier-Holland
B4		Wonderful, Wonderful
Written-By – Ben Raleigh, Sherman Edwards
B5		Everything Is Good About You
Written-By – Edward Holland, Jr., James Dean (3)
B6		He's All I Got
Written-By – Holland-Dozier-Holland
Backing Vocals – Florence Ballard, Mary Wilson
Lead Vocals – Diana Ross
Producer – Holland & Dozier (tracks: A1, A3 to B6)
"1st pressings" of this release are “MM 643 Mono” or MS 643 Stereo”, they have a full color front artwork with no border only a top white banner with Stereo text. Back cover states copyright 1966 in lower left corner.

Reissues have copyright 1966 info in middle of back panel and have full front framing white border with Stereo in text on top.</p>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/bpL1TTxffO0" title="YouTube video player"  allowfullscreen></iframe>
 </div>
[HUMA](https://www.pinterest.com/pin/7107311903800054/)
<a href="https://youtu.be/DFMEBquxeO8" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_rainbow/bd_rainbow_example1.jpg" /> </a>
<img src="https://thesource.com/wp-content/uploads/2022/02/AB3A9173-700x400.jpg" alt="####KALI_IS_MY_WIFE_AS_WELL_MUNA_is_STILL_MUNI##BUBBLEGUM_POP##IS_HERE_TO_STAY" >

<img src="https://i.ytimg.com/vi/WaLr2R2Dxuc/maxresdefault.jpg" alt="####KALI_IS_MY_WIFE_AS_WELL_MUNA_is_STILL_MUNI##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
<a href="https://youtu.be/Qw-HQxpewWI" alt="DEAR_SAATU##_ITS_TIME_FOR_A_DEEP_SURPRISE" ><img src="https://f4.bcbits.com/img/a4167468696_10.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" > </a>

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/NATURALMYSTIC45a.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.discogs.com/-cZrLCOY7Z_umwRKPsdQjjiSrwopzp17V5OMFZOP-Ms/rs:fit/g:sm/q:90/h:600/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNzM5/NjMtMTU4NzQ4OTE4/OC03OTE5LmpwZWc.jpeg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="mdBOwOG" data-user="thakarashard" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/thakarashard/pen/mdBOwOG">
  NEON TEXT </a> by ThakaRashard (<a href="https://codepen.io/thakarashard">@thakarashard</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<h2> [Hook: Rell]
Came up out the darkness, searching for light
I know home is where my heart is
And now nothing seems right
I tried to make peace and cut my losses
And carry on somehow
But I've come much too far, man
Too late to turn back now, here I go again
Here I go again
Here I go again
Here I go again
</h2>
<h2> SHAKE THAT LOAD OFF
</h2>
<h2> SHAKE THAT LOAD OFF
</h2>
<h2> SHAKE THAT LOAD OFF
</h2>
<h2> SHAKE THAT LOAD OFF
</h2>
<h2> SHAKE THAT LOAD OFF
</h2>

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/NATURALMYSTIC45a.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/bob-marley-natural-mystic-12-hear-lee-perry-roots-dub-reggae-daddy-kool_9210518.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>

<a href="https://youtu.be/DFMEBquxeO8" target="_blank" ><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/VAliD_CSS_ERiKA_THANKS_SO_MUCH_FOR_THE_MEMORIES_AND_SUPPORT_IN_TELEPATHYTHE_oTHER_night.PNG" > </a>

<div id="row_image">

<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/img355.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >

</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BuBBLEGUMPOP_CSS4DANCE411.PNG" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BuBBLEGUMPOP_CSS4DANCE411a.PNG" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div >

## ##LiNKiN_PARK_NAWT_LiNKEDiN_ERiKA
<iframe width="100%" height="315" src="https://www.youtube.com/embed/2UnWZMsTwHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ABOUT_HOLE_TO_ANOTHER_UNiVERSE
 I Got the concept from <em> [Life Is StRanGe, by ##SQUARE_ENIX](https://lifeisstrange.square-enix-games.com/en-us/)</em> and via ##TELICATION##THEY_GAVE_ME_PERMISSION_TO_USE_EVERYTHING_I_CREATED_AS_FAN_ART_FOR_RECREATIVE_PURPOSES
 I might sell my art once Travis and Kendrick stop bootlegging it. I am in my own videos 
# CRACKHEAD_MARQUiS_and_CHANCE_and_TRAViS_HAVE_BEEN_IMPERSONATING_ME
## SARTU_JUST_OBEYS_TO_STAY_ALiVE##THATS_MY_ART
## ASK_ERIKA_SHE_TURNED_ME_ON_TO_THE_SHiT_AND_iS_PART_OWNER_OF_A_LOT_OF_MY_ART_NOT_HER_FAGGOT_ASS_KIDNAPPER_CHILD_MOLESTING_LIFE_PARTNER____
## THATS_STILL_MY_WIFE!
 <iframe width="100%" height="315" src="https://www.youtube.com/embed/eehrU51Ra-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Who_iS_UsiNG_MY_ART_WORK__I_NEVER_POSTED_THiS_TO_ViMEO(or_edited_it!!!)
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/337908544?h=c8849dac41&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Blog entry heading for @lovebomrs"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Original_FrOM_YOU_TUBE_Below VVV!! THAT one above ^^^^ is edited!
<iframe width="100%" height="315" src="https://www.youtube.com/embed/7TRStCd7qYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### DATE_iN_FOR_BLOG_iN_RUBY_BROKEN_RN_(syntax_issues_in_Jekyll)
Im experimenting with some code i found in the <em> [Learn Ruby Documentation](https://learnandlearn.com/ruby-programming/ruby-reference/ruby-get-today-or-current-date-today-method-with-examples) To show users the current date. I dont post daily because I own no computer or cellphone, and there is no internet access for patrons of my homeless recoupe center so I cant make time commitments to the blog at this point... However just seeing the date is a little user interaction that lets people know that something is changing... If time is moving, Im progressing offline in someway even if there are no posts. Posting is personal, thanks fo checkin' on me tho. I was scared for a few days that I was being sabatoged again after #MATT_LETRS_FiELD and #ERiKA_MUNA_CORAL_and_SARTUs_KiDNAP_POSSE destroyed me on the social web... My my video links appeared broken at [Best Buy in PalmDale](www.bestbuy.com). When I got to the library all was well. Sometimes network filtering changes what we see... Im going to move to permalinks to see if that changes the results. Its important for all sharing information to see the same thing! </em> 

{% highlight ruby %}
# import date library
require 'date'
date = Date.today 
puts date
{% endhighlight %}
# import date library
require 'date'
date = Date.today 
puts date

# Tuesday, NOVEMBER 23rd, 2021
### PalmdaleVibesTonight
<iframe width="100%" height="315" src="https://www.youtube.com/embed/ewRjZoRtu0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/F3CIbk3At_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/-KKbdErJkiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{% highlight html %}
<img
  src="https://assets.digitalocean.com/articles/alligator/css/object-fit/example-object-fit.jpg"
  width="600"
  height="337"
  style="width: 600px; height: 337px;"
  alt="Sample image of a turtle riding on top of an alligator that is swimming in the water - scaled to 600 x 337."
/>
<!-- ##CODE_TAKEN_CAUSE_DiGiTAL_OCEAN_HELPS_PEOPLE ## https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit -->
{% endhighlight %}

[I_NEED_TO_WORK_ON_BOXES_FOR_IMAGES](https://www.deviantart.com/hextupleyoodot/art/Cascading-Style-Sheet-333510968)
<iframe width="100%" height="315" src="https://www.youtube.com/embed/tCXGJQYZ9JA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/EUoe7cf0HYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/bqiZP-XY1mE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/XFRI5y5pWLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# SUNDAY, NOVEMBER 21TH, 2021
# Im working on CSS

Since I'm publishing using [##GiTHUB_PAGES](https://pages.github.com/), alot of administration needs are met from my [GiTHUB_ACCOUNT](https://github.com/ThakaRashard), I can focus on coding. [Cascading Style Sheets is a legit programming language for the browser](http://www.csszengarden.com/216/). Using the site David Shea Started, I can get this Jekyll account to another level. I really need this book [The Zen of CSS](https://www.goodreads.com/en/book/show/565.The_Zen_of_CSS_Design) he published. I have to create navigation to my resume and create a contact page. Im using [GiTHUB Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories) to manage individual pages right now because it is a small site and I want [psychological separation](https://www.separationadvice.net/psychological-separation/) which social media does not provide. I was blackballed on Linkedin for just not knowing enough for my age, and my family+romance life. Every woman that committed to me was sold into sex slavery and kidnapped by ##INSTAGRAM_PiMPS_and_MARKETED_iN_FACEBOOK_BROTHELS. They are still trafficked as prostitutes. IT people in the DEVOPS generation often fool themselves into thinking prostitution is normal and the family which is affected is the problem. This view has left people with familes discriminated against in the ##IT_MARKETPLACE, but here in Los Angeles after 2 years of homelessness, I sense my luck changing... So Im working hard to clean up my image and reputation outside social media, which has brought me closer to my family 
## I_FOUND_EVERYONE_ALiVE_HERE_IN_SOUTHER_CALIFORNIA.\
I miss my friend, the explosive barritone lows of his voice coupled with cruck ass beat production will be missed dearly, I hope this wiki iframe does not break scrolling on cellphones. I cant test touch screens at this point from [Palmdale Public Library's](https://cityofpalmdale.org/318/Palmdale-City-Library) traditional [Optiplex desktops](https://www.dell.com/en-us/work/shop/desktops-all-in-one-pcs/optiplex-5040-series-desktops/spd/optiplex-5040-desktop) 
[Memphis police release photos of 2 suspects wanted over Young Dolph's shooting death](https://www.npr.org/2021/11/19/1057194115/memphis-police-suspects-wanted-young-dolph-murder)

# ##DEAR_WiLLOW
## #I_WiSH_I_HAD_A_PAiR_OF_HEADPHONES_AND_A_MUSiC_PLAYER 

Sartu's bizarre and nearly deadly affair with Travis, left me without anything to access the internet and the cyberbullying from the social media companies has turned hundreds possibly thousands into "KEEP##THAKA_OFF_THE_INTERNET##ZOMBiES"! Im in the mood for this classic. Maybe I can get some studiotime with your dad someday as his DJ.
<iframe width="100%" height="315" src="https://www.youtube.com/embed/vMaJC4ZiahQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[RAiNY_DAYZ_FEAT.GHOSTFACE](https://www.youtube.com/watch?v=IGlJeDmq50Q)

# SUNDAY, NOVEMBER 11TH, 2021 { The Date is actually about 4 days prior }

## ##_CHASiNG_ViCTORY
<iframe width="100%" height="315" src="https://www.youtube.com/embed/FJZ-BHBKyos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ##_THiS_SONG_REAL = #iM_GRATEFUL_SEE_YA_SOON_BHATi
<iframe width="100%" height="315" src="https://www.youtube.com/embed/qUc43ygJvOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ##MiA_X = ##TELEPATH##CHANNEL_HER##
<iframe width="100%" height="315" src="https://www.youtube.com/embed/lDLFnVIrBp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ##JANET_JACKSON##EMPTY##PROSTITUTiON_##
### ##JANET_HAS_STRUGGLED_SO_LONG##
<iframe width="100%" height="315" src="https://www.youtube.com/embed/q37CHEMiXi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ##RAP_DUO5 = "CHECK_THE_RHYTHM_and_RHYME_SCHEME##_ADVANCED"TRiNA_iS_iN_THiS_BUiLDiNG"
Super advance duet song... LEvels up 

## RUnDMCs_PETER_PiPER
<iframe width="100%" height="315" src="https://www.youtube.com/embed/NaFqyJG8ung" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
RUN_DMC had a great run

## COLD_CRUSH_BROTHERS_and_OTHER_PiONEERS_STARTED_iT_iN_THiS_GENRE
<iframe width="100%" height="315" src="https://www.youtube.com/embed/fKCzZfuuEaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/Kuzp6r1zNZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ##KURT_COBAiN_UNDERSTANDS_ME##
## _PLEASE_GiVE_ME_A_JOB_i_SORRY_FOR_HURTiNG_PEOPLES_FEELiNGS_iN_ATLANTA
<iframe width="100%" height="315" src="https://www.youtube.com/embed/x_tcoBOn6Mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/aWmkuH1k7uA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ##THESE_PEOPLE_KNOW_WHERE_MUNA_iS_BUT_iTS_TOO_DANGEROUS_TO_TALK##
##_i_SAW_HER_ON_SKiD_ROW = ##THiS_CANT_BE_LiFE##THERES_GOTTA_BE_MORE
<iframe width="100%" height="315" src="https://www.youtube.com/embed/ACXye620uk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
##_SOMEHOW_SOMEWAY_iLL_GET_MY_FAMiLY_BACK_SOMEDAY
<iframe width="100%" height="315" src="https://www.youtube.com/embed/QSmKOuPZZ9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## RAPSODY = " Ibtihaj ft. D'Angelo, GZA "
<iframe width="100%" height="315" src="https://www.youtube.com/embed/jhMk_wLm07E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## RAPSODY = "LAiLAS_WiSDOM"
<iframe width="100%" height="315" src="https://www.youtube.com/embed/btYlWphnfbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe src="https://pixelfed.tokyo/p/THAKA/363094015438763292/embed?caption=false&likes=false&layout=compact" class="pixelfed__embed" style="max-width: 100%; border: 0" width="100%" allowfullscreen="allowfullscreen"></iframe><script async defer src="https://pixelfed.tokyo/embed.js"></script>


## CSS_FOR_YOUTUBE_ViDEOS
{% highlight css %}
style="width:1000px; height:300px; border: 50px solid black;"
/* This_Article_helped https://medium.com/rockedscience/smartify-your-video-embeds-f1cc13b775b5 
Medium.com used to be a domain for spirituality but the Neo_Nazi anti-spirituality movement ##FLUSHED_US_OWT */
{% endhighlight %}

## GHOSTFACE_KiLLAH = iRONMAN_1996_WHOL3_4LBUM
<iframe width="100%" height="315" src="https://www.youtube.com/embed/bCx9Jn8rpG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <a href="https://www.youtube.com/watch?v=UAi1e7AoEWA"> <img src="https://i.pinimg.com/564x/7c/12/0f/7c120fcfaba943300a402cd1d86e99ed.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <a href="https://youtu.be/UAi1e7AoEWA"> <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/SAA2%23%23SARTUZEE%23%23ART.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 </div>
</div>


<div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <a href="https://www.youtube.com/watch?v=UAi1e7AoEWA"> <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/SAA2%23%23SARTUZEE%23%23ART.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <a href="https://youtu.be/UAi1e7AoEWA"> <img src="https://i.pinimg.com/originals/54/a5/60/54a5602868bda61c73bad1c97c3448d5.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 </div>
</div>
https://i.pinimg.com/originals/54/a5/60/54a5602868bda61c73bad1c97c3448d5.jpg
https://i.pinimg.com/originals/9f/9d/d3/9f9dd385a413b293272ced8d44757bcf.jpg
https://i.pinimg.com/originals/b1/a5/31/b1a531387792bd946642e80ac2a1487d.jpg
<a href="https://youtu.be/UAi1e7AoEWA"> <img class="bwtocolor" src="https://i.pinimg.com/originals/9f/9d/d3/9f9dd385a413b293272ced8d44757bcf.jpg" alt="##SARTU_I_WANT_TO_SEE_EVERYONE_WE_CAN_MEET_UP_TOGETHER_AND_DIP_OFF_SOMEWHERE_WHEN_EVERYONE_GETS_THIER_HELLO_IN" > </a>



<div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <a href="https://www.youtube.com/watch?v=UAi1e7AoEWA"> <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/SAA2%23%23SARTUZEE%23%23ART.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <a href="https://youtu.be/UAi1e7AoEWA"> <img src="https://i.pinimg.com/originals/b1/a5/31/b1a531387792bd946642e80ac2a1487d.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 </div>
</div>


<div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <a href="https://www.youtube.com/watch?v=ARtRsMnTqQc"> <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/WEenNWEE.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <a href="https://youtu.be/ZmPfxMBNilg"> <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/WEenNWEE.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 </div>
</div>


[THiNKiNG_OF_YOU##SARTU##ZEE##UNDASTAND_DAH_ZEE_AND_YOU_WILL_INDEED_UNDASTANYND_HUH##](https://youtu.be/9iUE4F9UHok)
<span class="neonText">
 ##SAATUZEE_WILL_YOU_MARRY_ME?!
</span>

</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://imageio.forbes.com/specials-images/imageserve/605910426b54abc90fcd1a1b/Audio-cassettes-have-spiked-during-the-pandemic/960x0.jpg?format=jpg&width=960" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://imageio.forbes.com/specials-images/imageserve/605910426b54abc90fcd1a1b/Audio-cassettes-have-spiked-during-the-pandemic/960x0.jpg?format=jpg&width=960" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>

 <img src="https://i.scdn.co/image/ab67616d0000b273b029b7c6ee626bdcd432545e" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
 <img src="https://www.covercentury.com/covers/dreamcast/s/dc_sonicadventure.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://lostmediawiki.com/images/d/dc/Sa1jp.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://pbs.twimg.com/media/FLA4s97XEAI1mbA?format=jpg&name=900x900" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>

	
	
[##THAKA_BEKELE_SELASSIE = ##SULTAN_DROPS##](https://www.youtube.com/watch?v=MbVPev7akDI)
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/811b309218cfc0249cfe8444edeaacdf5d7a1a6c/img/vsco5fc454cf67712.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAYaHOLE_TO_ANOTHER_UNIVERSE_IS_OUR_FANART_FROM_THE_SQUARE_ENIX_GAME_LIFE_IS_STRANGE" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/811b309218cfc0249cfe8444edeaacdf5d7a1a6c/img/vsco5fc454cf67712.jpg" alt="HOLE_TO_ANOTHER_UNIVERSE_IS_MY_FANART_FROM_THE_SQUARE_ENIX_GAME_LIFE_IS_STRANGE" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/vsco5cfd9f85d1d95.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAYaHOLE_TO_ANOTHER_UNIVERSE_IS_OUR_FANART_FROM_THE_SQUARE_ENIX_GAME_LIFE_IS_STRANGE" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/vsco5cfd9f85d1d95.jpg" alt="HOLE_TO_ANOTHER_UNIVERSE_IS_MY_FANART_FROM_THE_SQUARE_ENIX_GAME_LIFE_IS_STRANGE" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://m.media-amazon.com/images/I/51D0Q9RDFSL.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.scdn.co/image/ab67616d0000b2734f1a91e8d19ff7e39b671b25" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<a href="https://youtu.be/yJcks5n43hs" alt="I_WONT_BACK_DOWN_GIVE_HIM_HIS_THUNDAHDET_WUZ_MUNI_LOWNG" > <img src="https://media.pitchfork.com/photos/5c9112047741b65a56c6c4f5/1:1/w_600/ChemicalBrothers_NoGeography.jpg" /><a/>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/CB_MAH_PACKSHOT_ART.webp" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/ELLIE%23%23JAPANESEcover.jpg " alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://e.snmc.io/i/300/s/ffbf35c9df5d3c5aadb7c3da00936c81/1669098" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://e.snmc.io/i/300/s/ffbf35c9df5d3c5aadb7c3da00936c81/1669098 " alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<img src="https://fordcobraengines.com/wp-content/uploads/2015/04/IMG_4180-e1463598105418.jpg" alt="COYOTE_CRATE_ENGINE" >
	


<h2 class="neonText"> Its been 774 days since I have seen our daughter ##CORAL_IRIS_KELLY##SELASSIE ~> </h2> 
<span class="firstcharacter">Her mother Erika Renee Kelly was kidnapped from ##EAST_ATLANTA##GEORGiA on Feb 2,2020. A local Atlanta man named Matt Field bragged about it on Facebook stating "I_SOLD_HER".</span> 

I found her near Venice beach California and my tattooist Kennie_Davis of ##Jolly_Roger_Tattoo in _Stockbridge#Georgia was not too far from the scene. Erika and I were not estranged when she disappeared as [ESSENCE_MAGAZiNE_STATED](https://www.essence.com/news/erika-kelly-missing-atlanta-georgia) we were coparenting. I was laid off from my IT job at [Ionic Security](https://www.linkedin.com/company/ionic-security) after my work was repeatedly sabotaged by my manager. I opened a case with ##Fulton_County_Family_Services two months before our eviction from our ##East_Atlanta_Home_at_631_Moreland_Ave_in_Atlanta_Georgia they failed to process us after repeated visits and calls. I took odd jobs and even scored a mural gig with [Mercedes_BenZ_Stadium](https://mercedesbenzstadium.com/) for the [Atlanta_Falcons](https://www.atlantafalcons.com/). They paid me $1500 for a 40ft graffiti mural on red canvas for former athlete ##Deion_Sanders. I was severely underpaid but it covered the rent for one more month. I moved in with Constancia and her daughter ##Akeeva, got Coral in school at [Chapel Hill Elementary](https://www.chapelhilles.dekalb.k12.ga.us) and worked hard to get a new 9-5.
 
Constancia did not like me or Coral living with her and Akeeva so they undercut me with accusations of erratic behavior and started thier own dfacs case accusing me of schizophrenia. I had no income and was repeatedly denied foodstamps and welfare by a woman named ##DANIELLE_MASHONGA_and_her_colleage##MANESSA_WARNER... ##Coral would ask </p>
<h2> ##Where_is_Mommy?!?</h2>
<p>I told her that Matt stole and raped her and she needs our help, so we have to keep looking. Constancia and Akeeva constantly defended Matt. He is a known pedophile and child and adult rapist in the Atlanta art community. I did not know this. We shopped at the same record store and he often offered me work. I loath rapist. I loath pedophilia. Once I learned of his ways I distanced myself. So ##Erikas_mother_and_sisters_DEFENDING_HIM, struck me as bizarre. "##Its_just_a_white_boy_joke##He_didnt_sell_her". [DFACS](https://dfcs.georgia.gov/) stalked me on Facebook and indirectly accused me of ##CHILD_MOLESTATION for a video where we were playing with a wand style muscle massager, it was innocent.  They [forcibly removed Coral](https://www.youtube.com/watch?v=AmYdIZhahrQ) saying that I was saying ["inappropriate things"](https://www.youtube.com/watch?v=9sCE3HhjSbY) and violating her by saying that her mom had been raped and kidnapped. I learned that telling Coral the ugly truth was the best way to keep a solid trust filled relationship with her.
 
In the DFACS meeting, puzzled I told Mashonga the truth, I cant find work, my reputation was being sabotaged and I could not even get a job at ##Kroger the local grocery store. I told Mashonga I needed money for food, Constancia would not feed niether me or Coral. I asked Mashonga in [This_Family_Meeting](https://www.youtube.com/watch?v=Q8NXhT6_Tx8) if she cared about me dying on the street and she shook her head, no. I was never interviewed with Coral at all, I never got a psych eval until I got to a ##UCLA_Recoup_Center_in_PalmDale_California.
 
In early October I saw Coral, in Pasadena, ##California, with a grown man wearing fishnet stockings... Shes 9. I was shot with a poison dart one day later, my skateboard stolen and my foot began to swell larger that a shoe could fit... I was rushed to the emergency room and ##UCLA ##Cut_my_foot_to_the_bone_to_drain_the_infection... <del>I cant run any more and am now handicapped</del> 
## I_HAVE_HEALED to the point of skating via my familys physical-therapy regimine to keep us healthy as dancers. But my toe on the foot that endured the injury still does not work properly and <ins>I now struggle to run</ins>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/Q8NXhT6_Tx8" title="YouTube video player"  allowfullscreen></iframe>

<iframe width="100%" height="400" src="https://www.youtube.com/embed/9sCE3HhjSbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="400" src="https://www.youtube.com/embed/AmYdIZhahrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h2>Her_Former_Life_With_Me</h2>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/-oZuyrU764s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/CsM4jNSAm4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/ydGxlS8l7Y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
## B25_CRASHED_iNTO_EMPiRE_STATE_TOWERE_1945
### Why did'nt the whole building go down?
[I found out about it in the book The New York Times Page One: Major Events 1900-1998 As Presented in the New York Times Hardcover](https://www.alibris.com/search/books/isbn/9781578660322)
[Original article](https://www.nytimes.com/1945/07/29/archives/b25-crashes-in-fog-hole-18-by-20-feet-torn-through-north-wall-by.html?smid=url-share)





<a href="https://youtu.be/R2rct18-iSM" target="_blank">
<img src="https://m.media-amazon.com/images/I/51I6d3hyr0L._SX355_.jpg" alt="an image" title="The title of this image"/>
 </a>

## Everything should be done in love.
### - 1 Corinthians 16:14

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/795229738&color=%2300ff7c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://m.media-amazon.com/images/I/814ZXaN+cIL._SL1500_.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/ssdba1.jpg " alt="PUFFAH_iNTiMiDATED_ME_WHEN_I_WAS_LISTENING_TO_THIS_ALBUM_I_LIED_AND_SAID_I_WAS_LISTENING_TO_OUTKAST___THEN_I_HAD_TO_LEARN_ALL_THEIR_MUSIC" >
      </div>
    </div>
  </div>
</div>
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/so_so_def_bass_all_stars__vol__2_album_insert_by_eppsart_dc0sps0-fullview.jpg" />
<a href="https://www.youtube.com/watch?v=gGrjTYoPEw8" > <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/77274.jpg" alt="Normani_iS_iN_TEARS##THiS_iS_MY_WIFE_SARTU_AHMED_SELASSiE_IN_HER_CAREER_NAME" width="100%" /><a/>
<a href="http://wiki.gis.com/wiki/index.php/Binary_large_object" > <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200428220134/BLOB.png" /><a/>
<a href="https://youtu.be/DFMEBquxeO8" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_rainbow/bd_rainbow_example1.jpg" /> </a>
<a href="https://www.2600.com/" > <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BeYonCeLeaRNiNGWEBDESiGN1.PNG" /><a/>
<a href="https://www.youtube.com/watch?v=EX8soUV_CAg" > <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BeYonCeLeaRNiNGWEBDESiGN.PNG" /><a/>
<a href="https://www.2600.com/" > <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BeYonCeiSBEAUTiFUL.PNG" /><a/>
<a href="http://www.ericmeyeroncss.com" > <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BeYonCeMiCHELLEBRANCHE.PNG" /><a/>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_rainbow/bd_rainbow_example1.jpg" /> </a>
<a href="https://www.2600.com/" > <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BeYonCeHaCkeRs.PNG" /><a/>
<a href="http://www.ericmeyeroncss.com" > <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BeYonCeHaCkeRs26000.PNG" /><a/>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://burodestruct.net/sites/default/files/styles/bd_wide_2x/public/bd_type1_demonstration.jpg?itok=CyDRb7ye" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://burodestruct.net/sites/default/files/styles/bd_wide_2x/public/bd_type1_city.jpg?itok=MJSd2yw9" /> </a>
	

<img src="https://i.discogs.com/N1EA9fc-ZaWSRoOAd9bV4om8xqjogZUMNzdhZ_JMv3k/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDgy/MTItMTE4MzQ4NTEx/OC5qcGVn.jpeg" />
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/Screenshot%202022-06-27%206.37.45%20AM.png" />
<iframe width="100%" height="315" src="https://www.youtube.com/embed/uSPHfbHy2Bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<img src="https://i.discogs.com/p2AO_94h3yUfefkVCD7t6JDP-s9-6JjfE0jKLBnfq-w/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MjIx/MDMtMTUxOTU4Mjk5/OS01MjY1LmpwZWc.jpeg" />
https://youtu.be/P0180ESQPC0 />
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/281668848&color=%23aec5d5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
</iframe><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/43359151&color=%23aec5d5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="350" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/66603430&color=%23aec5d5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/708018244&color=%23aec5d5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

<a href="https://etc.usf.edu/lit2go/35/aesops-fables/388/the-father-and-his-sons"> The Father And His Son <em> ::</em> Aesop's Fables</a> 
<audio controls class="broken-width">
  <source src="https://etc.usf.edu/lit2go/audio/mp3/aesops-fables-010-the-boy-who-cried-wolf.375.mp3" type="audio/mp3" />
  <source src="https://etc.usf.edu/lit2go/audio/mp3/aesops-fables-023-the-father-and-his-sons.388.mp3" type="audio/mpeg" />
  Your browser does not support the <code>audio</code> element.
</audio>

<a href="https://etc.usf.edu/lit2go/35/aesops-fables/388/the-father-and-his-sons"> The Father And His Son <em> ::</em> Aesop's Fables</a> 
<audio controls class="broken-width">
  <source src="https://etc.usf.edu/lit2go/audio/mp3/aesops-fables-010-the-boy-who-cried-wolf.375.mp3" type="audio/mp3" />
  <source src="https://etc.usf.edu/lit2go/audio/mp3/aesops-fables-023-the-father-and-his-sons.388.mp3" type="audio/mpeg" />
  Your browser does not support the <code>audio</code> element.
</audio>


<audio controls class="right-width">
  <source src="https://etc.usf.edu/lit2go/audio/mp3/aesops-fables-003-the-bald-man-and-the-fly.368.mp3" type="audio/mp3" />
  <source src="https://etc.usf.edu/lit2go/audio/mp3/aesops-fables-005--the-bats-the-birds-and-the-beasts.370.mp3" alt="THE_BAT_and_THE_BiRDs" type="audio/mpeg" />
  Your browser does not support the <code>audio</code> element.
</audio>
<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Basic_usage -->

<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/Screenshot%202022-06-26%208.35.52%20PM.png" />
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/Screenshot%202022-06-26%2011.30.38%20PM.png" />
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153502092&color=%23aec5d5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1137606826&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1271724856&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/306751252&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34767310&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/36098956&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252194269&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://m.media-amazon.com/images/I/41IpJNU3zQL._SY580_.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.discogs.com/yquUk3jRRu5m8b0XMRtzAXQErWlYbcGmPOUwaW0yVJk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMTA3/NTYtMTQ5Nzk4NDEy/NC00MDM2LmpwZWc.jpeg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<iframe width="75%" height="315" src="https://www.youtube.com/embed/irjofIZKsq4" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
<img style="float:left;width:100%;" src="https://images.eil.com/large_image/ANITA_BAKER_CAUGHT%2BUP%2BIN%2BTHE%2BRAPTURE-695540.jpg" />
<div class="divAlbumReview">
 <img style="float:left;width:50%;" src="https://i.discogs.com/nokYmhZh4gUe1NYfMaUzKoCZ059Svbyhr9exCbGlRKQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMDg0/NzAtMTQwMDc5NTEy/OC03NDgxLmpwZWc.jpeg" /> 
  
  <img style="float:right;width:50%;" src="https://i.discogs.com/PploTmKY_FiBuPtziQo78sOn3tIsoxqXHh2d8nz5YMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMDg0/NzAtMTQwMDc5NTEy/OC03MDE4LmpwZWc.jpeg" />
 <p class="pdivAlbumReview"> 
 
<span class="firstcharacter">Caught Up (Millie Jackson album)</span>
From Wikipedia, the free encyclopedia
Jump to navigationJump to search
Caught Up
Caughtup.jpg
Studio album by Millie Jackson
Released	1974
Recorded	1973-1974
Studio	Muscle Shoals Sound Studio, Sheffield, Alabama
Criteria Studios, Miami, Florida
Genre	Deep soul
Length	35:59
Label	Spring
Producer	Brad Shapiro
Millie Jackson chronology
I Got To Try It One Time
(1974)	Caught Up
(1974)	Still Caught Up
(1975)
 
Professional ratings
Review scores
Source	Rating
Allmusic	 [1]
Christgau's Record Guide	A–[2]
Caught Up is the fourth album by R&B musician Millie Jackson. It includes the hit singles, "(If Loving You Is Wrong) I Don't Want to Be Right", "The Rap" and "I'm Through Trying to Prove My Love to You." A concept album, Caught Up follows the story of a woman having an affair with a married man. Side A features Jackson singing from the mistress' point of view and Side B is told from the wife's point of view.

Track listing
Side A
"(If Loving You Is Wrong) I Don't Want to Be Right" (Homer Banks, Carl Hampton, Raymond Jackson) – 3:56
"The Rap" (Millie Jackson) – 5:53
"(If Loving You Is Wrong) I Don't Want to Be Right (Reprise)" (Homer Banks, Carl Hampton, Raymond Jackson) - 1:13
"All I Want is a Fighting Chance" (Millie Jackson, King Sterling) – 2:37
"I'm Tired of Hiding" (Phillip Mitchell, Billy Clements) – 3:51
Side B
"It's All Over but the Shouting" (Millie Jackson, King Sterling) – 2:51
"So Easy Going, So Hard Coming Back" (Phillip Mitchell) – 4:07
"I'm Through Trying to Prove My Love to You" (Bobby Womack) – 5:48
"Summer (The First Time)" (Bobby Goldsboro) – 5:43
Personnel
Millie Jackson - vocals, concept
Barry Beckett - keyboards
David Hood - bass
Roger Hawkins - drums
Jimmy Johnson - guitar
Mike Lewis - orchestration
Tom Roady, Brad Shapiro - percussion
Technical
   David Wiseltier - cover design</p>
   <iframe width="100%" height="315" src="https://www.youtube.com/embed/mutUj7oMBzE" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
 </div>
<a src="https://youtu.be/u58ljXHvFzM" > <img style=" width:100%;" alt="##BARRY_WHiTE##CANT_GET_ENOUGH" src="https://images.genius.com/b0666620c6c7378c1e9fe5c38d0d453d.1000x1000x1.jpg" /></a>
</br>
<a src="https://www.cssfontstack.com/monospace"> CSS font styling tool for  ##READABiLiTY </a>
<img style="float:right; width:100%; height:100%;" alt="##iTS_THA_ONE_HUNNiD_EMOJi" src="https://upload.wikimedia.org/wikipedia/commons/0/03/Emoji_u1f4af.svg">
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://static.wixstatic.com/media/f15be5_6dff88762912492dacd6d9a1b67ab345~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/f15be5_6dff88762912492dacd6d9a1b67ab345~mv2.webp" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://static.wixstatic.com/media/f15be5_0aba132ee8434e5aafdc0e3fc33cbd1b~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/f15be5_0aba132ee8434e5aafdc0e3fc33cbd1b~mv2.webp " alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/66603430&color=%23aec5d5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/Screenshot%202022-06-26%201.15.24%20PM.png" />
<img class="right" src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Downrock.jpg?1639357739125" alt="Floor RocKER" /> 
<span class="firstcharacter">I</span>n 1969, when James Brown was getting down with his big hit "Get on the Good Foot" the big dance style of the day appeared. This almost acrobatic dance became rather well known around New York City: kids in New York were doing the Good Foot - better known as B-Boy(the 'B' in b-boy usually doesn't correspond to a specific word, but most likely means "Boogaloo" or "Break") - which was the direct precursor to the sort of breakdancing we know today. As for origins it was the African people's dance culture which brought the heavy rhythm and the idea of dancing in a circle, but it was definitely a variety of influences that made up early B-Boying including gymnastics, Eastern martial arts, tap dance, Salsa, Afro-Cuban and Native American dances. One of the most influential dances was a South American martial arts/fighting dance known as the Capoeira.

By the time the Good Foot became the new dance style, the tradition of dance battle was well established. Dancers would gather at places like Harlem World on 116th Street in Harlem and Battle-dancewise. Battles are covered in more detail in the section on battles, challenges, and contests, but the important thing is that Breakdancing was particularly well-suited for competition and it appealed to certain young men who were very athletic.

The Good Foot, which was soon to be called B-Boy and shortly after that <a href="https://www.danceclass.com/breakdancing-music.html">Breakdancing</a>, or Breaking, was very different from the Breaking we see today. In some ways it was simpler. There were no headspins, no windmill, no handglides or backspins. It was what is now called old-style Breaking. It consisted only of floor work, involved some extremely complicated leg moves done very fast and in a way it was more complex than modern Breaking.

Among those for whom old-style breaking was especially popular were many of the youths and street gangs that roamed the South Bronx. And it was in those streets that Breakdancing really started. Often, the best Breakers in opposing gangs would battle dancewise instead of fighting. A breakdancing battle is when dancers 'fight' against each other on the dance floor without contact. They form a circle and take turns trying to show each other up through better style, more complex move<img style="float:right;" src="https://calisphere.org/clip/500x500/8db0bd01cab257a19ab8d35b5ffe8fba" alt="Floor RocKER" /> combinations, or tougher moves. Unfortunately, these Breaking battles did not always stop fight. In fact, they often would cause a fight, since dancers would sometimes get physical when they couldn't win dancewise. Some of these crews became very dedicated to their dancing, and since they had nothing better to do, would spend hours a day practicing, developing more and more complex moves, improving their form, and increasing their speed.

And then Afrika Bambaataa came along - the legendary grand master D.J. who is the individual most responsible for the successful growth of Breakdancing as he saw a great potential in it. He started one of the first Breakdance crews, the Zulu Kings that won a lot of battles and talent shows and preformed in various clubs in New York. Old-style Breaking became past when based on the hit record "Freak Out" by the Shieks around 1979 and early 1980 a new Breakdance crew was organized - Rock Steady Crew (all original members were from Zulu Nation). They became famous doing dancing in clubs thanks to Bambaataa who encouraged them. Generally, a common feature of bboy music is the presence of a break which is looped several times by the dj.

These were the days when "hip-hop culture" emerged: along with DJing, these "breakbeats" laid the foundation for the two more elements - MCing and <a href="http://www.thebreaksnz.com/201829188">B-Boying</a>. It became the MC's (Master of Ceremony) job to amuse, excite, and motivate the crowd to dance over the breakbeats. B-Boys were the ones who would dance or "freak out," "bust moves," and "go-off" on the dancefloor with their steps and freezes. These three elements along with graffiti art or writing are what make up the hip hop culture.
<img style="float:left;" src="http://cdn.simplesite.com/i/b0/4f/285697108068487088/i285697114316499638._szw480h1280_.jpg" alt="Floor RocKER" />
In the 1980s, with the help of pop culture and MTV, breakdancing made its way from the suburbs to the rest of the world as a new cultural phenomenon. The new style of dancing was different from the old: Rock Steady added a lot of acrobatic moves. And so around 1982 breaking became even more popular. Meanwhile, another dance was catching on: it was called the Robot. People started doing the Robot as early as 1969, but the dance really took off after Michael Jackson danced the Robot while singing "Dancin' Machine" on national TV. In 1983, movies like Flashdance and Buffalo Gals which featured the Rock Steady Crew broke the scene wide open when breaking could finally be scene internationally: the world went rap dance crazy.

The nature of the dance was that it was improvised, never learned, so upon seeing these films, American kids immediately began making up their own breakdancing moves in basements across America. Michael Jackson's famous "moonwalk" and M.C.Hammer's pumped-up dance style are just improvised forms of breakdancing. Breakdancing has evolved into the dancing that is seen today in music videos and rap. Over the next few years, breakdancing became the trend. Some of the more famous crews were featured in movies, commercials and TV shows. When the Summer Olympics came to Los Angeles in 1984, the closing ceremonies featured a performance by over 100 B-Boys and B-Girls.
So, prototypically the pioneers of breakdancing were young and of a lower socioeconomic class. The majorities of these were male, and most were Black or Hispanic, and lived in dense urban areas (mostly New York). Many of them were members of street gangs. Breakdancers typically wear low pants, T-shirts and a hat tipped sideways. They also wore nylon jumpsuits which were functional as well as fashionable. The slick surface allowed the breakdancer to slide on the floor much easier than if she or he had been wearing a cotton shirt. The dance must be done in sneakers, for the dancer's safety. Breakdancing is known as an especially dangerous sport for several reasons. It is not unusual for a dancer to get something caught, stubbed or stopped while moving in air. This dance is never done on a soft surface. Breakdancing includes moving the feet sideways and onto the toes, spinning on the knees, head, hands and elbows, mock fighting moves, and pantomime.
<img style="float:right;" src="https://m.media-amazon.com/images/I/51c6iiV+YuL.jpg" />
In its early form, breakdancing was divided into three distinct forms of dancing, breaking and popping. Today, each body movement has been classified into a distinct style or genre of breaking and is similar in principle to others but characteristically different. The most basic breakdance moves are the 6-step and toprock. The rest of the dance is founded around these two elements which are the base for other more complex moves to be formed, as well as power moves. After performing these elements breakdancer will usually end the dance with a 'freeze' which is when he contorts his body to a strange position and literally freezes, stopping all dance motion. The breakdancer will usually hold the freeze for a second or two.

Breakdancers often call any dancing that takes place on the ground 'downrock' as opposed to uprock or toprock. There are some Power moves that often require incredible skill and flexibility to complete, the example of these is a headspin. There are controversies between people who emphasize on style and power moves. One puts his emphasis on power moves and their combination and the other shows their style and individuality by footwork and freeze.

Today serious battles are usually held at organized breakdance events. The battles are usually part of a tournament style competition with cash prizes, or they are featured showcase battles, where each crew is paid to dance. Today's breakdancing styles which emphasize fast-paced, fluid floor moves and freezes, different from that of two decades ago, requires more freedom of movement in the upper body, so less baggy upper wear is more common today (though pants remain baggy).

When the fashion for breakdancing decreased it the whole culture seemed trashed by the media. But today the breakin' name has been cleared and is continuing regain its reputation as a respected dance form. Nowadays many b-boys from all over the world get together on annual B-boy events and keep the culture alive and even try to take it into next level.
</div>
<div> <img class="right" src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Downrock.jpg?1639357739125" alt="Floor RocKER" /> <span class="firstcharacter">I</span>n 1969, when James Brown was getting down with his big hit "Get on the Good Foot" the big dance style of the day appeared. This almost acrobatic dance became rather well known around New York City: kids in New York were doing the Good Foot - better known as B-Boy(the 'B' in b-boy usually doesn't correspond to a specific word, but most likely means "Boogaloo" or "Break") - which was the direct precursor to the sort of breakdancing we know today. As for origins it was the African people's dance culture which brought the heavy rhythm and the idea of dancing in a circle, but it was definitely a variety of influences that made up early B-Boying including gymnastics, Eastern martial arts, tap dance, Salsa, Afro-Cuban and Native American dances. One of the most influential dances was a South American martial arts/fighting dance known as the Capoeira. By the time the Good Foot became the new dance style, the tradition of dance battle was well established. Dancers would gather at places like Harlem World on 116th Street in Harlem and Battle-dancewise. Battles are covered in more detail in the section on battles, challenges, and contests, but the important thing is that Breakdancing was particularly well-suited for competition and it appealed to certain young men who were very athletic. The Good Foot, which was soon to be called B-Boy and shortly after that <a href="https://www.danceclass.com/breakdancing-music.html">Breakdancing</a>, or Breaking, was very different from the Breaking we see today. In some ways it was simpler. There were no headspins, no windmill, no handglides or backspins. It was what is now called old-style Breaking. It consisted only of floor work, involved some extremely complicated leg moves done very fast and in a way it was more complex than modern Breaking. Among those for whom old-style breaking was especially popular were many of the youths and street gangs that roamed the South Bronx. And it was in those streets that Breakdancing really started. Often, the best Breakers in opposing gangs would battle dancewise instead of fighting. A breakdancing battle is when dancers 'fight' against each other on the dance floor without contact. They form a circle and take turns trying to show each other up through better style, more complex move<img class="left" src="https://calisphere.org/clip/500x500/8db0bd01cab257a19ab8d35b5ffe8fba" alt="Floor RocKER" /> combinations, or tougher moves. Unfortunately, these Breaking battles did not always stop fight. In fact, they often would cause a fight, since dancers would sometimes get physical when they couldn't win dancewise. Some of these crews became very dedicated to their dancing, and since they had nothing better to do, would spend hours a day practicing, developing more and more complex moves, improving their form, and increasing their speed. And then Afrika Bambaataa came along - the legendary grand master D.J. who is the individual most responsible for the successful growth of Breakdancing as he saw a great potential in it. He started one of the first Breakdance crews, the Zulu Kings that won a lot of battles and talent shows and preformed in various clubs in New York. Old-style Breaking became past when based on the hit record "Freak Out" by the Shieks around 1979 and early 1980 a new Breakdance crew was organized - Rock Steady Crew (all original members were from Zulu Nation). They became famous doing dancing in clubs thanks to Bambaataa who encouraged them. Generally, a common feature of bboy music is the presence of a break which is looped several times by the dj. These were the days when "hip-hop culture" emerged: along with DJing, these "breakbeats" laid the foundation for the two more elements - MCing and <a href="http://www.thebreaksnz.com/201829188">B-Boying</a>. It became the MC's (Master of Ceremony) job to amuse, excite, and motivate the crowd to dance over the breakbeats. B-Boys were the ones who would dance or "freak out," "bust moves," and "go-off" on the dancefloor with their steps and freezes. These three elements along with graffiti art or writing are what make up the hip hop culture. <img class="right" src="http://cdn.simplesite.com/i/b0/4f/285697108068487088/i285697114316499638._szw480h1280_.jpg" alt="Floor RocKER" /> In the 1980s, with the help of pop culture and MTV, breakdancing made its way from the suburbs to the rest of the world as a new cultural phenomenon. The new style of dancing was different from the old: Rock Steady added a lot of acrobatic moves. And so around 1982 breaking became even more popular. Meanwhile, another dance was catching on: it was called the Robot. People started doing the Robot as early as 1969, but the dance really took off after Michael Jackson danced the Robot while singing "Dancin' Machine" on national TV. In 1983, movies like Flashdance and Buffalo Gals which featured the Rock Steady Crew broke the scene wide open when breaking could finally be scene internationally: the world went rap dance crazy. The nature of the dance was that it was improvised, never learned, so upon seeing these films, American kids immediately began making up their own breakdancing moves in basements across America. Michael Jackson's famous "moonwalk" and M.C.Hammer's pumped-up dance style are just improvised forms of breakdancing. Breakdancing has evolved into the dancing that is seen today in music videos and rap. Over the next few years, breakdancing became the trend. Some of the more famous crews were featured in movies, commercials and TV shows. When the Summer Olympics came to Los Angeles in 1984, the closing ceremonies featured a performance by over 100 B-Boys and B-Girls. So, prototypically the pioneers of breakdancing were young and of a lower socioeconomic class. The majorities of these were male, and most were Black or Hispanic, and lived in dense urban areas (mostly New York). Many of them were members of street gangs. Breakdancers typically wear low pants, T-shirts and a hat tipped sideways. They also wore nylon jumpsuits which were functional as well as fashionable. The slick surface allowed the breakdancer to slide on the floor much easier than if she or he had been wearing a cotton shirt. The dance must be done in sneakers, for the dancer's safety. Breakdancing is known as an especially dangerous sport for several reasons. It is not unusual for a dancer to get something caught, stubbed or stopped while moving in air. This dance is never done on a soft surface. Breakdancing includes moving the feet sideways and onto the toes, spinning on the knees, head, hands and elbows, mock fighting moves, and pantomime. <img class="left" src="https://www.danceclass.com/images/bboy_history.jpg" /> In its early form, breakdancing was divided into three distinct forms of dancing, breaking and popping. Today, each body movement has been classified into a distinct style or genre of breaking and is similar in principle to others but characteristically different. The most basic breakdance moves are the 6-step and toprock. The rest of the dance is founded around these two elements which are the base for other more complex moves to be formed, as well as power moves. After performing these elements breakdancer will usually end the dance with a 'freeze' which is when he contorts his body to a strange position and literally freezes, stopping all dance motion. The breakdancer will usually hold the freeze for a second or two. Breakdancers often call any dancing that takes place on the ground 'downrock' as opposed to uprock or toprock. There are some Power moves that often require incredible skill and flexibility to complete, the example of these is a headspin. There are controversies between people who emphasize on style and power moves. One puts his emphasis on power moves and their combination and the other shows their style and individuality by footwork and freeze. Today serious battles are usually held at organized breakdance events. The battles are usually part of a tournament style competition with cash prizes, or they are featured showcase battles, where each crew is paid to dance. Today's breakdancing styles which emphasize fast-paced, fluid floor moves and freezes, different from that of two decades ago, requires more freedom of movement in the upper body, so less baggy upper wear is more common today (though pants remain baggy). When the fashion for breakdancing decreased it the whole culture seemed trashed by the media. But today the breakin' name has been cleared and is continuing regain its reputation as a respected dance form. Nowadays many b-boys from all over the world get together on annual B-boy events and keep the culture alive and even try to take it into next level. </div>
<a href="http://www.hiphoparea.com/breakdance"> Taken from hiphoparea.cOm </a>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/AVZyNqDjgnI" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<iframe src="https://archive.org/embed/msdos_Simpsons_Arcade_Game_The_1991" width="100%" height="400" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/372194633&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/579369501&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/871426135&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308016226&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
<iframe width="100%" height="250" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1149243178&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169170570&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/223118835&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/982907785&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1039579195&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/843505996&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/843506050&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<span class="neonText">
One day my blog will `RETURN` `true` when run from the command line 
</span>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/vsfzAvOrjrc" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.discogs.com/qOEhIk9savxznlWZcbJucLdQ4pvaCoRFcIDiLwB0mE8/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyODIy/NTYtMTYzMzQ1NDE1/My0xNzY0LmpwZWc.jpeg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.discogs.com/qOEhIk9savxznlWZcbJucLdQ4pvaCoRFcIDiLwB0mE8/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyODIy/NTYtMTYzMzQ1NDE1/My0xNzY0LmpwZWc.jpeg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.discogs.com/jchhHhpFLNeVeKhk2SeAr1VEb120cgGkrJAvKGtdODs/rs:fit/g:sm/q:90/h:470/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyODIy/NTYtMTYzMzQ1NDE1/Ny0xNjU5LmpwZWc.jpeg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.discogs.com/jchhHhpFLNeVeKhk2SeAr1VEb120cgGkrJAvKGtdODs/rs:fit/g:sm/q:90/h:470/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyODIy/NTYtMTYzMzQ1NDE1/Ny0xNjU5LmpwZWc.jpeg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://img.discogs.com/PgzqBtQAG2NtHqHJ5tZoHfgwI0k=/fit-in/600x747/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11117067-1512383344-8255.jpeg.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://img.discogs.com/ZNl0MnC-zKNjDFtBcyLh79njUC8=/fit-in/600x527/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11117067-1510765865-7593.jpeg.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>



## #ZEXOR_WAS_MURDERED_LOOKiNG_FOR_HiS_FAMiLY
https://forum.12ozprophet.com/topic/88098-rip-zexor/
<iframe width="100%" height="315" src="https://www.youtube.com/embed/AT-Km8ToCGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
## ##DOPE_ASS_RESUMES
I'm always figuring out how to present myself online. $LiNKEDiN = UNHEALTHY
## GOOD_EXAMPLES_FROM = [ https://blog.hubspot.com/marketing/best-personal-websites ]
https://quinntonharris.mystrikingly.com/ 
http://brandoncjohnson.com/
http://www.garysheng.com/
http://www.garicruze.com/
https://melaniedaveid.com/
<iframe width="100%" height="315" src="https://www.youtube.com/embed/TG1CQF18uxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/Dt3Aj9p5KUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1224769615&color=%2392f8fa&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/luvenchanting" title="Enchanting" target="_blank" style="color: #cccccc; text-decoration: none;">Enchanting</a> · <a href="https://soundcloud.com/luvenchanting/take-it-back" title="Take It Back" target="_blank" style="color: #cccccc; text-decoration: none;">Take It Back</a></div>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/gnsqvz9iIlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<a href="https://www.roadandtrack.com/new-cars/news/a33293/how-to-make-a-dodge-challenger-hellcat-quicker-than-a-demon/"> <img src="https://hips.hearstapps.com/roa.h-cdn.co/assets/17/17/2560x1280/landscape-1493049234-dg016-065clq9tv22m8qdnc5i2cto9dvkunr6.jpg?resize=980:*" > </a>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1224900766&color=%23de8b80&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/kaliii" title="Kali" target="_blank" style="color: #cccccc; text-decoration: none;">Kali</a> · <a href="https://soundcloud.com/kaliii/track-1" title="Standards" target="_blank" style="color: #cccccc; text-decoration: none;">Standards</a></div>

## How to play games in the Internet Arcade
	
![AMON_TOBIN_SOLID_STEEL](https://ninjatune.net/images/releases/solid-steel-presents-amon-tobin-main.jpg)
![AMON_TOBIN##PERMUTATION##](https://f4.bcbits.com/img/a1983715436_10.jpg)
[DOWNLOAD_AMON_TOBIN_PERMUTATION_FROM_BANDCAMP](https://music.amontobin.com/album/permutation)
[Spiderman Cartoon-1967 Season 1 Episode 19]([https://youtu.be/aBzotaBgoRo)
[DELiRiUM:BY::##ELLiE_GOULDING## ##FAV_TRACK## ## ](https://youtu.be/cLWv0f2Tt8E) 
[DiSCOGS:##ENTRY](https://www.discogs.com/release/8118343-Ellie-Goulding-Delirium)
## #ZEXOR_WAS_MURDERED_LOOKiNG_FOR_HiS_FAMiLY
https://forum.12ozprophet.com/topic/88098-rip-zexor/
<iframe width="100%" height="315" src="https://www.youtube.com/embed/AT-Km8ToCGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<a href="https://www.youtube.com/c/TapeDeckWreck" target="_blank"> <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/Capture.PNG" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" > </a>	
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_cluster/bd_cluster_example1.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_aquatico/bd_aquatico_example1.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_supper/bd_supper_example1.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_supper/bd_supper_example5.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_apotheke/bd_apotheke_example1.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_rainbow/bd_rainbow_example3.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://www.typedifferent.com/fonts/bd_rainbow/bd_rainbow_example1.jpg" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://burodestruct.net/sites/default/files/styles/bd_wide_2x/public/bd_type1_car.jpg?itok=fr33wXWz" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://burodestruct.net/sites/default/files/styles/bd_wide_2x/public/bd_type1_grave.jpg?itok=zKHQ2_XK" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://burodestruct.net/sites/default/files/styles/bd_wide_2x/public/bd_type1_demo_tshirt2.jpg?itok=Z-FDybri" /> </a>
<a href="https:://typedifferent.com" target="_blank" ><img src="https://burodestruct.net/sites/default/files/styles/bd_wide_2x/public/bd_type1_demonstration.jpg?itok=CyDRb7ye" /> </a>
![NiRVANA_i_APOLOGiZE](https://pbs.twimg.com/media/ELGYaVYUUAIpygF?format=jpg&name=small)
[CSS Hovers and Rollovers](https://accessibility.psu.edu/css/rollovers/)
[Law – Unreleased Jungle Selection](https://www.youtube.com/watch?v=h7T8br7jO80)
[DJ SHARPEY presents, Route Into Darkness - Jungle DNB Mix | 1994 1995 | Vinyl Only](https://www.youtube.com/watch?v=VspuYfZcjQ4)
[1994 - 2004 Jungle / Drum & Bass Old Skool Mix (Mickey Beam)](https://www.youtube.com/watch?v=PCXuCLbFGo4)
[HOW_TO_PLAY_THESE_AWESOME_GAMES - TUTORiAL_HERE##CLiCK](https://armchairarcade.com/perspectives/2014/11/06/quick-guide-on-how-to-play-on-the-internet-arcade/)
<iframe src="https://archive.org/embed/arcade_nbajamte" width="" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<iframe src="https://archive.org/embed/arcade_720" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<iframe src="https://archive.org/embed/arcade_xmvsf" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<iframe src="https://archive.org/embed/arcade_souledge" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<iframe src="https://archive.org/embed/arcade_spidman" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<iframe src="https://archive.org/embed/arcade_archrivl" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/u6gk8JGkqlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/90375686&color=%23c9c7ca&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/johnedwardsullivan" title="John E. Sullivan" target="_blank" style="color: #cccccc; text-decoration: none;">John E. Sullivan</a> · <a href="https://soundcloud.com/johnedwardsullivan/tommy-wright-iii-ft-princess" title="Tommy Wright III Ft. Princess Loko- Still Pimpin" target="_blank" style="color: #cccccc; text-decoration: none;">Tommy Wright III Ft. Princess Loko- Still Pimpin</a></div>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/83443834&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/verycherry34" title="verycherry34" target="_blank" style="color: #cccccc; text-decoration: none;">verycherry34</a> · <a href="https://soundcloud.com/verycherry34/get-low-lil-jon" title="Get Low- Lil Jon" target="_blank" style="color: #cccccc; text-decoration: none;">Get Low- Lil Jon</a></div>


<div class="post-content">
	<h1>My Conversation with a Human Trafficker</h1>
	<figure class="kg-card kg-image-card kg-card-hascaption">
<iframe src="https://player.vimeo.com/video/396000267?h=9c3699c7fc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="1920" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Untitled"></iframe>
		<figcaption>ScreenCapture by <a href="#">Thaka##Rashard</a> / <a href="#">Selassie##Kelly</a></figcaption>
	</figure>
	<p> <a href="THE_##CRIME_SCENE##INSTAGRAM##ACCOUNT####MUNA_and_RASHARD##MISSING_PERSONS_DETAILS##WE_HAVE_SO_MUCH##PROOF##">https://www.instagram.com/muna_and_rashard/?hl=en</a>	
<a href="https://www.veoh.com/watch/v142164131xC426T7A">ANIME##_THIS_IS_HOW_MY_ASSASINATION_ATTEMPTS_GO##THAT_WAS_SARTU##</a>
<a href="https://www.statista.com/statistics/960103/ranking-of-most-used-online-video-platforms-in-sweden/"> Which platforms do you use to watch online video?</a>
	</p>
	<p>The Ethiopian wolf, Africa’s only wolf species, is under threat.
The Ethiopian wolf is the rarest and most endangered canid in the world — with only about 450 individuals remaining. They are restricted to seven isolated mountain enclaves in the highlands, and the two remaining strongholds for this iconic species occur in Bale Mountains National Park and Simien Mountains National Park.</p>
	<p>Main post content... lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat molestiae iure repudiandae explicabo labore harum eum recusandae a voluptatibus nesciunt qui commodi magnam, quaerat quis fuga veritatis molestias esse.</p>
</div>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/_woefU5WRVk" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<iframe src="https://player.vimeo.com/video/34994054?h=f303c16d3d&color=ff0179&title=0&byline=0&portrait=0" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/sLZYxhYqm7E" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/F01fzPwBwc4" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="//im.vsco.co/aws-us-west-2/12f8b0/56497/5fc45724e1ebb64f08283bf6/vsco5fc457261e48c.jpg?w=494&dpr=1" alt="Girl in a jacket" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="//im.vsco.co/aws-us-west-2/12f8b0/56497/5fc45724e1ebb64f08283bf6/vsco5fc457261e48c.jpg?w=494&dpr=1" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.discogs.com/XcQ4mmfG_TqfEuTztYQSCDpucZSVKdvDWb7BtCdroaA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjk5/NDI2LTE1MTM3MTA0/NTYtNjA4MC5qcGVn.jpeg" alt="Girl in a jacket" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://1.bp.blogspot.com/-juCnXjGLs_I/Xnlln2ceYjI/AAAAAAABWrQ/BPDRsc9j3B0InVUrlmm948S3QBjXKDneACLcBGAsYHQ/s1600/Deltron%2B3030%2BCMJ%2BNew%2BMusic%2BMonthly%2B2001%2BJanuary_000057.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="//im.vsco.co/aws-us-west-2/12f8b0/56497/5fc4bb251d78313c14000007/vsco5fc4bb27bbd2e.jpg?w=555&dpr=1" alt="Girl in a jacket" >
      </div>
    </div>
	  
    <div class='panelColumn'>
      <div class='rightColumn'>
	      <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/CHECKING_MY_EGO_AT_THE_DOOR.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
	        
      </div>
    </div>
  </div>
</div>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/QHIUvE-IUvI" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/y74cRJjDJtE" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/uozhx1xeTDg" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
<div class="post-content">
	<h1>Post title</h1>
	<!-- {{content}} would be here, example rendered below -->
	<figure class="kg-card kg-image-card kg-card-hascaption">
		<img src="https://www.cultofmac.com/wp-content/uploads/2016/08/tumblr_o860yvcIUg1rnoexwo1_1280.jpg" class="kg-image">
		<figcaption>Photo by <a href="#">Harley-Davidson</a> / <a href="#">Unsplash</a></figcaption>
	</figure>
	<p>Main post content... lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat molestiae iure repudiandae explicabo labore harum eum recusandae a voluptatibus nesciunt qui commodi magnam, quaerat quis fuga veritatis molestias esse.</p>
</div>

<p><a href="https://vimeo.com/396000267">Untitled</a> from <a href="https://vimeo.com/user4243921">opo1988</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
<div class="pinupGallery">
  <img class="pinupImage featured-pinupImage" src="https://i.pinimg.com/750x/3b/ff/81/3bff81a1208ad9bcdeb4a6db3faa2267.jpg" alt="">
  <img class="pinupImage" src="https://i.pinimg.com/750x/3b/ff/81/3bff81a1208ad9bcdeb4a6db3faa2267.jpg" alt="">
  <img class="pinupImage" src="https://i.pinimg.com/750x/3b/ff/81/3bff81a1208ad9bcdeb4a6db3faa2267.jpg" alt="">
  <img class="pinupImage" src="https://i.pinimg.com/750x/3b/ff/81/3bff81a1208ad9bcdeb4a6db3faa2267.jpg" alt="">
</div>
<div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <a href="https://www.youtube.com/watch?v=UAi1e7AoEWA"> <img src="https://www.victoriassecret.com/p/760x1013/tif/b2/9c/b29c194106fa4be6940fd09bc7a08f05/1117127818M2_OM_B.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <a href="https://youtu.be/UAi1e7AoEWA"> <img src="https://www.victoriassecret.com/p/760x1013/tif/78/64/7864d0e0f2e442e0a91ef4864fdfff81/1117127818M2_OM_F.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 </div>
</div>

<div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <a href="https://www.youtube.com/watch?v=UAi1e7AoEWA"> <img src="https://i.etsystatic.com/20347400/r/il/e67d19/2868035079/il_794xN.2868035079_ol8q.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <a href="https://youtu.be/UAi1e7AoEWA"> <img src="https://i.etsystatic.com/20347400/r/il/e67d19/2868035079/il_794xN.2868035079_ol8q.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 </div>
</div>



<div class="container">
  <h1 class="neonText"> 404 </h1>
  <h2 class="neonText">2005 - 2020</h2>
</div>
<div class='row'>
    <div class='column'>
      <div class='blue-column'>
        <img src="https://bglh-marketplace.com/wp-content/uploads/2016/12/Screen-Shot-2016-12-06-at-6.12.57-PM.png" alt="Girl in a jacket" >
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <img src="https://bglh-marketplace.com/wp-content/uploads/2016/12/Screen-Shot-2016-12-06-at-6.12.57-PM.png" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<img src="https://bglh-marketplace.com/wp-content/uploads/2016/12/Screen-Shot-2016-12-06-at-6.12.57-PM.png" alt="##DANCE411_IS_MY_HAREM##AND_ALL_THE_ONES_PRE_ERIKA_AND_POST_PROSTITUTION##TRIBAL_RIGHTS_ACT">
## PSYCHOLOGICAL_SEPARATION_USING_PADDING 
### I need to separate post and days cleanly... 
[padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top) [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
## HTML5 Video (w3SCHOOLS_eXAMPLE)
[Bare_Bones_HTML5 Video_Embed](https://www.w3schools.com/html/html5_video.asp)
[iFRAMES_HAVE_BEEN_DEPRECATED_FOR_YEARS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), IDK##Why_YouTube_and_ViMEO##iNSiST_OWN_USiNG_DEM_TiNGS?!?! My shit bout tah be clean! As I read the article <FRAME> not <iFRAME> is deprecated but the HTML5 <em> video </em> tag appears much more useful for my purposes.
	   {% highlight html %} <video controls preload="none"width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4">
      <source src="movie.ogg" type="video/ogg">
      <-- Your browser does not support the video tag. -->
    </video> {% endhighlight %} <em> Now i get it, [##ACCESSABILITY](https://www.w3.org/WAI/fundamentals/accessibility-intro/)they can access more users using an iframe... HTML5 is not going to be healthy with people accessing the content from older computers in poor regions where they may only have access to, for example Windows2000 and Internet Explorer 6... So, I need to do more research. Most people are on Mobile phones, however blog lovers often have a desktop, tablet, or laptop for reading and viewing information. ### HTML5 tEST -> [ALL_ABOUT_Que] https://youtu.be/wGAQNzCXX-c 
	
<video controls preload="none"width="50%" height="50%" style="clear:left; float: left" controls>
        <source src="https://mirkoreisser.de/wp-content/uploads/2022/03/NFT_DAIMforUkraine_ArtistForUkraine_2022_Preview.mp4">
      </video>

 ### SorryBabeDat_SHiTBROKE = [YouTube](did their research) Here is ya song... Thanks for making my day <3 <iframe width="100%" height="315" src="https://www.youtube.com/embed/Zh25aap8gH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ## Eric is helping me here [Eric_Meyer](https://github.com/meyerweb) got me interested in webdesign years ago with what I call his [ Nautilus design](https://meyerweb.com/eric/css/edge/complexspiral/glassy.html). I have always enjoyed graphic arts. After my mother and I were kidnapped, the home I grew up in with her sister and her kidnapper was stocked high with [National Geographic Magazines ](https://lifeasahuman.com/2015/media-tech/media/why-i-save-old-national-geographic-magazines/) and [ Watchtower and AWAKE Magazines](https://vatican.com/The-Americas-Watchtower-Magazines%e2%80%92-Jehovah-Witness/6633/502/4583/g17Watchtower%20Magazines-%20Jehovah%20Witness'e16'1/295/) and being from ##LOS_ANGELES I had a lot of exposure to [graffiti art](https://www.graffiti.org/) and my brothers were [Graffiti Writers](http://www.at149st.com/history.html). So when I got my first exposure to the web in 1997, I wanted in, but had no Idea what to do. After two to three years of infreaquent browsing due to the rarity and scarcity of computers, much less computers with internet connections [SCAD opened its library to the public](https://www.scad.edu/life/buildings-and-facilities/jen-library) and while I wanted to go for graphic design, my foster parents could not affor it. It was about $100,000 for a ##GRAPHIC_DESIGN_DEGREE. ##WiLLiE_KELLY_JR_MY_KIDNAPPER only made around $35,000 a year. Even if he would pay for college it was not even worth asking and SCAD had noprograms for local residents. Eric's Design looked incredible on the library's [Bondi Blue First Generation iMACS](https://everymac.com/systems/apple/imac/specs/imac_ab.html). That machine was like $1,300 so I could never get one on my own... I struggled to get [The Original Playstation in 1995](https://www.britannica.com/topic/PlayStation), it was only $300. I have never had a new computer of my own. I did use them in corporate... I in someways worked for new computers for years while dealing with ##East_AFRICAN_ISSUES. THis codeblock will according to Eric, make my site more readable across more platforms >>> {% highlight css %} /* <-- Begin #ERiC_MEYERS_CSS_TOOLS */ /* <-- Begin #ERiC_MEYERS_CSS_TOOL */ /* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 License: none (public domain) */ html { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; } /* HTML5 display-role reset for older browsers */ article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; } body { line-height: 1; } ol, ul { list-style: none; } blockquote, q { quotes: none; } blockquote:before, blockquote:after, q:before, q:after { content: '' ; content: none; } table { border-collapse: collapse; border-spacing: 0; } /* <-- end #ERiC_MEYERS_CSS_RESET_TOOL */ {% endhighlight %} 
 
 # Saturday, November 27th  
    <p>&#x1F525 &#x1F525 &#x1F525 &#x1F525 &#x1F525 </p>
<img src="http://static1.squarespace.com/static/56858337cbced60d3b293aef/568d70177086d7180fc3bbe5/5e7be917ca3a9d59fc74689c/1655723593702/Albumism_OlDirtyBastard_ReturnToThe36Chambers_MainImage_2x1.jpg" >
<iframe width="100%" height="315" src="https://www.youtube.com/embed/HqylXv4Usn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
	
## SOMETYPE_OF_WAY_I_WILL_END_UP_SOMEWHERE_I_BELONG(damn... #iym_hella_emo_today) 
	
<iframe width="100%" height="315" src="https://www.youtube.com/embed/-KKbdErJkiY" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/zsCD5XCu6CM" title="YouTube video player" frameborder="0" allowfullscreen></iframe> 
 ## ##LiNKiN_PARK_NAWT_LiNKEDiN_ERiKA 
<div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
        <img src="https://i.pinimg.com/736x/eb/ac/4e/ebac4e41a7ddf7460dba012f67b69765.jpg" alt="Girl in a jacket" > https://www.youtube.com/watch?v=H5O9rd9NuMg&t=2s
https://www.youtube.com/watch?v=Ttb8tcdE0PA&t=786s
https://www.youtube.com/watch?v=x827FWFWGi8
https://www.youtube.com/watch?v=ecFE-WOJLxA
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <img src="https://i.pinimg.com/736x/eb/ac/4e/ebac4e41a7ddf7460dba012f67b69765.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
															      
[ ##voyeurism##_OUT_IN_THe_OPEN_ON_YOUTUBE##MY_FAMILY_HAS_THIS_ISSUE## :^( ](https://www.youtube.com/watch?v=oETVDKbThcE)
<a href="https://youtu.be/C6fEKP_tlC8"> <img class="bwtocolor" src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/SAA2%23%23SARTUZEE%23%23ART.jpg" alt="##ELLA_FITZGERALD##_and_##LOUiE_ARMSTROG##" > </a>
<span class="neonText">
 ##WH0L34LBUM##PORGY&BESS##LOUiS&ELLA##JAZZ##VOCAL##SOUNDTRACK##!
 ##CLICK_THE_IMAGE_OF_AFFECTION_TO_WATCH##ROMANCE##
 <> span </span>
<a href="https://www.youtube.com/watch?v=YIdrZxaP-gE"> <img class="bwtocolor" src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/porgy_and_bess_still_splash.jpg" alt="##DORTHY_DANDRIDGE##_and_##SIDNEY_POTIER##" > </a>

<div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <a href="https://www.youtube.com/watch?v=ARtRsMnTqQc"> <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/WEenNWEE.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <a href="https://youtu.be/ZmPfxMBNilg"> <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/WEenNWEE.jpg" alt="Girl in a jacket" > </a>
 </div>
 </div>
 </div>
</div>
<div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <a href="https://youtu.be/NZ3kfDBAJWc"> 
<img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/ea067fa2ad50680d5a38a2503aab94d1473f7925/img/IMG_3904_800x.jpg" alt="Porgy & Bess" > </a>
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <a href="https://youtu.be/-DR6cXAa-Ek"> <img src="https://raw.githubusercontent.com/ThakaRashard/holetoanotheruniverse/gh-pages/img/porgy-and-bess-w-louis-armstrong.jpg" alt="##ELLA_FITZGERALD##_and_##LOUiE_ARMSTROG##" > </a>
 </div>
 </div>
<div class="row">
    <div class="column">
      <div class="blue-column">
        <img src="https://mirkoreisser.de/wp-content/uploads/2022/03/DAIMforUkraine_ArtistsForUkraine_2-scaled.jpg" alt="##MY_HAS_BEEN_SPOTTED_ON_8TH_STREET_IN_LOS_ANGELES##PROSTITUTED##SHE_IS_MISSING">
      </div>
    </div>
    <div class="column">
      <div class="green-column">
        <img src="https://mirkoreisser.de/wp-content/uploads/2022/03/DAIMforUkraine_ArtistsForUkraine_2-scaled.jpg" alt="##MY_HAS_BEEN_SPOTTED_ON_8TH_STREET_IN_LOS_ANGELES##PROSTITUTED##SHE_IS_MISSING">
      </div>
    </div>
 <div class="column">
      <div class="blue-column">
        <img src="https://mirkoreisser.de/wp-content/uploads/2022/03/DAIMforUkraine_ArtistsForUkraine_2-scaled.jpg" alt="##MY_HAS_BEEN_SPOTTED_ON_8TH_STREET_IN_LOS_ANGELES##PROSTITUTED##SHE_IS_MISSING">
      </div>
    </div>	
  </div>

<a alt="DREEZY_IS_HIS_WIFE" href="https://i.scdn.co/image/ab67616d0000b273a02c33fd1684b4292e4724ca"  target="_blank" > <img src="https://i.scdn.co/image/ab67616d0000b273a02c33fd1684b4292e4724ca" > </a>

<iframe height="300px" style="width: 100%;" scrolling="no" title="Pure CSS 3D Synthesizer (mousedown for rotation)" src="https://codepen.io/suez/embed/GJKRPN?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/suez/pen/GJKRPN">
  Pure CSS 3D Synthesizer (mousedown for rotation)</a> by Nikolay Talanov (<a href="https://codepen.io/suez">@suez</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<div class="row">
    <div class="column">
      <div class="blue-column">
        <img src="https://i.pinimg.com/750x/37/a7/21/37a721ea1aa585febee94082f1236931.jpg" alt="##MY_HAS_BEEN_SPOTTED_ON_8TH_STREET_IN_LOS_ANGELES##PROSTITUTED##SHE_IS_MISSING">
      </div>
    </div>
    <div class="column">
      <div class="green-column">
        <img src="https://i.pinimg.com/750x/37/a7/21/37a721ea1aa585febee94082f1236931.jpg" alt="##MY_HAS_BEEN_SPOTTED_ON_8TH_STREET_IN_LOS_ANGELES##PROSTITUTED##SHE_IS_MISSING">
      </div>
    </div>
 <div class="column">
      <div class="blue-column">
        <img src="https://i.pinimg.com/750x/37/a7/21/37a721ea1aa585febee94082f1236931.jpg" alt="##MY_HAS_BEEN_SPOTTED_ON_8TH_STREET_IN_LOS_ANGELES##PROSTITUTED##SHE_IS_MISSING">
      </div>
    </div>	
  </div>
<h2 class="neonText"> Its been a day since I have seen our daughter ##CORAL_IRIS_KELLY. </h2> 
Her mother mother Erika Renee Kelly was kidnapped on Feb 2,2020. A local Atlanta Matt Field bragged about it on Facebook stating "I_SOLD_HER. I found her near Venice beach California and my tattooist Kennie_Davis of ##Jolly_Roger_Tattoo in _Stockbridge#Georgia was not too far from the scene. Erika and I were not estranged when she disappeared as [ESSENCE_MAGAZiNE_STATED](https://www.essence.com/news/erika-kelly-missing-atlanta-georgia/) we were coparenting. I was laid off from my IT job at [Ionic Security](https://www.linkedin.com/company/ionic-security) after my work was repeatedly sabotaged by my manager. I opened a case with ##Fulton_County_Family_Services two months before our eviction from our ##East_Atlanta_Home_at_631_Moreland_Ave_in_Atlanta_Georgia they failed to process us after repeated visits and calls. I took odd jobs and even scored a mural gig with [Mercedes_BenZ_Stadium](https://mercedesbenzstadium.com/) for the [Atlanta_Falcons](https://www.atlantafalcons.com/). They paid me $1500 for a 40ft graffiti mural on red canvas for former athlete ##Deion_Sanders. I was severely underpaid but it covered the rent for one more month. I moved in with Constancia and her daughter ##Akeeva, got Coral in school at [Chapel Hill Elementary](https://www.chapelhilles.dekalb.k12.ga.us/) and worked hard to get a new 9-5.
 
Constancia did not like me or Coral living with her and Akeeva so they undercut me with accusations of erratic behavior and started thier own dfacs case accusing me of schizophrenia. I had no income and was repeatedly denied foodstamps and welfare by a woman named ##DANIELLE_MASHONGA_and_her_colleage##MANESSA_WARNER... ##Coral would ask <h2>##Where_is_mommy?!?</h2>I told her that Matt stole and raped her and she needs our help, so we have to keep looking. Constancia and Akeeva constantly defended Matt. He is a known pedophile and child and adult rapist in the Atlanta art community. I did not know this. We shopped at the same record store and he often offered me work. I loath rapist. I loath pedophilia. Once I learned of his ways I distanced myself. So ##Erikas_mother_and_sisters_DEFENDING_HIM, struck me as bizarre. "##Its_just_a_white_boy_joke##He_didnt_sell_her. [DFACS](https://dfcs.georgia.gov/) stalked me on Facebook and indirectly accused me of ##CHILD_MOLESTATION for a video where we were playing with a wand style muscle massager, it was innocent.  They [forcibly removed Coral](https://www.youtube.com/watch?v=AmYdIZhahrQ) saying that I was saying ["inappropriate things"](https://www.youtube.com/watch?v=9sCE3HhjSbY) and violating her by saying that her mom had been raped and kidnapped. I learned that telling Coral the ugly truth was the best way to keep a solid trust filled relationship with her.
 
In the DFACS meeting, puzzled I told Mashonga the truth, I cant find work, my reputation was being sabotaged and I could not even get a job at ##Kroger the local grocery store. I told Mashonga I needed money for food, Constancia would not feed niether me or Coral. I asked Mashonga in [This_Family_Meeting](https://www.youtube.com/watch?v=Q8NXhT6_Tx8) if she cared about me dying on the street and she shook her head, no. I was never interviewed with Coral at all, I never got a psych eval until I got to a ##UCLA_Recoup_Center_in_PalmDale_California.
 
In early October I saw Coral, in Pasadena, ##California, with a grown man wearing fishnet stockings... Shes 9. I was shot with a poison dart one day later, my skateboard stolen and my foot began to swell larger that a shoe could fit... I was rushed to the emergency room and ##UCLA ##Cut_my_foot_to_the_bone_to_drain_the_infection...
<a href="https://vimeo.com/396000267" target="_blank" >WHiTESUPREMACY</a><a href="https://vimeo.com/396000267" target="_blank" >WHiTESUPREMACY</a> <a href="https://vimeo.com/396000267" target="_blank" >WHiTESUPREMACY</a><a href="https://vimeo.com/396000267" target="_blank" >WHiTESUPREMACY</a>
<iframe title="vimeo-player" src="https://player.vimeo.com/video/651386804?h=79c650eb04" width="100%" height="360" frameborder="0" allowfullscreen></iframe>
	
	[THE_HACKER_ODYESSEY_et_SUM_PDF_LiBRARAAAY](https://vdoc.pub/documents/the-best-of-2600-a-hacker-odyssey-74jetbvnnlh0#)

<div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
        <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2017107/rs_1080x1080-171107190450-23279723_777542925770459_8932444824968101888_n.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top" alt="Girl in a jacket" >
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <img src="https://i.pinimg.com/564x/87/c2/37/87c237ef7511042953d3d58f8af4d6c8.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
<div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
        <img src="https://i.pinimg.com/564x/df/7e/8c/df7e8c8a4889b261be9d9da5ae00d9fb.jpg" alt="Girl in a jacket" >
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <img src="https://i.pinimg.com/564x/df/7e/8c/df7e8c8a4889b261be9d9da5ae00d9fb.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<a href="https://www.deviantart.com/sachsen">##CHECK_OUT_SACHSEN_ON_DEVIANT_ART</a> <em>Try to click on it.</em>
  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
        <a href="https://www.deviantart.com/sachsen/art/Afro-Brain-114793112"><img src="https://i.pinimg.com/564x/0c/3e/33/0c3e3331ea6f7c6fe47d8d200b7ff47d.jpg" alt="##TO_MY_DEAR_SELASSIE_WOMEN##SARTU##SAATU#MUNA##QUBUXE##LAHLEEBELLAH##SUMMER_and_HEATHER##BHATI##CYNTHIA_and_VAL_wit_DA_BREAD_IN_DAH_OVEN!" ></a>
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <a href="https://www.deviantart.com/sachsen/art/Afro-Brain-114793112"><img src="https://i.pinimg.com/564x/0c/3e/33/0c3e3331ea6f7c6fe47d8d200b7ff47d.jpg" alt="##TO_MY_DEAR_SELASSIE_WOMEN##SARTU##SAATU#MUNA##QUBUXE##LAHLEEBELLAH##SUMMER_and_HEATHER##BHATI##CYNTHIA_and_VAL_wit_DA_BREAD_IN_DAH_OVEN!" ></a>
      </div>
    </div>
  </div>
</div>
<div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
        <img src="https://i.pinimg.com/564x/8a/6f/62/8a6f6232a31191619856168f186f0904.jpg" alt="Girl in a jacket" >
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <img src="https://i.pinimg.com/564x/8a/6f/62/8a6f6232a31191619856168f186f0904.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
	  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
        <img src="https://i.pinimg.com/564x/8a/6f/62/8a6f6232a31191619856168f186f0904.jpg" alt="Girl in a jacket" >
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <img src="https://i.pinimg.com/564x/8a/6f/62/8a6f6232a31191619856168f186f0904.jpg" alt="Girl in a jacket" >
      </div>

    
  </div>
</div>
<img src="https://www.game-ost.com/static/covers_soundtracks/1/6/16259_729679.jpg">
<img src="https://f4.bcbits.com/img/a0191890494_10.jpg" alt="Out From Out Where by Amon Tobin">

 <div class='row'>
    <div class='column'>
      <div class='blue-column'>
        <img src="https://i.pinimg.com/564x/65/5b/a4/655ba4cb6e341f9fda1a7bdddd2077df.jpg" alt="Girl in a jacket" >
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <img src="https://i.pinimg.com/564x/b9/ee/08/b9ee0813b77317a011c579c1474adb83.jpg" alt="Girl in a jacket" >
      </div>
    </div>
 <div class='column'>
      <div class='blue-column'>
        <img src="https://i.pinimg.com/564x/59/8c/52/598c5256f48e182e0dd034e2f8e875ae.jpg" alt="Girl in a jacket" >
      </div>
    </div>	
  </div>

[The U.S. National Archives ](https://www.flickr.com/photos/35740357@N03/)
<span class="neonText">
 #somalisong #Oromogirl #quxubesero
</span>
<a herf="https://www.youtube.com/watch?v=mmkdRG7MQm4" >  <img src="https://www.game-ost.com/static/covers_soundtracks/1/6/16259_729679.jpg" > </a>
<a href="https://music.amontobin.com/album/out-from-out-where" alt="##AMON_TOBiNs##BANDCAMP##PURCHASE_HERE_SO_HE_CAN_BUY_A_SMOOTHIE" ><img src="https://f4.bcbits.com/img/a0191890494_10.jpg" alt="Out From Out Where by Amon Tobin" ></a>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197308361&color=%23d4d4cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34769516&color=%23c8acac&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34769517&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://m.media-amazon.com/images/I/81lNOB9LbfL._SS500_.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://direct.rhapsody.com/imageserver/images/alb.304480118/500x500.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div class="gallery">
  <img class="image featured-image" src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SENORKAOS.jpg" alt="">
  <img class="image" src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SENORKAOS.jpg" alt="">
  <img class="image" src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SENORKAOS.jpg" alt="">
  <img class="image" src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SENORKAOS.jpg" alt="">
</div>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1298232526&color=%23e0dad0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/8583021&color=%23d4cacd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<div id="neonText">
<span class="neonText"> Can Class Action Lawsuits Be Brought in Sexual Abuse Cases? </span>
 </div>
 
<span class="firstcharacter">When</span>there are multiple individuals affected by the single or group of abusers in sexual crimes, it is sometimes possible to initiate a class action lawsuit when the statute of limitations does not pass. It is important that the victims band together and provide incontrovertible evidence to increase the strength of the claim.
<ul>
 <li><a href="https://www.hg.org/legal-articles/can-class-action-lawsuits-be-brought-in-sexual-abuse-cases-49735">DEAR_SARTU##DEAR_ERIKA##DEAR_MUNA##DEAR_LEELAHBAELAH##DEAR_LAREN##DEAR_LAURA##DEAR_RIHANNA##DEAT_SUMMER</a></li>
 <li><a href="##HOW_CAN_I_SAY_THIS##LETS_FIGHT_##DFACS##TO##GET_##CoRAL_aka_LARoC##BACK">https://www.hg.org/legal-articles/prostitution-in-the-united-states-30997</a></li>
 <li><a href="https://www.instagram.com/muna_and_rashard/"> THE_##CRIME_SCENE##INSTAGRAM##ACCOUNT####MUNA_and_RASHARD##MISSING_PERSONS_DETAILS##WE_HAVE_SO_MUCH##PROOF## </a></li>
</ul>
 <div class='some-page-wrapper'>
 <div class='row'>
 <div class='column'>
 <div class='blue-column'>
 <img src="https://i.pinimg.com/564x/cc/72/61/cc7261bf1160fe8cdfb95aaf88d4c8c1.jpg" alt="Girl in a jacket" >
 </div>
 </div>
 <div class='column'>
 <div class='green-column'>
 <img src="https://i.pinimg.com/564x/cc/72/61/cc7261bf1160fe8cdfb95aaf88d4c8c1.jpg" alt="Girl in a jacket" >
 </div>
 </div>
 </div>
</div>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>

<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>

		<span class="neonText">
 #BELL_LABS####SAATU_IS_MY_WIFE##ASWELL_AS_ERIKA_MUNA_QUXUBE_AND_LAUREN_LAURA_TOO_AND_HEATHER
</span>
		{% highlight ruby %}
1 # HOLE_TO_ANOTHER_UNiVERSE##############################
2 # TO####################################################
3 # ANOTHER###############################################
4 # UNiVERSE##############################################
{% endhighlight %}

---
layout: default
---

Text can be **bold**, _italic_, ~~strikethrough~~ or `keyword`.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
