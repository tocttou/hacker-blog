---
id: 994
title: 'Koşullu İfadeler (If Statements) &#8211; C Programlama'
date: 2017-02-08T14:57:27+00:00
author: admin
layout: post
guid: http://46.101.185.50/?p=994
permalink: /yazilim/kosullu-ifadeler-if-statements/
colormag_page_layout:
  - default_layout
views:
  - "2089"
yuzo_related_post_metabox:
  - 'a:3:{s:17:"yuzo_include_post";s:0:"";s:17:"yuzo_exclude_post";s:0:"";s:21:"yuzo_disabled_related";N;}'
image: /wp-content/uploads/2017/02/c-if-else1.jpg
categories:
  - C Programlama
  - Yazılım
tags:
  - "1"
  - AND
  - boolean
  - boolean operators
  - condition
  - else
  - else if
  - 'FALSE'
  - if
  - if statements
  - koşullu ifadeler
  - not
  - OR
  - 'TRUE'
---
Bir dilde program akışını kontrol etmek çok önemlidir. Hangi kodun çalıştırılıp çalıştırılmayacağına programın karar vermesi, **koşullu ifadeler** kullanılarak gerçekleştirilir ve bu bir programcı için çok değerlidir. İngizlice &#8220;**if**&#8221; ifadesinin Türkçe&#8217;de karşılığı &#8220;**eğer**&#8221; olarak düşünülebilir. If ifadesi bir koşulun doğru olup olmadığına bağlı olarak belirli bir kod bloğunun çalıştırılmasını sağlar. If ifadesinin önemli işlevlerinden biri, programın kullanıcının girdisine dayalı bir eylem seçmesine izin vermesidir. Örneğin, kullanıcı tarafından girilen bir parolayı kontrol etmek için bir if ifadesi kullanarak, programınız bir kullanıcının programa erişmesine izin verilip verilmeyeceğine karar verebilir.

## Koşullu ifadeler

If ifadesi gibi koşullu ifadeler olmadan, programlar her zaman aynı şekilde çalışacak ve daima aynı işlev çağrılarını (function calls) izleyecektir. If ifadeleri, programın akışının daha ilginç bir koda dönüşmesi için değiştirilmesini sağlar.

If ifadesinin gerçek yapısını tartışmadan önce, **TRUE** ve **FALSE** yani DOĞRU ve YANLIŞ&#8217;ın bilgisayar terminolojisindeki anlamını inceleyelim. Gerçek bir ifade, sıfır olmayan bir saydır. Yanlış bir ifade sıfır olarak değerlendirilir. İlişkisel operatörler ile karşılaştırma yaptığınızda, karşılaştırma doğruysa operatör 1, karşılaştırma yanlışsa 0 döndürür. Örneğin, 0 == 2 kontrolü 0 olarak değerlendirilir. 2 == 2 denemesi 1 olarak değerlendirilir. Bu durum kafanızı karıştırıyorsa, bu çeşitli karşılaştırmaların sonucunu daha iyi anlamak için bir printf deyimi kullanarak çıktı almayı deneyin Örneğin, printf ( &#8220;%d&#8221;, 2 == 1 ); yazarak deneme yapabilirsiniz. [Değişkenler](http://46.101.185.50/yazilim/degiskenler-variables-c-programlama/) dersinde bu duruma örnek vermiştik. Geri dönerek oradaki çıktılara göz atabilirsiniz.

Programlamada, programın amacı çoğu zaman bir değişken tarafından saklanan bir değerin diğerinden daha büyük, daha küçük veya eşit olup olmadığını belirlemek için kontrol edilmesini gerektirecektir.

Bu kontrolleri yapmamıza izin veren bir dizi operatör var. Bu operatörleri tekrar hatırlayalım:

<pre class="example">&gt;     büyüktür                 5 &gt; 4 is DOĞRU
&lt;     küçüktür                 4 &lt; 5 is DOĞRU
&gt;=    büyük veya eşittir       4 &gt;= 4 is DOĞRU
&lt;=    küçük veya eşittir       3 &lt;= 4 is DOĞRU
==    eşittir                  5 == 5 is DOĞRU
!=    eşit değildir            5 != 4 is DOĞRU</pre>

Bu simgeleri daha önce görmüş olmanız muhtemel. Kafanızı karıştırmamıştır umarım. Şimdi, TRUE ve FALSE&#8217;ın ne olduğunu öğrendiğimize göre koşullu ifadeler &#8216;in gerçek yapısına göz atalım.

## Temel If Sözdizimi (If Syntax)

Bir if ifadesi&#8217;nin yapısı şu şekildedir:

<pre class="example">if ( ifade DOĞRU ise )
    Bu satırdaki kod çalıştırılır</pre>

Sözdizimini (Syntax) gösteren basit bir örnek verelim:

<pre class="example">if ( 5 &lt; 10 )
    printf( "Beş sayısı on sayısından küçüktür, ne büyük sürpriz :)" );</pre>

Burada &#8220;5 küçüktür 10&#8221; ifadesini kontrol ediyoruz. Doğru ise çıktımızı alabileceğiz. İsterseniz stdio.h kütüphanesini de dahil ederek buna benzer bir kod yazıp çalıştırabilirsiniz.

Bir if ifadesinden sonra tekbir satır çalıştırmak yerine bir kod bloğunu çalıştırmak istiyorsanız, if ifadenizden sonra bir süslü parantez kullanın ve kodlarınızı içerisinie yazın. Süslü parantezi kapatana kadar kaç satır yazdığınızın bir önemi yok. Köşeli parantezlerin içindeki herhangi bir şey blok olarak adlandırılır ve if ifadesinin altındaki bu kod bloğunu **gövde** olarak adlandırırız.

Gövdeye ve süslü parantezlere bir örnek verelim:

<pre class="example">if ( TRUE ) {
    /* parantezler arasındaki if ifadesinin gövdesi */
    Gövdedeki tüm ifadeler çalıştırılır
}</pre>

If ifadelerinden sonra parantez koymanızı öneririm. Bunu yaparsanız, daha sonra if &#8216;in içerisine daha fazla ifade koymanız gerektiğinde süslü parantezleri yerleştirmeyi hatırlamak zorunda kalmazsınız. Hem süslü parantezler kodunuzun daha net ve temiz gözükmesini sağlayacaktır.

## Else İfadesi

Koşullu ifadeler denilince akla bir de Else gelir. Bazen bir koşulun doğru veya yanlış olarak değerlendirilmesi sırasında, doğru olarak değerlendirildiğinde çalıştırılacak kodların yanı sıra yanlış olarak değerlendirildiğinde de çalıştırılması istenilen kodlar olabilir. Bu gibi durumlarda imdadımıza Else İfadesi koşuyor. Else ifadesi, if ifadesi yanlış olduğu zaman çalıştırılacak bölümdür. Eğer if ifadesinin içerisi yanlış ise program else satırına atlar ve else ifadesinin altındaki satırı (süslü paranteze göre satırları) çalıştırır.

Şu şekilde bir örnek verelim:

<pre class="example">if ( TRUE ) {
    /* İfade doğru ise bu kısım çalıştırılır */
}
else {
    /* İfade yanlış ise bu kısım çalıştırılır */
}

</pre>

## Else if İfadesi

Else ifadesinin bir diğer kullanımı da şudur; eğer ikiden fazla koşulunuz var ve tüm koşullar için farklı sonuçlar göstermek istiyorsanız &#8220;else if&#8221; kalıbını kullanabilirsiniz. Bir if ifadesi ve gövdesinin ardından &#8220;else if&#8221; ifadesi kullanabilirsiniz. Bu şekilde, ilk koşul doğruysa &#8220;else if&#8221; yok sayılır, ancak if ifadesinin koşulu yanlış ise, else if ifadesinin koşulunu kontrol eder. If ifadesi doğruysa else ifadesi kontrol edilmez. Yalnızca bir kod bloğunun yürütülmesini sağlamak için sayısız else if ifadesi kullanmak mümkündür.

Kendinizin de deneyebileceği basit bir programa bakalım:

<pre class="example">#include &lt;stdio.h&gt;	
#include &lt;locale.h&gt; /* Bu kütüphaneyi Türkçe karakter kullanabilmek için kullanıyorum */
int main()                            /* Programın en önemli bölümü!  */
{
    setlocale(LC_ALL, "Turkish"); /* Ekrana Türkçe karakter yazdırmak istiyorum bu 
                                     nedenle yazdım kafanızı karıştırmasın. */
    int yas;                          /* Bir yaş değişkeni oluşturuyoruz, 
                                         Türkçe karakter yok dikkat */
  
    printf( "Lütfen yaşınızı girin: " );  /* Kullanıcının yaşını girmesini istiyoruz. */
    scanf( "%d", &yas );                 /* Girdi yas değişkenine koyulur */
    if ( yas &lt; 100 ) {                  /* Yaş 100 den küçükse */
        printf ("Çok gençsin!\n" );    /* İşe yaradığını göstermek için */
    }
    else if ( yas == 100 ) {            /* Else 'i yanlızca örnek göstermek için kullanıyorum */ 
        printf( "Yaşlısın\n" );       
    }
    else {
        printf( "Gerçekten çok yaşlısın\n" );     /* Doğru ifade yoksa program buraya 
                                                     kadar gelir ve çalıştırılır. */
    }
  return 0;
}

