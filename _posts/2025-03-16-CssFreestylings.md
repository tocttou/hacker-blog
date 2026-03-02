---
title:  CssFreestyling
published: true
---
<style>
    body {
  color: white;
	 background: url(https://i.imgur.com/yuaLdv6.gif) no-repeat center center fixed; 
   background-attachment: fixed;
   line-height: 1.5;
   -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: "Comfortaa", -apple-system, Ubuntu, "Ariel Black", Verdana;
}


main {
  
  display:grid;
  border: 1px solid white;
  margin:25px;
  border-radius: 15px;
  padding: 10px;
}
img {height:auto;
border-radius: 25px;
margin: 15px;}
iframe {height:600px;
border-radius: 5%;}
     .floatright iframe:nth-child(odd) {
    float: right;
  }
  .floatleft iframe:nth-child(even) {
    float: left;
    
  }iframe[src*="www.iheart.com"] {width: auto; height:200px; padding: 4px;}
    .floatright iframe:nth-child(odd) {
    float: right;
  }
  .floatleft iframe:nth-child(even) {
    float: left;
    
  }
   img {  max-height: 100%;
    max-width: 100%;
  display:block;}
    
    .tupperware {
      display: flex;
      
      justify-content: space-evenly;
      flex-flow: row wrap; 
      padding: 15px;
      gap: 5px;
      height: auto;
    }
    

    
    .tupperware > * {
      border: 1px solid red;
      border-radius: 5px;
      padding: 0px;
      flex-basis: 30%;
      flex-shrink:2;
      overflow:hidden;
      flex-grow:1;
      overflow: hidden;
      transition: all 300ms ease-in-out;
      
      
      &:hover {
        flex-grow: 2;
        
      }
    }
.tupperware img {
      width: 100%;
      border-radius: 30px;
    }


  .paginator {

    width: 100vw;

  }

  .featured-post {
    height: 400px;
    margin: 0px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .featured-post h2 {
    bottom: 0;
    margin: 0;
    padding: 10px;
    position: absolute;
  }
  .featured-post h2 span {
    display: inline-block;
    color: white;
    font: bold 24px/45px Helvetica, Sans-Serif;
    letter-spacing: -1px;
    background: rgb(0, 0, 0); /* fallback color */
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
  }
  .featured-post span a {
    color: white;
  }
  .featured-post h1 {
    margin: 10px;
  }
  .post-content {
    width: 600px;
    display: block;
    margin: 10px auto 10px;
  }
  .post-date {
    display: block;
    margin-bottom: 1rem;
    color: #9a9a9a;
    font-size:0.8rem;
  }
  .featured-image img {
    margin: 5px auto 25px;
    display: block;
    max-width: 600px;
  }
  .featured-post {
    height: 400px;
    margin: 5px 10px 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .featured-post h2 {
    bottom: 0;
    margin: 0;
    padding: 10px;
    position: absolute;
  }
  .featured-post h2 span {
    display: inline-block;
    color: white;
    font: bold 24px/45px Helvetica, Sans-Serif;
    letter-spacing: -1px;
    background: rgb(0, 0, 0); /* fallback color */
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
  }
  .featured-post span a {
    color: white;
  }
  .featured-post h1 {
    margin: 10px;
  }

  </style>

  <body>

  <main class="floatleft floatright">



  
<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/real-923-181/?embed=true" frameborder="0"></iframe>  
<div class="tupperware">

    
<article itemprop="blogPosts" itemscope="" itemtype="https://schema.org/BlogPosting">
  <a href="https://www.ferrari.com/en-EN/magazine/articles/lasting-legacy-the-ferrari-f40">
    <div class="featured-post" style="background-image:url(https://cdn.ferrari.com/cms/network/media/img/resize/65d3857c8200e2008e48cd4f-f40%20legend_20240305_2_1250x700_v1?width=1920&height=0)">
      <h2 itemprop="headline"><span>The F40 </span></h2>
    </div>
  </a>
</article>


    
<article itemprop="blogPosts" itemscope="" itemtype="https://schema.org/BlogPosting">
  <a href="https://www.ferrari.com/en-EN/magazine/articles/performance-icon-ferrari-gto">
    <div class="featured-post" style="background-image:url(https://cdn.ferrari.com/cms/network/media/img/resize/65c10e446ccf990024783798-288gtoinside2portrait?width=768&height=0)">
      <h2 itemprop="headline"><span>Ferrari GTO</span></h2>
    </div>
  </a>
</article>


    
<article itemprop="blogPosts" itemscope="" itemtype="https://schema.org/BlogPosting">
  <a href="https://www.ferrari.com/en-EN/magazine/articles/winning-formula-f50">
    <div class="featured-post" style="background-image:url(https://cdn.ferrari.com/cms/network/media/img/resize/65fc70f14c594d0010cf44ac-f50_20240402_cover_768x1024_v2?width=768&height=1024)">
      <h2 itemprop="headline"><span>The F50 </span></h2>
    </div>
  </a>
</article>

<article itemprop="blogPosts" itemscope="" itemtype="https://schema.org/BlogPosting">
  <a href="https://www.ferrari.com/en-EN/magazine/articles/new-v12-12Cilindril">
    <div class="featured-post" style="background-image:url(https://cdn.ferrari.com/cms/network/media/img/resize/65fc495e4f114e0010ebca39-f50_20240402_main_1_720x480?width=768&height=0)">
      <h2 itemprop="headline"><span>V12 
ICONS</span></h2>
    </div>
  </a>
</article>
    

</div>
<img src="https://i0.wp.com/arcademarquee.com/wp-content/uploads/2020/03/turbo-out-run_marquee_23.5x7.9_dedicated.jpg" />
<iframe src="https://archive.org/embed/arcade_toutrun" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
  
  
  
  <img src="https://pac-rats.com/image/cache/catalog/New%20Box%20Outrun%20On-1000x400.JPG">
  
  <iframe src="https://archive.org/embed/arcade_outrun" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
  
  
  
<figure>
  <figcaption>Future: `[WifiLit]()`</figcaption>
  <audio controls="" src="https://archive.org/download/future-beastmode-2/2/01-WIFI%20LIT.mp3"></audio>
  <a href="https://archive.org/download/future-beastmode-2/2/01-WIFI%20LIT.mp3"> Download audio </a>
</figure>
</main>


</body>