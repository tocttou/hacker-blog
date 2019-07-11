---
id: 645
title: 'Construct 2 Dersleri Oyun Yapma &#8211; Bölüm 1'
date: 2016-03-08T22:21:59+00:00
author: admin
layout: post
guid: http://146.185.174.111/?p=645
permalink: /oyun-gelistirme/construct-2/construct-2-dersleri-bolum-1-2/
colormag_page_layout:
  - default_layout
views:
  - "1761"
image: /wp-content/uploads/2016/03/bölüm-1.jpg
categories:
  - Construct 2
tags:
  - construct 2
  - construct 2 dersleri
  - oyun yapma
---
Construct 2 dersleri nin ilk bölümüne hoşgeldiniz. Bu bölümde kısaca karakter oluşturduk hareketini sağladık, para ekledik, platforma zemin oluşturduk.

## Construct 2 Dersleri Bölüm 1 de Ne Yaptık?

  1. Oyun katmanımızın boyutunu değiştirmeyi öğrendik.
  2. **Karakter** oluşturduk.
  3. Karakterimize **hareket** özelliği verdik.
  4. Karakterimizin üzerinde hareket edebileceği bir **platform** oluşturduk.
  5. Platforma &#8220;**Solid**&#8221; yani katı özelliği verdik.
  6. Oluşturduğumuz **platform üzerinde hareket**ini sağladık.
  7. **Para** ekledik.
  8. Objelerin **isim**leri &#8220;Sprite, Sprite2, Sprite3&#8230;&#8221; gibi isimlerdeydi isimlerini değiştirdik.
  9. Karakterimiz paralara dokunduğu anda **paraların kaybolması**nı sağladık.
 10. Karakterimizin **ekran dışına çıkma**sını engelledik.

