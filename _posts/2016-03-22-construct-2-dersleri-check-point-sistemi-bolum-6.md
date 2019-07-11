---
id: 717
title: Construct 2 Dersleri Check Point Sistemi Bölüm 6
date: 2016-03-22T15:05:45+00:00
author: admin
layout: post
guid: http://146.185.174.111/?p=717
permalink: /oyun-gelistirme/construct-2/construct-2-dersleri-check-point-sistemi-bolum-6/
colormag_page_layout:
  - default_layout
views:
  - "1115"
image: /wp-content/uploads/2016/03/bölüm-6.jpg
categories:
  - Construct 2
tags:
  - construct 2
  - construct 2 check point
  - construct 2 check point sistemi
  - construct 2 dersleri
  - construct 2 oyun yapma
  - construct 2 save
  - construct 2 türkçe rehber
  - oyun yapma
---
Construct 2 dersleri check point sistemi bölüm 6 &#8216;ya hoşgeldiniz. Aslında bölüm 6 da 3 farklı konuyu öğrendik. Save sistemi yani kayıt sistemi, check point sistemi ve giriş sayfası yapımını öğrendik. 6. bölümü 3 parça

## Construct 2 Dersleri Check Point Sistemi Bölüm 6 &#8216;da Ne Yaptık?

  1. **Check point** sistemi yaparken unutmamamız gereken şey bir obje çünkü olaylar bu objenin üzerine geldiğinde gerçekleşecek bu nedenle bir obje oluşturduk. Genellikle bu obje oyunlarda bayrak şeklinde yapılır.
  2. İki farklı değişken atadık ve bunlar mevcut **check point** e ait **X** ve **Y** noktaları olarak belirleyeğiz. Program bunu kendisi yapacak.
  3. Karakterimizin herhangi bir check point ile teması halinde yeni check pointi bu nokta olacak
  4. Karakterin ölmesi, yanması, yok olması durumlarında katman yeniden başlayacak ve karakterimizin doğduğu, spawn olduğu, yaratıldığı nokta yeni checkpointin üzerinde olacak.

## Construct 2 Dersleri Check Point Sistemi Bölüm 6 &#8216;da Nasıl Yaptık?

  1. Check point objesi oluşturmak için boş bir alana çift tıklıyoruz. Sprite oluşturuyoruz. Ben &#8220;C&#8221; harfine benzer bir şekil çizdim.
  2. Event Sheet sayfasına gelerek sağ tıklıyoruz ve &#8220;**Add global variable**&#8221; seçeneğini seçiyoruz. İsmini &#8220;checkpointx&#8221; yapıyoruz. Aynı işlemi tekrar ederek diğer değişkenin ismini &#8220;checkpointy&#8221; yapıyoruz.
  3. &#8220;Add Event&#8221; kısmından yeni bir olay oluşturacağız. Add evente bastıktan sonra karakterimiz olan &#8220;adam&#8221;ı seçiyoruz. &#8220;On collisin with another object&#8221; seçeneğini seçerek &#8220;<object>&#8221; kısmını oluşturmuş oluğumuz Check Point objemizi seçiyoruz. (Ben isim vermediğim için videoda Sprite olarak geçmiş zaten resmi C ye benzediği için direk seçtim.) Daha sonra Add action diyoruz ve &#8220;System&#8221;i seçiyoruz. &#8220;**Set Value**&#8220;den Variable kısmını &#8220;**checkpointx**&#8221; olarak değiştiriyoruz. &#8220;**Value**&#8221; kısmına &#8220;**Sprite.X**&#8221; yazıyoruz. Aynı şekilde yeni bir action ile &#8220;**System**&#8221; kısmından &#8220;**Set Value**&#8221; Diyoruz ve bu sefer &#8220;**checkpointy**&#8221; yapıyoruz variable kısmını. &#8220;**Value**&#8221; kısmına &#8220;**Sprite.Y**&#8221; yazıyoruz. (_Bunu Sprite.X yaptık eğer siz check point objenizin ismini değiştirdiyseniz mesela ismini &#8220;checkpointobjesi&#8221; yapsaydınız. &#8220;Spite.X&#8221; yerine &#8220;checkpointobjesi.X&#8221;  ; &#8220;Sprite.Y&#8221; yerine &#8220;checkpointobjesi.Y&#8221; yazacaktık_.)
  4. Add event kısmından yeni bir olay oluşturacağız. Olayın amacı katman başladığında karakterimizin X ve Y noktalarını &#8220;_checkpoinx&#8221;_ ve &#8220;_checkpointy&#8221;_ değişkenlerinin değerlini almasını istiyoruz. Tıkladık &#8220;**System**&#8221; >> &#8220;**On start of layout**&#8221; yolunu izliyoruz. Yani katman başlatıldığında yapılmasını istediğimiz olayları yazacağız. Katman başladığında karakterimizin pozisyonunu değiştirmek istiyoruz checkpoint noklarına. Add action &#8216;a tıkladık. &#8220;**Adam**&#8221; ı seçiyoruz. &#8220;**Set position**&#8221; u seçiyoruz. &#8220;X&#8221; kısmına &#8220;checkpointx&#8221; ; &#8220;Y&#8221; kısmına &#8220;checkpointy&#8221; yazıyoruz. Artık karakterimizin ölmesi durumunda tekrar başlayacak olan katman check point noktasını bularak o noktada karakterimizin doğmasını sağlayacak.

## Construct 2 Dersleri Check Point Sistemi Bölüm 6  Son Hali

<a href="http://146.185.174.111/wp-content/uploads/2016/03/bölüm6sonhali1.png" rel="attachment wp-att-718"><img class="aligncenter wp-image-718 size-large" src="http://146.185.174.111/wp-content/uploads/2016/03/bölüm6sonhali1-1024x196.png" alt="Construct 2 dersleri check point" width="800" height="153" srcset="http://localhost:8080/mysite/wp-content/uploads/2016/03/bölüm6sonhali1-1024x196.png 1024w, http://localhost:8080/mysite/wp-content/uploads/2016/03/bölüm6sonhali1-300x57.png 300w, http://localhost:8080/mysite/wp-content/uploads/2016/03/bölüm6sonhali1-768x147.png 768w, http://localhost:8080/mysite/wp-content/uploads/2016/03/bölüm6sonhali1.png 1217w" sizes="(max-width: 800px) 100vw, 800px" /></a>

&nbsp;

## Construct 2 Dersleri Check Point Sistemi Bölüm 6 &#8216;nın Videosu