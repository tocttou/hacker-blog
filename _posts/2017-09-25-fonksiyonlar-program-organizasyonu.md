---
id: 1097
title: Fonksiyonlar ve Program Organizasyonu
date: 2017-09-25T19:20:27+00:00
author: admin
layout: post
guid: http://46.101.185.50/?p=1097
permalink: /yazilim/fonksiyonlar-program-organizasyonu/
colormag_page_layout:
  - default_layout
views:
  - "885"
yuzo_related_post_metabox:
  - 'a:3:{s:17:"yuzo_include_post";s:0:"";s:17:"yuzo_exclude_post";s:0:"";s:21:"yuzo_disabled_related";N;}'
image: /wp-content/uploads/2017/09/C-Programlama-Fonksiyonlar-270x270.png
categories:
  - C Programlama
  - Yazılım
tags:
  - C programlama
  - fonksiyonlar
  - functions
  - işlevler
  - prototype
  - return value
---
Eğer şimdiye kadar değişkenleri, döngüleri ve koşullu ifadeleri öğrendiyseniz artık fonksiyonlara geçme zamanı gelmiş demektir. Fonksiyonların kullanımına dair bir şeyler biliyor olmalısınız çünkü daha önceki derslerde main diye tanımladığımız bir fonksiyon kullandık. Bunun dışında printf() ve getchar() &#8216;da birer fonksiyondur. Genellikle fonksiyonları cümle içerisinde de yazarken, sonlarına eklediğimiz parantezler sayesinde onların birer fonksiyon olduklarını ayırt edebiliriz. Genel olarak fonksiyonlar, önceden tanımlanmış ve çokça kod satırından oluşan kod bloklarını, farklı yerlerde çalıştırabilmemizi sağlayarak daha verimli kodlar yazmamızı sağlarlar. Bunun yanında kütüphane&#8217;ye gömülü fonksiyonları kullanabildiğiniz gibi kendi fonksiyonlarınızı da yaratabilirsiniz.

Bir programcının yazdığı fonksiyonlar genellikle bir prototip gerektirir. Prototipler blueprint&#8217;e benzer. Bir prototip derleyiciye; fonksiyonun ne tip döndüreceğini, fonksiyonun nasıl çağrılacağını yani adını ve bunların yanı sıra fonksiyonun hangi tip ve ne kadar argüman alacağını söyler. Eğer fonksiyonum bir değer döndürecekse, bu fonksiyonu değişkene benzer bir şekilde kullanabilirim. Örneğin bir değişken, sıfır ile dört arasında değerler döndüren bir **fonksiyona** eşitlenebilir.

<pre class="example">#include &lt;stdlib.h&gt;   /* rand() dahil edilir */

int a = rand(); /* rand, bütün derleyicilerin sahip olduğu bir fonksiyondur ve rastgele bir sayı üretir */
</pre>

&#8216;a&#8217; nın her seferinde rastgele bir değer olacağını düşünmeyin. &#8216;a&#8217; değeri tek seferliğine rastgele bir değer olacaktır.

Genel prototip formatı şöyledir:

<pre class="example">return-type function_name ( arg_type arg1, ..., arg_type argN ); 
</pre>

arg_type her bir argümanın tipinin ne olacağını belirtir. int, char, float gibi&#8230; return-type, fonksiyonun ne tip döndüreceğini belirtir.

Fonksiyonlar birden fazla parametre alabilir veya almayabilir ve bir fonksiyon bir değer döndürmek zorunda değildir. Eğer fonksiyon bir değer döndürmeyecek ise, **return-type** yani fonksiyonun tipi **void** olur. Şimdi şu prototipi inceleyelim.

<pre class="example">int carp ( int x, int y );
</pre>

Bu prototip &#8216;carp&#8217; adlı fonksiyonun iki adet int tipinde değişken kabul edeceğini ve int tipinde bir değer döndüreceğini belirtir. Sondaki noktalı virgülü unutmayalım. Eğer noktalı virgül olmaz ise muhtemelen derleyici, fonksiyonun gerçek tanımını yaptığınızı düşünecektir.

Programcılar bir fonksiyonun _gerçek tanımını_ yaptıkları zaman, fonksiyon prototipini noktalı virgül olmadan yazarlar. Noktalı virgül olmadığı için prototipin sonrasında, fonksiyonun çalıştıracağı kodların bulunduğu, süslü parantezler ile çevrelenmiş bir blok olmalıdır. Yani main fonksiyonunda olduğu gibi&#8230; Fonksiyonun aldığı argümanlar, fonksiyon içerisinde zaten tanımlanmış gibi kullanılabilirler, yani onları tekrar tanımlamanıza gerek yok.

<pre class="example">#include &lt;stdio.h&gt;

int carp( int x, int y );

int main()
{
  int x;
  int y;
  
  printf( "Lutfen carpilacak 2 deger girin: " );
  scanf( "%d", &x );
  scanf( "%d", &y );
  printf( "Girdiginiz sayilarin carpimi %d\n", carp( x, y ) );
  getchar(); 
}

int carp (int x, int y)
{
  return x * y;
}
</pre>

Programımız tek gerekli kütüphaneyi dahil ederek başlıyor.

Sonrasında &#8216;carp&#8217; adlı fonksiyonun prototipi var. Sonunda noktalı virgül olduğuna dikkat!

Ana fonksiyonumuz olan main, tam sayı döndürüyor ve bu yüzden tipi &#8220;int&#8221;. Standartlara uymak adına bunu her zaman yapmanızda fayda var.

Önceki derslerde herhangi bir sorun yaşamadıysanız standart girdi çıktı fonksiyonlarını biliyorsunuz.

Şimdi printf&#8217;in nasıl kullanıldığına dikkatlice bakalım. printf, carp fonksiyonu gibi görünen değeri alıyor. Gerçekte ne oluyor? printf, carp adlı fonksiyondan dönen değeri kabul ediyor, carp fonksiyonunun kendisini değil.

<pre class="example">printf( "Girdiginiz sayilarin carpimi %d\n", x * y );
</pre>

Bizim carp adlı fonksiyonumuz aslında main fonksiyonunun altında tanımlanıyor. Prototipi main&#8217;in üzerinde olduğu için, derleyici bunu bildirilmiş olarak kabul eder ve main içindeki carp fonksiyonunu gördüğünde, aslında daha gerçekten tanımlanmamış olsa bile hata vermez. Prototipiniz olduğu zaman fonksiyonun tanımı yapılmamış bile olsa fonksiyonu kullanabilirsiniz. Kodunu tanımlama olmadan çalışmaz ancak derleyebilirsiniz.

Eğer buraya kadar tanımlamanın ne olduğu biraz kafanızı karıştırdıysa hemen ufak bir şekilde terimlerle neden bahsettiğimi açıklayayım. Bir fonksiyonun prototipini yazmak derleyiciye şöyle demeye benzer: &#8220;Ben şu özelliklere sahip bir fonksiyon yazdım. Ama bu fonksiyon main&#8217;in aşağısında bulunuyor. main&#8217;in içindeyken bu fonksiyonu çağırırsam, nereden geldi bu deme, çünkü ben sana böyle bir fonksiyon yazdığımı söylüyorum.&#8221; Yani bir fonksiyonun prototipini yazmak o fonksiyonu gerçekten tanımlamak değildir, gerçekten tanımlamak için o fonksiyonu çalışır hale getirmeniz gerekiyor. Prototipler fonksiyonları derleyiciye bildirmek için kullanılır.

Bir fonksiyonu **kullanmadan önce tanımlayacaksak** prototipi elden çıkarabiliriz. Bu şekilde kullanımlarda fonksiyonun kendisi zaten bir prototip işlevi görür.

&#8220;**return**&#8220;, bir fonksiyonu bir değer döndürmeye zorlamak için kullanılan bir kelimedir. Hiçbir değer döndürmeyen bir fonksiyonun olabileceğini unutmayın. Eğer fonksiyon **void** döndürüyorsa, return deyimi geçerli olacaktır, ancak hiçbir ifade içermiyorsa geçerlidir. Başka bir deyişle, eğer bir fonksiyon void döndürüyorsa yani fonksiyonun tipi void ise, return kullanmak yasaldır ama genellikle gereksizdir. O zaman neden böyle bir kullanım şekli var derseniz, bir fonksiyonun **sonuna gelmeden önce fonksiyonu sonlandırmak için** kullanılabilir.

Fonksiyonlar ile ilgili en önemli soru şudur,

## neden fonksiyonlar var ve neden fonksiyonları kullanalım?

Fonksiyonların birden fazla kullanım şekli vardır. Örneğin bir programcı belirli bir kod grubunu kodu içerisinde farklı yerlerde kırk defa kullanması gerekiyor olabilir. Bu kodları bir fonksiyon ile yürütmek, çok fazla yerden tasarruf sağlayacak ve kodunuzu daha okunabilir hale getirecektir. Ayrıca kodun tek bir kopyasının olması, onu daha sonra değiştirmenizi kolaylaştıracaktır. Potansiyel olarak büyük bir programın gövdesinde kırk küçük değişiklik yapmayı mı, yoksa fonksiyon gövdesinde tek bir değişiklik yapmayı mı tercih edersiniz? Ben de öyle :)

Fonksiyon kullanmak için bir diğer sebep ise, kompleks programları mantıksal parçalara ayırmaktır. Örneğin karmaşık kodlar çalıştıran bir menü programını ele alalım. Program her menü seçiminde olacak işlemleri fonksiyonlara devreder ve her işlemin kendi fonksiyonunda gerçekleşmesini sağlar, daha sonra fonksiyonlardan dönen değerler ile ortak işlemleri yapabilir. Bu şekilde, okunduğunda mantıklı olan programlar tasarlanabilir. Ve anlaşılması daha kolay bir yapıya sahip olurlar. En kötü programlar genellikle, sadece gerekli olan main fonksiyon kullanılarak yapılan, sayfalar dolusu koddan oluşanlardır.

Fonksiyonları detaylı ve teorik olarak anlattık. Bu yazı biraz orta seviye gelmiş olabilir, fonksiyonları öğrendikten sonra tekrar okumanızda fayda var.

Sonraki derste switch case yapısının nasıl çalıştığını, nasıl kullanıldığını göreceğiz.