---
id: 967
title: 'Değişkenler (Variables) &#8211; C Programlama'
published: true
date: 2017-02-05T10:59:48+00:00
author: admin
layout: post
guid: http://46.101.185.50/?p=967
permalink: /yazilim/degiskenler-variables-c-programlama/
colormag_page_layout:
  - default_layout
views:
  - "1403"
yuzo_related_post_metabox:
  - 'a:3:{s:17:"yuzo_include_post";s:0:"";s:17:"yuzo_exclude_post";s:0:"";s:21:"yuzo_disabled_related";N;}'
image: /wp-content/uploads/2017/02/c-keywords-678x3811.jpg
categories:
  - C Programlama
  - Yazılım
tags:
  - C
  - C dili
  - c dili operatörler
  - C programlama
  - C Programlama Dili
  - değişkenler
  - girdi
  - Input
  - operator
  - printf
  - scanf
  - variables
---
İlk bölümde öğrendiğimiz bilgiler ile basit bir C programı yazabiliriz ve buna yorumlar ekleyebiliriz. Bu harika, ama kullanıcılar ile etkileşime geçmek daha güzel olmaz mı? Şanslıyız, C kullanıcıdan girdi (input) almamızı kabul ediyor. Bu bölümde C programlama ve değişkenler üzerinde duracağız.

## Değişkenler

Öncelikle girdi almadan önce bu girdileri saklayacak bir yerimiz olması gerekiyor. Programlamada, girdi ve veriler değişkenler halinde saklanır. Çeşitli değişken tipleri vardır. Derleyiciye bir değişken bildirdiğinizde, değişkenin adıyla birlikte veri tipini de eklemeniz gerekir. En temel değişken tipleri **int**, **char** ve **float** diyebiliriz. Bu tiplerin her biri farklı veri tiplerini depolar.

**Char** tipindeki bir değişken tek bir karakteri depolar, **int** tipindeki bir değişken tam sayıları tutabilir (yani ondalık kısımları tutmaz), **float** tipindeki bir değişken ise ondalık kısmları olan sayıları tutar. Bu değişken türlerinden her biri, bir değişken bildirirken kullandığınız bir anahtar kelimedir. Bazı değişkenler değerlerini tutabilmek için bilgisayarın belleğinde daha fazla yer kaplar.

Değişken tiplerinin diğerlerine de baktığımızda birbirine benzeyen birçok değişkeni göreceğiz. İlk olarak bu kadar benzer değişkenlerin olması saçma gelebilir, çünkü birçoğu birbirlerinin yerine kullanılabilecek değişkenler olacak. Peki neden benzer değişkenler var sorusunun cevabını ise şöyle verebiliriz: &#8220;Bu değişkenlerin herbiri bilgisayarın belleğinde farklı miktarlarda yer kaplar. Programımızı daha verimli hale getirmek için daha az yer kaplayan değişken tiplerini kullanmamız gerekecek.&#8221; Bu değişkenlerin tamamının kullanıldığını unutmayın!

Bir değişkeni kullanmadan önce derleyiciye, kullanacağımız değişkenin tipinin ne olduğunu bildirmemiz gerekir. Bir değişkeni bildirmek için <değişken tipi> <değişken adı>; söz dizimini kullanacağız. Hemen akıllara daha iyi oturması için bir örnek verelim:

<pre class="example">int benimDegiskenim;
</pre>

<p class="example">
  Satır sonundaki noktalı virgüle dikkat edin. Bir fonksiyon çağırmamamıza rağmen ifadenin sonunda yine de noktalı virgül kullandık. Bu kod, <em>benimDegiskenim </em>adlı bir değişkeni oluşturdu. Artık <em>benimDegiskenim </em>adlı değişkenimizi programımızda kullanmakta özgürüz.
</p>

