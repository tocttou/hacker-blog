---
id: 936
title: C Programlama Diline Giriş
date: 2017-02-02T21:30:36+00:00
author: admin
layout: post
guid: http://46.101.185.50/?p=936
permalink: /yazilim/c-programlama-diline-giris/
colormag_page_layout:
  - default_layout
views:
  - "1529"
yuzo_related_post_metabox:
  - 'a:3:{s:17:"yuzo_include_post";s:0:"";s:17:"yuzo_exclude_post";s:0:"";s:21:"yuzo_disabled_related";N;}'
image: /wp-content/uploads/2017/02/c-lang-logo1.jpg
categories:
  - C Programlama
  - Yazılım
tags:
  - C
  - C Comment
  - C dili
  - C programlama
  - C Programlama Dili
  - C Programlama Diline Giriş
  - "C'ye giriş"
  - Temel C
---
Bu C programlama eğitim serisi temel seviye eğitimden başlayıp ileri seviye eğitime doğru yol alacaktır. Eğitim serisi birçok yabancı kaynağın Türkçeleştirilmesi temeline dayanarak hazırlanmıştır. Bu seriyi takip ederek C programlama dilini iyi bir şekilde öğreneceğinize emin olabilirsiniz. Eğer daha önce herhangi bir temeliniz yoksa endişelenmeyin.

## Kurulum &#8211; C Derleyicisi Bulma

C dilini öğrenmeye başlamadan önce bir derleyicimiz olduğuna emin olmalıyız. Derleyici ne demek soruyorsanız hemen cevaplayalım. Bir derleyici, yazdığınız programı bilgisayarınızın gerçekten anlayabileceği ve çalıştırabileceği bir hale getirir. _Windows_ kullanıyorsanız **Dev C++**, **MinGW** kurabilirsiniz. Eğer _Linux_ bir makine kullanıyorsanız, **gcc&#8217;**yi kullanabilirsiniz ve eğer _Mac_ cihazınız varsa **XCode** kullanabilirsiniz. Şuan derleyiciniz yok ise hemen bir derleyici edinin, eğitim serisinin devamında bir derleyiciye ihtiyacımız olacak.<figure id="attachment_952" aria-describedby="caption-attachment-952" style="width: 468px" class="wp-caption aligncenter">

