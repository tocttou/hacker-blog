---
id: 668
title: Construct 2 Dersleri Düşman Sistemi Bölüm 3
date: 2016-03-11T15:59:16+00:00
author: admin
layout: post
guid: http://146.185.174.111/?p=668
permalink: /oyun-gelistirme/construct-2/construct-2-dersleri-dusman-sistemi-bolum-3/
colormag_page_layout:
  - default_layout
views:
  - "1298"
image: /wp-content/uploads/2016/03/bölüm-3.jpg
categories:
  - Construct 2
tags:
  - construct 2
  - construct 2 dersleri
  - construct 2 düşman sistemi
  - construct 2 oyun yapma
  - construct 2 türkçe rehber
  - oyun yapma
---
Construct 2 dersleri bölüm 3 e hoşgeldiniz. Bu bölümde kısaca bahsetmek gerekirse düşman sistemi ekledik, karakterimize can sistemi ekledik. Önceden oluşturduğumuz skor texti ile can textini &#8220;GUI&#8221; adında yeni oluşturduğumuz katmana ekleyerek bu katmanın parallax durumunu (0,0) yaptık yani bu textlerin arkaplanla kaymasına engel olduk karakterimizle beraber gelmesini sağladık. Düşman ekledik ve karakterimiz ile teması halinde karakterimizin canını azaltmayı öğrendik.

## Construct 2 Dersleri Bölüm 3 ( Düşman Sistemi ) te Ne Yaptık?

  1. Sağ tarafta bulunan layers katmanından yeni bir katman oluşturarak GUI adını verdik. Text objelerimizi bunun içerisine aktarmayı öğrendik. Parallax ayarlarını öğrendik.
  2. Düşman ekledik.
  3. Karakterimize can ekledik.
  4. Karakterimiz ile düşmanın teması halinde karakterimizin canınnı gitmesini sağladık.

## Construct 2 Dersleri Bölüm 3 ( Düşman Sistemi ) te Nasıl Yaptık?

  1. Sağ taraftan layersı seçerek artı &#8220;+&#8221; işaretine basıyoruz oluşan katmanın ismini f2 ye basarak &#8220;_gui_&#8221; yapıyoruz. Bu katmanı en üste taşıyoruz ve &#8220;gui&#8221; katmanı seçili durumda iken sol taraftaki properties kısmına bakıyoruz. &#8220;Transparent&#8221; i buluyoruz ve bunu &#8220;Yes&#8221; olarak değiştiriyoruz. &#8220;Scoreobje&#8221; adlı text objemize tıklıyoruz sol taraftan &#8220;Layer&#8221; ı buluyoruz ve &#8220;Gui&#8221; katmanı olarak ayarlıyoruz. Tekrar sağ taraftan katmanlara gelerek &#8220;gui&#8221; katmanımızı seçiyoruz bu katman seçili iken sol taraftaki &#8220;properties&#8221; yani seçenekler kısmından &#8220;parallax&#8221; ı buluyoruz ve bunu &#8220;0,0&#8221; (sıfıra sıfır) olarak değiştiriyoruz. **SON OLARAK İŞLEMİMİZ BİTTİKTEN SONRA &#8220;_ana_&#8221; ADLI KATMANI SEÇEREK BIRAKIYORUZ ÇÜNKÜ YENİ OLUŞTURDUĞUMUZ OBJELERİN &#8220;_ana_&#8221; KATMANINDA OLUŞMASINI İSTİYORUZ. AKSİ HALDE &#8220;_gui_&#8221; KATMANINDA OLUŞUR.**
  2. Boş bir alana çift tıklayarak yani bir sprite oluşturuyoruz. Düşmanımızın resim dosyasını seçerek işlemi tamamlıyoruz.
  3. Event Sheet e geliyoruz ve yeni bir evrensel değişken yani **&#8220;global variable&#8221;** oluşturuyoruz. Adını &#8220;**can**&#8221; yapıyorum ve &#8220;**initial value**&#8221; kısmına _100_ yapıyorum çünkü karakterimin canı olarak belirlediğim bu değişkenin başta sıfır olmasını istemiyorum. Layot kısmına gelerek yeni bir text objesi yaratıyorum. Bu text objesi benim karakterimin canını anlık olarak göstereceğim obje olacak.
  4. Düşman ile çarpıştığında karakterimin canının gitmesini sağlayacağım şimdi. Event Sheet ten yeni bir olay oluşturacağım. Add event diyorum ve karakterimi seçiyorum. &#8220;On collision with another object&#8221; kısmını seçiyorum. Hangi obje ile çarpıştığını istiyorsam o objeyi seçicem. Düşman ile çarpıştığında bir olay gerçekleşsin istediğim için düşmanı seçiyorum o obje olarak. İşlemi tamamladıktan sonra &#8220;**Add Action**&#8221; a basıyorum, &#8220;**System**&#8221; i seçiyoru. Gelen ekrandan &#8220;**Substract From**&#8221; u seçiyorum &#8220;**Variable**&#8221; kısmını can olarak değiştiyorum. &#8220;**Value**&#8221; kısmını ise 10 yapıyorum bu sayede Can değişkeninden 10 azaltmasını istediğimi belirtmiş oldum.

&nbsp;

<img class="wp-image-669 size-full aligncenter" src="http://146.185.174.111/wp-content/uploads/2016/03/bölüm3ün-son-hali.png" alt="construct 2 düşman sistemi onur sanır" width="706" height="247" srcset="http://localhost:8080/mysite/wp-content/uploads/2016/03/bölüm3ün-son-hali.png 706w, http://localhost:8080/mysite/wp-content/uploads/2016/03/bölüm3ün-son-hali-300x105.png 300w" sizes="(max-width: 706px) 100vw, 706px" /> 

&nbsp;

### 

## Construct 2 Dersleri Bölüm 3&#8217;ün Videosu: