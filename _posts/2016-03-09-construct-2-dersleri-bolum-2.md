---
id: 653
title: Construct 2 Dersleri Bölüm 2
date: 2016-03-09T10:49:32+00:00
author: admin
layout: post
guid: http://146.185.174.111/?p=653
permalink: /oyun-gelistirme/construct-2/construct-2-dersleri-bolum-2/
colormag_page_layout:
  - default_layout
views:
  - "1287"
image: /wp-content/uploads/2016/03/bölüm-2.jpg
categories:
  - Construct 2
tags:
  - construct 2
  - construct 2 dersleri
  - construct 2 türkçe rehber
  - oyun yapma
---
Construct 2 dersleri bölüm 2 ye hoşgeldiniz. Bu bölümde kısaca bahsetmek gerekirse skor sistemi yaptık, arkaplan eklemeyi öğrendik ve ekranın karakterle birlikte kaymasını sağladık.

## Construct 2 Dersleri Bölüm 2 de Ne Yaptık?

  1. Karakterimizin ekranla birlikte kayması için karakterimize &#8220;ScrollTo&#8221; kabiliyetini verdik.
  2. Global variable (küresel değişken) kullanarak skor oluşturduk.
  3. Karakterimiz para ile temas ettiğinde skor değişkenine 50 puan ekledik.
  4. Skor değişkenimizin ekranda gözükmesi için &#8220;Text&#8221; objesi oluşturarak anlık olarak text objesi üzerinde görünmesini sağladık.
  5. Yeni katman oluşturduk.
  6. Textlerin arkaplanla beraber kaymak yerine karakterimizle birlikte hareket etmesini sağlamak için bu katmanımızın parallaxını sıfırladık.
  7. Arkaplan ekledik.
  8. Katmanları sıraladık.

## Construct 2 Dersleri Bölüm 2 de Nasıl Yaptık?

  1. Karakterimize tıklayarak &#8220;**behaviors**&#8221; u açtık ve &#8220;**ScrollTo**&#8221; yu seçerek işlemimizi tamamladık.
  2. Event sheet&#8217;e gelerek sağ tıkladık ve &#8220;**Add global variable**&#8221; seçeneğini seçtik ve değişkenimizin ismini &#8220;_skordegisken_&#8221; olarak değiştirdik.
  3. Karakterimizin para ile temas ettiğinde &#8220;skordegisken&#8221; değişkenin 50 artmasını istediğimiz için şu olayı gerçekleştirdik: Hali hazırda &#8220;adam&#8221; ile &#8220;para&#8221; objelerinin çarpışması olaylarına ekleyeceğimiz sonuç olduğu için bu olayların sonuç kısmındaki &#8220;**Add Event**&#8220;e tıklayarak &#8220;**System**&#8221; i seçtik. Daha sonra &#8220;**Add to**&#8220;yu seçerek gelen ekrandan oluşturduğumuz &#8220;_skordegisken_&#8221; değişkenini bulduk ve altndaki değeri &#8220;50&#8221; yaptık.
  4. Bu değişkenin ekranda gözükmesini istediğimiz için ekranda boş bir alana tıklayarak yeni bir &#8220;Text&#8221; objesi oluşturduk. Tekrardan &#8220;adam&#8221; ile &#8220;para&#8221; objelerinin çarpışması sonucunda gerçekleştireceğimiz sonuç olduğu için sağ tarafa &#8220;Add Event&#8221; dedik ve &#8220;Text&#8221; objemize tıklayarak &#8220;Set text&#8221; seçeneğini seçtik. Değiştirmek istediğimiz yazıyı şu şekilde ayarladık: **<span style="text-decoration: underline;">&#8220;Skor: &#8221; &skordegisken </span>**
  5. Layers kısmından artı &#8220;+&#8221; ya basarak yeni bir katman oluşturduk ve katmanın ismini katman seçiliyken f2 ye basarak &#8220;gui&#8221; olarak değiştirdik.
  6. &#8220;gui&#8221; katmanı seçiliyken sol taraftaki &#8220;properties&#8221; (tercihler) kısmından &#8220;Parallax&#8221; değerini &#8220;0,0&#8221; olarak değiştirdik.  Text objemize tıklayarak sol taraftan &#8220;properties&#8221; kısmından &#8220;Layer&#8221; ı bulduk ve &#8220;gui&#8221; olarak değiştirdik. Bu sayede ekrana çakılı bir şekilde kaymadan sabit bir şekilde karakterimizle hareket eden bir &#8220;Skor&#8221; texti haline getirmiş olduk.
  7. Boş bir alana tıklayarak &#8220;Tiled Background&#8221; u seçtik ve dosyaya  <a href="http://146.185.174.111/wp-content/uploads/2016/03/dosya.png" rel="attachment wp-att-647"><img class="alignnone wp-image-647 size-full" src="http://146.185.174.111/wp-content/uploads/2016/03/dosya.png" alt="construct 2 dersleri bölüm 2" width="32" height="28" /></a> tıklayarak arkaplan resmimi seçtik. Daha önce oluşturduğumuz &#8220;bg&#8221; katmanının içine attık. Oluşturduğumuz arkaplana sağ tıklayarak en arka tarafa gönderdik.
  8. Layers kısmından katmanları şu şekilde sıraladık. En alttaki katman &#8220;bg&#8221; (0. katman) , Ortadaki katman &#8220;ana&#8221; (1. katman), En üstteki katman &#8220;gui&#8221; (2. katman)

### 

## Construct 2 Dersleri Bölüm 2&#8217;nin Videosu: