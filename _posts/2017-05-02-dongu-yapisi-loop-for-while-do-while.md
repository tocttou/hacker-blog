---
id: 1055
title: 'Döngü Yapısı (Loop) &#8211; For, While, Do while'
published: true
date: 2017-05-02T13:55:59+00:00
author: admin
layout: post
guid: http://46.101.185.50/?p=1055
permalink: /yazilim/dongu-yapisi-loop-for-while-do-while/
colormag_page_layout:
  - default_layout
views:
  - "2614"
yuzo_related_post_metabox:
  - 'a:3:{s:17:"yuzo_include_post";s:0:"";s:17:"yuzo_exclude_post";s:0:"";s:21:"yuzo_disabled_related";N;}'
image: /wp-content/uploads/2017/05/theloop.png
categories:
  - C Programlama
  - Yazılım
tags:
  - break
  - C
  - C programlama
  - c programming
  - continue
  - do..while
  - döngü
  - for
  - loop
  - while
---
Döngüler belirli kod bloklarını tekrar etmek için kullanılır. **Döngü yapıları**nın en temel kullanım şekli, tekrar tekrar çalıştırılması gereken (mesaj panoları gibi) karmaşık kodları sizin için tekrar tekrar çalıştırır. Az sayıda görev yürütüyor olabilirler, ancak ilke olarak, mesajların bir listesini oluşturmak sadece bazı verilerin okunması işleminin tekrar edilmesini ve gösterilmesini gerektirir. Şimdi bunun ne anlama geldiğini düşünün: Döngüler, yazılan çok basit seviyedeki kodların, tekrar çalıştırılmasını sağlayarak, çok büyük çıktılar üretmesine olanak tanır.

Ufak bir uyarı: Başlamadan önce C&#8217;nin kendi doğru (true) ve yanlış (false) kavramlarını anlamış olmalısınız. Bir önceki [Koşullu ifadeler (If statements) yazısı](http://46.101.185.50/yazilim/kosullu-ifadeler-if-statements/)nda bunlar anlatıldı. Ortada üç çeşit döngü yapısı var, bunlar: **for**, **while** ve **do..while**. Herbirinin kendine has kullanım şekilleri var.

## FOR LOOP (for döngü yapısı)

for döngüleri en çok kullanılan tiptir. **for döngüsün**ün imlası (syntax) şu şekildedir:

<pre class="example">for ( değişken başlatma; koşul; değişken güncelleme ) {
  Koşul doğru ise çalıştırılacak kodlar
}</pre>

**Değişken başlatma**, bir değişkeni tanımlamanıza ve ona bir değer vermenize veya mevcut bir değişkene değer vermenize izin verir. İkinci kısım olan **koşul**, doğru olduğu sürece programın kod bloğu tekrar tekrar çalıştırılacaktır. **Değişken güncelleme**, for döngüsünün değişkeninin en kolay değiştirildiği kısımdır. Şu tarz kullanımlara izin verir: x++, x = x+10 hatta x = random(5) gibi. Eğer isterseniz, değişken üzerinde bir etkisi olmayan ancak yinede kod üzerinde yararlı etkiye sahip fonksiyonları da çağırabilirsiniz.

**Noktalı virgül**ün bu bölümlerin her birini ayırdığına dikkat edin, bu önemlidir. Bütün bölümler boş da olabilirdi, ancak yine de noktalı virgül orada olmak zorunda. Bütün bölümler boş olabilirdi derken onu da biraz açalım. Üç farklı bölümümüz olduğundan bahsettik, değişken başlatma, koşul ve değişken güncelleme&#8230; Eğer koşul kısmına bir şey yazmazsanız yani iki noktalı virgül arasını boş bırakırsanız, for döngüsü doğru kabul edilecek ve bir şey onu durdurana kadar durmadan dönecektir.

For döngüsüne bir örnek verelim:

<pre class="example">#include &lt;stdio.h&gt;

int main()
{
    int x;
    /* x &lt; 10 iken döngü dönecek ve x her döngüde 1 artacak*/
    for ( x = 0; x &lt; 10; x++ ) {
        /* Koşul tekrar döngüye girmeden önce kontrol  
           edilir. Sonuç olarak, x 10'a eşit durumunda
           döngü sonlanır. x değeri, koşul kontrol 
           edilmeden önce güncellenir. */   
        printf( "%d\n", x );
    }
    getchar();
}</pre>

