---
title: BubbleGumPop00
published: true
---


<style>
    @import "rouge-base16-dark";
@import "default_colors";

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
  font-family: -apple-system, Ubuntu, "Ariel Black", Verdana;
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
  font-family: -apple-system, Ubuntu, "Ariel Black", Verdana;
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
  content: "./BUBBLEGUMPOP ";
  font-size: 24px;
}

header h2 {
  font-size: 18px;
  font-weight: 300;
  color: rgb(255, 254, 254);
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
  font-family: -apple-system, Ubuntu, "Ariel Black", Verdana;
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
  border-radius: 50px;
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
</style>


[The Smashing Pumpkins - Bullet with Butterfly Wings (Official Music Video)](https://www.youtube.com/watch?v=8-r-V0uK4u0)
[Smashing Pumpkins - 1979](https://www.youtube.com/watch?v=Lr58WHo2ndM)
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/3rd_or_4th_century_CE_Kamasutra%2C_Vatsyayana%2C_13th-century_Jayamangala_commentary_of_Yashodhara%2C_Bendall_purchase_1885CE_in_Nepal%2C_Sanskrit%2C_Devanagari%2C_verso_side_9th_folio.jpg/1024px-thumbnail.jpg">

  <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/video/NORMANiFAiRBG.gif">
<h2> Normani_my_WiFE featuring my wife_Cardi_B::WiLDSiDE </h2>

  <video controls preload="none"controls width="100%" loop >
     <source src="https://github.com/ThakaRashard/bubblegumpop/raw/gh-pages/video/NormaniWildSideOfficialVideoftCardiB.mp4" type="video/mp4">

   </video>
<h2><a href="https://www.discogs.com/release/7597003-Time-Machine-Slow-Your-Roll">  <em> TiME_MACHiNE::THE_WAY_THiNGS_ARE ##SOUTHERN_CALi_CLASSiKS</em> </a> </h2>
<audio controls class="broken-width">
  <source src="https://github.com/ThakaRashard/bubblegumpop/raw/gh-pages/video/Time%20MachineTheWayThingsAre.mp3" type="audio/mp3" />

  Your browser does not support the <code>audio</code> element.
</audio>

<h2><a href="https://www.discogs.com/release/650083-Krondon-The-Rules">  <em> Krondon: THE_RULES ##SOUTHERN_CALi_CLASSiKS</em> </a> </h2>
<audio controls class="broken-width">
  <source src="https://github.com/ThakaRashard/bubblegumpop/raw/gh-pages/video/Krondon_The%20Rules128kbpsMP3.mp3" type="audio/mp3" />

  Your browser does not support the <code>audio</code> element.
</audio>

<h2> LiGHTSKiNKEiSHA_my_WiFE - FDH </h2>

  <video controls preload="none"controls width="100%" >
     <source src="https://github.com/ThakaRashard/bubblegumpop/raw/gh-pages/video/FDH_LSK.mp4" type="video/mp4">

   </video>

<div class="panel4-container">
   
  <div class="item1"><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/LiGHTSKiNKiESHA3.jpg"></div>
  <div class="item2"><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/LiGHTSKiNKiESHA3.jpg"></div>
  <div class="item3"><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/LiGHTSKiNKiESHA3.jpg"></div>
  <div class="item4"><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/LiGHTSKiNKiESHA3.jpg"></div>

</div>
<h2><a href="https://soundcloud.com/user-573853428">  <em> Mulatto Saweetie Trina - B-tch From Da Souf</em> </a> </h2>
<audio controls class="broken-width">
  <source src="https://github.com/ThakaRashard/bubblegumpop/raw/gh-pages/audio/MulattoSaweetieTrinaBtchFromDaSouf.mp3" type="audio/mp3" />

  Your browser does not support the <code>audio</code> element.
</audio>





<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Basic_usage -->

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
        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/LiGHTSKiNKiESHA5.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/LiGHTSKiNKiESHA5.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
  </div>
 </div>
 <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/so_so_def_bass_all_stars__vol__2_album_insert_by_eppsart_dc0sps0-fullview.jpg" >
<img style="float:right; width:100%; height:100%;" alt="Girl in a jacket" src="https://upload.wikimedia.org/wikipedia/commons/0/03/Emoji_u1f4af.svg">


[Fixed gradient background with css](https://stackoverflow.com/questions/18094134/fixed-gradient-background-with-css)

<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fmrconcept%2Fdj-rectangle-vinyl-combat-vol1%2F" frameborder="0" ></iframe>
<img src="https://i.pinimg.com/originals/03/e4/89/03e489323702c40bc9dcb3fa2e0f6e10.gif" alt="Avatar" class="image">
<iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fmrconcept%2Fthe-world-famous-beat-junkies-vol1-dj-babu-1997%2F" frameborder="0" ></iframe>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/8583021&color=%23b89c5c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

<div class="panel4-container">
   
  <div class="item1"><img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/SARTUZALAH_RESTORED_TO_NORMANi_ViA_SARTU_FORWARDS.gif"></div>
  <div class="item2"><img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/SARTUZALAH_RESTORED_TO_NORMANi_ViA_SARTU_REVERSE.gif"></div>
  <div class="item3"><img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/SARTUZALAH_RESTORED_TO_NORMANi_ViA_SARTU_REVERSE.gif"></div>
  <div class="item4"><img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/SARTUZALAH_RESTORED_TO_NORMANi_ViA_SARTU_FORWARDS.gif"></div>

</div>

<img src="https://typedifferent.com/fonts/bd_geminis/bd_geminis_example3.jpg" >
<img src="https://typedifferent.com/fonts/bd_geminis/bd_geminis_example2.jpg" >
<img src="https://typedifferent.com/fonts/bd_geminis/bd_geminis_example1.jpg" >


## ANiMAL_FARM##ANiMATED##1954 
[Animal Farm 1954](https://www.youtube.com/watch?v=XXkicQRl6vg)


<img src="https://nervousnyc.com/wp-content/uploads/2021/10/tote.jpg">


[Nervous_Records classic mix](https://www.youtube.com/watch?v=h_MnOwMfDEQ)  
[Kerri Chandler - BBC Radio 1 Dance Presents Nervous Records 11 09 2021](https://www.youtube.com/watch?v=BqpRYEk1fpA)
[90 S OLD SCHOOL DEEP HOUSE MIX NERVOUS RECORDS FREE DOWNLOAD](https://www.youtube.com/watch?v=KSh1PQQL2sQ)
[DJ Vex Presents Nervous Records 90's N.Y. House Jam (Part 1)](https://www.youtube.com/watch?v=oIbhyQKqdmk)
[DJ Vex - Masters At Work: Old School NYC House Jam [1989/1993]](https://www.youtube.com/watch?v=lugSeWt50wY)
[Frankski V103 FM Baltimore, Maryland, July 1987 (Highlights)](https://www.youtube.com/watch?v=NX7zS_GRX14)
[Nervous_Records_NYC](https nervousnyc.com)
[THE BEST FREESTYLE MIXMASTER MEGAMIX 2 {DJ PINOCHIO}](https://www.youtube.com/watch?v=65e1kqisNQw)


[GROVERWASHiNTON_MASTERPEiCE](https://youtu.be/zbZwqGqSCS4)
[SLAVE-WATCHiNG_YOU](https://youtu.be/xkI_yIhIk1c)
[SLAVE-JUSTA_A_TOUCH_OF_LOVE](https://youtu.be/F1czSmdfcTk)
[Tom Browne - Funkin' for Jamaica](https://youtu.be/XYclWyC4qQo)
[Gladys Knight & The Pips - Save the Overtime Four_Me](https://youtu.be/Y36aBTuRr1o)
[Brothers Johnson - StrawberryLetter23 1977](https://youtu.be/f0bdLdTJdKI)
[LOOSE_ENDS HANGiN_ON_A_STRiNG](https://youtu.be/nP9zoP3km7g)
[I Can't Go for That ](https://youtu.be/Ry04tCx4Bqw)
[KASiF - I Just Gotta Have You](https://youtu.be/2hNxvL4vjqo)
[KASiF - STONE_LOVE](https://youtu.be/IQGEn2qernc)
[THE_SPiNNERS Could It Be I'm Falling in Love](https://youtu.be/NaMmX7OCyCA)
[RONNiE_LAWS - FRiENDS_and_STRANGERS](https://youtu.be/nRCun0fCr_U)
[RONNiE_LAWS - LiFE_iN_PARADiSE](https://youtu.be/gm32Ev5muTU)
[RONNiE_LAWS - ALWAYS_THERE](https://youtu.be/w7jjO5QuesU)
[RONNiE_LAWS - ALL_FOR_YOU](https://youtu.be/by2u7frqoeA)
[RONNiE_LAWS - FLAME](https://youtu.be/-1K8rFKk7zc)
[Surface - Only you can Make me Happy](https://youtu.be/tlaAMMaTs58)
[CAMEO - Attack Me With Your Love](https://youtu.be/U4fkI6Wg06I)
[Love Come Down (12" Version) (Remastered) · Evelyn "Champagne" King](https://youtu.be/TJdM9dazxQo)
[James Brown - Mind Power - 1973](https://www.youtube.com/watch?v=yeTP6qsu0Bo)
It takes MiND_POWER to DEAL_WiT_STARVATiON - <a href="https://en.wikipedia.org/wiki/James_Brown">James Brown</a>

## GOOD_QUARANTiNE_MOViE
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://th.bing.com/th/id/OIP.mpEivFuUyhn_yUGzVm0megHaLF?pid=ImgDet&rs=1" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAYMacross - Do You Remember Love ?" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://th.bing.com/th/id/OIP.mpEivFuUyhn_yUGzVm0megHaLF?pid=ImgDet&rs=1" alt="Macross - Do You Remember Love ?" > 
      </div>
    </div>
  </div>
</div>
<a href="https://youtu.be/5HkBxcJJ2cE">Grave of the fireflies ENGLiSH_DUB find it with subtitles in Japanese at somepoint the emotions are more on point... Great english dub tho! </a>
<a href="https://www.youtube.com/watch?v=SQNWBxNSJ4w">The Tragic Innocence of Grave of The Fireflies | BONUS_FEATURE </a>

<div class="pinupGallery">
  <img class="pinupImage featured-pinupImage" src="https://i.pinimg.com/750x/9d/fd/e1/9dfde147d7a2b0f01c64d691c3d62e2f.jpg" alt="">
  <img class="pinupImage" src="https://i.pinimg.com/750x/9d/fd/e1/9dfde147d7a2b0f01c64d691c3d62e2f.jpg" alt="">
  <img class="pinupImage" src="https://i.pinimg.com/750x/9d/fd/e1/9dfde147d7a2b0f01c64d691c3d62e2f.jpg" alt="">
  <img class="pinupImage" src="https://i.pinimg.com/750x/9d/fd/e1/9dfde147d7a2b0f01c64d691c3d62e2f.jpg" alt="">
</div>

[Mahmoud Ahmed With Roha Band (1986)](https://www.youtube.com/watch?v=1o-kDk-O1H8)

## DEAR_SARTU ::PLEASE_LiSTEN_iLOVEYOU
## EVERYTHiNG_REMAiNS_RAW
## DEAR_CYNTHiA WORKABLE_LIST_FOR_FATHER_DAUGHTER_BONDiNG
## DEAR_CORAL ##JUS_LiSTN

[Beastie Boys - Alive](https://youtu.be/JkeE2O15RFs) [Beastie Boys - Root Down](https://youtu.be/Xf1YF_MH1xc) [Beastie Boys - Shake Your Rump](https://youtu.be/BptQHAW2T5M) [Busta Rhymes ‎- Woo-Hah!! Got You All In Check from the album "The Coming" (1996) ](https://youtu.be/EQzvQO2LcA4)
[Beastie Boys - Body Movin::HELLO_NASTY::](https://www.youtube.com/watch?v=4ItdKOXH3qA) [Beastie Boys - So What'Cha Want](https://youtu.be/ru3gH27Fn6E) [DEAR_JABDU - ENJOY_THiS_TRACK_WiTH_CORAL Björk::Enjoy::Post](https://www.youtube.com/watch?v=RYmyfksGA74)
[Tears For Fears - Sowing The Seeds Of Love](https://www.youtube.com/watch?v=VAtGOESO7W8) [Mr. Mister - Broken Wings](https://www.youtube.com/watch?v=nKhN1t_7PEY)[Nija - Not One Of Them](https://www.youtube.com/watch?v=1Xc4ZAWj06g) [Men At Work - Who Can It Be Now?](https://www.youtube.com/watch?v=SECVGN4Bsgg) [Artifacts - Wrong Side Of Da Tracks](https://www.youtube.com/watch?v=GM92f-BUoow) [M.I.A. - Go Off](https://www.youtube.com/watch?v=kGDhHxgY6uo) [Lorde - Team](https://www.youtube.com/watch?v=f2JuxM-snGc) [Grimes - World Princess Part II](https://www.youtube.com/watch?v=EOwhuTlxE54) [Lorde - Tennis Court](https://www.youtube.com/watch?v=D8Ymd-OCucs) [Lorde - Royals](https://www.youtube.com/watch?v=nlcIKh6sBtc) [a-ha - Take On Me](https://www.youtube.com/watch?v=djV11Xbc914) [Michael Jackson - Smooth Criminal](https://www.youtube.com/watch?v=h_D3VFfhvs4) [Janet Jackson - Empty / Full](https://www.youtube.com/watch?v=q37CHEMiXi4) &#128293; [M.I.A. - Matahdatah Scroll 01 "Broader Than A Border"](https://www.youtube.com/watch?v=SJuFdkMOP20) &#128293; [Disclosure - Magnets ft. Lorde](https://www.youtube.com/watch?v=b_KfnGBtVeA) [GRiMES - Realiti](https://www.youtube.com/watch?v=BOxFvfjlnno) 
[The Jones Girls - Nights Over Egypt ](https://www.youtube.com/watch?v=pzxwZ6wjDAM) [Remind Me · Patrice Rushen ·Straight From The Heart](https://www.youtube.com/watch?v=SOPp6EgpDrg)
[Yearning For Your Love::By::THE_GAP_BAND](https://www.youtube.com/watch?v=afqzUbvi7D8) [The Jones Girls::Who Can I Run To?::1979](https://www.youtube.com/watch?v=JRpKQb9J-nU) [Keke Wyatt::NOTHiNG_iN_THiS_WORLD](https://www.youtube.com/watch?v=diEV1qC34Og) [Stephanie Mills-Two Hearts Featuring Teddy Pendergrass](https://www.youtube.com/watch?v=uJ7HN1nNdbc)
[NEW_EDiTiON::Cool It Now (Official Video)](https://www.youtube.com/watch?v=RZUq6N7Gx1c) [NEW_EDiTiON::Mr. Telephone Man](https://www.youtube.com/watch?v=GsWrlzjxbPY) [BOBBY_BROWN::Every Little Step](https://www.youtube.com/watch?v=muDCggSpqpE) &#128293; [A1 Warm It Up (LP Version)
Producer – Jermaine Dupri](https://www.youtube.com/watch?v=fwXfhQaBRZI) &#128293; [TLC - What About Your Friends (Official Video)](https://www.youtube.com/watch?v=92gHq1s6G-c) [Another Bad Creation - Iesha (Official Music Video)](https://www.youtube.com/watch?v=ZDPIK7Fz_g4) [SWV – You're The One
Genre:	Funk / Soul
Style:	RnB/Swing, Hip Hop
Year:	1996](https://www.youtube.com/watch?v=Ua4fg2FQ6w8) [BRANDY::Sittin' Up In My Room from Waiting to Exhale - Original SoundtracK](https://www.youtube.com/watch?v=DGgANpSjoas) [702 - Steelo feat. Missy Elliott::1996](https://www.youtube.com/watch?v=LdvRwHhla6Q) [DELiRiUM:BY::##ELLiE_GOULDING## ##FAV_TRACK## ## ](https://youtu.be/cLWv0f2Tt8E) 
[DiSCOGS:##ENTRY](https://www.discogs.com/release/8118343-Ellie-Goulding-Delirium)
[Björk::Human Behaviour](https://youtu.be/p0mRIhK9seg) [Björk : ARMY_OF_ME::video](https://www.youtube.com/watch?v=jPeheoBa2_Y) [Björk::Jóga](https://youtu.be/loB0kmz_0MM) [Dido - Thank You |Official Video|](https://youtu.be/1TO48Cnl66w) [Beastie Boys - Three MC's And One DJ](https://youtu.be/XflfiylNNXY) [Lorde - White Teeth Teens](https://www.youtube.com/watch?v=kNUWreGGxcc&list=PLvm6B0LWgqu-rHo4GAqYy5mC1O7pUxntS&index=9) 
[Dido – My Lover's Gone](https://www.youtube.com/watch?v=Libbd7BCBHE) 
[Beastie_Boys - Sure_Shot::iLL_COMMUNiCATiON](https://youtu.be/JhqyZeUlE8U) 
[Dido - Honestly Ok](https://youtu.be/mCcNGt_eliM) [Dido - I'm No Angel ](https://youtu.be/i5JyWpyYVx4) [Eminem - Stan ft. Dido](https://youtu.be/gOMhN-hfMtY)  [WHOSAMPLED::EXPLORE_THE_STAN_SAMPLES](https://www.whosampled.com/Eminem/Stan/)
[EVERYTHiNG_REMAiNS_RAW](https://youtu.be/fd_HkV9zz84) [BUSTA_RHYMES_RAMPAGE_FREESTYLE](https://www.youtube.com/watch?v=5CivybE0slA) [Notorious B.I.G. - Brooklyn Freestyle at the age of 17 (1989)](https://youtu.be/zSx03q1-1KA) [Wang Dang Doodle::Koko Taylor w Little Walter 1967](https://youtu.be/qyUHkY0K8HE) [Fugees murder the Apollo live 1996 ](https://youtu.be/LpA8qvLWF1Q) [Nas & Large Pro - Live at the Barbeque ](https://youtu.be/ta3srWr4sJQ) [MiNNiE_RiPERTON::Inside My Love](https://www.youtube.com/watch?v=jlgp-jjHzC0) [HiFi_SHiT = ROY_AYERS::Everybody Loves The Sunshine](https://www.youtube.com/watch?v=SSBWiFGzsyU) 
[Björk : Isobel::HD_ViDEO](https://www.youtube.com/watch?v=VGPYO0mzmBQ) 
["I Miss You" - Björk](https://www.youtube.com/watch?v=8A7TqgbHT3k)
[Björk::Possibly_Maybe](https://youtu.be/iyqKy5P1Y0Q)
[Mo Money Mo Problems by The Notorious B.I.G. feat. Puff Daddy, Mase and Faith_Evans](https://www.whosampled.com/The-Notorious-B.I.G./Mo-Money-Mo-Problems/)
[Crush on You by Lil' Kim feat. Lil' Cease and The Notorious B.I.G.](https://www.whosampled.com/Lil%27-Kim/Crush-on-You/)	
[Gettin' Money::The Get Money Remix](https://www.whosampled.com/Junior-M.A.F.I.A./Gettin%27-Money-(The-Get-Money-Remix)/)	
[Jay-Z feat. Foxy Brown and Babyface(Always Be My) Sunshine](https://www.whosampled.com/sample/2209/Jay-Z-Foxy-Brown-Babyface-(Always-Be-My)-Sunshine-The-Fearless-Four-Rockin%27-It/)	
[Sunny Day](https://www.youtube.com/watch?v=Nn1DQAmCQ4A)
[The Smashing Pumpkins - Today DEAR_LALiBAELAH check out this ShreddeR](https://www.youtube.com/watch?v=xmUZ6nCFNoU)
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://nervousnyc.com/wp-content/uploads/2022/05/bigho.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://nervousnyc.com/wp-content/uploads/2022/05/bighob.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT"> 
      </div>
    </div>
  </div>
</div>

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331709122&color=%235e4184&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<img src="https://th.bing.com/th/id/R.af44e470253784a97bcae1b97c571954?rik=80u2ZRCYDhk18Q&riu=http%3a%2f%2fwww.xhtmljunction.com%2fblog%2fwp-content%2fuploads%2f2018%2f02%2fhtml5-css3.png&ehk=k3fb7DfpkTK6ND8lS2w9AB3sdPc8Bp655RBs%2bK1EmC4%3d&risl=&pid=ImgRaw&r=0" >
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/439224009&color=%234c044c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/voyage_music" title="Voyage" target="_blank" style="color: #cccccc; text-decoration: none;">Voyage</a> · <a href="https://soundcloud.com/voyage_music/dynamic" title="Dynamic" target="_blank" style="color: #cccccc; text-decoration: none;">Dynamic</a></div>

["Burnin' for You" Blue Öyster Cult 1981 HQ](https://www.youtube.com/watch?v=KQSkjl6oOF0)
[More Than a Feeling · Boston](https://www.youtube.com/watch?v=ufQUxoidxkM)
"Keep On Loving You" is a soft rock power ballad written by Kevin Cronin and performed by American rock band REO Speedwagon. It features the lead guitar work of the late Gary Richrath. The song first appeared on REO Speedwagon's 1980 album Hi Infidelity. 

The song was the first REO Speedwagon single to break the top 50 on the U.S. Billboard Hot 100, reaching the #1 spot for one week in March 1981. The single was certified Platinum for U.S. sales of over one million copies. It peaked at #7 on the UK Singles Chart.

In 1981, the music video of the song was the 17th played on the first day of broadcast of MTV, on August 1. - Clay_CuLver

[REO Speedwagon - Keep on Loving You (1980) HQ](https://www.youtube.com/watch?v=IkdLpSllRuw)
[Steely Dan ~ Deacon Blues ~ Aja (Remastered) HQ Audio](https://www.youtube.com/watch?v=-hNeWDcf7so)
[Rhiannon · Fleetwood Mac](https://www.youtube.com/watch?v=0xGPi-Al3zQ)
[Phil Collins - Another Day In Paradise (Official Music Video)](https://www.youtube.com/watch?v=Qt2mbGP6vFI)
[FLEETWOOD_MAC Dreams (2004 Remaster)](https://www.youtube.com/watch?v=swJOIjjW69U)
[Bee Gees - How Deep Is Your Love (Official Video)](https://www.youtube.com/watch?v=XpqqjU7u5Yc)
[Bee Gees - Stayin' Alive (Official Video)](https://www.youtube.com/watch?v=I_izvAbhExY)
[Arthur Collins - In Ragtime Land 1912 Vintage Sheet Music Rag Time](https://www.youtube.com/watch?v=RYmgHp_6yu8) 
[Guns N' Roses - Paradise City (Official Music Video)](https://www.youtube.com/watch?v=Rbm6GXllBiw)
[Bon Jovi - Livin' On A Prayer](https://www.youtube.com/watch?v=lDK9QqIzhwk)
[Bon Jovi - You Give Love A Bad Name (Official Music Video)](https://www.youtube.com/watch?v=KrZHPOeOxQQ)
[No More Distractions | Joel Osteen](https://www.youtube.com/watch?v=_QcuQ-ztfhY)
[How to Write PowerFULL Petitions- They DO Work!!!](https://www.youtube.com/watch?v=s5WDnZeL5Os)
[Powerfull Ruqyah Syariah | Against Black Magic, Sihir, Jinns, Evil& Sleeping Problem](https://www.youtube.com/watch?v=KZ2fI9zCGLE)
<img src="https://devhumor.com/content/uploads/images/September2014/programmermeme2.jpg">

[Ridge Racer Revolution PS1 - Full Complete Soundtrack | OST](https://www.youtube.com/watch?v=HasppWQbXlQ)
[McGruff's Guide To Personal Safety (1988 VHS)](https://www.youtube.com/watch?v=p3hu_wvgd1Y)
[McGruff Don't talk to Strangers PSA 1984](https://www.youtube.com/watch?v=rxLD1uq94sE)
[Blue Ribbon Panel: McGruff on Dangerous Strangers](https://www.youtube.com/watch?v=EkAwcNkagjU)
[McGruff on Self-Protection: Preventing Child Abuse and Neglect (1993 VHS)](https://www.youtube.com/watch?v=61u1HAbmMwg)
[(1986) McGruff's SMART KIDS Album [Cassette Rip]](https://www.youtube.com/watch?v=y4P4plYXKFE)

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--NsJ312FL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s---Xg28U2u--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/q7uy4yxekcljpr70p2xk.png">



<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/Screenshot%202022-08-02%2011.45.22%20AM.png">

[Justice, Integrity & Service The U.S. Marshals Service is the nation's oldest and most versatile federal law enforcement agency.](https://www.usmarshals.gov/)
## My_WiFES_STALKERS
[ALWAYS_FRAME_ME_FOR_STALKiNG_HER AND_GET_OUR ACCOUNTS_REMOVED or Struggle_with_reduced_functionality](https://www.pinterest.com/natejr45/black-beautiful-queen-100/), then I stumble across scary ass shit like this. While Sartu does work under [NiJA_CHARLES](https://www.revolt.tv/article/2022-02-01/150820/nija-dont-say-i-didnt-warn-you/) and [Normani](https://www.officialnormani.com/), she is also known as [KASH_DOLL](https://thesource.com/2022/08/02/kash-doll-signs-deal-with-mnrk-music-group-plans-2023-project/)

Wikipedia alerted me to another name change [Arkeisha Antoinette Knight, known professionally as Kash Doll,](http://www.kashdoll.com/)and I discovered there is a population using the name Arkeisha. The [US_MARSHALL_SERViCE iS_ASSiSTiNG_US](https://www.usmarshals.gov/local-districts/central-district-of-california/courthouse-locations)

## DEAR_US_MARSHALL_SERViCE
Sartu and I are a healthy couple that can be verified within Savannah, Atlanta, Macon, Houston, and Los_Angeles_County telepath communities. Many people hold her in prostitution and claim we are not telepathic. Danielle_Mushonga is one of those people. She is telepathic, you can question_her, remotely
#### That_Lady_might_bE_Russian because she can see through your eyes, the CiA_CALLs_iT [REMOTE_ViEWiNG](https://www.cia.gov/readingroom/docs/CIA-RDP96-00791R000200030025-7.pdf)
[TOPiC4RESEARCH::Remote Viewing: The CIA Experiment That Was Too Successful](https://anomalien.com/remote-viewing-the-cia-experiment-that-was-too-successful/)
[TOPiC4RESEARCH::Remote Viewing – The Most Unbelievable CIA Psychic Spy Program](https://tilln.com/season-4/remote-viewing-the-most-unbelievable-cia-psychic-spy-program/)
[CiA_REMOTE_ViEWiNG_FORM for test candidates I think](https://www.cia.gov/readingroom/docs/CIA-RDP96-00791R000300040001-1.pdf)


<div class="pinupGallery">
  <img class="pinupImage" src="https://image-aws-us-west-2.vsco.co/12f8b0/56497/5f8002d816354b31ae000001/vsco5f8002dae92b2.jpg" alt="">
  <img class="pinupImage" src="https://image-aws-us-west-2.vsco.co/12f8b0/56497/5f8002d816354b31ae000001/vsco5f8002dae92b2.jpg" alt="">
  <img class="pinupImage" src="https://image-aws-us-west-2.vsco.co/12f8b0/56497/5f8002d816354b31ae000001/vsco5f8002dae92b2.jpg" alt="">
  <img class="pinupImage" src="https://image-aws-us-west-2.vsco.co/12f8b0/56497/5f8002d816354b31ae000001/vsco5f8002dae92b2.jpg" alt="">
   <img class="pinupImage featured-pinupImage " src="https://image-aws-us-west-2.vsco.co/12f8b0/56497/5f8002d816354b31ae000001/vsco5f8002dae92b2.jpg" alt="">
</div>

[DEAR_SARTU_JUST_KNOW...](https://www.youtube.com/watch?v=vC0URxrUy48) 
### DANCE411_HOW_diD_WE_GET_HERE?
<img src="https://www.monkeyuser.com/assets/images/2022/248-unit-tests.png" >


<img src="https://d1dllhfo4523g0.cloudfront.net/87758_20201011-092933_1500x675.jpg" >
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.discogs.com/q7JEPdpNa6MhgtRZVF2Lm7q8iXPiiw0SlVp0EoVN8Gc/rs:fit/g:sm/q:90/h:501/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk4NTcy/MjMtMTQ4NzQ2OTU1/My0zNDk3LmpwZWc.jpeg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.discogs.com/q7JEPdpNa6MhgtRZVF2Lm7q8iXPiiw0SlVp0EoVN8Gc/rs:fit/g:sm/q:90/h:501/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk4NTcy/MjMtMTQ4NzQ2OTU1/My0zNDk3LmpwZWc.jpeg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT"> 
      </div>
    </div>
  </div>
</div>

[Heart - Barracuda](https://www.youtube.com/watch?v=VdOkQ6THDVw)
[Bruce Springsteen - Dancing In the Dark](https://youtu.be/129kuDCQtHs)
[Journey - Don't Stop Believin' (Official Audio)](https://youtu.be/1k8craCGpgs)
[Starship - We Built This City](https://www.youtube.com/watch?v=IDI2WQJyE7I)
[More Than a Feeling](https://www.youtube.com/watch?v=ufQUxoidxkM)
[DEAR_ERiKA_MUNA_KELELA_LALiBELA_QUXUBE KAMPiRE JENNiFER, Heather, Sandy, Sartu_Lauren - LiSTEN_TO_Africa_BY_TOTO](https://www.youtube.com/watch?v=FTQbiNvZqaY)

<h2>	(╯°□°)╯︵ ʞooqǝɔɐɟ </h2>


#### HTAU_THEME_MUSiC_RN
[Ridge Racer - Rare Hero](https://www.youtube.com/watch?v=l3bhNLtXvHA) &#128293;&#128293;&#128293;
&#128293;&#128293;&#128293;&#128293;&#128293;
## Dear_NiNE_JABDU_and_CoraL
Here, this was my release day purchase after working hard to buy my Playstation1 cash. Its RAVE_RACER_iN_JAPAN and Ridge_Racer in tha states 

[PlayStation history: From console neophyte to all-conquering veteran](https://www.androidauthority.com/playstation-history-1220628/)
<iframe width="80%" height="315" src="https://www.youtube.com/embed/m8nsUcAwkj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Jam On It](https://www.youtube.com/watch?v=apnh_MpXlTE)
[When I Hear Music](https://www.youtube.com/watch?v=WRcLYanZrho)
<img src="https://149455152.v2.pressablecdn.com/wp-content/uploads/2018/09/Goal-Zero-Sherpa-100AC.jpg">

[GeekDad Review: Goal Zero Sherpa 100AC Portable Power Bank](https://geekdad.com/2018/09/geekdad-review-goal-zero-sherpa-100ac-portable-power-bank)

If I had a healthy power bank and my search results were not filtered, Id rarely ever come to centtral... Why are there so many broken computers... Its really pathetic 

[Lookout Weekend - DEBBiE_DEB](https://www.youtube.com/watch?v=5TXvP76l-V4)
## DEAR_MUNA
You know I rag you guys about being lame all the time but this is serious prostitution allegations or not... The condition Justin has is called [Bell's palsy](https://www.mayoclinic.org/diseases-conditions/bells-palsy/symptoms-causes/syc-20370028). And he connected with mad prostituted women. Those pimps and ##PSYCHO_JONS have nerve gas. You can ask Erika, Sartu, Coral or Quxube, Matt_Field_GNK_NPR_REM and possibly SEVER_MSK but I have to be right if I accuse [SEVER##AWR_MSK](https://www.graffiti.org/sever/index.html). I cant be wrong with that guy. He dont realize that when we were early teens we looked up to him. So him stealing Muna is like yo look at those little boys at the basketball court. That skinny flat chested [DoubleDucher](https://www.youtube.com/watch?v=Kh1rgPIkWKA) is gonna be mine and he will never share a meal with her again once my plan is complete. Ill dissolve any family he builds. ##PiMP_SHiT_MAH_NiGGAH -SiGNED ATLANTAS_MOST_AGGY_NYMPHO_HUMANTRAFFiKiNG_PiMP_THiNG...
#### BACK_TO_JUSTiN
I wish people would listen to the people outside about the chemical weapon problem in Los Angeles. I have been attacked alot and the poison make certain muscle groups contract violently to a freeze or you loose all control of the muscle group. Justin spend time outside... Yes I have been blackballed and being a roof dweller I dont have the disadvantage of closed in permanet housing, and that is uncirculated air. Drink lots of water comfortably and excercise moderately, break a sweat and that [keeps ya body clean, Ha.](https://www.youtube.com/watch?v=3yylD-wixT0) So despite my aversion to prostitution rap and its related fallout I do understand that alot of people are lonely for ##quarantine so the ##CORONA_BAE while it needs to be explained, we want you healthy... AGRESSiVELY_RESEARCH_NERVE_GAS they were using Sarin and Anthrax for a while [Nerve Gas Poisoning](https://www.drugs.com/cg/nerve-gas-poisoning.html) I just know because of the symptoms, like these super pusFilled blisters that I got from an attack on my ass at the central library while I was using the computer. I still have the scabs for samples if you know someone responsible in law enforcement that wants to takle it.  

[JUSTIN BIEBER REVEALS SCARY DIAGNOSIS ...Has Caused Facial Paralysis](https://www.tmz.com/2022/06/10/justin-bieber-battling-virus-that-has-paralyzed-part-of-his-face/)
[Cherrelle - Saturday Love - Lyrics](https://www.youtube.com/watch?v=efLcgUQmyT8) 

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i926.photobucket.com/albums/ad105/ichiban619/various%20graffiti%20magazines/12OzProphetIssue61997-AEROHOLICS-26.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i926.photobucket.com/albums/ad105/ichiban619/various%20graffiti%20magazines/12OzProphetIssue61997-AEROHOLICS-28.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT"> 
      </div>
    </div>
  </div>
</div>

[IchiBan`s Street Scribers Yard](http://street-scribers-yard.blogspot.com/)
[SAMURAi_SHOWDOWN](https://archive.org/details/arcade_samsho) 

## LAPL, YOUR_SECURiTY_GAURDS_ARE_A_PESTiLENCE
THE_FAT_BALD_ONE_ALWAYS_STALKS_AND_DiSTRACTS_ME_AT_CENTRAL
If I cant breath in my fucking mask and I am more than 6 feet away from another person I should have the right to use the library with my mask off! Its so distracting!!! THEY_TiME_THE_SHiT because alot of them work extra shift for the pimps and shit, so its personal. 
- I am an open source developer, please respect that I have been robbed and blackballed and the library is the place I get my shit together. Stop being so cruel, you guys kicked me out of the Octavia Center while I was filling out paperwork. Then I got denied acces because I am not doing anything creative and I am not permitted to download anything or browse the internet... [##TMZ_WHATS_WRONG_WiTH_THiS_LiBRARY](https://www.bing.com/search?q=porn+library+santa+monica&PC=U316&FORM=CHROMN) [AND_YOU_KNOW_MY_MiSSiNG_ASS_FAMiLY](https://www.cbsnews.com/losangeles/news/adult-film-shot-at-santa-monica-public-library-during-business-hours-sparks-outrage/) Appears in porn and I have been menaced in the library and on the train with guys flashing me porn of kidnapped dance411 members... "You'll never see your wives again" they say

[Adult Film Shot At Santa Monica Public Library During Business Hours Sparks Outrage](https://www.cbsnews.com/losangeles/news/adult-film-shot-at-santa-monica-public-library-during-business-hours-sparks-outrage/)
### SANTA MONICA (CBSLA) 
 A porn stunt apparently done to get clicks is provoking outrage after news surfaced that an adult film was shot inside a local public library. The video is more than ten minutes in length and was shot on Santa Monica city streets and then inside the Santa Monica Public Library – Ocean Park Branch.

The video – which shows a woman exposing herself – outside Santa Monica streets and even outside John Muir Elementary, then carrying out sex acts inside the library. "God forbid, a child walked in the library and walked right in on the middle of it. That's my biggest concern," said Janet McLaughlin, a neighbor. "Children don't need to be exposed to this. If you want to do porn, stick to the hotels." McLaughlin was so disgusted after another concerned parent sent her a link of the movie, that she took to social media to get the city's attention. In the clip, the woman in the video walks into the library, apparently during business hours and shoots the video while talking about not getting caught.

But McLaughlin says city leaders are aware.
"They say that it is a misdemeanor and unless they witness it themselves, there is nothing they can do about it," she said. The video was uploaded to a porn site that pays per click. The face of the man in the video is never shown. CBS Los Angeles has chosen to not release the identity of the female in the clip, but a search shows that she has appeared in other adult films.
"We have to have laws to stop them from doing things that puts children in harm's way," said McLaughlin. [##TMZ_WHATS_WRONG_WiTH_THiS_LiBRARY](https://www.bing.com/search?q=porn+library+santa+monica&PC=U316&FORM=CHROMN) 

## WHY_iYT_AiYNT_FiYXED?!?!
## ITS_A_MISDEMENOR_BUT_WHAT_ABOUT_WHEN
### She is denied food for a week and her first meal is semen as 
[LUDACRiS_REVEALS_HiS_RAPE_SESSiON_WiTH_MY_WiFE_SARTU iN and ##UNORTHORiZED_REMiX](https://soundcloud.com/saintbeda/normani-wild-side-remix-ft-ludacris-lil-wayne-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing) Sartu, performs under Normani and Nija and a few other names Melisza McFierce... And in the porn world she is popular for authentic female ejaculation and people experiment on her. She is from a rare african tribe and people have treated us like [E.T and ELLiOT](https://www.youtube.com/watch?v=alt4NCNZqWI) all our lives and we wanna be together and with the rest of our ##DanceTribe with no one policing our sexuality... I cannot even search for sex positions on wikipedia its blocked! Im so torchured electronically and so is she. Its wrong and the library system of Los Angeles supports porn and there is no such thing as consensual porn. Its always fraud and coercion involved ant thats RAPE_IN_CALIFORNIA
<img src="https://th.bing.com/th/id/R.1076edaa5851c4226d72903cd9d09833?rik=IqOwzX%2bHRdtBOw&riu=http%3a%2f%2fwww.thewrap.com%2fwp-content%2fuploads%2f2016%2f06%2fScreen-Shot-2016-06-09-at-3.26.48-PM.png&ehk=4sLNCMMF5hNOE%2bqlZjErGShn3Z9pzbRWITz3sIpujTU%3d&risl=&pid=ImgRaw&r=0">

[E.T. the Extra-Terrestrial (1982) - 'Invading Elliot's House' scene [1080p]](https://www.youtube.com/watch?v=alt4NCNZqWI)
<iframe scrolling="no" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen allow="autoplay; fullscreen" src="https://w3.mp.lura.live/player/prod/v3/anvload.html?key=eyJtIjoiY2JzIiwidiI6IjQ0NDk0ODQiLCJhbnZhY2siOiI1VkQ2RXlkNmRqZXdiQ21Od0JGbnNKajE3WUF2R1J3bCIsInNoYXJlTGluayI6Imh0dHBzOi8vdzMubXAubHVyYS5saXZlL3BsYXllci9wcm9kL3YzL2FudmxvYWQuaHRtbD9rZXk9ZXlKaGJuWmhZMnNpT2lJMVZrUTJSWGxrTm1ScVpYZGlRMjFPZDBKR2JuTkthakUzV1VGMlIxSjNiQ0lzSW1WNGNHVmpkRkJ5WlhKdmJHd2lPblJ5ZFdVc0ltVjRjR1ZqZEZCeVpYSnZiR3hVYVcxbGIzVjBJam8xTENKb2RHMXNOU0k2ZEhKMVpTd2liU0k2SW1OaWN5SXNJbkJzZFdkcGJuTWlPbnNpWTI5dGMyTnZjbVVpT25zaVl6TWlPaUpEYUdsallXZHZMbU5pYzJ4dlkyRnNMbU52YlNJc0ltTnNhV1Z1ZEVsa0lqb2lNekF3TURBeU15SjlMQ0prWm5BaU9uc2lZMnhwWlc1MFUybGtaU0k2ZXlKaFpGUmhaMVZ5YkNJNkltaDBkSEE2THk5d2RXSmhaSE11Wnk1a2IzVmliR1ZqYkdsamF5NXVaWFF2WjJGdGNHRmtMMkZrY3o5emVqMHllREpjZFRBd01qWnBkVDB2TkRFeU9DOWpZbk11WTJocFhIVXdNREkyWTJsMVgzTjZjMXgxTURBeU5tbHRjR3c5YzF4MU1EQXlObWRrWm5CZmNtVnhQVEZjZFRBd01qWmxiblk5ZG5CY2RUQXdNalp2ZFhSd2RYUTllRzFzWDNaaGMzUXlYSFV3TURJMmRXNTJhV1YzWldSZmNHOXphWFJwYjI1ZmMzUmhjblE5TVZ4MU1EQXlOblZ5YkQxYmNtVm1aWEp5WlhKZmRYSnNYVngxTURBeU5tUmxjMk55YVhCMGFXOXVYM1Z5YkQxYlpHVnpZM0pwY0hScGIyNWZkWEpzWFZ4MU1EQXlObU52Y25KbGJHRjBiM0k5VzNScGJXVnpkR0Z0Y0YwaUxDSnJaWGxXWVd4MVpYTWlPbnNpWTJGMFpXZHZjbWxsY3lJNklsdGJRMEZVUlVkUFVrbEZVMTFkSWl3aWNISnZaM0poYlNJNklsdGJVRkpQUjFKQlRWOU9RVTFGWFYwaUxDSnphWFJsVTJWamRHbHZiaUk2SW5acFpHVnZMV1Y0Y0dWeWFXVnVZMlVpZlgxOUxDSm9aV0Z5ZEdKbFlYUkNaWFJoSWpwN0ltRmpZMjkxYm5RaU9pSmpZbk5zYjJOaGJDMW5iRzlpWVd3dGRXNXBabWxsWkNJc0ltTm9ZWEIwWlhKVWNtRmphMmx1WnlJNlptRnNjMlVzSW1OMWMzUnZiVTFsZEdGa1lYUmhJanA3SW5acFpHVnZJanA3SW1OaWMxOXRZWEpyWlhRaU9pSmphR2xqWVdkdkxtTmljMnh2WTJGc0xtTnZiU0lzSW1OaWMxOXdiR0YwWm05eWJTSTZJbVJsYzJ0MGIzQWlmWDBzSW1OMWMzUnZiVlJ5WVdOcmFXNW5VMlZ5ZG1WeUlqb2lZMkp6WkdsbmFYUmhiRzFsWkdsaExtUXhMbk5qTG05dGRISmtZeTV1WlhRaUxDSmpkWE4wYjIxVWNtRmphMmx1WjFObGNuWmxjbE5sWTNWeVpTSTZJbU5pYzJScFoybDBZV3h0WldScFlTNWtNUzV6WXk1dmJYUnlaR011Ym1WMElpd2lhbTlpU1dRaU9pSnpZMTkyWVNJc0ltMWhjbXRsZEdsdVowTnNiM1ZrU1dRaU9pSTRNak5DUVRBek16VTFOamMwT1RkR04wWXdNREF4TURGQVFXUnZZbVZQY21jaUxDSndTVzV6ZEdGdVkyVWlPaUp3TUNJc0luQmhjbVZ1ZEZCaFoyVlZVa3dpT2lKb2RIUndjem92TDJOb2FXTmhaMjh1WTJKemJHOWpZV3d1WTI5dEwzWnBaR1Z2THpZeU1EVTRNREF0YzJGcGJuUXRibWxqYUc5c1lYTXRkV3R5WVdsdWFXRnVMV05oZEdodmJHbGpMV05oZEdobFpISmhiQzEzYVd4c0xXaHZiR1F0Y0hKaGVXVnljeTFtYjNJdGNHVmhZMlV0YVc0dGRXdHlZV2x1WlM4aUxDSndZWEpsYm5SVWFYUnNaU0k2SWxOaGFXNTBJRTVwWTJodmJHRnpJRlZyY21GcGJtbGhiaUJEWVhSb2IyeHBZeUJEWVhSb1pXUnlZV3dnVjJsc2JDQkliMnhrSUZCeVlYbGxjbk1nUm05eUlGQmxZV05sSUVsdUlGVnJjbUZwYm1VZzRvQ1RJRU5DVXlBeU9pQk9aWGR6TENCWFpXRjBhR1Z5TENCVGNHOXlkSE1nVDI0Z1FXeHNJRkJzWVhSbWIzSnRjeUlzSW5CeWIyWnBiR1VpT2lKalluTWlMQ0p3ZFdKc2FYTm9aWEpKWkNJNkltTmljMnh2WTJGc0lpd2lkSEpoWTJ0cGJtZFRaWEoyWlhJaU9pSmpZbk5rYVdkcGRHRnNiV1ZrYVdFdWFHSXViMjEwY21SakxtNWxkQ0lzSW5abGNuTnBiMjRpT2lJeExqVWlmU3dpYlc5aGRDSTZleUpqYkdsbGJuUlRhV1JsSWpwN0luQmhjblJ1WlhKRGIyUmxJam9pWTJKemJHOWpZV3hoYm5aaGRHOTJhV1JsYnpFNE1UY3pNall3T1RRek1TSjlmWDBzSW5SdmEyVnVJam9pWkdWbVlYVnNkQ0lzSW5ZaU9pSTBORFE1TkRnMEluMCIsInBsdWdpbnMiOnsiY29tc2NvcmUiOnsiYzMiOiJDaGljYWdvLmNic2xvY2FsLmNvbSIsImNsaWVudElkIjoiMzAwMDAyMyJ9LCJkZnAiOnsiY2xpZW50U2lkZSI6eyJhZFRhZ1VybCI6Imh0dHA6Ly9wdWJhZHMuZy5kb3VibGVjbGljay5uZXQvZ2FtcGFkL2Fkcz9zej0yeDImaXU9LzQxMjgvY2JzLmNoaSZjaXVfc3pzJmltcGw9cyZnZGZwX3JlcT0xJmVudj12cCZvdXRwdXQ9eG1sX3Zhc3QyJnVudmlld2VkX3Bvc2l0aW9uX3N0YXJ0PTEmdXJsPVtyZWZlcnJlcl91cmxdJmRlc2NyaXB0aW9uX3VybD1bZGVzY3JpcHRpb25fdXJsXSZjb3JyZWxhdG9yPVt0aW1lc3RhbXBdIiwia2V5VmFsdWVzIjp7ImNhdGVnb3JpZXMiOiJbW0NBVEVHT1JJRVNdXSIsInByb2dyYW0iOiJbW1BST0dSQU1fTkFNRV1dIiwic2l0ZVNlY3Rpb24iOiJ2aWRlby1leHBlcmllbmNlIn19fSwiaGVhcnRiZWF0QmV0YSI6eyJhY2NvdW50IjoiY2JzbG9jYWwtZ2xvYmFsLXVuaWZpZWQiLCJjaGFwdGVyVHJhY2tpbmciOmZhbHNlLCJjdXN0b21NZXRhZGF0YSI6eyJ2aWRlbyI6eyJjYnNfbWFya2V0IjoiY2hpY2Fnby5jYnNsb2NhbC5jb20iLCJjYnNfcGxhdGZvcm0iOiJkZXNrdG9wIn19LCJjdXN0b21UcmFja2luZ1NlcnZlciI6ImNic2RpZ2l0YWxtZWRpYS5kMS5zYy5vbXRyZGMubmV0IiwiY3VzdG9tVHJhY2tpbmdTZXJ2ZXJTZWN1cmUiOiJjYnNkaWdpdGFsbWVkaWEuZDEuc2Mub210cmRjLm5ldCIsImpvYklkIjoic2NfdmEiLCJtYXJrZXRpbmdDbG91ZElkIjoiODIzQkEwMzM1NTY3NDk3RjdGMDAwMTAxQEFkb2JlT3JnIiwicHJvZmlsZSI6ImNicyIsInB1Ymxpc2hlcklkIjoiY2JzbG9jYWwiLCJ0cmFja2luZ1NlcnZlciI6ImNic2RpZ2l0YWxtZWRpYS5oYi5vbXRyZGMubmV0IiwidmVyc2lvbiI6IjEuNSJ9LCJtb2F0Ijp7ImNsaWVudFNpZGUiOnsicGFydG5lckNvZGUiOiJjYnNsb2NhbGFudmF0b3ZpZGVvMTgxNzMyNjA5NDMxIn19fSwiaHRtbDUiOnRydWUsInRva2VuIjoiZGVmYXVsdCJ9"  width ="90%" height="360"></iframe>

## Dear_Behati
Sorry about pinterest... Ill get into some metaphysical stuff later with you. I dont have a flow. [The_DR_STANKENSTEiN_ACCOUNT](https://www.pinterest.at/drstankenstein/) is really old and has a lot of info related to our families exodus from [Jehovahs_WiTnesses](https://en.wikipedia.org/wiki/Jehovah%27s_Witnesses). [The Symptoms of Telepathy_or##TELECATiON](http://askingangels.com/articles/spiritual/twin-flame-telepathy.php#:~:text=Signs%20%26%20Symptoms%20Of%20Twin%20Flame%20Telepathy%201,Some%20Of%20The%20Same%20Faults.%20Please%20Share%21%20) as many on the west coast are calling it...
[They Don't Know](https://www.youtube.com/watch?v=U6Xs-dh83i4) what they are doing by separating me from Sartu for she can verify my relationship with Muni and Muni can get me to Erika and Coral and Jabdu and Meyu and I can get my name cleared from child molestation and get a pension of social security or something, I got denied foodstamps, cellphone access and my social security was stolen. Im on the street man, so the telepathy thing is huge bu im not doing any research its like the number sequences 111,222,333 etc, the syncronicity and so forth, its just a part of regular life at this point. 

## Disabled Public Libray computers
Its so disappointing when [Billy_Jean](https://www.archdaily.com/953006/billie-jean-king-main-library-skidmore-owings-and-merrill) Branch in Long beach is closed. While the computers are timed, they do not disable you from saving files, although they will not allow you to run .exe files. So I cant play [SAMURAi_SHOWDOWN](https://archive.org/details/arcade_samsho) at the correct framerate. I like making animated gifs out of my wifes videos so they can use them for social media when they have downtime from prostitution. Now that I say that the phones will be taken away... They not releasing music as often and Im not seeing new dance videos. The organization that manages the librarys computers block thier songs from my youtube account and my wife Muna from my google results. RANDO_XTC and LOST_SFK took me and Coral to the funeral, the whole family was therer including SARTU! She was laid to rest here and my life fell apart... 
[Next thing I know she is performing on Jimmy_Kimmel and appearing at the source awards](https://www.youtube.com/watch?v=da-h2Kdunbg)
[We Could Watch Muni Long Perform For Hrs & Hrs | BET Awards '22](https://www.youtube.com/watch?v=da-h2Kdunbg)
<img src="https://i.ytimg.com/vi/ddNppeY520o/maxresdefault.jpg">
```
My heart is cold like Russia/
Got Jerked at the SOURCE_AWARDS/
NEXT_YEAR,200_NiGGAS comin' wit swords
- iRON_MAN_TONY_STARKS ##THE_GHOSTFACE_KiLLER 
from POiSONOUS_DARTS
```

[Ghostface Killah - Poisonous Darts (Official Audio)](https://www.youtube.com/watch?v=oo26-NdzqbE)
[Ghostface Killah · Box In Hand](https://www.youtube.com/watch?v=oiG-DJ37wXQ)
<img src="https://cdn.f1connect.net/compress/photo/location/8fb167dad21040dbadabd1bc8ce0d9a6/c3a51d6c-4551-4b80-bd77-22b519c6d928.png">

[SARTU_WEARiNG_MY_BROTHER MEMORiAL_STYLE](https://www.pinterest.com/pin/476114991866603327)
[SARTU_iN_AFRO_WiG The ##HUMAN_TRAFFiCKeRs MADE_HER_CUT_HER_MANE_OFF](https://www.pinterest.com/pin/476114991867389020)
[Y2K baddie Outfit inspo | Look is in my bio ❤️](https://www.pinterest.com/pin/476114991868686622/?mt=login)

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://longbeach.gov/globalassets/city-news/media-library/images/libraryconstruction_12-17-18_012.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://longbeach.gov/globalassets/city-news/media-library/images/libraryconstruction_12-17-18_012.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT"> 
      </div>
    </div>
  </div>
</div>
<img src="https://cdn.worldvectorlogo.com/logos/crime-bite.svg" alt="MCGRUFF = ##TAKE_A_BITE_OUTTA_CRIME">


[1981 McGruff The Crime Dog "Detroit" TV Commercial](https://www.youtube.com/watch?v=ta05yW8WWrs)
[McGruff's Guide To Personal Safety (1988 VHS)](https://www.youtube.com/watch?v=p3hu_wvgd1Y)
[McGruff Don't talk to Strangers PSA 1984](https://www.youtube.com/watch?v=rxLD1uq94sE)
[Blue Ribbon Panel: McGruff on Dangerous Strangers](https://www.youtube.com/watch?v=EkAwcNkagjU)
[McGruff on Self-Protection: Preventing Child Abuse and Neglect (1993 VHS)](https://www.youtube.com/watch?v=61u1HAbmMwg)
[(1986) McGruff's SMART KIDS Album [Cassette Rip]](https://www.youtube.com/watch?v=y4P4plYXKFE)
[Peppa Pig Jumps in Muddy Puddles and Goes to the Beach 🐷 | Peppa Pig Official Family Kids Cartoon](https://www.youtube.com/watch?v=092T6-AJELs)
[Teen Assault](https://www.youtube.com/watch?v=Isw_ipGAQ24)
[Vintage Television Advertisements from the 60's and 70's](https://www.youtube.com/watch?v=0yDccwZiuIA)
## DEAR_SARTU 
Here are some tracks you can prep Travis' disillusioned fans to... BurningMan_LA
[The·Crystal·Method ▶ ·Vegas·(Full Album)](https://www.youtube.com/watch?v=6qh5iA9wnvs)
[The Chemical Brothers - Dig Your Own Hole (Full Album)](https://www.youtube.com/watch?v=2UafeQIkj5c)
[The Chemical Brothers 1995 Exit Planet Dust](https://www.youtube.com/watch?v=gdGAGDMxQTg)
[Chemical Brothers - BBC Radio1 Essential Mix - April 13, 2019](https://www.youtube.com/watch?v=EvfhVKHf1pA)
[The Chemical Brothers - Live @ Glastonbury 2007 [4k]](https://www.youtube.com/watch?v=rMn0t72BvBc)
<img src="https://www.seekpng.com/png/detail/373-3730168_the-chemical-brothers-brotherhood-chemical-brothers-png.png">

[The Tibetan Book of Living and Dying. Malditasweet](https://www.youtube.com/watch?v=pPKbxpT7Z0c)
[RiRi::YOU_KNOE_PEEBs_IN_DIS_ViDEOh_Prepare Your Heart For The Trials Ahead - 2013 Drama JW](https://www.youtube.com/watch?v=0wtqiK30O4k)
[Old School Church Songs That's Going To Take You Back!](https://www.youtube.com/watch?v=hOOMTjiO5tk)
[The Followers](https://www.youtube.com/watch?v=OvQ0G7I_HGE)
[Pennsylvania, Northampton JW Assembly 1967](https://www.youtube.com/watch?v=4R8o4Hq7O9I)
[Something About the Name Jesus](https://www.youtube.com/watch?v=AYm_NBsZ8P8)
[The Best In Me](https://www.youtube.com/watch?v=CQt4xBGwaI4)
[Never Would Have Made It](https://www.youtube.com/watch?v=nqPLhgy4yLc)
[Man killed by same bullet he used to shoot woman in the neck::A Texas man was fatally injured by a ricocheting bullet he had fired into a woman.](https://www.msn.com/en-us/news/crime/man-killed-by-same-bullet-he-used-to-shoot-woman-in-the-neck/ar-AA10aNLr)
[Kirk Franklin - I Smile (Official Video) ##DEAR_MUWAH_LUNA__THiS_LiGHTiNG_is_iN_YOUR_GRASP STAGE_STROBE_ON_LINEN_WITH_COLOR_GELS A_RING_LIGHT_UP_TOP_AND_IN_FRONT YOU_CAN_GET_VID_LIKE_THIS_ON_AN_iPHONE](https://www.youtube.com/watch?v=Z8SPwT3nQZ8)

[Telling the Truth - Mary J. Blige](https://www.youtube.com/watch?v=Va3yc7okXQ4)

<img src="https://installmd.com/upload/images/20210703/16253198381381.jpg">
[How to use the curl command in Linux command line tool and library for transferring data with URLs](https://installmd.com/i/cli/curl)
[Baltimora - Tarzan Boy (extended original)](https://www.youtube.com/watch?v=gSQ_iJ7aXKQ)
<img src="https://ductam.info/wp-content/uploads/2018/10/good_curl_logo-2048x783.png">
<img src="https://i.discogs.com/Gs984BCV01TFnS053AcmBpf7a1v3kkV8jFUTMjhuUVE/rs:fit/g:sm/q:90/h:601/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzMDA0/MjMtMTQxNTkyOTk3/Ny0yMzYwLmpwZWc.jpeg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
[Pink Floyd Another Brick in the Wall parts 1, 2 and 3 :: We don't need no education
We don't need no thought control
No dark sarcasm in the classroom
Teacher, leave them kids alone
Hey, teacher, leave them kids alone
All in all it's just another brick in the wall
All in all you're just another brick in the wall](https://www.youtube.com/watch?v=pRw0Y6SzOtI)
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.discogs.com/Gs984BCV01TFnS053AcmBpf7a1v3kkV8jFUTMjhuUVE/rs:fit/g:sm/q:90/h:601/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzMDA0/MjMtMTQxNTkyOTk3/Ny0yMzYwLmpwZWc.jpeg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.discogs.com/Gs984BCV01TFnS053AcmBpf7a1v3kkV8jFUTMjhuUVE/rs:fit/g:sm/q:90/h:601/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzMDA0/MjMtMTQxNTkyOTk3/Ny0yMzYwLmpwZWc.jpeg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT"> 
      </div>
    </div>
  </div>
</div>

[Tainted Love / Where Did Our Love Go (Extended Version / Medley)](https://www.youtube.com/watch?v=q84psZX6MbA)
[Bennie And The Jets (Remastered 2014) ELTON_JOHN](https://www.youtube.com/watch?v=ZBUW433Porw)
[This Is for the Lover in You](https://www.youtube.com/watch?v=Sn_mS9cZUss)
[Forever My Lady](https://www.youtube.com/watch?v=OVNPFylUzJQ)
[Come & Talk To Me](https://www.youtube.com/watch?v=8adNpJoiUA4)


## devhumor_dOt_cOm being harrased as well
<img src="https://i.ytimg.com/vi/2XqyvHMR8Ms/maxresdefault.jpg">
<img src="https://www.monkeyuser.com/assets/images/2022/244-clutch-save.png">
<img src="https://devhumor.com/content/uploads/images/October2021/first_day.png">
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://devhumor.com/content/uploads/images/February2022/developer_curse.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://devhumor.com/content/uploads/images/February2022/developer_curse.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://devhumor.com/content/uploads/images/February2022/projects.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://devhumor.com/content/uploads/images/February2022/projects.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://devhumor.com/content/uploads/images/March2022/repetitive_task.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://devhumor.com/content/uploads/images/March2022/repetitive_task.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>


<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://devhumor.com/content/uploads/images/March2022/tech_support.png" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://devhumor.com/content/uploads/images/March2022/tech_support.png" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://devhumor.com/content/uploads/images/March2022/junior_dev.png" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://devhumor.com/content/uploads/images/March2022/junior_dev.png" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>


<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://devhumor.com/content/uploads/images/June2022/learning_programming.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://devhumor.com/content/uploads/images/June2022/learning_programming.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>



<img src="https://th.bing.com/th/id/R.e59ea229277c9f11793bbced0b4abbfc?rik=FrD4RPXsa6jhTQ&pid=ImgRaw&r=0">
<img src="https://devhumor.com/content/uploads/images/June2022/linkedin.jpg">


<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://media.tenor.com/images/1d3ad62a94e3e2a1aebed86d18f1df76/tenor.gif" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://media.tenor.com/images/1d3ad62a94e3e2a1aebed86d18f1df76/tenor.gif" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<img src="https://th.bing.com/th/id/R.e59ea229277c9f11793bbced0b4abbfc?rik=FrD4RPXsa6jhTQ&pid=ImgRaw&r=0" >

https://youtu.be/61u1HAbmMwg
https://youtu.be/QD9aNjDU9Ho
https://youtu.be/LaVM2XG4wvE
https://youtu.be/7HpCJov3Uj0
https://youtu.be/fU5BwlTz8Ws
https://youtu.be/obzDfVZ2kmk
https://youtu.be/6duZhHezK6A
https://youtu.be/8ergwYfOiJI
https://youtu.be/o8oghQgLJgY

[LiL_FERG::RANGE_ROVER::ALPHAREACiA_CLASSiCK](https://soundcloud.com/user-557982797/lil-ferg-range-rover?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing)
[SoundCloud Integrations](https://slashdot.org/software/p/SoundCloud/integrations)
## Hi Sartu RE:ONLiNE_ViDEOS
Well I got PiP picture in picture working just like youtube on [MiCROSOFT_EDGE](https://www.microsoft.com/en-us/edge/features). Just wait, at this point we are not going to be held back by youtube, and soundcloud is soundcloud, so lets do this. Its interesting to me the way your group uses soundcloud as like a versioning system like git where people are collaborating and leaving evidence, 
- This is where i am in my life
- This is who I am working with
- This is where I know I am going to be
A lot of affirmation style posting even among the guys. Im an early soundcloud adopter from my days at Georgia_Tech_Research_iNSTiTUTE. I liked scrobbling on [Last.fm](https://www.last.fm/) so that got most of my attention because I could influence my radio plays by what was in my library by simply using [RhythmBox on Linux](http://www.rhythmbox.org/) and hitting a like type button. It gave me a lot of music I cant imagine ever have gotten. Here on soundcloud Im just making playlists and flirting

[Rhythmbox - A Complete Guide - LinuxForDevices](https://www.linuxfordevices.com/tutorials/linux/rhythmbox)
```
Rhythmbox is a great application, especially for beginners, you can link most if not all of your online music accounts, stream directly from your SoundCloud server, listen to podcasts, and well, local media playback is already there. Settings and menus are easy to use and understand. Hopefully, you will find this application useful.
```

<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/screenshots/Screenshot%202022-08-01%206.38.41%20PM.png">


#### I wonder if this was connected to the prostitution takeover of Social_Media? Other than Muni's faked cancer death that left me victim to predator Danielle_Mushonga it was actually hard all of a sudden to get a job, and Sartu got kidnapped following Erika.
[##SLASHDOT::2017::SoundCloud Lays Off Nearly Half Its Staff, Closes Two Offices](https://entertainment.slashdot.org/story/17/07/06/2222252/soundcloud-lays-off-nearly-half-its-staff-closes-two-offices)
<img src="https://i.ytimg.com/vi/mmkdRG7MQm4/maxresdefault.jpg">

[Ultimate WipEout Mix [All songs]](https://soundcloud.com/insightsaudioartgallery/ultimate-wipeout?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing)
[Wipeout 2097 - Original Soundtrack (1996)](https://youtu.be/mmkdRG7MQm4)
<a href="https://www.kickstarter.com/projects/1400947701/drumpants-an-entire-band-in-your-pocket/description">DrumPants: An Entire Band in your Pocket :: KiCKSTARTER </a>

[HEALTHY_PROGRAMMiNG_MUSiC NIGHT DRIVE - [synthwave - chillwave - retrowave mix]](https://www.youtube.com/watch?v=QAhvvQQurw4) 

[Animal Farm: The Graphic Novel by Odyr (Adaptor, Illustrator), George Orwell](https://www.goodreads.com/book/show/43261020-animal-farm)

<h2> Normani_my_WiFE featuring my wife_Cardi_B::WiLDSiDE </h2>

  <video controls preload="none"controls width="100%" >
     <source src="https://github.com/ThakaRashard/bubblegumpop/raw/gh-pages/video/NormaniWildSideOfficialVideoftCardiB.mp4" type="video/mp4">

   </video>
  


<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/WiLDSiDE_BEHiND_THE_SCENES.PNG" > 
<a href="https://www.youtube.com/watch?v=FOm8LqH5lz8&t=205s" alt="WHY_THE_SEAMSTRESS_FEELiNG_ON_MY_WIFE_BREAST">Cardi B x Megan Thee Stallion - Inside the WAP (BTS) [Part 1] </a>
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/DEAR_KASH_DOLL_MAYBE_WE_SHOULD_LET_OLD_PEOPLE_WITHOUT_GENITAL_CONTACT_DJ.PNG" >
<a href="https://youtu.be/DAc1MXEOLgY" alt="WHY_THE_SEAMSTRESS_FEELiNG_ON_MY_WIFE_BREAST">DEAR_KASH_DOLL_MAYBE_WE_SHOULD_LET_OLD_PEOPLE_WITHOUT_GENITAL_CONTACT_DJ,HOUR_WEDDiNG </a>
<a href="https://youtu.be/DAc1MXEOLgY" alt="WHY_THE_SEAMSTRESS_FEELiNG_ON_MY_WIFE_BREAST">SarTu, like Kool DJ Red Alert check him out on<span class="neonText"> 98.7 Kiss-FM </span> (12-4-88) </a>


<a href="https://www.thejacobsonfirmpc.com/" alt="WHY_THE_SEAMSTRESS_FEELiNG_ON_MY_WIFE_BREAST"><span class="neonText"> Dear Jacobson Firm </span> </a>
<p>My wife Sartu was kidnapped from Alpharetta Georgia January of 2021 and was prostituted across country by a child molestation ring/regime led by Matt Field of the prostitution crews GNK/REM_aka_GRAB_NEW_KNiCKERS&amp;RED_EYE_MOB_aka_RABBiT_EYE_MOVEMENT. Sever of MSK is also involved and from my understanding Swiss beats. Whom by the way I saw Alicia Keys in prostitution in Hollywood on the walk of fame... they have a flamboyant characature look that the people from Atlanta know from <a href="https://www.imdb.com/title/tt0118663/?ref_=nm_flmg_act_43" alt="WHY_THE_SEAMSTRESS_FEELiNG_ON_MY_WIFE_BREAST"><span class="neonText">Halle_Berry's B*A*P*S</span> </a>
You know prostitution clans often send the sex slaves out with themes like maids, police etc... Villiage People type shit. You are in the recording industry, she was a fellow instructor at Dance411 on moreland ave. You got a lot of LaFace records on your wall I know you know someone that can get me to my family. Muna was supposed to be dead but she Erika, and my 10 year old Coral are in prostitution. You may have heard about the RnB_Molestors of yester year calling her LaRoc. I just know you know something that can reunite us, because Muna singing as Muni Long on Jimmy Kimmel and her friends who sold her into prostitution took me to a staged funeral where they had duped the whole family into attending, That was my last free conversation with Sartu, now shes some hairy bastards prostitute and I have had to defend myself from Organ Harvesting, particularly the penis choppers. Riad and Travis Scott would menace me about Organ harvesting both of us in front of our clan, children and all AM57, that what we call ourselves. You guys never skate or paint graffiti so you dont get that we are the continuation of a legendary Atlanta Art Collective AM7(according2_REVOK_challenged_by_HAZE_CMH) and we need protection to create art and now we are into Web Development. I am a polygamist, ask Ella Mai, verify me and help us stop their sex trafficking... HUMAN_TRAFFiCKiNG_iS_HiGHLY_iLLEGAL
</p>
<img src="https://www.thejacobsonfirmpc.com/wp-content/uploads/2016/12/kash-logo-reg.jpg">
<img src="https://www.graffiti.org/atl/am71.jpg"> 

<img src="https://www.graffiti.org/atl/anime4.jpg">

[WHOSAMPLED::MiSSYs_SAMPLES_FOR_MY_STRUGGLES](https://www.whosampled.com/Missy-Elliott/My-Struggles/)	
[DEAR_CORAL_MEYU_JABDU_NiNE_CYNTHiA_WONDERFUL_YODA ya aunt gonna have a baby in some time and I want you guys to practice being alert to each others needs and reporting to your mothers](https://www.msn.com/en-us/lifestyle/family/big-brother-warns-mom-about-baby/vi-AAZZKKQ?ocid=msedgntp&cvid=65ab8bc11ab0406f856d2ccf79bede7b&category=foryou)

[The Original HTAU_BLOG](https://thakarashard.github.io/holetoanotheruniverse/)
[News about Akihabara Mass Murderer Execution](https://www.bing.com/search?q=Akihabara+mass+murderer+execution&efirst=0&ecount=50&filters=tnTID%3a%226D9DC016-9522-461b-A44D-BA47553D22AB%22+tnVersion%3a%224680267%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%221%22+tnOrder%3a%229fd365cb-dcf8-4241-8eab-ca8d94400258%22&form=HPNN01)
[THE_CROWN_PROSECUTION_SERVICE](https://www.cps.gov.uk/)	
[THE LAND OF NO MEN: Kenya's Women-Only Village](https://www.youtube.com/watch?v=-QY8FALExGA)
<span class="neonText">አዳምም አለ። ይህች አጥንት ከአጥንቴ ናት፥ ሥጋም ከሥጋዬ ናት፤ እርስዋ ከወንድ ተገኝታለችና ሴት ትባል።</span>
<p> Dear Sartu, since California has a climate very similar to ##ETHiOPiA_as_WE_KNOWiT. Coffee might be a good crop in addition to cannabis. Tobacco maybe? I spent time with our family in  

[REiDsViLLE](https://en.wikipedia.org/wiki/Reidsville,_Georgia)
where my family friend Coalas and Fred jr grew at an eary pre-Watchtower point Tobacco, and later to sqaush, melons, and leafygreens. I did not know that tobacco bit, however Vickye used to always spout off details about the family members of their Georgia settlement as it was described to me. So anyway after getting aquainted with "Brother" Benny Willams I always looked forward to a trip to hear on of his sermons. After the Kingdom hall there was a dinner at a local familys house to give the speaker of the "talk" as we called them some <span class="neonText">HOSPiTALiTY</span>. One one occasion they took Vickye and I to pick some squash from their still attatched to the vine squash farm lushilusly grown on thier small southern family commercial farm near Claxton where Colas worked. There wwas a cake factory that made mostly holiday fruitcake year around for the winter christian holiday Christmas. Them things dont tast that good but they last a long ass time. In this time of need Muna will not even bring me fruitcake... Just another Erika... But, since technology has ousted me at the money earning level from child molestation allegations, I think pursuing farming is an option I want to explore for my slice of caring for this family's needs
	</p>

[SEEDS OF GOLD: A faster way to grow coffee and earn from it](https://www.youtube.com/watch?v=PfGXrOuOeMU)
[African Village Life, Visiting Cows On A Farm, Drinking Raw Milk.](https://www.youtube.com/watch?v=VjXpM3A-lhY)
[FARM CLINIC: The 19th edition of Seeds of Gold](https://www.youtube.com/watch?v=y1anIIH2eUU)
[DEAR_MUWAH_HERE_iS_MY_AGRiCULTURE_AUNTiE_TALK_TO_IMAN for DETAiL](https://www.youtube.com/watch?v=caNk4U6rO70)	
[DEAR_MUNi__aaaaHem_MUNA if i could find your make up vids id like to make some gifs... I made some for Sartu](https://codepen.io/thakarashard/pen/JjLJOzZ)
[Most practical method for a secret demographic to get its news?](https://worldbuilding.stackexchange.com/questions/233206/most-practical-method-for-a-secret-demographic-to-get-its-news) 
[Census 2021 Prosecutions22 July 2021|Legal Guidance](https://www.cps.gov.uk/legal-guidance/census-2021-prosecutions)
[THE UK's CROWN_PROSECUTION_SERVICE SEXUAL_OFFENSE GUiDE](https://www.cps.gov.uk/crime-info/sexual-offences)
[DEAR_LOS_ANGELES_HOW_DO_WE_PROSECUTE CYBER_BULLYiNG?!?!?](https://www.cps.gov.uk/crime-info/cyber-online-crime)

 <video controls preload="none"width="100%" controls>
  <source src="https://videos.ctfassets.net/8cd2csgvqd3m/2lJPxUH5XqdTxFjyQi5peI/c9c2125c9aa081cd5ac7be7e4d5ec03e/Sound_And_Vision_For_Your_Home_Beolab_28___Beovision_Harmony_0003_Loop.mp4" type="video/mp4">
  
  Your browser does not support HTML video.
</video>

<h2>I need to get my daughter out of a molesters hands (・о・) </h2>
<h2 class="neonText"> Its been 757 days since I have seen our daughter ##CORAL_IRIS_KELLY. </h2> 

Her mother mother Erika Renee Kelly was kidnapped on Feb 2,2020. A local Atlanta Matt Field bragged about it on Facebook stating "I_SOLD_HER. I found her near Venice beach California and my tattooist Kennie_Davis of ##Jolly_Roger_Tattoo in _Stockbridge#Georgia was not too far from the scene. Erika and I were not estranged when she disappeared as 
[ESSENCE_MAGAZiNE_STATED](https://www.essence.com/news/erika-kelly-missing-atlanta-georgia/) we were coparenting. I was laid off from my IT job at [Ionic Security](https://www.linkedin.com/company/ionic-security) after my work was repeatedly sabotaged by my manager. I opened a case with ##Fulton_County_Family_Services two months before our eviction from our ##East_Atlanta_Home_at_631_Moreland_Ave_in_Atlanta_Georgia they failed to process us after repeated visits and calls. I took odd jobs and even scored a mural gig with 
[Mercedes_BenZ_Stadium](https://mercedesbenzstadium.com/) for the 
[Atlanta_Falcons](https://www.atlantafalcons.com/). They paid me $1500 for a 40ft graffiti mural on red canvas for former athlete ##Deion_Sanders. I was severely underpaid but it covered the rent for one more month. I moved in with Constancia and her daughter ##Akeeva, got Coral in school at 
[Chapel Hill Elementary](https://www.chapelhilles.dekalb.k12.ga.us/) and worked hard to get a new 9-5. Constancia did not like me or Coral living with her and Akeeva so they undercut me with accusations of erratic behavior and started thier own dfacs case accusing me of schizophrenia. I had no income and was repeatedly denied foodstamps and welfare by a woman named ##DANIELLE_MASHONGA_and_her_colleage##MANESSA_WARNER... ##Coral would ask
<h2> Where_is_mommy?!?</h2>

I told her that Matt stole and raped her and she needs our help, so we have to keep looking. Constancia and Akeeva constantly defended Matt. He is a known pedophile and child and adult rapist in the Atlanta art community. I did not know this. We shopped at the same record store and he often offered me work. I loath rapist. I loath pedophilia. Once I learned of his ways I distanced myself. So ##Erikas_mother_and_sisters_DEFENDING_HIM, struck me as bizarre. "##Its_just_a_white_boy_joke##He_didnt_sell_her". 
[DFACS](https://dfcs.georgia.gov/) stalked me on Facebook and indirectly accused me of ##CHILD_MOLESTATION for a video where we were playing with a wand style muscle massager, it was innocent. They 
[forcibly removed Coral](https://www.youtube.com/watch?v=AmYdIZhahrQ) saying that I was saying 
["inappropriate things"](https://www.youtube.com/watch?v=9sCE3HhjSbY) and violating her by saying that her mom had been raped and kidnapped. I learned that telling Coral the ugly truth was the best way to keep a solid trust filled relationship with her. In the DFACS meeting, puzzled I told Mashonga the truth, I cant find work, my reputation was being sabotaged and I could not even get a job at ##Kroger the local grocery store. I told Mashonga I needed money for food, Constancia would not feed niether me or Coral. I asked Mashonga in 
[This_Family_Meeting](https://www.youtube.com/watch?v=Q8NXhT6_Tx8) if she cared about me dying on the street and she shook her head, no. I was never interviewed with Coral at all, I never got a psych eval until I got to a ##UCLA_Recoup_Center_in_PalmDale_California. In early October I saw Coral, in Pasadena, ##California, with a grown man wearing fishnet stockings... Shes 9. I was shot with a poison dart one day later, my skateboard stolen and my foot began to swell larger that a shoe could fit... I was rushed to the emergency room and ##UCLA ##Cut_my_foot_to_the_bone_to_drain_the_infection... I cant run as well any more and am now handicapped 

<iframe width="100%" height="315" src="https://www.youtube.com/embed/Q8NXhT6_Tx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="400" src="https://www.youtube.com/embed/9sCE3HhjSbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="400" src="https://www.youtube.com/embed/AmYdIZhahrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h2>Her_Former_Life_With_Me</h2>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/-oZuyrU764s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/CsM4jNSAm4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/ydGxlS8l7Y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<span class="neonText"> Dear Danielle_MAshonga, DFACS, DPSS
	WHERE_IS_CORAL?!?!?</span>	
<p>
<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-0281-1513267146.jpeg?crop=1xw:1xh;center,top&resize=768:*">	
<code>THANK_YOU_COSMOPOLiTAN for this article that highlights this device as one used in sports medicine</code>
Sex educator and artist Betty Dodson had been teaching her famous Bodysex workshops in New York City since the late 60s. These women-only workshops focused on teaching women how to masturbate. Dodson was a pioneer and advocate for the use of vibrators, ever since her lover in the late 1960s introduced her to an electric vibrator originally used for scalp massages. While Dodson <a href="http://www.dodsonandross.com/blogs/betty-dodson/2010/06/having-sex-machines-return-electric-vibrator" href="http://www.dodsonandross.com/blogs/betty-dodson/2010/06/having-sex-machines-return-electric-vibrator" target="_blank" data-vars-ga-outbound-link="http://www.dodsonandross.com/blogs/betty-dodson/2010/06/having-sex-machines-return-electric-vibrator">originally</a> While Dodson is widely credited with popularizing the Magic Wand, she received no compensation for her endorsement of the toy. Dodson added, "it's really shitty of [Hitachi] to not acknowledge my efforts and give me a percentage." || WRiTTEN_BY :: CARiNA_HSiEH 
	<a href="https://twitter.com/carinahsieh"> Carina's TWiTTER</a>
	<a href="https://www.linkedin.com/in/carina-hsieh-a8802458"> CARiNA_HSiEH's LiNKEDiN</a>
	<h3>THAKAS_THOUGHTS</h3>
	<a href="https://www.linkedin.com/in/danielle-mushonga-msw-26262132">DANiELLE_MUSHONGA's LiNKEDiN_PROFiLE (KiDNAPPiNG_SPECiALiST) </a>
	
	</p>

<iframe width="500" height="315" src="https://www.youtube.com/embed/UmGMZLs5NCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	
![NELLY_FOLKLORE](http://1.bp.blogspot.com/_UXXtJmb1kNs/Swsc7CGXUDI/AAAAAAAAEfw/e8t3BTnTl_M/s1600/FolkloreCassetteIndonesia2003.jpg)
<span class="neonText">
<a href="https://www.youtube.com/watch?v=Hj2mA1ZNPFA">Luther Vandross, Gregory Hines - There's Nothing Better Than Love</a> <a href="https://www.youtube.com/watch?v=m3-hY-hlhBg">Whitney Houston - How Will I Know (Official Video)</a> 
<a href="https://www.youtube.com/watch?v=hmHWiUv4wyM">Yolanda Adams - I'm Gonna Be Ready
</a> 
<a href="https://www.youtube.com/watch?v=Ptiz0KtR16E">Monica - Before You Walk Out Of My Life (Official HD Video)</a> 
<a href="https://www.youtube.com/watch?v=wa3tfVjGCQ8">Whitney Houston - Where Do Broken Hearts Go (Official Video)</a> 
<a href="https://www.youtube.com/watch?v=5ixh1csw2Mk">Count On Me (from "Waiting to Exhale" - Original Soundtrack)</a> 
<a href="https://www.youtube.com/watch?v=RSP-9SebVpY"> Tamia - Stranger in My House</a> 
<a href="https://www.youtube.com/watch?v=Xkj1An6Wnec"> Brandy - Have You Ever (Official Video) </a> 
<a href="https://www.youtube.com/watch?v=lSd1ll37xQU">Missing You - Brandy, Tamia, Gladys Knight and Chaka Khan [Set It Off Soundtrack] (Official Video)</a> 
<a href="https://www.youtube.com/watch?v=H947PtHmh0Y">Deborah Cox - Nobody's Supposed To Be Here (Official Video)</a> 
<a href="https://www.youtube.com/watch?v=Y36aBTuRr1o">Gladys Knight & The Pips - Save the Overtime (For Me)</a> 
<a href="https://www.youtube.com/watch?v=XYclWyC4qQo">Tom Browne - Funkin' for Jamaica</a> 
<a href="https://www.youtube.com/watch?v=pNj9bXKGOiI">Luther Vandross - Never Too Much (Official HD Video)</a> 
<a href="https://www.youtube.com/watch?v=XYclWyC4qQo">Tom Browne - Funkin' for Jamaica</a>
<a href="https://www.youtube.com/watch?v=Hj2mA1ZNPFA">Luther Vandross, Gregory Hines - There's Nothing Better Than Love</a>
አዳምም አለ። ይህች አጥንት ከአጥንቴ ናት፥ ሥጋም ከሥጋዬ ናት፤ እርስዋ ከወንድ ተገኝታለችና ሴት ትባል።</span>
<img src="https://images.squarespace-cdn.com/content/v1/58c35a0e579fb3281396b7f0/1536723653240-5XGYW66WX97I4YODRJPE/silver+embrace+FB_FB2048.jpg?format=750w">
<p><a href="https://www.brightfunds.org/funds/diversity-in-tech"> Dear Diversity in Tech</a> I am currently serving as a federal volunteer to get my family out of sex trafficking and I am robbed of opportunities to use the internet. The library system in Los Angeles has been very unsupportive, hovever Long Beach has givin me tools to maintain my webpresence here on ##GiTHUB but I am restricted to time limits and hand out computers with custom excluded search results. The social media companies locked me out so the could help the prostitution community molest my family. The prostitution community of Los Angeles is verified telepathic, and if you are a family member of a kidnapped sex slave used on <a href="https://exoduscry.com/watch/#traffickinghub-video"> ThePornoWeb</a> the mob steals your electronics and bans you from the library in little ways, like I got put out for "body odor" by a guy who purchased my wife at a brothel in ##LiTTLE_TOKYO... They call it blackballing, its highly illegal</p>

<a href="https://www.w3.org/Style/LieBos3e/em.en.html"> How To Style Text Elements with Font, Size, and Color in CSS </a>
<a href="https://www.w3.org/Style/LieBos3e/em.en.html">The amazing em unit and other best practices </a>
<a href="https://clagnut.com/blog/348/"> How to size text using ems </a>
<span class="neonText">አዳምም አለ። ይህች አጥንት ከአጥንቴ ናት፥ ሥጋም ከሥጋዬ ናት፤ እርስዋ ከወንድ ተገኝታለችና ሴት ትባል።</span>

[THiS_iS_NOT_HOW_HEALTHY_AFRiCA##OPERATES](https://www.youtube.com/watch?v=EPoXBbigVeo) 
[Sexuality: A Graphic Guide | Launch Event](https://youtu.be/jOIbOMWBHHM) 
[The Freeze Response and Sexual Assault: PTSD and Trauma Recovery](https://www.youtube.com/watch?v=pes7H4ECTdw) 
[6 Hidden Signs of Complex PTSD cPTSD](https://www.youtube.com/watch?v=44hqDT7NNHU) 
[What It’s Like to Break Up with a Narcissist](https://www.youtube.com/watch?v=CtllLbN1IAo) 
[Intimacy After Trauma | Kat Smith | TEDxMountainViewCollege](https://youtu.be/VB9-4kELT2k) 
[Relationships After Rape | Shelby St. Pierre | TEDxHamlineUniversity](https://www.youtube.com/watch?v=UC05PVN621k) 
[Men Need To Talk About Their Sexual Abuse | Seth Shelley | TEDxUNBC](https://www.youtube.com/watch?v=r4CIop1zlVM) 
[Men Can Be Sexually Assaulted, Too | CJ Krainock | TEDxRexburg](https://www.youtube.com/watch?v=PnoRVCqeM6U)
	
<video controls preload="none"style="max-width: 100%;" poster="/wordpress/wp-content/uploads/2022/01/unparalleled-extensibility-anim-opening2.jpg" autoplay="autoplay" loop="loop" muted="muted" width="1280" height="100%"><source src="https://ultimatehackingkeyboard.com/wordpress/wp-content/uploads/2022/01/unparalleled_extensibility-v3-60FPS-compressed-v2.mp4" type="video/mp4"></video>

<img src="https://cdn.shopify.com/s/files/1/0105/4542/products/wildstyle-downbythe-7inch-1_1000x1000.jpg?v=1651068862">
<a href="https://www.kickstarter.com/projects/1400947701/drumpants-an-entire-band-in-your-pocket/description">DrumPants: An Entire Band in your Pocket :: KiCKSTARTER </a>

[Compiz-like effects in Enlightenment 17](https://www.youtube.com/watch?v=TQPsCDJUti0) 
I want a Macintosh for a lot of SHIT!! BUT I think we will do better as 
[PODCASTERS_USiNG_LiNUX](https://rss.com/podcasts/bubblegumpop/)
. Download [UBUNTU_STUDiO](https://ubuntustudio.org/)
 if you have [access_to_a_computer](https://www.openglobalrights.org/covid-19-exposes-why-access-to-internet-is-human-right/)
 and 
 [INSTALL_TO_USB_SO_YOU_CAN_KEEP_YOUR_DATA_AND_THE_BUSiNESS_PORTABLE](h://help.uttpsbuntu.com/community/Ubuntu%20Studio%20Installation)

   I_PRAY_YOUR_PiMP_DOES_NOT_CHECK your orfices for [USB_STiCKS](https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/v2/78cc6b05-96fb-5cb0-b97c-1517ec410e89/ShortForm-Generic-480p-16-9-1409173089793-rpcbe5.mp4). When I can save up enough change Im gonna get a thinkpad replacement and run [ENLiGHTENMENT](https://www.elivecd.org/). I cant make a clear argument here but I want you to keep your head productive [,WATCH_THiS there are not many videos on this platform](https://www.youtube.com/watch?v=aCH18F4OtXQ). Those pimps are not smart and I pray they dont kill you. The rapes are bade enough. Remember the Chair rapes in VENiCE, and those sidewalk rapes. THIS_PLACE... We going to be ok, I will wait for you forever ok. You are not alone. I am still your husband, and only my penis can heal you. I miss our old webseries on iNSTAGRAM that moved to Facebook, then LiNKEDiN, then Facebook... They all hid your prostitution fueled [gangrapes](https://www.hindustantimes.com/videos/world-news/us-influencer-gangraped-in-pakistan-by-3-men-netizens-condemn-shameful-act-101658467051066.html) since their employees were buying you from sex traffickers. Its happening in a lot of places, I remember the johns of Venice laughed at you not remembering that they hit it as they menaced me on the boardwalk [U.O.E.N.O TYPESHiT](https://www.youtube.com/watch?v=cMJrfSTI0Xg).
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
     <a href="https://www.youtube.com/watch?v=CGib6okEeZ4"><img src="https://pbs.twimg.com/media/FN_BTKZXsAQRoHj?format=jpg&name=large" alt=""> </a>
        
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>

           <a href="https://www.youtube.com/watch?v=CGib6okEeZ4"> <img src="https://pbs.twimg.com/media/FN_BTKZXsAQRoHj?format=jpg&name=large" alt=""> </a>
        
      </div>
    </div>
  </div>
</div>

[DEAR_ERiKA__LOOK_WHAT_I_CAN_DO_WITH_YOUR_OLD_SHITTY_ACER_RODRiCK_BROKE](https://www.youtube.com/watch?v=cH9WLrcsrx8) 
[KOOL & THE GANG - SUMMER MADNESS Relaxing Jazz Music Sunset Views](https://www.youtube.com/watch?v=xk8Vn0fjFdg)
[::COMPiZ_FUSiON_ON_UBuNTu_LiNUX:: DEAR_MAMA_IMAN__THiS_iS_HOW_MY_DESKTOP_LOOK_12years_AGO_ASK_HEATHER](https://www.youtube.com/watch?v=USedxVrU2Ko) [3D Rotating and Wobbly Window Effects in Kali | How to Install Compiz Fusion in Kali 2020.4 | Ethica](https://youtu.be/IwcwIAsqEgU)

<h1>TWiTTER_LiKE_PiNTEREST_AND_FACEBOOK & LiNKEDiN
##SUPRESSED_SARTU's
##MiSSiNG_PERSONS_CASE </h1>

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://www.2600.com/sites/default/files/covers/37-1_Cover.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://www.2600.com/sites/default/files/covers/37-1_Cover.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>	
<img src="https://pbs.twimg.com/media/DkDUjOeUYAEbikR.jpg" alt="thanks_MASE">
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.discogs.com/Y1pzcWA-kPrMw9NLQV6R4-dYsnZVQPGi2j_fBfCgQPk/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyODQ0/Ni0xNTU5OTgwNDc2/LTYwODUuanBlZw.jpeg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.discogs.com/T-L2xTARIsrx8rzvUEDDrYD098FtRE0NE7ht7eKJMdc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyODQ0/Ni0xNTU5OTgwNDY5/LTkzMDYuanBlZw.jpeg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.discogs.com/OVr4kl4u3jj0AT9f37sr9mVWYYQ_wgjFWZT5evQKKfI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNzY0/NC0xNDc2MjUzNjI5/LTk1NzEuanBlZw.jpeg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.discogs.com/5n7JtROk8V3nX0naL4kKY2ZFKAyPJrp7NIAJGiOI5jA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNzY0/NC0xNDc2MjUzNjI5/LTIxMDAuanBlZw.jpeg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>


<div class="flex-container-rounded">
   
   <div class="item1">                        <img src="https://lastfm.freetls.fastly.net/i/u/770x0/5e5870bb74a869c07600542752b1b2ad.jpg#5e5870bb74a869c07600542752b1b2ad" /></div>
    <div class="item2">                        <img src="https://lastfm.freetls.fastly.net/i/u/770x0/ebdd35113f4be57737d6946c0593a343.jpg#ebdd35113f4be57737d6946c0593a343" /></div>
    <div class="item3">                        <img src="https://lastfm.freetls.fastly.net/i/u/770x0/ac7851d7e2670c57465e115936512a06.jpg#ac7851d7e2670c57465e115936512a06" /></div>
</div>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My friend got married and i was a brides maid! <a href="https://t.co/vWMQ8OGNBK">pic.twitter.com/vWMQ8OGNBK</a></p>&mdash; 3:14 (@kashdoll) <a href="https://twitter.com/kashdoll/status/1547989813575331840?ref_src=twsrc%5Etfw">July 15, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/1NrDkE6sLZ">https://t.co/1NrDkE6sLZ</a> <a href="https://t.co/M6n5LV1kdq">pic.twitter.com/M6n5LV1kdq</a></p>&mdash; 3:14 (@kashdoll) <a href="https://twitter.com/kashdoll/status/1463400922684571653?ref_src=twsrc%5Etfw">November 24, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<img src="https://www.visitkingsland.com/index_htm_files/119934@2x.png" >	
<h2>BOOMBOX_VOL1</h2>
<div class="flex-container">
    <div class="item1">                        <img src="https://i.discogs.com/Dsk24e8GIPuc5dwhLmy_QMG4fJfUr1RGEdjZFJ8oxos/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1NTkw/ODItMTQ2NDAyNTYy/Ni0yMzY3LmpwZWc.jpeg" /></div>
    <div class="item2">                        <img src="https://media2.giphy.com/media/3o6Zt8esE7mxFelmdG/giphy.gif?cid=ecf05e477pe98kmyaoxqb9029v0zhfgs0u5ix5c59xe07ux9&rid=giphy.gif&ct=g" /></div>
    <div class="item3">                        <img src="https://i.discogs.com/Of600keNLtQPGnRCgnw3EitVFxy0k3oqlUJqfEa8x_Y/rs:fit/g:sm/q:90/h:528/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1NTkw/ODItMTQ3MjMyNDI5/MS0xMjA2LmpwZWc.jpeg" /></div>
</div>

```
Boombox 1 (Early Independent Hip Hop, Electro And Disco Rap 1979-82)
Label:	Soul Jazz Records – SJR CD334
Series:	Boombox (4) – 1
Format:	
2 x CD, Compilation
Country:	UK
Released:	May 20, 2016
Genre:	Hip Hop, Funk / Soul
Style:	Disco
```
<h2>Since i couldn’t remove all my tattoos I’m getting them covered</h2>

[https://twitter.com/kashdoll/status/1129563640259121153/photo/1](https://twitter.com/kashdoll/status/1129563640259121153/photo/1)

<div class="sixpanel">
  <div class="item1"> <img src="https://pbs.twimg.com/media/D60EAyRU8AA6HPZ?format=jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item2"> <img src="https://pbs.twimg.com/media/D60EAyRU8AA6HPZ?format=jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item3"> <img src="https://pbs.twimg.com/media/D60EAyRU8AA6HPZ?format=jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
</div>

<h2>TRYiNG_SOME_BOX_POST_LAYOUTS_OWT</h2>

<div class="flex-container">

  <div class="item1">                        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/DEAR_SARTU_IM_READY_FOR_FALL_FEELINGS.gif" /></div>
    <div class="item2">                        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/DEAR_SARTU_IM_READY_FOR_FALL_FEELINGS.gif" /></div>
    <div class="item3">                        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/DEAR_SARTU_IM_READY_FOR_FALL_FEELINGS.gif" /></div>
</div>

<div class="flex-container">

  <div class="item1">                        <img src="https://pbs.twimg.com/media/FOZKA0UWQAEe0GL?format=jpg&name=small" /></div>
    <div class="item2">                        <img src="https://pbs.twimg.com/media/FOZKA0UWQAEe0GL?format=jpg&name=small" /></div>
    <div class="item3">                        <img src="https://pbs.twimg.com/media/FOZKA0UWQAEe0GL?format=jpg&name=small" /></div>
</div>


<div class="panel4-container">
 
  <div class="item1"><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/ezgif.com-gif-maker%20(2).gif"></div>
    <div class="item2"><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/ezgif.com-gif-maker%20(2).gif"></div>
    <div class="item3"><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/ezgif.com-gif-maker%20(2).gif"></div>
    <div class="item4"><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/BUBBLEGUMPOP7192022/ezgif.com-gif-maker%20(2).gif"></div>

</div>


<iframe width="80%" height="315" src="https://www.youtube.com/embed/I1aoRQhqM1k" title="Elive Linux 3.0 Stable Designs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	
<img src="https://lastfm.freetls.fastly.net/i/u/770x0/18db0c622371cacc1d60a57e90f642da.jpg#18db0c622371cacc1d60a57e90f642da">

[Top 5 Best Lightweight Linux distros for Speed and Performance](https://www.youtube.com/watch?v=CnFPCTi5h5c)

[::RESEARCH_PAPER::Audience's behavior and attitudes towards lifestyle video blogs on Youtube Ellina Mironova](https://www.diva-portal.org/smash/get/diva2:1481546/FULLTEXT01.pdf)

[::RESEARCH_PAPER::Information superhighways Research Paper 94/133 22 December 1994](https://ntouk.files.wordpress.com/2015/06/1994-information-superhighway.pdf)

<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/Screenshot%202022-07-24%208.23.07%20PM.png" >

<h2>
## UK_PARLiMENT
## Responds to Home Affairs Committee report
## on the investigation and prosecution of RAPE 
</h2>
<p> 
<h1>Government responds to Home Affairs Committee report on investigation and prosecution of rape</h1>
    <h3>25 July 2022</h3>
    
        <img aria-hidden="true"
                 alt="Image representing news article"
                 class="width-70 with-reflection-effect"
                 src="https://www.parliament.uk/contentassets/1d8be4299eb24cb593f59647b14ad8fb/pc-pch-committee-room-1-standard-1.jpg" />
        <h2>The Home Affairs Committee publishes the Government&rsquo;s response to its report into the investigation and prosecution of RAPE</h2>
                 
<a href="https://publications.parliament.uk/pa/cm5803/cmselect/cmhaff/507/report.html">Read the full report (HTML)</a></li>
<a href="https://committees.parliament.uk/publications/23242/documents/169628/default/">Read the full report (PDF)</a></li>
<a href="https://committees.parliament.uk/work/1160/investigation-and-prosecution-of-rape/publications/">Find all publications related to this inquiry, including oral and written evidence</a>

<p>The report found that the collapse in prosecutions for rape and sexual offences over the last five years could not be reversed without strong reforms to the criminal justice system. While it welcomed efforts to initiate change in the CPS, policing and the court system, it warned that such reforms were localised or in development and would require significant funding and effective leadership to make an impact at national level. It also warned that the current target of returning the volumes of rape cases being dealt with to 2016 levels lacked ambition, given that, even in 2016, criminal justice outcomes for rape were viewed as poor. The Committee expressed concern that confidence in the system&rsquo;s ability to even reach 2016 levels in the timeframe the Government has set out is low.
<p>The report called for a focus on the experience of victims attempting to navigate the justice system. Lengthy delays in cases reaching court, difficulties in accessing support services and seemingly unnecessary and excessive requests for victims&rsquo; personal data from the police and the CPS needed to be addressed. It also found that dedicated rape teams and specialist training for officers made a real impact but such teams were yet to be set up in many forces.</p>
<p>The Government has now responded to these recommendations
<h2>Further information</h2>
<a href="https://committees.parliament.uk/work/1160/investigation-and-prosecution-of-rape/">Inquiry:: Investigation and prosecution of rape</a>
<a href="https://committees.parliament.uk/committee/83/home-affairs-committee/">Home Affairs Committee</a>
<a href="https://www.parliament.uk/about/how/committees/select/">About Parliament: Select committees</a>
<a href="https://www.parliament.uk/visiting/visiting-and-tours/watch-committees-and-debates/committees/">Visiting Parliament: Watch committees</a><
<em>Image: Parliamentary copyright</em>
</p>
	
<h2> DEAR_SARTU::///////_I_AM_READY_FOR_MY_VOWS</h2>
<div class="sixpanel">
<div class="item1"> <img src="https://lastfm.freetls.fastly.net/i/u/770x0/9d6d3b16944b6ee2bab5f04b20c445a8.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item2"> <img src="https://lastfm.freetls.fastly.net/i/u/770x0/9d6d3b16944b6ee2bab5f04b20c445a8.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item3"> <img src="https://lastfm.freetls.fastly.net/i/u/770x0/9d6d3b16944b6ee2bab5f04b20c445a8.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
</div>
	
<div class="sixpanel">
 <div class="item1"> <img src="https://i.pinimg.com/736x/c4/09/c3/c409c3ab371521c0abfa7466ff9d2976.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item2"> <img src="https://i.pinimg.com/736x/c4/09/c3/c409c3ab371521c0abfa7466ff9d2976.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item3"> <img src="https://i.pinimg.com/736x/c4/09/c3/c409c3ab371521c0abfa7466ff9d2976.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
</div>

<div class="sixpanel">
  <div class="item1"> <img src="https://lastfm.freetls.fastly.net/i/u/770x0/574e8d8380f296deb01bf129fe3052fd.jpg#574e8d8380f296deb01bf129fe3052fd" /></div>
  <div class="item2"> <img src="https://lastfm.freetls.fastly.net/i/u/770x0/574e8d8380f296deb01bf129fe3052fd.jpg#574e8d8380f296deb01bf129fe3052fd" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item3"> <img src="https://lastfm.freetls.fastly.net/i/u/770x0/574e8d8380f296deb01bf129fe3052fd.jpg#574e8d8380f296deb01bf129fe3052fd" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
</div>

<img src="https://assets.catawiki.nl/assets/2018/12/3/9/a/2/9a263ccf-3c79-49e7-a7fb-cf9bb0fb350e.jpg" >
<img src="https://i0.wp.com/wemissmusic.com/wp-content/uploads/2018/07/dexdlmwxuaawpod1.jpg?fit=864%2C393&ssl=1">	

<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.discogs.com/kdwQw1UT7Vc69KdJ1PxNVHMvtFCzxIuEMNYn-PIboEY/rs:fit/g:sm/q:90/h:585/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgyNDg4/MjQtMTQ5NTAxNTgx/MC05NDg3LmpwZWc.jpeg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://th.bing.com/th/id/R.e06536c1ec6efef97081522f2a76d43b?rik=BuBzf4Xg2uYZBg&riu=http%3a%2f%2fimage.iheart.com%2fbell-ingestion-pipeline-production-umg%2ffull%2f00602567295594_20201217024811397%2f17UM1IM41552_T1_cvrart.jpg&ehk=dghvoDahI4fnpNEl0P1TTuK17kq%2b3vlShRdYkQpNbb4%3d&risl=1&pid=ImgRaw&r=0" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT"> 
      </div>
    </div>
  </div>
</div>

[Armageddon It · Def Leppard](https://www.youtube.com/watch?v=GgUnqQbNzoE)


# SARTUs_PROPOSAL_PLAYER
Dear_SARTU
Im working on this embeddable player. Hint, Hint, chuckles... iN_BED_ABLE. I need you bad, im so lonely. You have been run through my playlist confirms its time for you to heal and recover. Here, im working on it but its not working on the page. I just dont know the answer so Im studying JavaScript. Its the prerequisite for [Node.js Competency](https://nodejs.org/en/)<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="PoREzyQ" data-user="thakarashard" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/thakarashard/pen/PoREzyQ">
  HTML Audio Player</a> by ThakaRashard (<a href="https://codepen.io/thakarashard">@thakarashard</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

#### HEATWAVE = VENiCe_HOLLYWiERD_JON_CULTURE
### A_PiMP = A_HUSBANDS_DELiQUENT_JON

[Gangsters of the Groove · Heatwave](https://www.youtube.com/watch?v=AyHhzwEhygQ)
[Posin' Til Closin' (UK 12" Version) · Heatwave](https://www.youtube.com/watch?v=2L6aw0Pba-M)
[DEAR_PROSTiTUTiON - You Give Love A Bad Name](https://youtu.be/KrZHPOeOxQQ)
[Hollywood Boulevard Walking Tour - Los Angeles, California](https://www.youtube.com/watch?v=WBhhOjwVeKw)
<h2>	(╯°□°)╯︵ ʞooqǝɔɐɟ </h2>

[Ai No Corrida - QUINCY JONES '1981](https://www.youtube.com/watch?v=fXmmWBzS-_o)
[Stomp! · The Brothers Johnson](https://www.youtube.com/watch?v=TFY1_zZ5Nc4)
[DEAR_MONALEO, GROOVY_YOUTUBE_FiND ~> M.i.c.h.a.e.l * J.a.c.k.s.o.n - Off The Wall (1979)](https://www.youtube.com/watch?v=aDH1EPqyMb4)
[Strawberry Letter 23 · The Brothers Johnson](https://www.youtube.com/watch?v=rquygdjf0d8)
[Footsteps in the Dark, Pts. 1 & 2](https://www.youtube.com/watch?v=Dyq9zlYMw9g)
[Voyage to Atlantis](https://www.youtube.com/watch?v=BQ4jWVon4iE)
[DEAR_QUXUBE ThiS_iS_2015_JPL_COMMUTE_JAMS_LALiBELA_KNOW_EVERYTHiNG L.T.D. Jeffery Osborne](https://www.youtube.com/watch?v=nXePgT3JiH0)
[SWV - Rain (Official Video)](https://www.youtube.com/watch?v=QQyXHfOy1UU)
[SWV - Use Your Heart](https://www.youtube.com/watch?v=0N5hZvXi51c)
[Encore (Extended Version)](https://www.youtube.com/watch?v=ABX0PQjkaLk)
[Jones Girls Who Can I Run To 1979)(240p H 264 AAC)](https://www.youtube.com/watch?v=JRpKQb9J-nU)
[The Jones Girls - Children of the Night (Official Soul Train Video)](https://www.youtube.com/watch?v=9mCuHtX0Lao)
[The Jones Girls - Nights Over Egypt](https://www.youtube.com/watch?v=pzxwZ6wjDAM)
[52nd Street - Tell Me](https://www.youtube.com/watch?v=3Ck25PGjlLc)
[The S.O.S. Band ‎– No One's Gonna Love You 1984](https://www.youtube.com/watch?v=3DDeZVnK2E0)
[S.O.S. Band- Even When You Sleep](https://www.youtube.com/watch?v=aX0wGKIgSZU)
[WEEKEND GIRL (Original Full-Length Album Version) - SOS Band](https://www.youtube.com/watch?v=8BvuSzxcE5o)
[The S.O.S. Band - Tell Me If You Still Care](https://www.youtube.com/watch?v=GSsTyAVP5j0)
<img src="https://api.time.com/wp-content/uploads/2012/11/41-2012-11-28t080803z_49263854.jpg">

[Driving Downtown - Los Angeles 4K - USA 4yearsAgo](https://www.youtube.com/watch?v=Cw0d-nqSNE8)

Home to the world’s 3rd largest economic area, after Tokyo and New York ($866 Billion in 2015), Los Angeles is the second-most populous city in the United States after New York City. With 4 Million residents and almost 19 Million in the surrounding area, Los Angeles is the largest and most populous city in the state of California and the cultural, financial, and commercial center of Southern California.

The economy of Los Angeles is driven by international trade, entertainment (television, motion pictures, video games, music recording, and production), aerospace, technology, petroleum, fashion, apparel, and tourism. Other significant industries include finance, telecommunications, law, healthcare, and transportation. In the 2017 Global Financial Centres Index, Los Angeles was ranked as having the 19th most competitive financial center in the world, and sixth most competitive in United States (after New York City, San Francisco, Chicago, Boston, and Washington, D.C.).

Los Angeles is located in a large basin bounded by the Pacific Ocean on one side and by mountains as high as 10,000 feet (3,000 m) on the others. The city proper, which covers about 469 square miles (1,210 km2), is the seat of Los Angeles County, the most populated county in the country. 

Los Angeles is the center of the Los Angeles metropolitan area, with 13.1 million residents the second largest in the United States after New York City. It is part of Los Angeles-Long Beach combined statistical area, also the second most populous in the nation with a 2015 estimated population of 18.7 million.

Historically home to the Chumash and Tongva, Los Angeles was claimed by Juan Rodríguez Cabrillo for Spain in 1542 along with the rest of what would become Alta California. The city was officially founded on September 4, 1781, by Spanish governor Felipe de Neve. It became a part of Mexico in 1821 following the Mexican War of Independence. In 1848, at the end of the Mexican–American War, Los Angeles and the rest of California were purchased as part of the Treaty of Guadalupe Hidalgo, becoming part of the United States. Los Angeles was incorporated as a municipality on April 4, 1850, five months before California achieved statehood. The discovery of oil in the 1890s brought rapid growth to the city. The completion of the Los Angeles Aqueduct in 1913, delivering water from Eastern California, later assured the city's continued rapid growth.

Nicknamed the "City of Angels" partly because of its name's Spanish meaning, Los Angeles is known for its Mediterranean climate, ethnic diversity, and sprawling metropolis. The city is also one of the most substantial economic engines within the nation, with a diverse economy in a broad range of professional and cultural fields. Los Angeles is also famous as the home of Hollywood, a major center of the world entertainment industry. A global city, it has been ranked 6th in the Global Cities Index and 9th in the Global Economic Power Index. The Los Angeles combined statistical area also has a gross metropolitan product of $831 billion (as of 2008), making it the third-largest in the world, after the Greater Tokyo and New York metropolitan areas. Los Angeles hosted the 1932 and 1984 Summer Olympics and will host the event for a third time in 2028.

<img src="https://static0.thetravelimages.com/wordpress/wp-content/uploads/2018/09/HawaiiVolcano.jpg">

[The Very Best Of Soul - Teddy Pendergrass, The O'Jays, Isley Brothers, Luther Vandross, Marvin Gaye](https://www.youtube.com/watch?v=VzBvDChOvrU)
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/2.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/1.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/3.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/4.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/5.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/DEAR_SARTU_IM_READY_FOR_FALL_FEELINGS.gif" >
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/6.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/6.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT"> 
      </div>
    </div>
  </div>
</div>
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/NO_SO_CHOOSY_SAUTUZEE.gif">
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/7.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/8.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/9.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/10.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/11.jpg">
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/scans/12.jpg">

## Dear_Muna___MuwaH___MuNi
### whatever it is these days
Please share this book with the kids, ERika Id like Coral and Nine to link together someday. Id love to read this to them at the #BiLLY_JEAN_LiBRARY, if I get approved for some work with kids shit by the community. [The Read Aloud Cloud: An Innocent's Guide to the Tech Inside](https://onlinelibrary.wiley.com/doi/book/10.1002/9781119677635) Is a huge gift from the older dudes of our iNFORMATiON_TECHNOLOGY era. I wanna share it with the family family study style so we can all be hip to how to treat <i>THE_CLOUD</i> and stay safe from these kidnappers and treasonist human traffickers that have used social media to frame, blackball, and torture your husband. 

#### EXCERPT_CHAPTER_SUMMARY
```
Summary
This chapter illustrates how to foil a cloud heist through cartoons. The cloud is not less secure than a personal hard drive. However, because cloud systems centralize large amounts of data, the actions of a single hacker can be devastating. Like the 2013 Yahoo breach that exposed more than one billion user accounts, or Dropbox's 68-million-user barf that ended up with hackers selling the stolen accounts on the dark web for bitcoin. Even if the hackers cannot break into cloud systems, they can still take them down using an attack called a distributed denial of service. There are two ways to encrypt cloud data: at rest, meaning while the data is being stored somewhere, like in a database, and in transit, meaning while the data is flying through the Internet in little packets. Both are necessary to protect important data.
```

I want Heather, Lauren, Kelela, all the ladies you dont speak to and visit [LALiBELA in ##LiTTLE_ETHiOPiA](https://www.lalibelala.com/) with the children so you can ground them in habesha culture. Take Erika and Sartu and be brave I got a special person, I did not know I had... And she wanna make it real publicly. Lets get this cleaned up, these women need answers and its not fair for you to be held up by those gay ass pimps. Its affecting other peoples SEX_LiVES
[By the way this song dont work in our relationship, it sho sound good tho! ~> The S.O.S. Band - Just Be Good To Me](https://www.youtube.com/watch?v=UWVWVMIconI)
<img src="https://i5.walmartimages.com/asr/041f899d-197e-418f-a2e3-02c9f5ee833b.075d79e1b7053a276ac59192ac0f5a3d.jpeg">

[Cutie Pie](https://www.youtube.com/watch?v=hEpIQ9kX0tc)
[When I Hear Music](https://youtu.be/RNSuX4KoWWQ)
[Using em vs. rem in CSS by Lawrence Eagles](https://blog.logrocket.com/using-em-vs-rem-css/#:~:text=As%20mentioned%20before%2C%20em%20values%20are%20relative%20to,relative%20to%20the%20browser%E2%80%99s%20default%20font-size%20of%2016px.)
[Let the Music Play (12 Inch Version) - SHANNON::TOMMY_BOY FREESTYLE MUSiC](https://www.youtube.com/watch?v=NCSHF1rm3Y4)
[NuSHOOZ - I_CANT_WAIT](https://youtu.be/iNngC1Ea2rA)
[GOOGLE_WEB_FONTS](https://fonts.google.com/)
<img src="https://www.graffiti.org/oc/owie_aub.jpg">
<img src="https://www.graffiti.org/fresno/sleep-bed.jpg"> 
<img src="https://www.graffiti.org/fresno/sj014.jpg">
<img src="https://www.graffiti.org/fresno/sleepwall.jpg">
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://www.graffiti.org/fresno/sleepwall2.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://www.graffiti.org/fresno/sleepwall3.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT"> 
      </div>
    </div>
  </div>
</div>
<h2>	(╯°□°)╯︵ ʞooqǝɔɐɟ </h2>
<p>  <span class="firstcharacter">PiNTEREST LocksOutFATHERS"</span> 
It has been over two weeks since I have logged in. I found Sartu, my kidnapped wife from Ethiopia via ##ALPHARETTA. The previous time I found her she exclaimed "That's My Husband!!", and the captors refused to let her go. Im at a point in my life where I have gathered my life partners. The truth is that is too much power. I went to ##DANCE411 in Atlanta for sometime between parenting, working as a ##DevOps_ENGiNEER, and ##JiUJiTSU. A group of women that are blowing up the RnB Chitlin_Circuit of today chose me as thier dance husband... My from my understanding 4th cousin Muna and 8th cousin Sartu from ##ETHiO_SOMOLiA and about 10 other women decided we would start a business to support our artistic endevors and care for our children. They were all kidnapped with our children and sold into a ##PROSTiTUTION_MARKET_in_SOUTHERN_CALiFORNiA... We have relationships outdoors, but the pimps rape them systematically for use in a global ##SEX_TOURiSM_TRADE. The Human traffickers stole and steal everything I reaccquire to get on the internet. And when I travel to use computers at local librays in #LOS_ANGELES_COUNTY, I am severely stalked, attacked, poisoned with chemical weapons and randomly aharrassed. I was using pinterest to serve up internet content for our large families spiritual needs. Those of us from Africa are Muslims, and we had a semi-healthy stint with Jehovahs Witnesses. So we are a very spiritually minded family. However many of the pimps are anti god that we are dealing with... People on the late night show and everything are involved. Long story short.. Pinterest was our watering hole. I could post content bulletin board #style, and interact with my wives and children in passing as we wait for my old job JPL to step in   the CIA/FBi/US_MARSHALLS and other services in law enforcement has helped us contact since Erikas dissapearance was taken in by the ##DEKALB_COUNTY_SHRIFFs office and they told me to post constantly to stay visible... People dissapear when the dont post in this era of ##ECONOMIC_ASSASINATION_of_FATHERS_FOR_THE_PURPOSE_OF_PROSTITUTITUING_HEALTHY_FAMiLiES
</p>
<img src="https://www.graffiti.org/fresno/sleepwall7.jpg">

[Billy Ocean - Get Outta My Dreams, Get Into My Car (Official Video)](https://www.youtube.com/watch?v=zNgcYGgtf8M)
[BiLLY_OCEAN::Caribbean Queen (No More Love On the Run)](https://www.youtube.com/watch?v=VOiZC020nl0)
[fontsquirrel](https://www.fontsquirrel.com/)
[Change - The Glow Of Love [HQ]](https://www.youtube.com/watch?v=UMOJvKD_26I)
[It Never Rains (In Southern California) - Tony! Toni! Toné!](https://youtu.be/Yp_5pQGTAtI)
[Tony! Toni! Toné! - ANNiVERSARY](https://www.youtube.com/watch?v=UviG2rGwi9A)
<img src="https://www.graffiti.org/fresno/hash1.jpg">
<img src="https://www.graffiti.org/fresno/werk2.jpg">

## WHO_WOULD?
### ROB_SARTU_OF_ALL_HER_EXOTiC_JEWELERY_FROM_THE_MiDDLE_EAST?
### ROB_HER_HUSBAND_OF_ALL_COMMUNiCATiON_DEViCES
### CONSPiRE_WiTH_MATT_FiELDS_ETHNiC_CLENSiNG
#### thats illegal
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://cdn.vox-cdn.com/thumbor/kCEW4Rfbc-eRrBAfJklXosGKOzc=/0x0:1157x656/1200x800/filters:focal(528x183:712x367)/cdn.vox-cdn.com/uploads/chorus_image/image/66512814/gettyimages_917140754_2048x2048.0.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://cdn.vox-cdn.com/thumbor/kCEW4Rfbc-eRrBAfJklXosGKOzc=/0x0:1157x656/1200x800/filters:focal(528x183:712x367)/cdn.vox-cdn.com/uploads/chorus_image/image/66512814/gettyimages_917140754_2048x2048.0.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT"> 
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://images.fineartamerica.com/images-medium-large-5/usa-nevada-black-rock-desert-jaynes-gallery.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT">
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://images.fineartamerica.com/images-medium-large-5/usa-nevada-black-rock-desert-jaynes-gallery.jpg" alt="SARTU_IM_SAD_THEY_ROBBED_YOU_I_RESPECT_YOU_AS_KASHDOLL_AS_WELL_THEY_DONT"> 
      </div>
    </div>
  </div>
</div>

### SUBURBAN_WIFEY_NiGHTMARE
[KASHDOLL ROBBED IN LA!!!](https://www.youtube.com/watch?v=6s4slL3_jtI)

## I saw Quxube on this hair channel once
[How To: Install U Part Wig | Natural Wig || Ft. Nadula Hair](https://www.youtube.com/channel/UCn2JXG1R8JPdae0egLPYJsw)
## i210_2015_commute
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/137559595&color=%23222222&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/anthonyn98" title="Sneakyyy" target="_blank" style="color: #cccccc; text-decoration: none;">Sneakyyy</a> · <a href="https://soundcloud.com/anthonyn98/barbed-wire-feat-ash-riser" title="Barbed Wire (feat. Ash Riser)" target="_blank" style="color: #cccccc; text-decoration: none;">Barbed Wire (feat. Ash Riser)</a></div>

<h1>DEAR_ERiKA_RENEE_JOHNSON_KELLY(selassie_if_Lauren_is_right)</h1>
[PLEASE_LiSTEN__iMiSSiNG_YOU_BEiNG_THAT_YOU_SO_FAR_AWAY](https://youtu.be/zRwLMC2wP0g)
<iframe width="95%" height="315" src="https://www.youtube.com/embed/FIwhUiwWb-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
## Dear THOMAS_KHELETi_YOUTUBE_iS_SCRAMBLiNG
## MY_RESULTS_SO_I_CANT_TALK_TO_QUXUBE
<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/QUXUBE_IS_SCRAMBLED.png " >

[DEAR_QUXUBE::CLASSiCK_BuSTA_RHYMES::Busta Rhymes - Put Your Hands Where My Eyes Could See](https://youtu.be/GSoQDaXh144)
[Tweet feat. Missy Elliott ‎– Oops (Oh My)](https://youtu.be/P5rqNyulfsQ)
[Slick Partna](https://youtu.be/Jd_pmCI74NY)
[That's Right by DJ Taz](https://youtu.be/xHLh0tZJfR0)
[So So Def Bass Allstars-Apple Pie](https://youtu.be/ycPFLmxM-BI)
[Kilo Ali- Freak How You Want It](https://youtu.be/9Ow--8nd2P4)
[Pressha - Splackavellie](https://youtu.be/XzbkF_msWk0)
[Playa - Cheers 2 U](https://youtu.be/0yvSkYpVZ_I)
[Faith Evans - Soon As I Get Home](https://youtu.be/ylB0BIVS20U)
[SWV - Weak](https://youtu.be/976b8TPPFJU)
[Xscape - Just Kickin' It (Official Video)](https://www.youtube.com/watch?v=w_BTEFAVwjU)
[Xscape - My Little Secret](https://youtu.be/iDHggk9NlN8)
[Xscape - Who Can I Run To](https://youtu.be/xLjyPBQk_Os)
[Xscape - The Arms of the One Who Loves You](https://youtu.be/5auQz0cWzbw)
[Dru Hill - These Are The Times](https://youtu.be/6wPkC3DO_7Y)
[Musiq Soulchild - So Beautiful](https://youtu.be/LgPpowVNEfE)


<i>QUXUBE, PLEASE PLAY_COMFORTABLY_LOUD</i>
## DEAR_MUNA::PLEASE_SHARE_WiTH_JABDU
His uncle, one of your brother in laws is in FXcrew... MSK_SEVER should not be there when he watches 

[‘FX CREW’ (Graffiti Writers Crew) New York, 1998 [RARE full graff art VHS documentary archive]](https://youtu.be/Jv7ECeiD1p4)
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/fxPaint.PNG">

## Beyonce::THeSe_SONGS_FOREVER_HEALiNG_ME
[Beyoncé - Me, Myself and I (Video Version)](https://youtu.be/4S37SGxZSMc)
<img src="https://i.discogs.com/KIHimth04lcZOjvotk_-0XFVWzRcEDseWe-HBLj7JvE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwMzcz/NjEtMTQ2Nzc0MDgw/Mi0yMTMzLmpwZWc.jpeg">

[Cara Delevingne Opens up About Those Weird Megan Thee Stallion Pics](https://www.pride.com/celebrities/2022/7/29/cara-delevingne-opens-about-those-weird-megan-thee-stallion-pics) [Cara, Have You Ever ft. BRANDY_KiDNAPPED_BY_SOME_PERVERT_NORWOOD](https://youtu.be/Xkj1An6Wnec) been accused of something awkward and did not get the chance to clear it up?! Id love to share our story for the ladies of Dance411 to verify so I can get my brides and children returned.

[Destiny's Child - Emotion](https://youtu.be/xWKdMmH0B-E)
[Destiny's Child - Cater 2 U](https://youtu.be/juqws1LIH-I)
[Destiny's Child - Girl](https://youtu.be/ZIszesDaK9U)

<div class="flex3BorderedPaddedROW">
  <div class="item1">
    <a href="https://youtu.be/UE6zfOuYfVI"><img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/monica.PNG" alt="MONiCA_KNOWS_MUNA_AND_##WE_ALL_NEED_FREEDM_FROM_PROSTiTUTION"> </a>
  </div>
  <div class="item2">
    <a href="https://youtu.be/UE6zfOuYfVI"><img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/monica1.PNG" alt="MONiCA_KNOWS_MUNA_AND_##WE_ALL_NEED_FREEDM_FROM_PROSTiTUTION"> </a>
  </div>
  <div class="item3">
    <a href="https://youtu.be/UE6zfOuYfVI"><img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/monica3.PNG" alt="MONiCA_KNOWS_MUNA_AND_##WE_ALL_NEED_FREEDM_FROM_PROSTiTUTION"> </a>
  </div>
</div>

[Monica - So Gone (Official Video)](https://youtu.be/UE6zfOuYfVI)
<h2>The general definition of abandonment is:</h2>
<ol>
  <li>Giving up or withdrawal of support from something or someone</li>
  <li>The act of leaving or deserting a person or property.</li>
</ol>
<h2>What is husband abandonment syndrome?</h2>

Spousal Abandonment Syndrome is when one of the spouses leaves the marriage without any warning, and—usually–without having shown any signs of unhappiness with the relationship. With spousal abandonment, there is often no outward sign that one of the spouses is frustrated or considering leaving the marriage.

<h2>Marital desertion (abandonment)</h2> 

Refers to a situation in which one spouse severs ties with the family, forsaking his or her responsibilities and duties to the family. Simply moving out of the family home in an attempt to create a temporary or permanent separation is not considered abandonment. The difference is often seen in the person’s refusal to provide necessary support... 
[ReadMore](https://www.midlifedivorcerecovery.com/spousal-abandonment-syndrome/#:~:text=Spousal%20Abandonment%20Syndrome%20is%20when,or%20considering%20leaving%20the%20marriage.)

<img src="https://raw.githubusercontent.com/ThakaRashard/film1/master/assets/images/DEAR_MEGAN_iiAM_WORKiNG_ON_EVERYONES_PUBLiC_PERCEPTION_THE_PORN_HAS_MESSED_US_ALL_UP_aND_WE_ALL_INNOCENT.png" >
<h2>	(╯°□°)╯︵ ʞooqǝɔɐɟ </h2>

[DEAR_MUNA::PLEASE_LiSTEN ~> Monica - Before You Walk Out Of My Life](https://youtu.be/Ptiz0KtR16E)
[Musiq - Halfcrazy](https://youtu.be/IP4V3TTC3fw)
[RKELLY::Trapped In the Closet (Chapters 1-5)::HiPHOP_RnB_OPERA](https://youtu.be/TVQv8Bh-RFY)
[Fantasia - Truth Is](https://www.youtube.com/watch?v=e265_NvKvRQ)
[TOKiMONSTA (feat. Yuna) - Don't Call Me (Official Video)](https://youtu.be/KMpED8Iy7L8)
[Toni Braxton - Just Be A Man About It ](https://youtu.be/wpaR3wzTlvo)
[Kelly Price - Friend Of Mine ft. Ronald Isley, R. Kelly, and SEVER_MSK](https://youtu.be/swP0h-K_Tss)
[The Isley Brothers - Contagious](https://youtu.be/-qnSz6Lh5pY)
[The Isley Brothers - Busted ft. JS ](https://youtu.be/PDKGDPSq03A)
[CHANGiNG_FACES - Foolin' Around](https://youtu.be/S3R5D8EW90U)
[702 - Get It Together](https://youtu.be/HxGNLsz9V5c)
[Cherish - Unappreciated](https://youtu.be/tbPqVMbT34Q)
[CHANGiNG_FACES - G.H.E.T.T.O.U.T., Pt. II](https://youtu.be/qeUSpB_bG7k)
[Changing Faces - G. H. E. T. T. O. U. T. ](https://youtu.be/sJgI6sRFkP0)
[Mary J. Blige - Not Gon' Cry ](https://youtu.be/WiM3bGcXYxk)
[Vivian Green - Emotional Rollercoaster](https://youtu.be/63TudFk9-u8)
[Mary J. Blige - MrS. Wrong ft. Drake](https://youtu.be/eS-y2R9cmnQ)
[Donell Jones - Where I Wanna Be](https://youtu.be/PhfCgSA6DeQ)
[AVANT - SEPARATED](https://youtu.be/yBhkqCOTW9I)
[Erykah Badu - Tyrone___all4u_MUNA](https://youtu.be/YY2-mrsXgMM)
[DEAR_MUNA_THE_MORE_YOU_TALK_THE_MORE_THiNGS_SounD_THE_SAME ~>  My Lovin' (You're Never Gonna Get It) ](https://youtu.be/JIuYQ_4TcXg)
[Lauryn Hill - Ex-Factor](https://www.youtube.com/watch?v=cE-bnWqLqxE)
[Keyshia Cole - I Should Have Cheated (BET Version) (Official Music Video)](https://youtu.be/29qvbeDA0iU)
[MUNA_YOUR_ALLURE_HAS_FALTERED::iM_ALL_CRiED_OWT](https://youtu.be/D2_A3Ia-69U)
[Uncle Sam - I Don't Ever Want TO See You Again](https://youtu.be/OWasrUYMHgo)
[Dru Hill - Never Make A Promise](https://youtu.be/JAnA6c7Jql4)
[Dru Hill - We're Not Making Love No More](https://youtu.be/V1O726-a0UI)
[SEVER_MSK_IS_MESSiN_WiT_MY_HEAD_iN_MY_BED::Dru Hill - In My Bed](https://youtu.be/_Ixip0K2r10)
[DEAR_MUNA - We Can't Be Friends_ft_Deborah Cox](https://youtu.be/01yPbUXnJZk)
[Tamia - Stranger In My House](https://youtu.be/Bjq4wg2tzCU)
[Sunshine Anderson "Heard It All Before"](https://youtu.be/NGMInHRR2Fo)


<img src="https://static.hiphopdx.com/2022/01/B6B54A45-621E-4D03-98A1-B17B88E4ECCD-e1642796934275.jpeg">
<div class="flex3BorderedPaddedROW">
   
    <div class="item1">                        
<a href="https://www.youtube.com/watch?v=2HlOo0wwGQo" ><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SartUBreast_inTOXiCATE_Me.gif" > </a></div>
    <div class="item2">                        
<a href="https://www.youtube.com/watch?v=2HlOo0wwGQo" ><img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SartUBreast_inTOXiCATE_Me.gif" > </a></div>
    <div class="item3">                        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SartUBreast_inTOXiCATE_Me.gif" /></div>
</div>

[SARTU Nobody's Supposed To Be Here ft. Deborah Cox -](https://youtu.be/H947PtHmh0Y)
[BUT_YOU_GOT_MY__Understanding and hand in marriage ༼ つ ◕_◕ ༽つ ft. Xscape - (Official Video)](https://youtu.be/HR5J5jUDcnA)
[Whitney Houston - I Have Nothing ─=≡Σ((( つ◕ل͜◕)つ](https://youtu.be/FxYw0XPEoKE)
[Nija - Love Like This (Official Audio)](https://youtu.be/zekfQq8AI4A)
[Monica - Why I Love You So Much](https://youtu.be/qFRCPLAvxnM) <h2>ʕ♥ᴥ♥ʔ</h2> 
[CASE - Happily Ever After](https://youtu.be/SRIdaMBKgk8)
[Faith Evans - Soon As I Get Home](https://youtu.be/ylB0BIVS20U)
[Floetry - Say Yes](https://youtu.be/PCCGIXME164)
[Daley - Alone Together ft. Marsha Ambrosius](https://youtu.be/uV2kWGSFYXM)


<h2>HORROR_CHOLO_FONT OpenTYPE_FONT</h2>
Dear Lauren, 
Muna and Sartu may or may not know about the shirt, however im sure CORAL_DOES! I made a   

[StrangerThings](https://www.imdb.com/title/tt4574334/) inspired shirt, "ZOMBiE_BOY" based on WiLL_BYERS character, but applied to our Chicano demographic with a graffiti_font, the original was done using [ITC_BENGUiAT](https://en.wikipedia.org/wiki/ITC_Benguiat).  With the SOCiAL_MEDiA_Prostitution_War waging it has felt like the upside down for a while. All our design work from the ATLANTA_CHAPTER of our business is stuck in the [PRiNTFULS_DESiGN_RESOURCES_SECTiON](https://printful.com) of my account. I have been locked out like everything else and I still have no access to rashard@gmail or ymail.com so Im kinda stuck... [HANDSELECTA_HAS_THE_FONT](https://www.handselecta.com/fonts-commercial) . Graffiti fonts are really hard to make because the rhythms are not regulated in most handstyles for the entire alphabet. [MiKE_GiANT_DiD_THE_WORK](https://www.mikegiant.com/) and they are amazing! Perhaps you can [find fonts for your project](https://www.handselecta.com/store-1/digital-goods)
<img src="https://images.squarespace-cdn.com/content/v1/5e8a7126d84c050678c7fd75/1646157743484-Y4YTY1FQUZD8A5CJBM31/Giant+Horror+-+Shop%402x.png">
<img src="https://images.squarespace-cdn.com/content/v1/5e8a7126d84c050678c7fd75/1645998890554-55XT6J3LVGZ9SWFJ0TH6/Giant_Diamond_A.gif">
<img src="https://cdn0.vox-cdn.com/uploads/chorus_asset/file/6630545/strangerthingsgif.0.gif">
[ITC Benguiat is a decorative serif typeface designed by Ed Benguiat and released by the International Typeface Corporation (ITC) in 1977.](https://www.linotype.com/576/itc-benguiat-family.html) The face is loosely based upon typefaces of the Art Nouveau period but is not considered an academic revival. The face follows ITC's design formulary of an extremely high x-height, combined with multiple widths and weights. The original version of 1977 contained numerous nonstandard ligatures (such as AB, AE, AH, AK, AR, LA, SS, TT) and alternate shapes for some letters which were not carried into the digital version. 
- TAKEN_FRON_WiKiPEDiA

<h2>FLEXBOX FROGGY</h2>

Dear_Sartu:LAUREN_asWELL, I found a game that helps you learn CSS [FLEXBOX](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) from a post on DEV_dOt_cOm.
[TRY_FLEXBOX_FROGGY](http://flexboxfroggy.com/)
[SEE_ORiGiNAL_POST::BY_](https://dev.to/santiagocodes/the-3gs-of-css-flexbox-edition-4b64)
[ALiST_APART_CSS_GRiDS](https://alistapart.com/article/practical-grid/)
[Designing for the Unexpected by Cathy DuttonJuly 15, 2021](https://alistapart.com/article/designing-for-the-unexpected/)
[Making Room for Variation by Yesenia Perez-Cruz](https://alistapart.com/article/making-room-for-variation/)
[KULER___NOW_KNOWN_AS_ADOBE_COLOR](https://color.adobe.com/create/color-wheel)<i>DEAR_MUNA, Sartu has been tutoring me in Color_Theory</i>
<div class="sixpanel">

  <div class="item1"> <img src="https://i.pinimg.com/736x/c4/09/c3/c409c3ab371521c0abfa7466ff9d2976.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item2"> <img src="https://i.pinimg.com/736x/c4/09/c3/c409c3ab371521c0abfa7466ff9d2976.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item3"> <img src="https://i.pinimg.com/736x/c4/09/c3/c409c3ab371521c0abfa7466ff9d2976.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>

  <div class="item1"> <img src="https://i.pinimg.com/736x/c4/09/c3/c409c3ab371521c0abfa7466ff9d2976.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item2"> <img src="https://i.pinimg.com/736x/c4/09/c3/c409c3ab371521c0abfa7466ff9d2976.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
  <div class="item3"> <img src="https://i.pinimg.com/736x/c4/09/c3/c409c3ab371521c0abfa7466ff9d2976.jpg" alt="##I_SARTU_ALi_SELASSiE_AM_THAKA_RASHARD_IMAN_SELASSiES_WiFE" /></div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.discogs.com/RgpKhe80R8baMRPaZCVtKjDEV0zmG5v-t7yyjInu9UM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg2MjA3/MzktMTU3MDE2NzIy/OC01NzU5LmpwZWc.jpeg" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://i.discogs.com/NuITW4p70CVKbyxR_EjjENq-f_XltexmzRAOgy-A_jo/rs:fit/g:sm/q:90/h:460/w:480/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0NTEy/NTgtMTM2NTI1MTg3/MS02NDU3LmpwZWc.jpeg" > 
      </div>
    </div>
  </div>
</div>

[Superwoman (Where Were You When I Needed You)](https://www.youtube.com/watch?v=oYpcCMxQXaE)
<img src="https://i.discogs.com/YzhtLts7LkthVlFHqcaq5ZNZ59GEwslZA9KCw556CSc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NTIz/My0xNDI2MTY2MTc0/LTkwODYuanBlZw.jpeg">



<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/video/NORMANiFAiRBG.gif">
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/Screenshot%202022-07-13%206.37.35%20AM.png">
<img src="https://user-images.githubusercontent.com/93835618/178748448-e50c2f03-f7dc-4608-a4cd-683e714ad738.png">



<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

<p><b>Tip:</b> Use h1 to h6 elements only for headings. Do not use them just to make text bold or big. Use other tags for that. this is also common paragraph text or the p tag</p>

<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

<p><b>Tip:</b> Use h1 to h6 elements only for headings. Do not use them just to make text bold or big. Use other tags for that.</p>


<a href="https://www.youtube.com/watch?v=B4joiYkmQr8">##MiSSiNG_CRYPTO_QUEEN</a>
<a href="https://www.youtube.com/watch?v=AwYQGtwoF68" alt="PLEASE_SHARE_ALL_YOUR_INFO_ABOUT_SARTU_ERIKA_AND_MUNA_CORAL_MEYU_JABDU_and_KIDZ_BOP___CAUSE_DEY_MiYSSiN">PEACHES::AND_ODE_TO_THA_HOLLYWOOD_SOUTHERN_BELL</a>
<img src="https://www.graffiti.org/la/save.jpg">
<img src="https://i.discogs.com/0kZNnVp-TUxHT5JAkt5g-VjJQuhuowRiUFswjO3Nzcw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1ODk3/MjQ4LTE1OTk3OTQ0/OTEtOTMwNi5wbmc.jpeg">
<img src="https://www.graffiti.org/la/cbs_prod.jpg"> 
## GOOD_LUCK_##SABER
<img src="https://www.graffiti.org/la/saberlariver.jpg">
<img src="https://www.graffiti.org/la/yelohvckyard.jpg">
<img src="https://www.graffiti.org/la/influence.jpg">
[DEAR_SARTU_JUST_KNOW...](https://www.youtube.com/watch?v=vC0URxrUy48)

[Mahmoud Ahmed With Roha Band (1986)](https://www.youtube.com/watch?v=1o-kDk-O1H8)
## ANiMAL_FARM##ANiMATED##1954 
[Animal Farm 1954](https://www.youtube.com/watch?v=XXkicQRl6vg)
<img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b0044674400667.5c2e83b770581.jpg">
<img src="https://3.bp.blogspot.com/-0zhGOWFFSkc/XEWmH1y360I/AAAAAAAAFxA/9ugKLf2Vod8tIlyHlX8iys2uhHX473MNwCLcBGAs/s640/arada-vol-2.jpg">

[Teddy Yo & Gentle Man - Arada, Vol. 2 ##ETHiOPiA](http://ethio-pain-music.blogspot.com/2019/01/teddy-yo-gentle-man-arada-vol-2-2018.html)
[Bullfrog Battle Royale | The Mating Game | BBC Earth](https://youtu.be/rA4nIRKZ1m8) 
         ## TheMatingGame 
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/338480335&color=%2338385d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/massappealrecs" title="Mass Appeal" target="_blank" style="color: #cccccc; text-decoration: none;">Mass Appeal</a> · <a href="https://soundcloud.com/massappealrecs/cuz-lightyear-pots-n-pans-feat-killer-mike" title="Cuz Lightyear - Pots N Pans feat. Killer Mike" target="_blank" style="color: #cccccc; text-decoration: none;">Cuz Lightyear - Pots N Pans feat. Killer Mike</a></div>
<img src="https://1.bp.blogspot.com/-7vzHG6y1_9E/XIkDNaThsVI/AAAAAAAAGk0/xF-7mExGIfQewadJinCVSfCDZnqN5wNxgCLcBGAs/s1600/VA%2B%25E2%2580%2593%2BErnesto%2BChahoud%2Bpresents%2BTAITU%2BSoul-fuelled%2BStompers%2Bfrom%2B1960s-1970s%2BEthiopia%2B%25282018%2529.jpg">
[Ernesto Chahoud presents TAITU - Soul-fuelled Stompers from 1960s-1970s ##Ethiopia](http://ethio-pain-music.blogspot.com/2019/03/va-ernesto-chahoud-presents-taitu-soul.html)
<div class="pinupGallery">
  <img class="pinupImage featured-pinupImage" src="https://3.bp.blogspot.com/-bL5P29jUTk4/Tu8ilkhZOkI/AAAAAAAAAKo/L4yPmmTKEi8/s640/Ethiopian+Groove+Greatest+Hits.jpg" alt="">
  <img class="pinupImage" src="https://3.bp.blogspot.com/-bL5P29jUTk4/Tu8ilkhZOkI/AAAAAAAAAKo/L4yPmmTKEi8/s640/Ethiopian+Groove+Greatest+Hits.jpg" alt="">
  <img class="pinupImage" src="https://3.bp.blogspot.com/-bL5P29jUTk4/Tu8ilkhZOkI/AAAAAAAAAKo/L4yPmmTKEi8/s640/Ethiopian+Groove+Greatest+Hits.jpg" alt="">
  <img class="pinupImage" src="https://3.bp.blogspot.com/-bL5P29jUTk4/Tu8ilkhZOkI/AAAAAAAAAKo/L4yPmmTKEi8/s640/Ethiopian+Groove+Greatest+Hits.jpg" alt="">
</div>

[... my passion for ethiopian music ...](http://ethio-pain-music.blogspot.com/)
<img src="https://1.bp.blogspot.com/-ZrDobIRXCXA/XEhSBzIl0rI/AAAAAAAAFxw/xVfWAPpmtEEzVd7JVwQl3i3FpnlMsuCQgCLcBGAs/s640/%25E1%2589%25B3%25E1%258B%25B0%25E1%2588%25B0%2B%25E1%258B%2593%25E1%2588%2588%25E1%2588%2599%2B%2Bmissing%2Balbum.jpg">
<img src="https://burodestruct.net/sites/default/files/bd_edding_hiphop_arte_teaser2.gif">
<img src="https://www.graffiti.org/trains/2006trains/t493fw.jpg">
<img src="https://www.graffiti.org/trains/2006trains/kem_sever.jpg">
[Scientists Prove That Telepathic Communication Is Within Reach](https://www.smithsonianmag.com/innovation/scientists-prove-that-telepathic-communication-is-within-reach-180952868/)
```
echo "An international research team develops a way to say “hello” with your mind"
```
<img src="https://th-thumbnailer.cdn-si-edu.com/KOqDgBTTB_2AOlm4-YM0PEjJ0qM=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/dc/61/dc613b8d-1b02-4729-972e-eb7ff73c0e09/journalpone0105225g001.jpg">
[DR. REVOLT](http://www.nytrash.com/Revolt.html)
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://www.cnet.com/a/img/resize/ecd3bef43089bec5c22acd15f8371441a1a4d206/hub/2013/12/19/d2c0c796-84b8-11e3-beb9-14feb5ca9861/MacPro2013_35781456_01.jpg?auto=webp&width=1200" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://www.cnet.com/a/img/resize/5c011b08402cbae781badbc096713aeabab525af/hub/2013/12/19/d2ea55a6-84b8-11e3-beb9-14feb5ca9861/MacPro2013_35781456_14.jpg?auto=webp&width=1200" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://www.cnet.com/a/img/resize/f1364e8eca5f3230a4a2ac4d3ed87992415a4058/hub/2013/12/19/d2e3153e-84b8-11e3-beb9-14feb5ca9861/MacPro2013_35781456_07.jpg?auto=webp&width=1200" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://www.cnet.com/a/img/resize/60d12bfea2cd83942e02adcb6e326a2f0c7e5eeb/hub/2013/12/19/d2f63812-84b8-11e3-beb9-14feb5ca9861/MacPro2013_35781456_25.jpg?auto=webp&width=1200" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://i.pinimg.com/736x/e0/20/7e/e0207e49ac30edb115538e725c52d984.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://m.media-amazon.com/images/I/91ypCer3xtL._SX466_.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
<div class='twoPanelSpread'>
  <div class='row'>
    <div class='panelColumn'>
      <div class='leftColumn'>
        <img src="https://m.media-amazon.com/images/I/81waprc9dJL._SS500_.jpg" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" >
      </div>
    </div>
    <div class='panelColumn'>
      <div class='rightColumn'>
        <img src="https://images.genius.com/f38aa5d566b0eb090a622ab461fefeb7.468x468x1.jpg" alt="Girl in a jacket" >
      </div>
    </div>
  </div>
</div>
[##DURO_CiA_PERSONAL_SQUARESPACE](https://www.durocia.com/model-trains)
<img src="https://i.discogs.com/ST1XMjKQ2Kc98_DBA2HdNPRENYTuuRr1Q8IcLzKA5pg/rs:fit/g:sm/q:90/h:561/w:579/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMDUy/NDEtMTM3OTg3NjQ4/Ny00OTk2LmpwZWc.jpeg">
<div class="flex-container">
   
    <div class="item1">                        <img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/50b6a60b-8da2-4889-939a-0f401b9afc31/a14.jpg?format=300w" /></div>
    <div class="item2">                        <img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/d22a4941-8fd8-4921-99b6-bb454507b92e/2419-066.jpg?format=300w" /></div>
    <div class="item3">                        <img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/253150db-c0b8-41fc-9f85-b376b81efa40/4309-076.jpg?format=500w" /></div>
</div>
<img src="https://lastfm.freetls.fastly.net/i/u/ar0/a6e0c4b09a7e60ea536f0968ede717c8.jpg">
<div class="flex-container">
   
    <div class="item1">                        <img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/87189750-9f2b-47fa-8648-6b95f41e3b59/shu.jpg?format=300w" /></div>
    <div class="item2">                        <img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/7ab3c3b7-1132-4754-96b8-1f2f961e8905/0889-066.jpg?format=300w" /></div>
    <div class="item3">                        <img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/409ca270-2fb6-4189-8a67-aa4a84430e72/4314-075.jpg?format=500w" /></div>
</div>
<img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/6c900e39-8ee1-4001-82da-dbc06951bb6c/1980-013.jpg?format=750w">
<img src="https://i1.sndcdn.com/artworks-000338883327-fwjlot-t500x500.jpg">
<div class="flex-container">
   
    <div class="item1">                        <img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/120301a3-9f82-4a1e-b6f1-e2524b59ad31/0889-053.jpg?format=300w" /></div>
    <div class="item2">                        <img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/847d4430-4aa6-4ddb-b30c-4437bed295af/0889-068.jpg?format=300w" /></div>
    <div class="item3">                        <img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/37b41425-71e1-48e2-a9a2-2011bb7f6a79/0889-067.jpg?format=300w" /></div>
</div>
<img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/d5adc0e1-9b5a-4c8f-9a5b-64f49aaf7a7d/duro+cia+graffiti+sketch+29.jpg?format=750w">
<img src="https://api.time.com/wp-content/uploads/2017/04/martha-cooper-2.jpg">
[Preserving New York's History of Graffiti Art](https://time.com/4743207/martha-cooper-subway-graffiti/)
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1056978430&color=%239c7ca4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/velvetboogie" title="VelvetBoogie" target="_blank" style="color: #cccccc; text-decoration: none;">VelvetBoogie</a> · <a href="https://soundcloud.com/velvetboogie/beating-down-yo-block-monaleo-c" title="Beating Down Yo Block - Monaleo &#x27;Chopped Nd Screwed&#x27;" target="_blank" style="color: #cccccc; text-decoration: none;">Beating Down Yo Block - Monaleo &#x27;Chopped Nd Screwed&#x27;</a></div>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/269925599&color=%236c6c5c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/tycho" title="Tycho" target="_blank" style="color: #cccccc; text-decoration: none;">Tycho</a> · <a href="https://soundcloud.com/tycho/edc-sunrise" title="EDC Sunrise 2016" target="_blank" style="color: #cccccc; text-decoration: none;">EDC Sunrise 2016</a></div>
<div>
<span class="firstcharacter">
	## GANG RAPE IN CONCERT LAW – PENAL CODE 264.1 PC</span>

<p>California Penal Code 264.1 PC makes it a crime to act in concert with another person in the commission of a rape, commonly known as “gang rape.”

This rape in concert statute applies when two or more people work together to engage in non-consensual sexual intercourse with a victim. PC 264.1 gang rape is a crime in itself, not a sentencing enhancement for other offenses.

Gang Rape in Concert Law in California – Penal Code 264.1 PC
PC 264.1 describes gang rape gang rape as two or more people working together to commit a rape.
Rape is a crime in every state, but California has a specific law making it a crime for two or more people to cooperate (or act in concert) in committing an act of rape.

PC 264.1 legally defines rape in concert as “when the defendant, voluntarily acting in concert with another person, by force or violence against the victim's will to commit a sex crime, either personally or by aiding and abetting the other person, that fact shall be charged in the indictment….”

Simply put, rape in concert with another is charged under Penal Code 264.1 PC when forcible rape occurs while acting in concert with another or aiding and abetting the commission of a rape.

The prosecution must prove that the alleged victim was forcibly raped to convict someone under this statute. Next, it must be proven that you were criminally liable for committing the rape or aided and abetted the rape.

Rape, defined under Penal Code 261 PC, is a serious felony sex offense that carries significant legal penalties if you are convicted. In addition to the lengthy state prison sentence, you could be ordered by the judge to register as a sex offender and have a violent strike on your record for life.

In this article by our Los Angeles criminal defense attorneys, we will examine this topic in more detail below.

OVERVIEW OF CALIFORNIA'S “GANG RAPE” LAW
Penal Code 264.1 makes it a felony offense for any two or more people to act in concert to commit an act of non-consensual sex against someone else. You violate this law if you:

Commit an act of rape with someone else's assistance; OR
Assist someone in committing an act of rape (i.e., aiding and abetting).
This law does not differentiate between the person committing the rape and those assisting. All are charged with the same crime and are subject to the same penalties as though they all raped the victim, no matter what role they played in the act itself.

Under California law, the person who “aids and abets” someone in the act of rape is also charged with an in-concert act of rape. “Aiding and abetting” a crime means the following:

You knew of the perpetrator's intentions beforehand;
You intended to help them commit the crime; and
You assisted or facilitated the crime by words or deeds.
One important note: You technically do not have to be physically present to aid and abet a crime. You simply have to have done something material that contributed to its commission.

This means that under certain circumstances, you could be charged under California's gang rape law without being physically present when the alleged rape occurred if prosecutors can show that you had a hand in the planning, for example.

This statute only applies to serious felony sexual-related crimes such as Penal Code 261 rape, Penal Code 262 spousal rape (repealed), and Penal Code 289 PC forcible sexual penetration with a foreign object.

WHAT ARE SOME EXAMPLES OF RAPE IN CONCERT?
Two or more people break into a home to burglarize it and find a couple occupying the home. One holds the husband at gunpoint while the other rapes the wife;
A frat party gets out of hand, and a group of men takes turns raping a woman while the others hold her down;
An angry ex-boyfriend brings an accomplice to the ex-girlfriend's house “just to talk.” Several friends are present. The accomplice distracts the friends with conversation in one room while the ex-boyfriend rapes the girl in the bedroom.
WHAT ARE THE PENALTIES FOR PENAL CODE 264.1 PC?
The penalties for gang rape are pretty straightforward. The crime is always charged as a felony offense, and the maximum penalties are based on the age of the victim:

If the victim is an adult 18 or older…up to 9 years in prison;
If the victim is a minor over the age of 14…up to 11 years in prison;
If the victim is under age 14…up to 14 years in prison.
These legal penalties above are in addition to the sentence for the underlying rape conviction.

WHAT ARE THE SEXUAL-RELATED OFFENSES?
Penal Code 264.1 PC gang rape is often charged in tandem with other crimes due to its violent and forceful nature. These may include but are not limited to the following below.

Penal Code 261 PC rape - in certain instances, the person who raped the victim may also be charged with the separate crime of rape.

Charges Related to Gang Rape
Prosecutors could also file other related crimes to rape in concert, such as oral copulation by force or fear.
Penal Code 240 PC assault - attempting to use force on someone else, commonly during gang rape events. Penal Code 242 PC battery - using force on someone else (e.g., hitting the victim while the rape occurs).

Penal Code 220 PC assault with intent to commit a felony -a separate felony often charged with sex crimes such as rape or gang rape.

Penal Code 287 PC oral copulation by force or fear is non-consensual contact between someone's mouth and another person's genitals.

Penal Code 243.4 PC sexual battery – this is the crime of touching the intimate parts of someone's body for sexual gratification.

Penal Code 288 PC lewd acts with a minor – this is the severe crime of lewd and lascivious acts with a minor child under 14 years old.

Penal Code 261.5 PC statutory rape is the crime of having sexual intercourse with someone under 18, even if there was consent.

Penal Code 286 PC sodomy – this is the crime of contact between the penis and anus of another person by use of force, fear, or threats,

WHAT ARE THE COMMON DEFENSES?
Suppose you're charged with gang rape, and you are the person accused of actually committing the act of rape. In that case, your defenses are relatively limited, except for establishing an alibi, mistaken identity, or false accusation, for example.

If you are accused in the role of aiding and abetting a gang rape, however, your attorney may employ several types of defenses to have you acquitted or to have the charges dropped or reduced. These include, but are not limited to:

You didn't intend to aid or abet. Perhaps you were unaware of the rapist's intentions, for example, in an adjoining room, unaware the rape was occurring;
You withdrew your intention to aid or abet. In other words, you may have initially intended to participate in the crime, but you had a change of heart. This defense works best if you can provide evidence or witness testimony that you made your intentions clear to the other defendants and actively tried to prevent the crime.
Other defenses to rape in concert charges include arguing that the alleged victim gave consent. Perhaps we can prove through direct or circumstantial evidence that the victim permitted the sexual activity.

Perhaps we can show that the allegations are false and you were wrongfully arrested after the alleged victim had regrets about consenting to have sexual intercourse. Maybe the accuser had a motivation to lie.

Common Defenses for Gang Rape Charges
There are several common defense to challenge allegations that you committed PC 264.1 gang rape.
Perhaps we could argue that you did not know that you had no idea that rape was about to occur even though you were present. Maybe you are the victim of misidentification by the alleged victim.

Perhaps there was misconduct by the police, such as an illegal search or a coerced confession.  If we can show law enforcement acted unlawfully, then the prosecution may be forced to drop the case. Prosecutors have the burden to prove guilt beyond any reasonable doubt. The criminal charge should be dropped if they can't meet this high burden.

Further, depending on the case, we might be able to negotiate with the prosecutor for reduced charges or get a case dismissal. Also, prefiling negotiation with law enforcement and the District Attorney's Office, it might be possible to persuade them from filing formal criminal charges in the first place, called a “DA reject.”

Eisner Gorin LLP is based in Los Angeles County, and we serve people across the state of California. You can reach us for an initial case review by calling (877) 781-1570 or filling out the contact form.	
</div>	
</div>
<img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/ccffd19b-ea72-4639-a916-0df64dac9d59/3356412.jpg?format=750w">
<img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/5195141b-4ea9-488a-b4f6-af819a8cbbc2/duro+cia+graffiti+sketch+26.jpg?format=750w">
<img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/a3f800d8-f1ba-417e-8d90-0fea43fe2099/0492+Large2.jpg?format=1500w">
<img src="https://images.squarespace-cdn.com/content/v1/62447dd4d881f678fe92e43a/da30794c-b30a-4b6e-8e7f-cb7f5fdb7798/duro+cia+graffiti+%2314.jpg">
<img src="https://www.graffiti.org/trains/jek-train02.jpg">
<img src="https://m.media-amazon.com/images/I/91b3+jqIK4L._SS500_.jpg">

<div>
## Talking with Children About War
www.medicinenet.com

In addition to the children whose lives have been directly impacted by the terrorist attacks and war, most children have seen terrifying images of destruction on television and the Internet. They are reading newspapers and they have heard stories on the radio that speak of grave losses of life. They will also take emotional cues from the adults in their lives who have been watching these events closely.

As adults turn to address the needs of the children in their lives in the aftermath of the tragic and traumatic events, the following are some points to keep in mind:

Adults need to consider the impact of their reactions upon their children. By creating a calm and relaxed environment in their homes through their own demeanor, they can help their children to feel safe. That may not be possible for all families, particularly those that have been directly impacted. If they have been visibly anxious or upset, adults need to take the time to explain to the children in their lives what they are feeling and why.

Taking the time to listen and talk to children is very important. Many children will have seen images on television that will prompt questions. They will continue to hear about these events in the coming days as well and will be reminded by images through media and in their everyday lives, so it is important to keep those lines of communication open.
In talking to children, adults can and should try to reinforce that they are doing everything in their power to make sure their children are safe, and explain that the events that took place, or that are taking place, occurred in buildings that are symbols to the outside world or that are part of our national defense system. Assure them that adults are working to make sure homes and schools are safe.

Helping children to separate fact from fiction is also important. Adults should try to discuss known facts with children, and help avoid speculation or exaggeration.

Incidents have occurred since the 9/11 tragedy where children of Middle Eastern descent have been threatened or taunted. This is an excellent opportunity to help children understand that most individuals who are from other countries are fine and good people who live in and love the United States as much as they do, and that one should make judgments on an individual basis.

Adults can also talk with children about the senselessness of violence, hate and terrorism. They can explain that our country is committed to protecting the freedom, opportunity and safety of people throughout the world.

Although you hear it suggested often, if you are home with a child, you should take extra efforts to limit their television, radio and Internet activity in order to avoid excessive exposure to imagery of the damage and destruction. Consider activities that you can do with your child instead. Confine your own viewing to times when children are less likely to be present.
Adults need to make it a priority to watch the children in their lives, and understand their behavior. Children may manifest some behavioral and emotional changes, including misbehavior, sleeplessness, nightmares and general anxiety. These are signs to parents that reassurance and care are needed.

If a family has strong faith, this is a time to talk about that faith with children and to help them relate what has taken place to those lessons and beliefs. It is also a time to pray for all of those families who have been touched by the destruction and loss of life.

Children and adolescents may also be struggling to understand the immorality of the terrorist attacks or war. This is an opportunity for adults to help children understand the presence of good and evil in the world and discuss children's concerns about a moral and safe future.

Children will have a range of reactions and will display a variety of emotions. Adults need to be tolerant of that behavior and need to explain to children that it is okay to be upset or disturbed.

If your child wants to be unusually close to you, like sleeping in your bed or running all errands with you, it is okay to make changes to your normal routine and contact, but at the very beginning you should create a clear understanding that this is unusual and negotiate a quick return to your normal pattern.

Adults need to consider how the events may have had some relevance to their daily activities. For example, if you travel often by plane, work in a tall building or in an area that is highly populated, you may find that your child does not want to be separated from you. It is important to take the time to talk about and help your children to feel secure about separations and understand your activities and routine.

It may take some time for children to show signs of stress or anxiety, so the adults in their lives need to stay especially attuned for changes in behavior. Children within a single family may display very different reactions from one another. Adolescents in particular may display reckless behavior in the aftermath of the events.

Finally, it may help to engage your children in activities where they can offer constructive assistance to the victims of the violence. With young children, you may want to send drawings and cards. If your child is a teenager, he or she may want to donate blood or volunteer with a community organization that is offering help to the victims of the terrorist attacks or war.
If you think you need professional assistance in meeting the needs of a child in your life, there are resources available to you. There are excellent state and county mental health organizations around the country. Schools, community based organizations and religious institutions that are located in your community can help with guidance and counseling or direct you to the right services.

For additional information, please visit the Posttraumatic Stress Center.

This information has been provided with the kind permission of the US Department of Education (www.ed.gov).
Last Editorial Review: 4/2/2003

http://www.medicinenet.com/script/main/art.asp?articlekey=22905


</div>
<div>
	<span class="firstcharacter">
	
	Perspectives on Acquaintance Rape
David G. Curtis, Ph.D., B.C.E.T.S.
Clinical Associate, Long Island Psychological Associates, P.C.
	
	</span>




	<h3 class="neonText">I. What is Acquaintance Rape?</h3>

Acquaintance rape, which is also referred to as "date rape" and "hidden rape," has been increasingly recognized as a real and relatively common problem within society. Much of the attention that has been focused on this issue has emerged as part of the growing willingness to acknowledge and address issues associated with domestic violence and the rights of women in general in the past three decades. Although the early and mid 1970's saw the emergence of education and mobilization to combat rape, it was not until the early 1980's that acquaintance rape began to assume a more distinct form in the public consciousness. The scholarly research done by psychologist Mary Koss and her colleagues is widely recognized as the primary impetus for raising awareness to a new level.

The publication of Koss' findings in the popular Ms. magazine in 1985 informed millions of the scope and severity of the problem. By debunking the belief that unwanted sexual advances and intercourse were not rape if they occurred with an acquaintance or while on a date, Koss compelled women to reexamine their own experiences. Many women were thus able to reframe what had happened to them as acquaintance rape and became better able to legitimize their perceptions that they were indeed victims of a crime. The results of Koss' research were the basis of the book by Robin Warshaw, first published in 1988, entitled I Never Called it Rape.

For current purposes, the term acquaintance rape will be defined as being subjected to unwanted sexual intercourse, oral sex, anal sex, or other sexual contact through the use of force or threat of force. Unsuccessful attempts are also subsumed within the term "rape." Sexual coercion is defined as unwanted sexual intercourse, or any other sexual contact subsequent to the use of menacing verbal pressure or misuse of authority (Koss, 1988).

<h3 class="neonText">II. Legal Perspectives on Acquaintance Rape</h3>

The electronic media have developed an infatuation with trial coverage in recent years. Among the trials which have received the most coverage have been those involving acquaintance rape. The Mike Tyson/Desiree Washington and William Kennedy Smith/Patricia Bowman trials garnered wide scale television coverage and delivered the issue of acquaintance rape into living rooms across America. Another recent trial which received national attention involved a group of teenaged boys in New Jersey who sodomized and sexually assaulted a mildly retarded 17-year old female classmate. While the circumstances in this instance differed from the Tyson and Smith cases, the legal definition of consent was again the central issue of the trial. Although the Senate Judiciary Committee hearings on the Supreme Court nomination of Judge Clarence Thomas were obviously not a rape trial, the focal point of sexual harassment during the hearings expanded national consciousness regarding the demarcations of sexual transgression. The sexual assault which took place at the Tailhook Association of Navy Pilots annual convention in 1991 was well documented. At the time of this writing, events involving sexual harassment, sexual coercion, and acquaintance rape of female Army recruits at the Aberdeen Proving Grounds and other military training facilities are being investigated.

As these well publicized events indicate, an increased awareness of sexual coercion and acquaintance rape has been accompanied by important legal decisions and changes in legal definitions of rape. Until recently, clear physical resistance was a requirement for a rape conviction in California. A 1990 amendment now defines rape as sexual intercourse "where it is accomplished against a person's will by means of force, violence, duress, menace, or fear of immediate and unlawful bodily injury." The important additions are "menace" and "duress," as they include consideration of verbal threats and implied threat of force (Harris, in Francis, 1996). The definition of "consent" has been expanded to mean "positive cooperation in act or attitude pursuant to an exercise of free will. A person must act freely and voluntarily and have knowledge of the nature of the act or transaction involved." In addition, a prior or current relationship between the victim and the accused is not sufficient to imply consent. Most states also have provisions which prohibit the use of drugs and/or alcohol to incapacitate a victim, rendering the victim unable to deny consent.

Acquaintance rape remains a controversial topic because of lack of agreement upon the definition of consent. In an attempt to clarify this definition, in 1994, Antioch College in Ohio adopted what has become an infamous policy delineating consensual sexual behavior. The primary reason this policy has stirred such an uproar is that the definition of consent is based on continuous verbal communication during intimacy. The person initiating the contact must take responsibility for obtaining the other participant's verbal consent as the level of sexual intimacy increases. This must occur with each new level. The rules also state that "If you have had a particular level of sexual intimacy before with someone, you must still ask each and every time." (The Antioch College Sexual Offense Policy, in Francis, 1996).

This attempt to remove ambiguity from the interpretation of consent was hailed by some as the closest thing yet to an ideal of "communicative sexuality." As is often the case with ground breaking social experimentation, it was ridiculed and lampooned by the majority of those who responded to it. Most criticism centered on reducing the spontaneity of sexual intimacy to what seemed like an artificial contractual agreement.

III. Social Perspectives on Acquaintance Rape

Feminists have traditionally devoted much attention to issues such as pornography, sexual harassment, sexual coercion, and acquaintance rape. The sociological dynamics which influence the politics of sexual equality tend to be complicated. There is no single position taken by feminists on any of the aforementioned issues; there are differing and often conflicting opinions. Views on pornography, for example, are divided between two opposing camps. Libertarian feminists, on one hand, distinguish between erotica (with themes of healthy consensual sexuality) and pornography (material that combines the "graphic sexually explicit" with depictions which are "actively subordinating, treating unequally, as less than human, on the basis of sex." (MacKinnon, in Stan, 1995). Socalled "protectionist" feminists tend not to make such a distinction and view virtually all sexually-oriented material as exploitative and pornographic.

Views on acquaintance rape also appear quite capable of creating opposing camps. Despite the violent nature of acquaintance rape, the belief that many victims are actually willing, consenting participants is held by both men and women alike. "Blaming the victim" seems to be an all too prevalent reaction to acquaintance rape. Prominent authors have espoused this idea in editorial pages, Sunday Magazine sections, and popular journal articles. Some of these authors are women (a few identify themselves as feminists) who appear to justify their ideas by drawing conclusions based on their own personal experiences and anecdotal evidence, not wide-scale, systematic research. They may announce that they too have probably been raped while on a date to illustrate their own inevitable entanglement in the manipulation and exploitation which are part of interpersonal relations. It has also been implied that a natural state of aggression between men and women is normal, and that any woman who would go back to a man's apartment after a date is "an idiot." While there may be a certain degree of cautionary wisdom in the latter part of this statement, such views have been criticized for being overly simplistic and for simply submitting to the problem.

There has been a recent flurry of these literary exchanges on acquaintance rape between women's rights advocates, who have been working to raise public awareness, and a relatively small group of revisionists who perceive that the feminist response to the problem has been alarmist. In 1993, The Morning After: Sex, Fear, and Feminism on Campus by Katie Roiphe was published. Roiphe alleged that acquaintance rape was largely a myth created by feminists and challenged the results of the Koss study. Those who had responded and mobilized to meet the problem of acquaintance rape were called "rape-crisis feminists." This book, including excerpted in many major women's magazines, argued that the magnitude of the acquaintance rape problem was actually very small. Myriad critics were quick to respond to Roiphe and the anecdotal evidence she gave to her claims.

IV. Research Findings

The research of Koss and her colleagues has served as the foundation of many of the investigations on the prevalence, circumstances, and aftermath of acquaintance rape within the past dozen or so years. The results of this research have served to create an identity and awareness of the problem. Equally as important has been the usefulness of this information in creating prevention models. Koss acknowledges that there are some limitations to the research. The most significant drawback is that her subjects were drawn exclusively from college campuses; thus, they were not representative of the population at large. The average age of the subjects was 21.4 years. By no means does this negate the usefulness of the findings, especially since the late teens and early twenties are the peak ages for the prevalence of acquaintance rape. The demographic profile of the 3,187 female and 2,972 male students in the study was similar to the makeup of the overall enrollment in higher education within the United States. Here are some of the most important statistics:

Prevalence

One in four women surveyed was victim of rape or attempted rape.
An additional one in four women surveyed was touched sexually against her will or was victim of sexual coercion.
84 percent of those raped knew their attacker.
57 percent of those rapes happened while on dates.
One in twelve male students surveyed had committed acts that met the legal definitions of rape or attempted rape.
84 percent of those men who committed rape said that what they did was definitely not rape.
Sixteen percent of the male students who committed rape and ten percent of those who attempted a rape took part in episodes involving more than one attacker.
Responses of the Victim

Only 27 percent of those women whose sexual assault met the legal definition of rape thought of themselves as rape victims.
42 percent of the rape victims did not tell anyone about their assaults.
Only five percent of the rape victims reported the crime to the police.
Only five percent of the rape victims sought help at rape-crisis centers.
Whether they had acknowledged their experience as a rape or not, thirty percent of the women identified as rape victims contemplated suicide after the incident.
82 percent of the victims said that the experience had permanently changed them.
V. Myths About Acquaintance Rape

There are a set of beliefs and misunderstandings about acquaintance rape that are held by a large portion of the population. These faulty beliefs serve to shape the way acquaintance rape is dealt with on both personal and societal levels. This set of assumptions often presents serious obstacles for victims as they attempt to cope with their experience and recovery.

Myth

Reality

A woman who gets raped usually deserves it, especially if she has agreed to go to a man's house or park with him.	No one deserves to be raped. Being in a man's house or car does not mean that a woman has agreed to have sex with him.
If a woman agrees to allow a man to pay for dinner, drinks, etc., then it means she owes him sex.	Sex is not an implied payback for dinner or other expense no matter how much money has been spent.
Acquaintance rape is committed by men who are easy to identify as rapists.	Women are often raped by "normal" acquaintances who resemble "regular guys."
Women who don't fight back haven't been raped.	Rape occurs when one is forced to have sex against their will, whether they have decided to fight back or not.
Intimate kissing or certain kinds of touching mean that intercourse is inevitable.	Everyone's right to say "no" should be honored, regardless of the activity which preceded it.
Once a man reaches a certain point of arousal, sex is inevitable and they can't help forcing themselves upon a woman.	Men are capable of exercising restraint in acting upon sexual urges.
Most women lie about acquaintance rape because they have regrets after consensual sex.	Acquaintance rape really happens - to people you know, by people you know.
Women who say "No" really mean "Yes."	This notion is based on rigid and outdated sexual stereotypes.
Certain behaviors such as drinking or dressing in a sexually appealing way make rape a woman's responsibility.	Drinking or dressing in a sexually appealing way are not invitations for sex.
VI. Who are the Victims?

Although it is not possible to make accurate predictions about who will be subjected to acquaintance rape and who won't, there is some evidence that certain beliefs and behaviors may increase the risk of becoming a victim. Women who subscribe to "traditional" views of men occupying a position of dominance and authority relative to women (who are seen as passive and submissive) may be at increased risk. In a study where the justifiability of rape was rated based on fictional dating scenarios, women with traditional attitudes tended to view the rape as acceptable if the women had initiated the date (Muehlenhard, in Pirog-Good and Stets, 1989). Drinking alcohol or taking drugs appears to be associated with acquaintance rape. Koss (1988) found that at least 55 percent of the victims in her study had been drinking or taking drugs just before the attack. Women who are raped within dating relationships or by an acquaintance are seen as "safe" victims because they are unlikely to report the incident to authorities or even view it as rape. Not only did a mere five percent of the women who had been raped in the Koss study report the incident, but 42 percent of them had sex again with their assailants.

The company one keeps may be a factor in predisposing women to an increased risk of sexual assault. An investigation of dating aggression and the features of college peer groups (Gwartney-Gibbs & Stockard, in Pirog-Good and Stets, 1989) supports this idea. The results indicate that those women who characterized the men in their mixed-sex social group as occasionally displaying forceful behavior towards women were significantly more likely themselves to be victims of sexual aggression. Being in familiar surroundings does not provide security. Most acquaintance rapes take place in either the victim's or the assailant's home, apartment, or dormitory.

VII. Who Commits Acquaintance Rape?

Just as with the victim, it is not possible to clearly identify individual men who will be participants in acquaintance rape. As a body of research begins to accumulate, however, there are certain characteristics which increase the risk factors. Acquaintance rape is not typically committed by psychopaths who are deviant from mainstream society. It is often expressed that direct and indirect messages given to boys and young men by our culture about what it means to male (dominant, aggressive, uncompromising) contribute to creating a mindset which is accepting of sexually aggressive behavior. Such messages are constantly sent via television and film when sex is portrayed as a commodity whose attainment is the ultimate male challenge. Notice how such beliefs are found within the vernacular of sex: "I'm going to make it with her," "Tonight's the night I'm going to score," "She's never had anything like this before," "What a piece of meat," "She's afraid to give it up."

Nearly everyone is exposed to this sexually biased current by various media, yet this does not account for individual differences in sexual beliefs and behaviors. Buying into stereotypical attitudes regarding sex roles tends to be associated with justification of intercourse under any circumstances. Other characteristics of the individual seem to facilitate sexual aggression. Research designed to determine traits of sexually aggressive males (Malamuth, in Pirog-Good and Stets, 1989) indicated that high scores on scales measuring dominance as a sexual motive, hostile attitudes towards women, condoning the use of force in sexual relationships, and the amount of prior sexual experience were all significantly related to self-reports of sexually aggressive behavior. Furthermore, the interaction of several of these variables increased the chance that an individual had reported sexually aggressive behavior. The inability to appraise social interactions, as well as prior parental neglect or sexual or physical abuse early in life may also be linked with acquaintance rape (Hall & Hirschman, in Wiehe and Richards, 1995). Finally, taking drugs or alcohol is commonly associated with sexual aggression. Of the men who were identified as having committed acquaintance rape, 75 percent had taken drugs or alcohol just prior to the rape (Koss, 1988).

VIII. The Effects of Acquaintance Rape

The consequences of acquaintance rape are often far-reaching. Once the actual rape has occurred and has been identified as rape by the survivor, she is faced with the decision of whether to disclose to anyone what has happened. In a study of acquaintance rape survivors (Wiehe & Richards, 1995), 97 percent informed at least one close confidant. The percentage of women who informed the police was drastically lower, at 28 percent. A still smaller number (twenty percent) decided to prosecute. Koss (1988) reports that only two percent of acquaintance rape survivors report their experiences to the police. This compared with the 21 percent who reported rape by a stranger to the police. The percentage of survivors reporting the rape is so low for several reasons. Self-blame is a recurring response which prevents disclosure. Even if the act has been conceived as rape by the survivor, there is often an accompanying guilt about not seeing the sexual assault coming before it was too late. This is often directly or indirectly reinforced by the reactions of family or friends in the form of questioning the survivor's decisions to drink during a date or to invite the assailant back to their apartment, provocative behavior, or previous sexual relations. People normally relied upon for support by the survivor are not immune to subtly blaming the victim. Another factor which inhibits reporting is the anticipated response of the authorities. Fear that the victim will again be blamed adds to apprehension about interrogation. The duress of reexperiencing the attack and testifying at a trial, and a low conviction rate for acquaintance rapists, are considerations as well.

The percentage of survivors who seek medical assistance after an attack is comparable to the percentage reporting to police (Wiehe & Richards, 1995). Serious physical consequences often emerge and are usually attended to before the emotional consequences. Seeking medical help can also be a traumatic experience, as many survivors feel like they are being violated all over again during the examination. More often than not, attentive and supportive medical staff can make a difference. Survivors may report being more at ease with a female physician. The presence of a rape-crisis counselor during the examination and the long periods of waiting that are often involved with it can be tremendously helpful. Internal and external injury, pregnancy, and abortion are some of the more common physical aftereffects of acquaintance rape.

Research has indicated that the survivors of acquaintance rape report similar levels of depression, anxiety, complications in subsequent relationships, and difficulty attaining pre-rape levels of sexual satisfaction to what survivors of stranger rape report (Koss & Dinero, 1988). What may make coping more difficult for victims of acquaintance rape is a failure of others to recognize that the emotional impact is just as serious. The degree to which individuals experience these and other emotional consequences varies based on factors such as the amount of emotional support available, prior experiences, and personal coping style. The way that a survivor's emotional harm may translate into overt behavior also depends on individual factors. Some may become very withdrawn and uncommunicative, others may act out sexually and become promiscuous. Those survivors who tend to deal the most effectively with their experiences take an active role in acknowledging the rape, disclosing the incident to appropriate others, finding the right help, and educating themselves about acquaintance rape and prevention strategies.

One of the most serious psychological disorders which can develop as the result of acquaintance rape is Posttraumatic Stress Disorder (PTSD). Rape is just one of many possible causes of PTSD, but it (along with other forms of sexual assault) is the most common cause of PTSD in American women (McFarlane & De Girolamo, in van der Kolk, McFarlane, & Weisaeth, 1996). PTSD as it relates to acquaintance rape is defined as in the Diagnostic and Statistical Manual of Mental Disorders-Fourth Edition as "the development of characteristic symptoms following exposure to an extreme traumatic stressor involving direct personal experience of an event that involves actual or threatened death or serious injury, or other threat to one's physical integrity" (DSM-IV, American Psychiatric Association, 1994). A person's immediate response to the event includes intense fear and helplessness. Symptoms which are part of the criteria for PTSD include persistent reexperiencing of the event, persistent avoidance of stimuli associated with the event, and persistent symptoms of increased arousal. This pattern of reexperiencing, avoidance, and arousal must be present for at least one month. There must also be an accompanying impairment in social, occupational, or other important realm of functioning (DSM-IV, APA, 1994).

If one takes note of the causes and symptoms of PTSD and compares them to thoughts and emotions which might be evoked by acquaintance rape, it is not difficult to see a direct connection. Intense fear and helplessness are likely to be the core reactions to any sexual assault. Perhaps no other consequence is more devastating and cruel than the fear, mistrust, and doubt triggered by the simple encounters and communication with men which are a part of everyday living. Prior to the assault, the rapist had been indistinguishable from non rapists. After the rape, all men may be seen as potential rapists. For many victims, hypervigilance towards most men becomes permanent. For others, a long and difficult recovery process must be endured before a sense of normalcy returns.

IX. Prevention

The following section has been adapted from I Never Called It Rape, by Robin Warshaw. Prevention is not just the responsibility of the potential victims, that is, of women. Men may try to use acquaintance rape myths and false stereotypes about "what women really want" to rationalize or excuse sexually aggressive behavior. The most widely used defense is to blame the victim. Education and awareness programs, however, can have a positive effect in encouraging men to take increased responsibility for their behavior. Despite this optimistic statement, there will always be some individuals who won't get the message. Although it may be difficult, if not impossible, to detect someone who will commit acquaintance rape, there are some characteristics which can signal trouble. Emotional intimidation in the form of belittling comments, ignoring, sulking, and dictating friends or style of dress may indicate high levels of hostility. Projecting an overt air of superiority or acting as if one knows another much better than the one actually does may also be associated with coercive tendencies. Body posturing such as blocking a doorway or deriving pleasure from physically startling or scaring are forms of physical intimidation. Harboring negative attitudes toward women in general can be detected in the need to speak derisively of previous girlfriends. Extreme jealousy and an inability to handle sexual or emotional frustration without anger may reflect potentially dangerous volatility. Taking offense at not consenting to activities which could limit resistance, such as drinking or going to a private or isolated place, should serve as a warning.

Many of these characteristics are similar to each other and contain themes of hostility and intimidation. Maintaining an awareness of such a profile may facilitate quicker, clearer, and more resolute decision-making in problematic situations. Practical guidelines which may be helpful in decreasing the risk of acquaintance rape are available. Expanded versions, as well as suggestions about what to do if rape occurs, may be found in Intimate Betrayal: Understanding and Responding to the Trauma of Acquaintance Rape (Wiehe & Richards, 1995) and I Never Called It Rape (Warshaw, 1994).

References

American Psychiatric Association, (1994). Diagnostic and statistical manual of mental disorders (4th ed.). Washington, DC: Author.

Francis, L., Ed. (1996) Date rape: Feminism, philosophy, and the law. University Park, PA: Pennsylvania State University Press.

Gwartney-Gibbs, P. & Stockard, J. (1989). Courtship aggression and mixed-sex peer groups In M.A. Pirog-Good & J.E. Stets (Eds.)., Violence in dating relationships: Emerging social issues (pp. 185-204). New York, NY: Praeger.

Harris, A.P. (1996). Forcible rape, date rape, and communicative sexuality. In L. Francis (Ed.)., Date rape: Feminism, philosophy, and the law (pp. 51-61). University Park, PA: Pennsylvania State University Press.

Koss, M.P. (1988). Hidden rape: Sexual aggression and victimization in the national sample of students in higher education. In M.A. Pirog-Good & J.E. Stets (Eds.)., Violence in dating relationships: Emerging social issues (pp. 145168). New York, NY: Praeger.

Koss, M.P. & Dinero, T.E. (1988). A discriminant analysis of risk factors among a national sample of college women. Journal of Consulting and Clinical Psychology, 57, 133-147.

Malamuth, N.M. (1989). Predictors of naturalistic sexual aggression. In M.A. Pirog-Good & J.E. Stets (Eds.)., Violence in dating relationships: Emerging social issues (pp. 219- 240). New York, NY: Praeger.

McFarlane, A.C. & DeGirolamo, G. (1996). The nature of traumatic stressors and the epidemiology of posttraumatic reactions. In B.A. van der Kolk, A.C. McFarlane & L. Weisaeth (Eds.)., Traumatic stress: The effects of overwhelming experience on mind, body, and society (pp. 129-154). New York, NY: Guilford.

Muehlenhard, C.L. (1989). Misinterpreted dating behaviors and the risk of date rape. In M.A. Pirog-Good & J.E. Stets (Eds.)., Violence in dating relationships: Emerging social issues (pp. 241-256). New York, NY: Praeger.

Stan, A.M., Ed. (1995). Debating sexual correctness: Pornography, sexual harassment, date rape, and the politics of sexual equality. New York, NY: Delta.

Warshaw, R. (1994). I never called it rape. New York, NY: HarperPerennial.

Wiehe, V.R. & Richards, A.L. (1995). Intimate betrayal: Understanding and responding to the trauma of acquaintance rape. Thousand Oaks, CA: Sage.

David G. Curtis, Ph.D., B.C.E.T.S., is a Clinical and School Psychologist. As a consulting psychologist with Long Island Psychological Associates, P.C. in New York he is involved with the evaluation and treatment of survivors of traumatic events. Dr. Curtis is also a school psychologist in the Merrick School District. He is the author and coordinator of the District's Crisis Response Plan. He is a Board Certified Expert in Traumatic Stress and Diplomate of the American Academy of Experts in Traumatic Stress, where he also serves on the Scientific Advisory Board. Dr. Curtis has held an Adjunct Professor position at Hofstra University. He has presented at various conferences on topics such as Attention Deficit Disorder and Psychological Inhibitors of Athletic Performance. He is a member of the American Psychological Association, the Association for the Advancement of Behavior Therapy, the Nassau County Psychological Association, and the Suffolk County Psychological Association.

©1997 by The American Academy of Experts in Traumatic Stress, Inc.
</div>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/m4-9mYrbXVI" title="##DEAR_KELELA##WE_WENT_HOME_THIS_MORNING_AND_I_MISSED_YOU##I_LOVE_YOU_FOREVER" frameborder="0" ></iframe>
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
<img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/I_HAVE_NOT_LOGGED_IN_IN_OVER_TWO_WEEKS.PNG">	
<p>  <span class="firstcharacter">PiNTEREST LocksOutFATHERS"</span> 
It has been over two weeks since I have logged in. I found Sartu, my kidnapped wife from Ethiopia via ##ALPHARETTA. The previous time I found her she exclaimed "That's My Husband!!", and the captors refused to let her go. Im at a point in my life where I have gathered my life partners. The truth is that is too much power. I went to ##DANCE411 in Atlanta for sometime between parenting, working as a ##DevOps_ENGiNEER, and ##JiUJiTSU. A group of women that are blowing up the RnB Chitlin_Circuit of today chose me as thier dance husband... My from my understanding 4th cousin Muna and 8th cousin Sartu from ##ETHiO_SOMOLiA and about 10 other women decided we would start a business to support our artistic endevors and care for our children. They were all kidnapped with our children and sold into a ##PROSTiTUTION_MARKET_in_SOUTHERN_CALiFORNiA... We have relationships outdoors, but the pimps rape them systematically for use in a global ##SEX_TOURiSM_TRADE. The Human traffickers stole and steal everything I reaccquire to get on the internet. And when I travel to use computers at local librays in #LOS_ANGELES_COUNTY, I am severely stalked, attacked, poisoned with chemical weapons and randomly aharrassed. I was using pinterest to serve up internet content for our large families spiritual needs. Those of us from Africa are Muslims, and we had a semi-healthy stint with Jehovahs Witnesses. So we are a very spiritually minded family. However many of the pimps are anti god that we are dealing with... People on the late night show and everything are involved. Long story short.. Pinterest was our watering hole. I could post content bulletin board #style, and interact with my wives and children in passing as we wait for my old job JPL to step in   the CIA/FBi/US_MARSHALLS and other services in law enforcement has helped us contact since Erikas dissapearance was taken in by the ##DEKALB_COUNTY_SHRIFFs office and they told me to post constantly to stay visible... People dissapear when the dont post in this era of ##ECONOMIC_ASSASINATION_of_FATHERS_FOR_THE_PURPOSE_OF_PROSTITUTITUING_HEALTHY_FAMiLiES
	
	

</p>
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/596188557&color=%236c5c34&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
[CSS performance optimization](https://developer.mozilla.org/en-US/docs/Learn/Performance/CSS)
[HTML_CSS_RENDERiNG_PERFORMANCE_BASiCS](https://developer.mozilla.org/en-US/docs/Web/Performance/Fundamentals)
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643348296&color=%2312bad0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
[FoNT_FALLBACK](https://medium.com/swlh/full-text-styling-with-a-single-line-of-css-838e8c666f4d)
<div class="flex-container">
   
    <div class="item1">                        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SartUBreast_inTOXiCATE_Me.gif" /></div>
    <div class="item2">                        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SartUBreast_inTOXiCATE_Me.gif" /></div>
    <div class="item3">                        <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/SartUBreast_inTOXiCATE_Me.gif" /></div>
</div>
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
<div class="pinupGallery">
  <img class="pinupImage featured-pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
  <img class="pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
  <img class="pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
  <img class="pinupImage" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd2087144034631.62851b973d0ff.jpg" alt="">
</div>
<img src="https://im.vsco.co/aws-us-west-2/12f8b0/56497/5fc45a98e1ebb64f08283c25/vsco5fc45a9961d50.jpg" alt="##SKATE_THE_WORLD_BOOK::NATIONAL_GEOGRAPHIC" >
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
 </div>
<a href="https://slate.com/technology/2017/03/did-the-cia-really-astrally-project-to-mars-in-1984.html">##DID_THE_CIA##ASTRAL_PROJECT_TO_MARS</a>
<a href="https://comicbook.com/irl/news/cia-documents-leak-extrasensory-perception-mind-telepathy-reveal/">##EXTRA_SENSORY_PERCEPTION##</a>
<a href="https://www.vice.com/en/article/7k9qag/how-to-escape-the-confines-of-time-and-space-according-to-the-cia">##RAVEN_AT_VICE KNOWS_PSYCHIC_SHIT##</a>
<a href="https://www.nsa.gov/portals/75/documents/news-features/declassified-documents/cryptologs/cryptolog_85.pdf">##NSA_TYPESHIT_wit_DAH_SOViETS</a>
<a href="https://jamesaconrad.com/TK/US-government-interest-in-telekinesis-and-psychokinesis.html">##PSYCHIC_ARMY##ALEX_JONES DAVID_ICK_KNOW ALL_ABOUT_IT</a>
<a href="https://youtu.be/tWpQNexUZUQ">##LETHAL_ENFORCERS_2##GUN_FIGHTERS##</a><a href="https://youtu.be/6nwA8oPkaSg">##FORZA5_STi</a><a href="https://www.youtube.com/embed/O9MIvIVWq3E">##SQUARE_ENIX_KNOWS_THAKA_WANTS A_DRIVING_GAME##</a> <a href="https://en.wikipedia.org/wiki/Stargate_Project">##STARGATE_PROJECT##</a>
<a href="https://www.californiapsychics.com/blog/psychic-tools-abilities/benefits-reading-remote-viewing-psychic.html">The Benefits of Reading with a Remote Viewing Psychic</a><a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00792R000700620001-2.pdf">##PARAPSYCHOLOGY_COMMUNiCATiON_BARRiERS</a>
<a href="https://www.gaia.com/article/what-is-remote-viewing">What is Remote Viewing?</a>
<a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00787R000200080050-9.pdf">##TELEPATHY_COULD_BE_REAL##</a> <a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00792R000300420008-1.pdf"> ##PSYCHIC_MAGNIFICATION## </a><a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00789R003300190006-0.pdf">##NONiNVASiVE_BRAiN_WORK##</a>
<a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00792R000400030001-0.pdf"> EXPERIMENTAL DREAM TELEPATHY-CLAIRVOYANCE AND GEOMAGNETIC ACTIVITY (MICHAEL PERSINGER) </a> <a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00787R000300180001-1.pdf"> ##EFFORTS_TO_IMPROVE_REMOTE_VIEWING##</a>
<a href="https://www.cia.gov/readingroom/docs/NSA-RDP96X00790R000100040012-1.pdf"> ##TELEKINESIS## </a>
<a href="https://www.cia.gov/readingroom/docs/CIA-RDP96-00792R000400100005-8.pdf"> PARAPSYCHOLOGY ##THE_ANGLOS_-->VS<--_THE_LATiNS##</a>
<a href="https://www.cia.gov/readingroom/freedom-information-act-5-usc-%C2%A7552"> ##THE_SOCIAL_MEDIA_COMPANIES_VIOLATED THE_FREEDOM_OF_INFORMATION_ACT_IN_SUPRESSING
 THE_SEARCH_FOR_THAKA_BEKELE_SELASSIE_aka_RASHARD_IMAN_KELLY_AHMEDs_FAMILY##</a>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/pZ7Cc-OVTGg" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/8BCwDA67CqY" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
 <a href="http://www.wefunkradio.com/"> #### TUNE_IN --> WeFunK_RADIO [##STREAMING## </a>
<a href="http://www.wefunkradio.com/show/498/play_aa"> WeFunk_RADIO_BACK_EPISODE --> EPISODE_498] </a>
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
 

<div class='some-page-wrapper'>
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
</div>


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

Since I'm publishing using [##GiTHUB_PAGES](https://pages.github.com/), alot of administration needs are met from my [GiTHUB_ACCOUNT](https://github.com/ThakaRashard), I can focus on coding. [Cascading Style Sheets is a legit programming language for the browser](http://www.csszengarden.com/216/). Using the site David Shea Started, I can get this Jekyll account to another level. I really need this book [The Zen of CSS](https://www.goodreads.com/en/book/show/565.The_Zen_of_CSS_Design) he published. I have to create navigation to my resume and create a contact page. Im using [GiTHUB Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories) to manage individual pages right now because it is a small site and I want [psychological separation](https://www.separationadvice.net/psychological-separation/) which social media does not provide. I was blackballed on Linkedin for just not knowing enough for my age, and my family+romance life. Every woman that committed to me was sold into sex slavery and kidnapped by ##INSTAGRAM_PiMPS_and_MARKETED_iN_FACEBOOK_BROTHELS. They are still trafficked as prostitutes. IT people in the DEVOPS generation often fool themselves into thinking prostitution is normal and the family which is affected is the problem. This view has left people with familes discriminated against in the ##IT_MARKETPLACE, but here in Los Angeles after 2 years of homelessness, I sense my luck changing... So Im working hard to clean up my image and reputation outside social media, which has brought me closer to my family ##I_FOUND_EVERYONE_ALiVE_HERE_IN_SOUTHER_CALIFORNIA.\
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
Super advance duet song... LEvels up ##RUnDMCs_PETER_PiPER
<iframe width="100%" height="315" src="https://www.youtube.com/embed/NaFqyJG8ung" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
RUN_DMC had a great run##COLD_CRUSH_BROTHERS_and_OTHER_PiONEERS_STARTED_iT_iN_THiS_GENRE
<iframe width="100%" height="315" src="https://www.youtube.com/embed/fKCzZfuuEaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/Kuzp6r1zNZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ##KURT_COBAiN_UNDERSTANDS_ME##
##_PLEASE_GiVE_ME_A_JOB_i_SORRY_FOR_HURTiNG_PEOPLES_FEELiNGS_iN_ATLANTA
<iframe width="100%" height="315" src="https://www.youtube.com/embed/x_tcoBOn6Mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/aWmkuH1k7uA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ##THESE_PEOPLE_KNOW_WHERE_MUNA_iS_BUT_iTS_TOO_DANGEROUS_TO_TALK##
##_i_SAW_HER_ON_SKiD_ROW = ##THiS_CANT_BE_LiFE##THERES_GOTTA_BE_MORE
<iframe width="100%" height="315" src="https://www.youtube.com/embed/ACXye620uk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
##_SOMEHOW_SOMEWAY_iLL_GET_MY_FAMiLY_BACK_SOMEDAY
<iframe width="100%" height="315" src="https://www.youtube.com/embed/QSmKOuPZZ9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ##VAN_BODE##HAS_BEEN_ACCEPTED_GLOBALLY##
<iframe width="100%" height="315" src="https://www.youtube.com/embed/YoNEmhIeckw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## RAPSODY = " Ibtihaj ft. D'Angelo, GZA "
<iframe width="100%" height="315" src="https://www.youtube.com/embed/jhMk_wLm07E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## RAPSODY = "LAiLAS_WiSDOM"
<iframe width="100%" height="315" src="https://www.youtube.com/embed/btYlWphnfbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe src="https://pixelfed.tokyo/p/THAKA/363094015438763292/embed?caption=false&likes=false&layout=compact" class="pixelfed__embed" style="max-width: 100%; border: 0" width="100%" allowfullscreen="allowfullscreen"></iframe><script async defer src="https://pixelfed.tokyo/embed.js"></script>


## 42_DUGG = "YOU_DA_ONE"
<iframe width="100%" height="315" src="https://www.youtube.com/embed/cnHs-oB2eCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## CSS_FOR_YOUTUBE_ViDEOS
{% highlight css %}
style="width:1000px; height:300px; border: 50px solid black;"
/* This_Article_helped https://medium.com/rockedscience/smartify-your-video-embeds-f1cc13b775b5 
Medium.com used to be a domain for spirituality but the Neo_Nazi anti-spirituality movement ##FLUSHED_US_OWT */
{% endhighlight %}

## GHOSTFACE_KiLLAH = iRONMAN_1996_WHOL3_4LBUM
<iframe width="100%" height="315" src="https://www.youtube.com/embed/bCx9Jn8rpG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## #ZEXOR_WAS_MURDERED_LOOKiNG_FOR_HiS_FAMiLY
https://forum.12ozprophet.com/topic/88098-rip-zexor/
<iframe width="100%" height="315" src="https://www.youtube.com/embed/AT-Km8ToCGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<a href="https://www.youtube.com/c/TapeDeckWreck" target="_blank"> <img src="https://raw.githubusercontent.com/ThakaRashard/bubblegumpop/gh-pages/img/Capture.PNG" alt="##BUBBLEGUM_POP##IS_HERE_TO_STAY" > </a>

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
[Spiderman Cartoon-1967 Season 1 Episode 19]([https://youtu.be/aBzotaBgoRo)
[THiNKiNG_OF_YOU##SARTU##ZEE##UNDASTAND_DAH_ZEE_AND_YOU_WILL_INDEED_UNDASTANYND_HUH##](https://youtu.be/9iUE4F9UHok)
<span class="neonText">
 ##SAATUZEE_WILL_YOU_MARRY_ME?!
</span>
[DELiRiUM:BY::##ELLiE_GOULDING## ##FAV_TRACK## ## ](https://youtu.be/cLWv0f2Tt8E) 
[DiSCOGS:##ENTRY](https://www.discogs.com/release/8118343-Ellie-Goulding-Delirium)
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
![AMON_TOBIN_SOLID_STEEL](https://ninjatune.net/images/releases/solid-steel-presents-amon-tobin-main.jpg)
![AMON_TOBIN##PERMUTATION##](https://f4.bcbits.com/img/a1983715436_10.jpg)
[DOWNLOAD_AMON_TOBIN_PERMUTATION_FROM_BANDCAMP](https://music.amontobin.com/album/permutation)
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
	


Its been 774 days since I have seen our daughter ## CORAL_IRIS_KELLY##SELASSIE ~> 
Her mother Erika Renee Kelly was kidnapped from 
## EAST_ATLANTA
GEORGiA on Feb 2,2020. A local Atlanta man named Matt Field bragged about it on Facebook stating "I_SOLD_HER".

I found her near Venice beach California and my tattooist Kennie_Davis of ##Jolly_Roger_Tattoo in _Stockbridge#Georgia was not too far from the scene. Erika and I were not estranged when she disappeared as [ESSENCE_MAGAZiNE_STATED](https://www.essence.com/news/erika-kelly-missing-atlanta-georgia) we were coparenting. I was laid off from my IT job at [Ionic Security](https://www.linkedin.com/company/ionic-security) after my work was repeatedly sabotaged by my manager. I opened a case with Fulton_County_Family_Services two months before our eviction from our East_Atlanta_Home_at_631_Moreland_Ave_in_Atlanta_Georgia they failed to process us after repeated visits and calls. I took odd jobs and even scored a mural gig with [Mercedes_BenZ_Stadium](https://mercedesbenzstadium.com/) for the [Atlanta_Falcons](https://www.atlantafalcons.com/). They paid me $1500 for a 40ft graffiti mural on red canvas for former athlete ##Deion_Sanders. I was severely underpaid but it covered the rent for one more month. I moved in with Constancia and her daughter ##Akeeva, got Coral in school at [Chapel Hill Elementary](https://www.chapelhilles.dekalb.k12.ga.us) and worked hard to get a new 9-5.
 
Constancia did not like me or Coral living with her and Akeeva so they undercut me with accusations of erratic behavior and started thier own dfacs case accusing me of schizophrenia. I had no income and was repeatedly denied foodstamps and welfare by a woman named ##DANIELLE_MASHONGA_and_her_colleage##MANESSA_WARNER... ##Coral would ask 
## Where_is_Mommy?!?
I told her that Matt stole and raped her and she needs our help, so we have to keep looking. Constancia and Akeeva constantly defended Matt. He is a known pedophile and child and adult rapist in the Atlanta art community. I did not know this. We shopped at the same record store and he often offered me work. I loath rapist. I loath pedophilia. Once I learned of his ways I distanced myself. So ##Erikas_mother_and_sisters_DEFENDING_HIM, struck me as bizarre. "##Its_just_a_white_boy_joke##He_didnt_sell_her". [DFACS](https://dfcs.georgia.gov/) stalked me on Facebook and indirectly accused me of ##CHILD_MOLESTATION for a video where we were playing with a wand style muscle massager, it was innocent.  They [forcibly removed Coral](https://www.youtube.com/watch?v=AmYdIZhahrQ) saying that I was saying ["inappropriate things"](https://www.youtube.com/watch?v=9sCE3HhjSbY) and violating her by saying that her mom had been raped and kidnapped. I learned that telling Coral the ugly truth was the best way to keep a solid trust filled relationship with her.
 
In the DFACS meeting, puzzled I told Mashonga the truth, I cant find work, my reputation was being sabotaged and I could not even get a job at ##Kroger the local grocery store. I told Mashonga I needed money for food, Constancia would not feed niether me or Coral. I asked Mashonga in [This_Family_Meeting](https://www.youtube.com/watch?v=Q8NXhT6_Tx8) if she cared about me dying on the street and she shook her head, no. I was never interviewed with Coral at all, I never got a psych eval until I got to a ##UCLA_Recoup_Center_in_PalmDale_California.
 
In early October I saw Coral, in Pasadena, ##California, with a grown man wearing fishnet stockings... Shes 9. I was shot with a poison dart one day later, my skateboard stolen and my foot began to swell larger that a shoe could fit... I was rushed to the emergency room and ##UCLA ##Cut_my_foot_to_the_bone_to_drain_the_infection... <del>I cant run any more and am now handicapped</del> 
## I_HAVE_HEALED to the point of skating via my familys physical-therapy regimine to keep us healthy as dancers. But my toe on the foot that endured the injury still does not work properly and <ins>I now struggle to run</ins>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/Q8NXhT6_Tx8" title="YouTube video player"  allowfullscreen></iframe>

<iframe width="100%" height="400" src="https://www.youtube.com/embed/9sCE3HhjSbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="100%" height="400" src="https://www.youtube.com/embed/AmYdIZhahrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h2 class="neonText">Her_Former_Life_With_Me</h2>
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
<span class="firstcharacter">
	## Everything should be done in love.
### - 1 Corinthians 16:14</span>


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


### SorryBabeDat_SHiTBROKE = [YouTube](did their research) Here is ya song... Thanks for making my day <3 <iframe width="100%" height="315" src="https://www.youtube.com/embed/Zh25aap8gH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

## Eric is helping me here [Eric_Meyer](https://github.com/meyerweb) got me interested in webdesign years ago with what I call his [ Nautilus design](https://meyerweb.com/eric/css/edge/complexspiral/glassy.html). I have always enjoyed graphic arts. After my mother and I were kidnapped, the home I grew up in with her sister and her kidnapper was stocked high with [National Geographic Magazines ](https://lifeasahuman.com/2015/media-tech/media/why-i-save-old-national-geographic-magazines/) and [ Watchtower and AWAKE Magazines](https://vatican.com/The-Americas-Watchtower-Magazines%e2%80%92-Jehovah-Witness/6633/502/4583/g17Watchtower%20Magazines-%20Jehovah%20Witness'e16'1/295/) and being from ##LOS_ANGELES I had a lot of exposure to [graffiti art](https://www.graffiti.org/) and my brothers were [Graffiti Writers](http://www.at149st.com/history.html). So when I got my first exposure to the web in 1997, I wanted in, but had no Idea what to do. After two to three years of infreaquent browsing due to the rarity and scarcity of computers, much less computers with internet connections [SCAD opened its library to the public](https://www.scad.edu/life/buildings-and-facilities/jen-library) and while I wanted to go for graphic design, my foster parents could not affor it. It was about $100,000 for a ##GRAPHIC_DESIGN_DEGREE. ##WiLLiE_KELLY_JR_MY_KIDNAPPER only made around $35,000 a year. Even if he would pay for college it was not even worth asking and SCAD had noprograms for local residents. Eric's Design looked incredible on the library's [Bondi Blue First Generation iMACS](https://everymac.com/systems/apple/imac/specs/imac_ab.html). That machine was like $1,300 so I could never get one on my own... I struggled to get [The Original Playstation in 1995](https://www.britannica.com/topic/PlayStation), it was only $300. I have never had a new computer of my own. I did use them in corporate... I in someways worked for new computers for years while dealing with ##East_AFRICAN_ISSUES. THis codeblock will according to Eric, make my site more readable across more platforms >>> {% highlight css %} /* <-- Begin #ERiC_MEYERS_CSS_TOOLS */ /* <-- Begin #ERiC_MEYERS_CSS_TOOL */ /* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 License: none (public domain) */ html { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; } /* HTML5 display-role reset for older browsers */ article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; } body { line-height: 1; } ol, ul { list-style: none; } blockquote, q { quotes: none; } blockquote:before, blockquote:after, q:before, q:after { content: '' ; content: none; } table { border-collapse: collapse; border-spacing: 0; } /* <-- end #ERiC_MEYERS_CSS_RESET_TOOL */ {% endhighlight %} 
 
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

[The U.S. National Archives](https://www.flickr.com/photos/35740357@N03/)
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