<p class="example">
  Bir satırda <strong>aynı tipte</strong> birden fazla değişkeni de tanımlayabiliriz. Bunun için tanımlamak istediğimiz değişkenler arasına virgül koymamız gerekiyor. Tanımlanmamış bir değişken kullanılmaya çalışılırsa program hata verecek ve çalışmayacaktır.
</p>

<p class="example">
  Değişken tanımlamaya birkaç örnek verelim:
</p>

<pre class="example">int x;           /* x adında bir tam sayı değişken tanımladık. */
int a, b, c, d;  /* a, b, c ve d adında dört adet tam sayı değişken tanımladık. */
char harf;       /* harf adında bir char değişken tanımladık.*/
float piSayisi;  /* piSayisi adında bir float değişken tanımladık. */</pre>

<p class="example">
  Aynı tipte birden fazla değişkene sahip olabilirsiniz ama aynı ada sahip birden fazla değişkeniniz olamaz. Tipleri farklı bile olsa aynı isimde iki değişken kullanmayın.
</p>

##### Son olarak; {.example}

<p class="example">
  Değişkenler ile ilgili son olarak şunu söyleyelim: Değişken tanımlamanızı değişkeni kullanmadan önce yapmalısınız. Programların yukarıdan aşağıya okunduğunu unutmayın. Yani tanımlamanız kod bloğunuzun üzerinde bulunmalı.
</p>

<p class="example">
  Bunu da biri doğru biri yanlış olan iki örnek ile gösterelim:
</p>

<p class="example">
  <b><span style="color: red;">Hatalı</span></b>
</p>

<pre class="example">#include &lt;stdio.h&gt;
int main()
{
    /* yanlış!  değişken tanımlaması kullanmadan önce tanımlanmalı. */
    printf( "x, sonraki satırda tanımlanmış" );
    int x;

    return 0;
}
</pre>

<p class="example">
  <b><span style="color: green;">Doğru</span></b>
</p>

<pre class="example">#include &lt;stdio.h&gt;
int main() 
{
    int x;
    printf( "x, önceki satırda tanımlanmış" );

    return 0;
}</pre>

## Girdi (Input) Okuma

C programlama dilinde giriş-çıkışlar için değişkenleri kullanmak başta can sıkıcı olabilir ama onunla hareket etmek mantıklı olacaktır. Kullanıcıdan bir girdi almak için scanf fonksiyonunu kullanacağız, bir çıktı istediğimizde de printf fonksiyonunu kullanacağız. Şimdi aşağıdaki kodu inceleyelim. Bu kodu kendi derleyicinizde de derleyip çalıştırabilirsiniz. Kodu canlı görmek iyi olacaktır.

<pre class="example">#include &lt;stdio.h&gt;

int main()
{
    int bu_bir_sayi;

    printf( "Bir sayi girin: " );
    scanf( "%d", &bu_bir_sayi );
    printf( "Girdiginiz sayi: %d", bu_bir_sayi );
    getchar();
    return 0;
}</pre>

&nbsp;

## Tüm bunların anlamı ne?

**#include** ve **main fonksiyonu**nu daha önce incelemiştik; main fonksiyonu çalıştıracağımız bütün programlarda bulunmak zorunda, #include ise printf ve scanf fonksiyonlarına erişimi sağlar (&#8220;**stdio.h**&#8221; içerisindeki &#8220;io&#8221; tahmin edebileceğiniz üzere input/output kelimelerinin baş harflerinden oluşuyor ve std ise sadece standart anlamına geliyor, &#8216;h&#8217; harfinin header kelimesinin ilk harfi olduğunu söylemiştik).

**int **kelimesi **bu\_bir\_sayi **değişkeninin bir tam sayı olduğunu bildiriyor.