## Construct 2 Dersleri Bölüm 1 de Nasıl Yaptık?

  1. Boş bir alana tıkladık ve sol tarafta açılan &#8220;**Layout Size**&#8221; kısmını &#8220;1920,1080&#8221; olarak değiştirdik.
  2. Karakterimizi oluşturmak için boş bir alana çift tıklamamız gerekiyor. Veya sağ tıklayak &#8220;**Insert New Object**&#8221; seçeneğini seçiyoruz. Açılan ekrandan &#8220;**Sprite**&#8220;ı seçiyoruz ve ekrandaki herhangibir alana sol tıklıyoruz. Yeni bir pencere gelecek gelen pencereye karakterimizin resmini çizmemiz isteniyor.  Hali hazırda bir karakterimiz var ise yukarıda bulunan dosya simgesine<img class="alignnone wp-image-647 size-full" src="http://146.185.174.111/wp-content/uploads/2016/03/dosya.png" alt="construct 2 dersleri file" width="32" height="28" />  tıklayarak karakterimizin görüntüsünün bulunduğu resim dosyasının yerini seçiyoruz. Karakterimizin etrafındaki transparan alanı yok etmek için şu <a href="http://146.185.174.111/wp-content/uploads/2016/03/cropaleti.png" rel="attachment wp-att-646"><img class="alignnone wp-image-646 size-full" src="http://146.185.174.111/wp-content/uploads/2016/03/cropaleti.png" alt="construct 2 dersleri crop" width="22" height="22" /></a>  simgeye tıkladık.
  3. Karakterimize **hareket** özelliği vermek için karakterimize tıkladık ve sol taraftan &#8220;**Behaviors**&#8221; u seçtik. Artı &#8220;**+**&#8221; işaretine tıklayarak açılan ekrandan &#8220;_Platform_&#8220;u seçtik. &#8220;**Done**&#8221; dedik.
  4. Karakterimizin hareket edebileceği **platform**u oluşturmak için karakterimizi oluştururken yaptığımız gibi ekrana çift tıklayarak veya sağ tık > &#8220;**Insert New Objet**&#8221; yolunu izleyerek yeni obje oluşturmak için sayfamızı açtık. Bu sefer &#8220;**Sprite**&#8221; yerine &#8220;**Tiled Background**&#8221; seçeneğini seçtik. Yine herhangi bir yere tıklayarak grafik çizim ekranımızı açtık.Boyutu 256&#215;256 olan objemizin boyutunu çapraz ok simgesine tıklayarak 32&#215;32 haline getirdik. Siyaha boyadık ve ekranı kapattık.
  5. Platforma &#8220;**Solid**&#8221; yani katı özelliği vermek için platformumuzu seçerek &#8220;**Behaviors**&#8220;a tıkladık.  Artı &#8220;+&#8221; işaretine tıklayarak &#8220;**Solid**&#8221; i seçtik. &#8220;**Done**&#8221; dedik ve kapattık.
  6. Platformumuz katı halini aldığına göre browser üzerinde çalıştırarak oyunumuzu test edebiliriz. Yön tuşları ile **platform üzerinde hareket**i sağlandı.
  7. Oyuna para eklemek için yine diğer objeleri eklerken yaptığımız gibi boş bir alana çift tıkladık. &#8220;**Sprite**&#8221; ı seçtik. Boş bir alana tıklayarak grafik ekranını açtık. Dosya simgesini<img class="alignnone wp-image-647 size-full" src="http://146.185.174.111/wp-content/uploads/2016/03/dosya.png" alt="dosya" width="32" height="28" />  tıklayarak para resmini bularak seçtik. Ekranımızı kapattık.
  8.  Objelerin isimlerini değiştirmek için üzerlerine tıkladık ve sol taraftan &#8220;**Name**&#8221; i bulduk ve yanındaki &#8220;Sprite&#8230;&#8221; ları değiştirerek objelerimizin isimlerini koyduk. **TÜRKÇE KARAKTER KULLANMADAN VERMEYE ÖZEN GÖSTERİN.**
  9.  &#8220;**Layout 1**&#8221; sekmesinin yanındaki &#8220;**Event Sheet 1**&#8221; i <a href="http://146.185.174.111/wp-content/uploads/2016/03/eventsheet.png" rel="attachment wp-att-648"><img class="alignnone wp-image-648" src="http://146.185.174.111/wp-content/uploads/2016/03/eventsheet.png" alt="construct 2 dersleri" width="154" height="46" /></a> seçtik.  &#8220;Add Event&#8221; e basarak. Karakterimizin ismi olan &#8220;_adam_&#8220;ı bularak üzerine tıkladık. Yeni ekrandan &#8220;**On collisin with another object**&#8220;i seçtik yani &#8220;Başka bir obje ile çarpıştığında&#8230;&#8221; demek. &#8220;**<Click the choose>**&#8221; a tıklayarak hangi obje ile çarpıştığında olayların olmasını istiyorsak o objeyi yani &#8220;_Para_&#8220;yı seçtik. Burda yaptığımız olay şuydu: &#8220;_Karakter_&#8220;, &#8220;_Para_&#8221; ile çarpıştığında >> &#8220;_Olacak_ _olay_&#8220;. Olacak olay ise paranın yok olması olduğu için bu işlemden sonra sağ taraftaki &#8220;Add Object&#8221;e tıkladık ve &#8220;_Para_&#8221; yı seçerek &#8220;**Destroy**&#8221; u bulduk. Şimdi ise olay şu oldu: &#8220;_Karakter_&#8220;, &#8220;_Para_&#8221; ile çarpıştığında >> &#8220;_Para_&#8221; yok olacak.
 10. Karakterimizin ekran dışına çıkmasını engellemek için ise öncelikle karakterimize tıkladık. Sol taraftan &#8220;Behaviors&#8221;u seçtik. Artı &#8220;+&#8221; ya basarak &#8220;BoundToLayout&#8221; u seçtik ve ekranı kapattık.

### 

## Construct 2 Dersleri Bölüm 1&#8217;in Videosu: