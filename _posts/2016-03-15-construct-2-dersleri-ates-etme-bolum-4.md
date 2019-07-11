---
id: 677
title: Construct 2 Dersleri Ateş Etme Bölüm 4
date: 2016-03-15T20:38:02+00:00
author: admin
layout: post
guid: http://146.185.174.111/?p=677
permalink: /oyun-gelistirme/construct-2/construct-2-dersleri-ates-etme-bolum-4/
colormag_page_layout:
  - default_layout
views:
  - "1023"
image: /wp-content/uploads/2016/03/bölüm-4.jpg
categories:
  - Construct 2
tags:
  - construct 2 ateş etme
  - construct 2 dersleri
  - construct 2 oyun yapma
  - construct 2 türkçe rehber
  - oyun yapma
---
Construct 2 dersleri ateş etme bölüm 4 &#8216;e hoşgeldiniz. Bu bölümde neler yapacağız kısaca değineyim. Construct 2 dersleri&#8217;nin bu bölümünde ateş etmeyi öğreneceğiz. Oyuna mermi ekleyeceğiz. Düşmana ateş ettiğimizde düşmanımızın ölmesini sağlayacağız.

## Construct 2 Dersleri Ateş Etme Bölüm 4 &#8216;te Ne Yaptık?

  1. Mermi ekledik.
  2. Boşluk tuşu ile ateş etmeyi sağladık.
  3. Düşmana can değişkeni atadık
  4. Düşmanın mermi ile ölmesini yani yok olmasını sağladık.

## Construct 2 Dersleri Ateş Etme Bölüm 4 &#8216;te Nasıl Yaptık?

  1. Ekranın boş bir alanına çift tıklayarak yeni bir sprite oluşturuyoruz. Sprite&#8217;ın boyutunu ben 5&#215;5 yaptım. Kırmızı renkte bir mermi oluşturdum. Mermiye tıkladıktan sonra sol panelden behaviors&#8217;a girdim ve &#8220;**Bullet**&#8221; seçeneğini seçtim.
  2. Tekrar bir obje oluşturmak için boş bir alana çift tıklıyoruz. &#8220;**Keyboard**&#8221; yani klavyeyi seçerek tamamlıyoruz. Event sheet kısmına geliyoruz. Add Event diyerek klavyeyi yani keyboard&#8217;ı seçiyoruz. &#8220;**On Key Pressed**&#8221; i seçiyoruz. Key kısmının yanındaki &#8220;**<click the choose>**&#8221; yazısına tıklayarak boşluk tuşuna basıyoruz. Add action&#8217;a tıklayarak karakterimizi seçiyoruz yani &#8220;**_adam_**&#8221; ı ve &#8220;**Spawn another object**&#8221; i seçiyoruz. Gelen pencereden object kısmının yanındaki &#8220;**<click the choose>**&#8221; a tıklıyoruz ve mermiyi seçiyoruz. Altındaki kısımlar adından da anlaşılacağı üzere layer kısmı yeni yaratılan objenin hangi katmanda oluşturulması gerektiğini söylerken image point kısmı sprite&#8217;ımızın hangi noktasından ateş etmsini istediğimizi seçmemizi sağlıyor. İmage point ile ilgili daha fazla bilgi almak için videoyu izleyebilirsiniz. İmage pointi değiştirmek için yeni bir imagepoint nasıl oluşturulur bunu görüyoruz videoda  (2:30 dan başlayabilirsiniz izlemeye). Ama ben yine de kısaca bahsedeyim. Yeni bir image point oluşturmak için karakterimize çift tıklayarak grafiğinin ve animayonlarnın olduğu pencere kısmında sol tarafta image point simgesi olacak ona tıklayarak add new image point yaparak oluşturabilirsiniz. Neyse konumuza dönelim. İmage pointi de seçtikten sonra tamam diyoruz. Artık karakterimiz boşluk tuşuna bastığımızda ateş eder hale geldi.
  3. Şimdi düşmana can nasıl ekleyebiliriz. Düşmanımıza can eklemek için _global variable_ kullanmamız doğru olmaz çünkü oluşturduğumuz küresel değişken bütün düşman objelerine etki edecektir. Biz her bir düşmanın canının ayrı ayrı hesaplanmasını istiyoruz. Yani örnek vermek gerekirse arka arkaya duran iki düşmandan öndekine ateş ettiğim de hem öndekinin hem arkadakinin canının gitmesini istemediğim için bu global değişkeni kullanmamalıyız. Bunun için öncelikle düşmana tıklayacağız ve sol taraftan &#8220;**instance variables**&#8221; kısmı bulalım. Açılan pencereden &#8220;**+**&#8221; artıya tıklayarak &#8220;**Name**&#8221; kısmını &#8220;**can**&#8220;, &#8220;**initial value**&#8221; kısmını &#8220;**50**&#8221; yapalım.
  4. Şimdi düşmanımızı öldürmek için yani yok etmek için ne yapacağımıza bakalım. Event Sheet kısmına gelelim. Add Event e basalım. Normalde değişkenlerle ilgili olaylar yapacağımızda _system&#8217;_i seçerdik fakat bu sefer düşmanı seçeceğiz çünkü oluşturduğumuz değişken düşmana ait. Düşmanı seçtikten sonra &#8220;**Compare Instance Variable**&#8221; yi seçiyoruz ve düşmana ait can değişkenin seçiyoruz &#8220;**Less or equal**&#8221; seçeneği ile belirteceğimiz sayıya eşit veya daha az olduğunda yapmasını istediğimiz olayları belirteceğiz. Altındaki kısmıda sıfır yapıyoruz. Yani canı sıfır veya altına düştüğü anda olmasını istediğimiz şey demek oldu. Olmasını istediğimiz şey için ise aynı satırdan add action diyoruz ve düşmanı seçerek &#8220;**Destroy**&#8221; diyoruz. Artık düşmanın canı sıfır veya altına düştüğü anda yok olacak.

## Construct 2 Dersleri Ateş Etme Bölüm 4 Olayların Son Hali:

## <a href="http://146.185.174.111/wp-content/uploads/2016/03/bölüm4sonhali.png" rel="attachment wp-att-680"><img class="aligncenter wp-image-680 size-full" src="http://146.185.174.111/wp-content/uploads/2016/03/bölüm4sonhali.png" alt="construct 2 dersleri ateş etme " width="710" height="204" srcset="http://localhost:8080/mysite/wp-content/uploads/2016/03/bölüm4sonhali.png 710w, http://localhost:8080/mysite/wp-content/uploads/2016/03/bölüm4sonhali-300x86.png 300w" sizes="(max-width: 710px) 100vw, 710px" /></a>

&nbsp;

### 

## Construct 2 Dersleri Ateş Etme Bölüm 4&#8217;ün Videosu: