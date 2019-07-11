---
id: 701
title: Construct 2 Dersleri Game Over Sistemi Bölüm 5
date: 2016-03-21T15:40:13+00:00
author: admin
layout: post
guid: http://146.185.174.111/?p=701
permalink: /oyun-gelistirme/construct-2/construct-2-dersleri-game-over-sistemi-bolum-5/
colormag_page_layout:
  - default_layout
views:
  - "1172"
image: /wp-content/uploads/2016/03/bölüm-5.jpg
categories:
  - Construct 2
tags:
  - construct 2
  - construct 2 dersleri
  - construct 2 game over
  - construct 2 oyun yapma
  - construct 2 türkçe rehber
  - oyun yapma
---
Construct 2 dersleri game over sistemi bölüm 5 e hoşgeldiniz. Bu bölümde kısaca ne yapacağımızdan bahsedelim. Construct 2 dersleri &#8216; nin bu bölümünde karakter öldüğünde katmanı baştan başlatmayı öğreneceğiz. Geçen ders öğrendiğimiz ateş etme nin üzerinde biraz daha oynarak farenin olduğu noktaya ateş etmesini sağlayacağız.

## Construct 2 Dersleri Game Over Sistemi Bölüm 5 &#8216;te Ne Yaptık?

  1. Diken ekledik. Adamla çarpışması sonucu adamın yok olmasını sağladık.
  2. Dikene dokunduğunda karakterin yok olmasını sağladık.
  3. Katmanın dışına çıkması durumunda yok olmasını sağladık. (Bound To Layout özelliğini kapatarak.)
  4. Fare ile tıkladığımızda karakterin ateş etmesini sağladık.
  5. Fare ile tıkladığımızda karakter mermi objesini spawn ettikten yani kendi için oluşturduktan sonra merminin yönünü fare imlecine çevirmeyi öğrendik.

## Construct 2 Dersleri Game Over Sistemi Bölüm 5 &#8216;te Nasıl Yaptık?

  1. Boş bir alana çift tıklayarak &#8220;Sprite&#8221; seçiyoruz. Gelen grafik ekranından diken resim dosyasını yapıyoruz yada bir dosyadan içe aktarıyoruz.
  2. &#8220;Event Sheet&#8221; kısmından Add event diyoruz karakterimizi seçiyoruz ve &#8220;**On collision with another object**&#8221; seçeneğini seçiyoruz. Çarpışmasını istediğimiz obje olarak dikeni seçiyoruz. Add action kısmına tıklıyoruz ve karakterimizi seçiyoruz. Destroy seçeneğini seçiyoruz.
  3. Tekrar Add event diyoruz. Karakteri seçiyoruz. &#8220;**Is outside layout**&#8221; seçeneğini seçiyoruz. Add action seçerek karakteri seçiyoruz ve destroy diyoruz. Çalışması için karakterimizi seçiyoruz ve karakterimizin **behaviors** kısmından bound to layout özelliğini seçerek çöp işaretine tıklıyoruz bu özelliğini kaldırmış oluyoruz.
  4. Fare ile tıkladığımızda ateş etmesi için add event kısmından fareyi &#8220;**mouse**&#8221; u seçiyoruz. &#8220;**On any click**&#8221; diyoruz. &#8220;Add action&#8221; kısmından karakteri seçiyoruz ve spawn another object seçeneğini seçerek mermi objesini belirliyoruz. Layer kısmını gui veya bg olmaması için karakterimizin olduğu katmanı seçiyoruz yani bu katman bizim oyunumuzda 1. katmandı o yüzden 1 yazıyoruz. Tamamladıktan sonra karakterimiz ekranın herhangi bir yerine tıkladığımızda ateş edecektir.
  5. Şimdi ateş etmesini sağladığımıza göre merminin fare imlecine gelmesini sağlamamız gerekiyor. Bunu mantıken nasıl yapacağımızı düşünelim. Fare karakterin üzerineki bir noktadan spawn olur fakat doğrultusu ve yönü sabittir. Bunu değiştirmek için spawn olduktan yani oluştuktan sonra mermiye yöne vermeliyiz. Bunu için az önce oluşturduğumuz olaya geri dönüyoruz ve karaktere &#8220;**spawn another object**&#8221; özelliğini verdiğimiz kısmın hemen altında bulunan add action&#8217;a tekrar basıyoruz. Mermiyi seçiyoruz ve &#8220;**Set angle toward position**&#8221; u bularak seçiyoruz. Karşımıza çıkan pencerede **X ve Y** değerlini girebileceğimiz bir nokta buluyoruz. **&#8220;Set angle toward position&#8221;** seçeneği şu demek oluyor: Objeyi belirlediğim x ve y koordinatlarındaki noktaya çevir. Bunun için de x i ve y sini girmek istediğimiz değer fare imlecinin X ve Y değerlidir. Bu nedenle X kısmına &#8220;**mouse.x**&#8221; Y kısmına &#8220;**mouse.y**&#8221; yazarak işlemi tamamlamış oluyoruz.

## Construct 2 Dersleri Game Over Sistemi Bölüm 5 Olayların Son Hali:

<a href="http://146.185.174.111/wp-content/uploads/2016/03/bölüm5sonhali.png" target="_blank" rel="attachment wp-att-702 noopener"><img class="aligncenter size-full wp-image-702" src="http://146.185.174.111/wp-content/uploads/2016/03/bölüm5sonhali.png" alt="construct 2 dersleri game over sistemi" width="706" height="254" srcset="http://localhost:8080/mysite/wp-content/uploads/2016/03/bölüm5sonhali.png 706w, http://localhost:8080/mysite/wp-content/uploads/2016/03/bölüm5sonhali-300x108.png 300w" sizes="(max-width: 706px) 100vw, 706px" /></a>

### 

## Construct 2 Dersleri Game Over Sistemi Bölüm 5 &#8216;in Videosu:

&nbsp;