[<img class="wp-image-952 size-full" src="http://46.101.185.50/wp-content/uploads/2017/02/c-compiling.png" alt="C Programlama" width="468" height="186" srcset="http://localhost:8080/mysite/wp-content/uploads/2017/02/c-compiling.png 468w, http://localhost:8080/mysite/wp-content/uploads/2017/02/c-compiling-300x119.png 300w" sizes="(max-width: 468px) 100vw, 468px" />](http://46.101.185.50/wp-content/uploads/2017/02/c-compiling.png)<figcaption id="caption-attachment-952" class="wp-caption-text">Bir derleyicinin çalışma şekli.</figcaption></figure> 

## C Programlama&#8217;ya Giriş

Her bir bitmiş C programı &#8220;main&#8221; denilen bir fonksiyon ile başlar. Bir fonksiyon basitçe, bir şeyler yapan komutlar dizisidir. Program çalıştırıldığında ilk çağrılan fonksiyon main fonksiyonudur. Adından da anlaşılacağı üzere &#8220;main function&#8221;, &#8220;ana fonksiyon&#8221; demektir. İster bizim tarafımızdan yazılmış olsun ister başkaları tarafından yazılmış olsun, ana fonksiyondan diğer bütün fonksiyonları çağırabiliriz. Derleyici ile birlikte gelen standart fonksiyonlara erişmek için, #include yönergesiyle bir başlık (header) (kütüphane olarak da geçer) eklemeniz gerekir. Bu, başlıktaki (header) her şeyi alır ve programınızın içine gönderir. Çalışan bir programa göz atalım:

<pre class="example">#include &lt;stdio.h&gt;
int main()
{
    printf( "Hayattayım!  Dikkat et.\n" );
    getchar();
    return 0;
}
</pre>

### Şimdi programdaki unsurlara bir bakalım:

#### #include <stdio.h>

&#8220;<span lang="tr"><strong>#include</strong>&#8220;, derleyiciye, yürütülebilir dosyayı oluşturmadan önce <strong>stdio.h</strong> adlı başlıktan kodu koymamızı söyleyen bir &#8220;<em>önişlemci (preprocessor)</em>&#8221; yönergesidir. Daha sade bir biçimde şöyle söyleyebiliriz: <em>#include</em> sözcüğü, <em>stdio.h</em> adlı başlığın <em>-başlığa header de diyoruz, stdio<strong>.h</strong>&#8216;ın &#8216;h&#8217; harfi header&#8217;in baş harfidir-  </em>içindeki kodların programda kullanılabilmesi için içeri aktarmayı sağlar. Programa başlık (header) eklemek, birçok farklı işleve erişmemize olanak sağlar. Hem &#8220;<em>printf</em>&#8221; hem de &#8220;<em>getchar</em>&#8221; işlevleri <em>stdio.h</em>&#8216;ye eklenmiştir.</span>

#### int main()

Bir sonraki önemli satır ise **int main()** dir. Bu satır derleyiciye _main_ adlı bir işlev olduğunu ve işlevin bir tam sayı, dolayısıyla _int_ döndürdüğünü bildirir. &#8220;Kıvırcık parantez&#8221; (&#8216;{&#8216; ve &#8216;}&#8217;) fonksiyonların ve diğer kod bloklarının başlangıcını ve bitişini işaret eder. Pascal programladıysanız, onları BEGIN ve END olarak düşünebilirsiniz. Pascal&#8217;da programlamamış olsanız bile, BEGIN ve END, kıvırıcık parantezlerin işlevlerini anlamak için iyi bir yoldur. &#8220;**{**&#8220;, BEGIN yani başlangıç ve &#8220;**}**&#8221; ise END yani bitiş olarak düşünülebilir.

#### printf()

**Printf fonksiyonu**, C dilinde çıktıyı ekranda görüntülemenin standart bir yoludur. Tırnak işaretleri derleyiciye, içine yazılan dizgenin hiçbir değişiklik olmadan, olduğu gibi çıktı alınmasını bildirir. Tabi yukarıdaki programı çalıştırdıysanız, tırnak işaretleri arasında &#8216;**\n**&#8216; dizisi var ve çıktımızın normalde şu şekilde olmasını beklerken:

<pre class="example">Hayattayım!  Dikkat et.\n</pre>

şu şekilde olduğunu görüyoruz:

<pre class="example">Hayattayım!  Dikkat et.
</pre>

Hemen bunun sebebini açıklayalım &#8216;\n&#8217; dizisi aslında yeni bir satırı temsil eden tek bir karakter olarak ele alınır. Dikkat ettiyseniz çıktımızda 2. satıra atlandığı için kutucuk üsttekine nazaran daha geniş bir yer kaplıyor.  C&#8217;de bunun gibi çokça &#8220;_kaçış dizisi (escape sequences)_&#8221; bulunuyor (bundan sonra daha ayrıntılı olarak bahsedeceğiz). Şimdilik kaçış dizilerinin printf fonksiyonu tarafından ekrana doğrudan yazdırılmadığını ve &#8216;\n&#8217; in bunlardan biri olduğunu bilelim. &#8216;\n&#8217; dizisinin asıl yaptığı iş, imlecinizin bir sonraki satıra atlamasını sağlamaktır.

**Noktalı virgül**e (&#8216;;&#8217;) dikkat edin: derleyiciye, bir komutun sonuna gelindiğini söyler. Noktalı virgülün C&#8217;de birçok satırı sonlandırmak için kullanıldığını göreceksiniz.

#### getchar()

Sonraki komut **getchar()** &#8216;dır. Bu başka bir fonksiyondur: tek bir karakter okur ve kullanıcının karakteri okumadan önce enter tuşuna basmasını bekler. Yazılan kodlar yukarıdan aşağıya doğru okunur. Birçok derleyici son satıra gelir, programı sonlandırır ve konsol ekranını kapatır. Bu yazılan kodlar birkaç satır olduğu için bilgisayar bunu o kadar hızlı yapar ki çoğu zaman konsol ekranını göremeyiz bile. Bu programda getchar()&#8217;ın kullanım amacı ise anlaşılacağı üzere programın saliseler içerisinde kapanmasını engellemektir. Kullanıcıdan bir girdi bekleyeceği için, kullanıcı enter&#8217;a basana kadar program kapanmayacaktır. Bu satır programın çalışıp çalışmadığını görmek için kullanılabilir.

#### return 0

Ve geldik son satırımıza. Programımızın sonunda, &#8220;**return 0**&#8221; deyimini kullanarak &#8220;ana değerden (main&#8217;den) işletim sistemine bir değer döndürürüz. Bu değer programımızın başarılı olarak çalışıp çalışmadığını söylemek için kullanılabileceğinden önemlidir. 0 (sıfır) dönüş değeri program için başarılı anlamına gelir.

Son kıvırcık parantez fonksiyonu kapatır.

Kodu bir dosyaya kesip yapıştırabilir, bir .c dosyası olarak kaydedebilir ve derleyebilirsiniz. Derleme (compile) ve çalıştırma (run) aşamaları, farenizle bir düğmeyi tıklamak kadar basittir.

Printf fonksiyonuyla oynamaya başlayabilir ve basit C programlarını yazmaya çalışabilirsiniz.

## Kodunuzu Açıklama (Comment)

Yorumlar (comments) bütün programlar için önemlidir ancak küçük programlar için kritik önem taşır. Bu eğitim serisinde de kod bölümlerini açıklamak için yorumlara başvuracağız. Derleyiciye bir metnin yorum olduğunu belirttiğinizde, derleyici, yorum olarak belirttiğiniz kısmı yok sayacaktır. Bu sayede kodlarda tanımlamalar yapmanıza olanak sağlayacaktır. C dilinde bir metni yorum yapmak için ilk olarak **/*** ve ardından ***/** kullanarak çevrelemelisiniz. Bunu yaparsanız ikisi arasındaki bloku yorum olarak belirlemiş olursunuz. Yorum olarak belirttiğiniz kısımlar çoğu derleyici tarafından kolay bulunması için renklendirilecektir. Bunu yapmayan derleyiciler de bulunmakta. Kodunuzu yorum satırlarının içine yazmamaya dikkat edin. Eğer fark etmeden bunu yaparsanız program yorum olarak belirtilen alanın içindeki her şeyi yok sayacağı için kodunuz da çalışmayacaktır.

Programlamayı öğrenirken, çıktıların nasıl etkilendiğini görmek için kod bölümlerini yorumlamak oldukça yararlıdır.

Bu ders C programlama diline ufak bir giriş oldu. Minik kod satırlarının ne olduğunu açıklamaya çalıştık. Diğer derste değişkenleri, değişkenleri kullanmayı ve kullanıcıdan aldığımız girişleri nasıl değişkenlere atayacağımızı öğreneceğiz.