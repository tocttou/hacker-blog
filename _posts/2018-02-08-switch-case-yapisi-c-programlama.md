---
id: 1188
title: Switch Case Yapısı C Programlama
date: 2018-02-08T21:00:28+00:00
author: admin
layout: post
guid: http://localhost:8080/mysite/?p=1188
permalink: /yazilim/switch-case-yapisi-c-programlama/
yuzo_related_post_metabox:
  - 'a:3:{s:17:"yuzo_include_post";s:0:"";s:17:"yuzo_exclude_post";s:0:"";s:21:"yuzo_disabled_related";N;}'
views:
  - "432"
categories:
  - C Programlama
  - Yazılım
tags:
  - C
  - C programlama
  - c programming
  - case
  - switch
  - switch case
---
Switch case ifadeleri, uzun ve içiçe [koşullu ifadeler](/yazilim/kosullu-ifadeler-if-statements/)in (if statements) yerine geçebilirler. <span id="result_box" class="" lang="tr"><span class="">Anahtarın (switch) içine verilen değişken değeri, her bir durumu takip eden değerle karşılaştırılır ve bir değer değişkenin değeriyle eşleştiğinde yani doğru durumu -doğru kasayı da diyebiliriz-  bulduğunda, bilgisayar bu noktadan itibaren programı yürütmeye devam eder.</span></span>

Örneğin bir oyunda ana menü tasarlıyorsunuz ve kullanıcı eğer ;  
1&#8217;e basarsa oyun kaldığı yerden başlayacak,  
2&#8217;ye basarsa oyuna baştan başlayacak,  
3&#8217;e basarsa ayarlara girecek,  
4&#8217;e basarsa oyundan çıkacak.

Bu ihtimalleri hesaplamak için şimdiye kadar öğrendiğimiz ifadelerden if-else yapısını kullanarak bir çözüm elde edebiliriz. 4 adet if ifadesi işimizi görecektir. İşte bu gibi durumlarda kullanabileceğimiz bir diğer yapı da switch case yapısıdır. Kafalar daha fazla karışmadan switch case yapısının temel yapısını inceleyelim:

<pre class="example">switch ( &lt;değişken&gt; ) {
case ilk-değer:
  Eğer <strong>ilk-değer == &lt;değişken&gt;</strong> ise buradaki kodlar çalıştırılır.
  break;
case diğer-değer:
  Eğer <strong>diğer-değer == &lt;değişken&gt;</strong> ise buradaki kodlar çalıştırılır.
  break;
...
default:
  Eğer hiçbir değer <strong>&lt;değişken&gt;</strong> değeri ile eşleşmiyorsa buradaki kodlar çalıştırılır.
  break;
}</pre>

Switch&#8217;in içerisinde bulunan değer bir değişkendir yani bir durumdur. Altında bulunan case, kendi değeri (ilk-deger) ile switch&#8217;in değeri (<degisken>) eşit ise iki noktadan sonrasının çalıştırılacağını söyler. Break ifadesi, case içerisindeki kodlar yürütüldükten sonra yapıyı sonlandırmayı sağlar. Break, içinde bulunduğu ve genellikle kıvırcık parantezlerle çevrili kod bloğunu kıran bir anahtar kelimedir. Bu sayede break ifadesi, programı, mevcut bloğun altındaki kodların -yani diğer case durumlarının- da çalıştırılmasından korur. Eğer break ifadesi koyulmasaydı, program mevcut case bloğundan başlayarak diğer bütün case ifadelerini de çalıştıracaktı ve bu hiç istemediğimiz bir durumdur. Switch case ifadeleri ile ilgili not edilmesi gerek bir diğer önemli husus da, case değerlerinin sabit tam sayı değerleri olmak zorunda olduklarıdır. Malesef şu şekilde bir kullanım doğru değildir:

<pre class="example">int a = 10;
int b = 10;
int c = 20;

switch ( a ) {
case b:
  /* Kod */
  break;
case c:
  /* Kod */
  break;
default:
  /* Kod */
  break;
}
</pre>

Bu arada switch case yapısında **default** durumu opsiyoneldir, isterseniz kodunuza eklemeyebilirsiniz. Ancak beklenmeyen bir durum ile karşılaşılması halinde başa çıkmak için kodumuza genellikle dahil ediyoruz. Eğer yapıya beklenmeyen bir girdi saptanırsa, default case kullanarak bir uyarıda bulunmak faydalı olabilir. Switch case yapıları eğer şartlar uygunsa, uzun **if** ifadelerine iyi bir alternatiftir. Sıklıkla kullanıcıdan girdi alınırken kullanılır. Aşağıda switch case yapısının nasıl kullanılacağını gösteren bir örnek var.

<pre class="example">#include &lt;stdio.h&gt;

void playgame()
{
    printf( "Oyunu oyna fonksiyonu çağrıldı" );
}
void loadgame()
{
    printf( "Oyunu yükle fonksiyonu çağrıldı" );
}
void options()
{
    printf( "Ayarlar fonksiyonu çağrıldı" );
}
	
int main()
{
    int input;

    printf( "1. Play game\n" );  // Oyunu başlat
    printf( "2. Load game\n" );  // Oyunu yükle
    printf( "3. Options\n" );    // Ayarlar
    printf( "4. Exit\n" );       // Çıkış
    printf( "Selection: " );     // Seçim:
    scanf( "%d", &input );
    switch ( input ) {
        case 1:            /* İki nokta kullanılıyor, noktalı virgül değil */
            playgame();
            break;
        case 2:          
            loadgame();
            break;
        case 3:         
            options();
            break;
        case 4:        
            printf( "Oynadığınız için teşekkürler! Çıkış yapılıyor...\n" );
            break;
        default:   //  1, 2, 3 veya 4 dışındaki seçimler geçersiz seçim sayılıyor.
            printf( "Geçersiz seçim, çıkış yapılıyor!\n" );
            break;
    }
    getchar();

}</pre>

Bu program derlenebilir ancak fonksiyonların gövdeleri doldurulana kadar tam olarak doğru çalışmayacaktır. Bu örnek basit olmasına karşın girdi işlemeye güzel bir modeldir. Eğer bunu anlamakta zorlandıysanız **case** ifadeleri yerine **if** ifadeleri koymayı deneyin. Program tek sefer çalışıyor. Eğer bunu birden fazla kez göstermek isterseniz, örneğin geçersiz seçim halinde tekrar menüyü kullanıcıya göstermek isterseniz, tüm switch case yapısını bir sonsuz döngü içerisine alabilirsiniz. Şayet çıkış seçimi yani 4 değeri girilirse break anahtar kelimesi ile oluşturmuş olduğunuz sonsuz döngüyü kırabilirsiniz.