Şimdi işlerin ilginçleştiği yere gelelim, **scanf** fonksiyonumuz tırnak alarak çalışır ve aldığımız değerleri değişkenlere &#8220;&&#8221; işareti ile yerleştiririz. Tırnak işaretleri arasındakiler, scanf fonksiyonuna, programın alacağı girdinin tipini bildirir. Şuna dikkat edin, tırnak işaretleri arasında sadece &#8220;%d&#8221; işareti bulunuyor ve bu işaret, scanf fonksiyonuna, bir integer yani tam sayı okunacağını söylüyor. İkinci argümanımız ise değişkenimiz. Daha sonra neler olduğu hakkında daha fazla şey öğreneceğiz, ama şimdilik olayın özü, scanf&#8217;in değişkenin değerini değiştirmek için nerede depolandığını bilmesinin gerekli olmasıdır. Değişkenin başında &#8220;&&#8221; işaretini kullanarak değişkenin **konumunu** scanf&#8217;e bildirmiş oluyoruz. Scanf fonksiyonu ise bu konuma, kullanıcıdan alınan **girdinin işlenmesini** sağlar.

Özet olarak scanf fonksiyonu için şunu söyleyebiliriz: _Scanf fonksiyonu çağrıldığında, her bir scanf fonksiyonu tırnak işaretlerinin arasına bakarak, alınacak olan girdinin tipini öğrenir ve alınan değeri (&#8216;&&#8217; ile), hedeflenen değişkenin içine yerleştirir._ (Yazının bundan sonraki kısımlarda tırnak işaretleri yerine string kelimesini tercih edersem kafanız karışmasın. Birçok ingilizce kaynakta tırnak işaretleri string olarak geçiyor.)

Gelelim printf fonksiyonumuza. İkinci printf&#8217;e bakın. Scanf&#8217;te olduğu gibi &#8220;%d&#8221; içeriyor. İkiside tırnak işaretlerinin arasındayken değişkenlerin değerini gösterebilmek için aynı biçimde çalışıyorlar. Bu durumu incelediğimzde &#8220;%d&#8221;, tırnakların kapanışından sonraki ilk bağımsız değişkeni gösterecektir. Normal şartlarda tırnak içindeki &#8220;Girdiginiz sayi: &#8221; kelimeleri doğrudan yazılacak ve ardından (&#8220;%d&#8221; gelen yere) bu\_bir\_sayi değişkeninin **değeri** gelecek.

## Adım adım ne yaptık?

  1. #include ile header&#8217;ı programa dahil ettik ve main fonksiyonumuzu oluşturduk.
  2. bu\_bir\_sayi adında, tam sayı (integer) tipinde bir değişken tanımladık.
  3. scanf ile kullanıcından tam sayı tipinde bir integer aldık, bu değeri bu\_bir\_sayi adlı değişkenimizin içine (&#8220;&&#8221; işareti ile) yazdırdık.
  4. Ekrana kullanıcının girdiği sayıyı yazdırmak istedik. Tırnak işaretleri arasına önce ekranda belirmesini istediğimiz yazıyı yazdık sonra değişkenimizin gelmesini istediğimiz yere &#8220;%d&#8221; yi yerleştirdik. Tırnağı kapattıktan sonra bir virgül çektik ve &#8220;%d&#8221; nin yerine gelmesini istediğimiz değişkenin adını yazdık.
  5. getchar() kullanarak programın, kullanıcı enter&#8217;a basmadan önce kapanmasını engelledik.
  6. return 0 ile programın başarılı bir şekilde sona erdiği bilgisini işletim sistemine bildirdik.

## Operatörler

Tabi ki değişkenler hangi türde olursa olsun, onları değiştiremediğimiz sürece o kadar da ilgi çekici değiller. Değişkenler üzerinde matematiksel işlemler yaparken veya değişkenleri birbirlerine atarken kullandığımız işaretlerin genel adına **operatörler** diyebiliriz sanırım. Bunlar bazı operatörler: &#8220;*, -, +, /, =, ==, >, <&#8221; .

Değerleri birbirleriyle çarpmak için *, bölmek için /, toplamak için +, çıkarmak için &#8211; operatörünü kullanacağız. Bunun dışında iki değerin birbirlerine göre durumlarını (büyüklük-küçüklük gibi) sınamak için kullandığımız operatörler de var. &#8220;<&#8221; operatörü ile soldaki değerin sağdaki değerden **küçük** olması durumunu, benzer şekilde &#8220;>&#8221; operatörü ile soldaki değerin sağdaki değerden **büyük** olması durumunu kontrol edebiliyoruz. İki değerin birbirlerine eşit olmaları durumunu ise &#8220;==&#8221; operatörü ile sağlayacağız. C programlama dilinde &#8220;=&#8221; operatörü kullanıldığında, operatörün sağındaki değişkenin değeri, solundaki değerin değişkenine atanır. Bu durumların karıştırılması başınıza ufak sorunlar açabilir.

Birkaç örnek verelim:

<pre>(Yorum kullanımını ve noktalı virgüllere dikkat edin.)
a = 4 * 6; /* a değişkenine 24 atandı. */
a = a + 5; /* a değişkenine, a değişkeninin orjinal değerine 5 eklenmiş hali atandı. */
a == 5     /* a değişkenine 5 ATANMADI! a değişkeninin değeri ile 5 in eşitliği kontrol ediliyor.*/</pre>

Eşitliğin gösterimi olan &#8220;==&#8221;, atamanın bir diğer yolu değildir. C programlama dilinin birçok alanında çok kullanışlıdır. Koşullu ifadeler (if-else) ve döngüler (for-while) gibi yapılarda sık sık kullanacağız. Eşitlik var ise program &#8220;1&#8221; değeri, yani olumlu değeri döndürdüğü için if-else ifadelerinde kontrol yapısı olarak kullanılabilir. Bir printf fonksiyonunda, değişkeni yazmak yerine 4==2*2 gibi doğru bir ifade yazarsanız, printf fonksiyonu ekrana 1 yazdıracaktır.

## Deneyerek test etmeyi unutmayın!

Şöyle bir ifade yazarak test edebilirsiniz.

<pre>printf("%d",4==2*2); /* Ekrana 1 yazdıracaktır. */
printf("%d",4==3*3); /* Ekrana 0 yazdıracaktır. */</pre>

Tahmin edebileceğiniz üzere &#8220;<&#8221; ve &#8220;>&#8221; operatörlerimiz de büyüklük küçüklük kontrolü yapıyor. Buna da birkaç örnek verelim.

<pre class="example">a &lt; 5  /* a 'nın 5 'ten küçük olma durumunu kontrol eder. */
a &gt; 5  /* a 'nın 5 'ten büyük olma durumunu kontrol eder.*/ 
a == 5 /* a 'nın 5 'e eşit olma durumunu kontrol eder.*/</pre>

Bir ifadenin doğruluğu sonucu 1 değerini döndürdüğünü söylemiştik. Verdiğimiz eşitlik örneğine ek olarak büyüklük küçüklük durumları içinde ifade doğru ise 1 değeri dönecektir. Şöyle örnek verelim buna da:

<pre>printf("%d",4&gt;3);     /* Ekrana 1 yazdıracaktır. */
printf("%d",4&lt;3);     /* Ekrana 0 yazdıracaktır. */
printf("%d",3&gt;4);     /* Ekrana 0 yazdıracaktır. */
printf("%d",3&lt;4);     /* Ekrana 1 yazdıracaktır. */
printf("%d",3&gt;2*2);   /* Ekrana 0 yazdıracaktır. */
printf("%d",3&lt;2*2);   /* Ekrana 1 yazdıracaktır. */


</pre>

Bu bölümde değişkenlerden, nasıl kullanabileceğimizden, input output yani giriş çıkışlardan, scanf ve printf fonksiyonunu çalışma şeklinden bahsettik.

Sonraki bölümde koşullu ifadeler olan If-Else ifadelerine göz atacağız.