Açıklaması gayet basit bir for döngüsü yarattık. x değeri sıfıra eşitlenir, x değeri 10 değerinden küçük olduğu sürece ekrana x değeri yazılır, ve son olarak x değerine 1 eklenir. Koşul doğru olduğu sürece bu sürer.

## WHILE LOOP (while döngü yapısı)

**while döngüleri** çok basittir. Temel yapı şu şekildedir:

<pre class="example">while ( koşul ) { çalıştırılacak kısım }
</pre>

**Koşul** kısmına yazılan ifadeler doğru olduğu sürece işlemler gerçekleşir. Koşul kısmına x==7 gibi bir ifade yazılırsa ve bu ifade doğru ise işlem gerçekleştirilir. x != 7 gibi bir ifade de yazılabilir. x değerinin 6 olduğunu farzedelim. 6 != 7 ifadesi doğru olacağı için yine kod bloğu çalıştırılır. Koşul kısmına birden fazla ifade de yazabilirsiniz. x==7 || y==6 veya x==7 && y==6 gibi&#8230;

Görüldüğü üzere for döngüsünde olduğu gibi koşul bölümünde bulunan değişkenin güncellenebileceği bir kısım bulundurmuyor. Bununla birlikte yine for döngüsünde olduğu gibi koşul kısmını boş bırakmanız kurallara aykırıdır. Eğer döngünün sürekli dönmesini istiyorsanız, boş bırakmak yerine koşul ifadesinin bulunduğu yere 1 yazmanız yeterli olacaktır.

<pre class="example">#include &lt;stdio.h&gt;

int main()
{ 
  int x = 0;  /* Değişkeni tanımlamayı unutmuyoruz*/
  
  while ( x &lt; 10 ) { /* x, 10 dan küçük olduğu sürece */
      printf( "%d\n", x );
      x++;             /* x değerini güncelleyelim ki döngü sonlanabilsin */
  }
  getchar();
}</pre>

Aslında bu örnek while döngüsünü anlamak için yeterli olacaktır ancak &#8220;neden **for** yerine **while** kullanayım ki?&#8221; gibi bir soru aklınıza gelmiştir. Aslında her döngü birbiri yerine kullanılabilir. Ancak bazı durumlarda while kullanmak kod&#8217;un okunabilirliği ve kolay yazım açısından avantajlar sağlayabilir. Şimdi şöyle bir durum düşünelim. Elimizde bir sayı var. Bu sayı 0&#8217;a eşit olmadığı sürece döngünün dönmesini istiyoruz. Her seferinde sayıyı 10&#8217;a böleceğiz. Örneğe bakalım.

<pre class="example">#include &lt;stdio.h&gt;

int main()
{ 
  int sayi;  /* Değişkeni tanımlamayı unutmuyoruz*/

  printf("Bir sayi girin: ");  
  scanf("%d", &sayi);

  while ( sayi != 0 ) { /* sayi, 0'a eşit olmadığı sürece */
      printf( "%d\n", sayi );
      sayi /= 10;       /* sayi değerini güncelleyelim ki döngü sonlanabilsin */
  }
  getchar();
}</pre>

Şimdi bu elimizde kullanıcıdan alınan bir sayı bulunuyor. Bu sayı 0 olana kadar 10 a bölmemiz gerekiyor. Kaç adımda sıfır olacağını bilmiyoruz. Kullanıcı 10 basamaklı bir sayı da girebilir, 2 basamaklı bir sayıda girebilir. Kullanıcının 12345 sayısını girdiğini farzedelim. Programın çıktısı şu şekilde olacaktır:

<pre class="example">Bir sayi girin: 12345 
  12345 
  1234 
  123 
  12 
  1
</pre>

Görüldüğü üzere sayı kaç basamaklı ise o kadar kez tekrar etmesini sağladık. Şimdi teorik olarak programın sonsuz kez tekrar etmesi gerekiyor gibi düşünebilirsiniz. Çünkü aslında sayı hiçbir zaman sıfır olmaz. Ancak int tipinde bir değişken olduğunu unutmayın.

Daha fazla uzatmadan **Do while döngüsü**ne geçelim.

## DO..WHILE LOOP (do..while döngü yapısı)

**do..while döngüleri** bir kod bloğunu döngüye girmeden önce en azından bir kere çalıştırmanıza olanak verir. Döngü yapısı şu şekildedir:

<pre class="example">do {
} while ( koşul );</pre>