</pre>

## Boolean İfadeleri Kullanarak Daha İlginç Koşullar

**Boolean operatörleri**, daha **karmaşık koşullu** ifadeler oluşturmanıza izin verir. Örneğin, bir değişkenin beşten büyük ve ondan küçük olup olmadığını kontrol etmek istiyorsunuz. x>5 ve x<10 koşullarının ikisininde doğru olması gerekir. Bu durumda Boolean And (Ve) operatörünü kullanabilirsiniz. Yazının devamında Boolean operatörlerini İngilizce olarak (AND=Ve, OR=veya, NOT=değil) yazacağım.

If ifadelerini kullanırken genelde birden fazla durumu kontrol etmek isteyeceksiniz. Bu nedenle Boolean operatörlerini anlamamız gerekiyor. Boolean operatörlerinin işlevleri de diğer karşılaştırma operatörleri ile aynı. Doğru ise 1, yanlış ise 0 döndürüyorlar.

**NOT (DEĞİL):** NOT operatörü bir girdi kabul eder. Eğer bu girdi TRUE ise, FALSE döndürür ve eğer bu girdi FALSE ise, TRUE döndürür. Örneğin, NOT (1) ifadesi 0 olarak değerlendirilir ve NOT (0) ifadesi 1 olarak değerlendirilir. NOT (sıfırdan farklı herhangi bir sayı) ifadesi ise 0 olarak değerlendirilir. Yani eğer NOT(2) gibi bir ifade yazarsanız, bunun değeri 0&#8217;dır. C dilinde NOT ünlem işareti (!) ile yazılır.Şu önemli notu da söylemeden geçmeyelim; NOT C dilinde AND ve OR opeartörlerinden önce değerlendirilir.

**AND (VE):** Bir başka önemli komut. AND girdilerin ikiside TRUE olduğu zaman doğru(true) olur yani 1 olur. Girdilerden biri &#8220;1&#8221; diğeri &#8220;0&#8221; ise, AND bize sıfır döndürecektir çünkü bir girdi &#8220;0&#8221;dır. &#8220;Sıfırdan farklı herhangi bir sayı&#8221; AND &#8220;0&#8221; ise sonuç yine sıfırdır. C dilinde AND &#8220;&&&#8221; işareti ile yazılır. Sayıların karşılaştırılması olarak düşünerek kafanızı karıştırmayın, öyle değiller. AND operatörü OR operatöründen önce değerlendirilir, aklınızda bulunsun.

**OR (VEYA):** OR ifadesi oldukça kullanışlıdır. Denetlediği iki değerden birisi TRUE ise (veya her ikisi) TRUE döndürür. &#8220;1&#8221; OR &#8220;0&#8221;, 1 olarak değerlendirilir. Sadece &#8220;0&#8221; OR &#8220;0&#8221; ifadesi 0 olarak değerlendirilr. C dilinde OR, &#8220;||&#8221; ile gösterilir. Bunlar pipe character olarak geçer ve Türkçeye boru karakteri olarak çevirebiliriz. L harfinin küçüğü veya büyük I harfi ile karıştırmayın. Klavyenizde genellikle &#8220;<&#8221; ve &#8220;>&#8221; karakterleri ile yerlerini paylaşır ve &#8220;alt&#8221; tuşu ile yazabilirsiniz. Bazı klavyelerde &#8220;\&#8221; ile beraber olabiliyor. OR ifadesi, AND ifadesinden sonra değerlendirilir unutmayın.

Birden fazla Boolean operatörünü tek bir ifadede kullanmak mümkün. Çoğu zaman karmaşık if ifadeleri oluştururken bunun ne kadar kullanışlı olduğunu göreceksiniz. Ufak bir örnek, bu !(1 && 0) nedir? Tabii ki TRUE. Çünkü 1&&0 ifadesi, AND ile bağlandığı için ve bir tanesi sıfır olduğu için sıfırdır. İfadenin başında NOT yani değil olduğu için, 0&#8242; yani sıfırın değili, o da &#8220;1&#8221; yani TRUE dur.

<pre class="example">A. !( 1 || 0 )           CEVAP: 0	
B. !( 1 || 1 && 0 )      CEVAP: 0 (AND ifadesi OR'dan önce değerlendirilir)
C. !( ( 1 || 0 ) && 0 )  CEVAP: 1 (Parantez önceliğine dikkat)</pre>