**Koşul**&#8216;un do bloğunun sonunda kontrol edildiğine dikkat edin. Böylece kod bloğu en azından bir kere çalıştırılacaktır. Eğer koşul doğru ise, bloğuna başına sıçrayarak bloğu tekrardan çalıştıracaktır. Bir do..while döngüsü while döngüsüne oldukça benzer bir yapıdır. Aralarındaki ufak fark ise, do..while döngüsünün kod bloğunun **en azından bir kere** çalıştıracağının garantisini vermesidir. While döngüsü şunu söylerken: &#8220;_Koşul doğru ise, kod bloğunu çalıştır_&#8220;, do..while döngüsü şunu söyler: &#8220;_Kod bloğunu çalıştır, koşul doğru ise döngüye devam et_&#8220;.

Bir örnek verelim:

<pre class="example">#include &lt;stdio.h&gt;

int main()
{
  int x;

  x = 0;
  do {
    /* "Merhaba, Cypher!" yazısı koşul yanlış
       olsa bile bir kere yazdırılacak */
      printf( "Merhaba, Cypher!\n" );
  } while ( x != 0 );
  getchar();
}</pre>

Yukarıdaki örnekteki gibi son kısıma **noktalı virgülü koymayı unutmayın**. Bu unutluduğu için çok sık hatalar ile karşılaşılıyor.

## Break ve Continue Yapısı

Döngü yapılarında kullanılan çok önemli iki anahtar kelimeyi ele alacağız. Bunlar **break** komutu ve **continue** komutları olacak.

**Break komutu**, döngünün koşulu ne olursa olsun döngüyü kırar ve sonlandırır. Break, bazı özel koşullarda döngüyü sonlandırmak için çok kullanışlıdır. Örneğin iki kişilik bir dama oyunu programladığımızı düşünelim. Kodun temel yapısı şu yapıya benzer bir yapıda olacaktır:

<pre class="example">while (true) 
{
    sirayi_al(player1);
    sirayi_al(player2);
}</pre>

Bu yapı, player1 ve player2&#8217;nin sıra ile oyun sırasını devralmalarını sağlar. Mantıktaki tek hata oyundan hiçbir şekilde çıkış yapılamıyor olması; döngü sonsuza kadar dönecek! Şimdi bazı şeyleri değiştirelim:

<pre class="example">while(true)
{
    if (birisi_kazanirsa() || birisi_cikmak_isterse() == TRUE)
    {break;}
    sirayi_al(player1);
    if (birisi_kazanirsa() || birisi_cikmak_isterse() == TRUE)
    {break;}
    sirayi_al(player2);
}</pre>

Bu kod normal koşullar altında oyunun devam etmesini sağlarken özel koşullarda (kazanma veya çıkış yapma) program akışının durdurulmasını ve döngünün sonlandırılmasını sağlıyor.

**Continue komutu** ise döngü kontrolünü sağlarken kullanacağımız bir diğer anahtar kelimedir. Bir döngü yürütüldüğünde continue ifadesini kullanırsanız, döngü mevcut yinelemeyi durduracak kendisini güncelleyerek üstten tekrar yürütmeye başlayacaktır. Continue aslında şunu söyler: &#8220;_Gerekli yinelemeler yapıldı, bu satırdan sonra her ne kodu olursa olsun yinelemeden kodun üst kısmından devam edelim_&#8220;. Diyelimki Monopoly oyununu programlıyoruz. Yukarıdaki örnekte olduğu gibi sıranın kimde olduğunu kontrol eden bir döngü yapısı oluşturalım ama Monopoly, dama oyununa göre daha karmaşık bir yapıya sahiptir. Kodun temel yapısı şuna benzer olacaktır:

<pre class="example">for (oyuncu = 1; birisi_kazandi == FALSE; oyuncu++)
    {
        if (oyuncu &gt; toplam_oyuncu_sayisi)
        {oyuncu = 1;}
        if (iflas_etti(oyuncu))
        {continue;}
        sirayi_al(oyuncu);
    }</pre>

Buradaki gibi bir oyuncu kendi sırasını alamazsa, oyun herkes için kesilmez; o oyuncuyu geçerek, sırayı sonraki oyuncuya devreder.

Bu bölümde döngü yapılarından **do..while** döngü yapısı, **while** döngü yapısı ve **for** döngü yapısını öğrendik.

Sonraki bölümde Fonksiyonlara giriş yapacağız ve Program Organizasyonunu ele alacağız.