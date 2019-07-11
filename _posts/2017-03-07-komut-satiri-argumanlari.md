---
id: 1021
title: 'Komut Satırı Argümanları &#8211; Command Line Arguments'
published: true
date: 2017-03-07T03:11:03+00:00
author: admin
layout: post
guid: http://46.101.185.50/?p=1021
permalink: /yazilim/komut-satiri-argumanlari/
colormag_page_layout:
  - default_layout
views:
  - "1581"
yuzo_related_post_metabox:
  - 'a:3:{s:17:"yuzo_include_post";s:0:"";s:17:"yuzo_exclude_post";s:0:"";s:21:"yuzo_disabled_related";N;}'
image: /wp-content/uploads/2017/03/nmap.png
categories:
  - C Programlama
  - Linux
  - Yazılım
tags:
  - argc
  - 'argv[]'
  - C programlama
  - command line arguments
  - komut satırı argümanları
  - linux
  - Program Derleme
---
Linux gibi bir işletim sisteminde çalışıyorsanız belki bazı hazır araçlar dikkatinizi çekmiştir. Komut satırına &#8220;nmap 192.168.1.1&#8221; yazdığınız zaman nmap adlı program çalışacak ve 192.168.1.1 ip adresi üzerinde bazı işlemler gerçekleştirecektir. Bunun gibi işlemler yapmak için komut satırı argümanları nasıl kullanılır iyi anlamak gerekiyor.

Programı daha açmadan belirli argümanlar ile dışarıdan çalıştırabiliriz. Önce program ismi daha sonra programın kullanacağı argümanları doğru sıralar ile girerek bu işlemi gerçekleştirebiliyoruz. Tabi bir programı bu şekilde dışarıdan kontrol etmek için kodlarımızı da ona göre düzenlememiz gerekiyor.

## Komut Satırı Argümanları Nasıl Çalışır?

Komut satırı argümanları main() fonksiyon argümanları kullanılarak işlenir. Kullanacağımız iki adet argüman var: &#8220;**int argc** ve **char *argv[]**&#8220;. İlk argüman olan **argc**, programa dışarıdan girilen değerlerin sayısını tutar. İkinci argüman argc[] ise, char tipinde bir pointer array&#8217;dir. Programa dışarıdan girilen değerleri işaret eder.

Aşağıdaki basit program, programa komut satırından girilen bir değerin olup olmadığını kontrol eder.

<pre class="prettyprint notranslate prettyprinted"><span class="com">#include</span> <span class="str">&lt;stdio.h&gt;</span>

<span class="kwd">int</span><span class="pln"> main</span><span class="pun">(</span> <span class="kwd">int</span><span class="pln"> argc</span><span class="pun">,</span> <span class="kwd">char</span> <span class="pun">*</span><span class="pln">argv</span><span class="pun">[]</span> <span class="pun">)</span>  <span class="pun">{</span>

   <span class="kwd">if</span><span class="pun">(</span><span class="pln"> argc </span><span class="pun">==</span> <span class="lit">2</span> <span class="pun">)</span> <span class="pun">{</span><span class="pln">
      printf</span><span class="pun">(</span><span class="str">"Girilen arguman: %s\n"</span><span class="pun">,</span><span class="pln"> argv</span><span class="pun">[</span><span class="lit">1</span><span class="pun">]);</span>
   <span class="pun">}</span>
   <span class="kwd">else</span> <span class="kwd">if</span><span class="pun">(</span><span class="pln"> argc </span><span class="pun">&gt;</span> <span class="lit">2</span> <span class="pun">)</span> <span class="pun">{</span><span class="pln">
      printf</span><span class="pun">(</span><span class="str">"Cok fazla arguman girildi.\n"</span><span class="pun">);</span>
   <span class="pun">}</span>
   <span class="kwd">else</span> <span class="pun">{</span><span class="pln">
      printf</span><span class="pun">(</span><span class="str">"Bir arguman bekleniyor.\n"</span><span class="pun">);</span>
   <span class="pun">}</span>
<span class="pun">}</span></pre>

Yukarıdaki program derlendikten ve bir argüman ile çalıştırıldıktan sonra aşağıdaki çıktıyı verecektir. (Komut satırından program nasıl derlenir bilmiyorsanız yazının en alt kısmındaki Programı Derleme başlığından öğrenebilirsiniz.)

<pre class="prettyprint notranslate prettyprinted"><span class="pln">$</span><span class="pun">./</span><span class="pln">a</span><span class="pun">.</span><span class="kwd">out</span><span class="pln"> onur
</span><span class="typ">Girilen arguman: onur</span></pre>

Program iki argüman ile çalıştırılmaya çalışılırsa aşağıdaki çıktıyı verecek.

<pre class="prettyprint notranslate prettyprinted"><span class="pln">$</span><span class="pun">./</span><span class="pln">a</span><span class="pun">.</span><span class="kwd">out</span><span class="pln"> onur sanir
</span><span class="pun">Cok fazla arguman girildi.</span></pre>

Program herhangi bir argüman olmadan çalıştırıldığında ise aşağıdaki çıktıyı verecek.

<pre class="prettyprint notranslate prettyprinted"><span class="pln">$</span><span class="pun">./</span><span class="pln">a</span><span class="pun">.</span><span class="kwd">out</span>
Bir arguman bekleniyor.</pre>

Dikkat ettiyseniz programın içerisinde **argv[1]** i yazdırdık, **argv[0]** programın ismini tutar ve **argv[1]** programa girilen ilk argümanı gösterir. Eğer programı herhangi bir argüman girmeden çalıştırırsanız **argc** &#8216;nin değeri 1 olacaktır, bir argüman girerseniz ise **argc** &#8216;nin değeri 2 olacaktır. Eğer olayı daha iyi anlamak isterseniz <a href="http://github.com/osanir/c-examp/tree/master/command-line-arg" target="_blank" rel="noopener">github.com/osanir/c-examp/tree/master/command-line-arg</a> linkindeki dosyaları indirerek inceleyebilirsiniz.

Programa girilen argümanlar boşluk işareti ile ayrılır. Eğer bir argümanız boşluk içeriyorsa program bunu iki farklı argüman olarak algılayacaktır. Yukarıdaki program iki argüman girildiğinde, örneğin onur sanir girildiğinde &#8220;Cok fazla arguman girildi&#8221; çıktısını verecek. Bu gibi durumlarda tırnak işaretlerini kullanarak boşluk içeren argümanları da kullanabiliriz.

Şimdi yukarıdaki programı, tırnak işaretleri kullanarak boşluk içeren bir argüman ile çalıştıralım.

<pre class="result notranslate">./a.out "onur sanir"</pre>

Çıktı:

<pre class="result notranslate">Girilen arguman: onur sanir</pre>

## Programı Derleme

Eğer bir program, komut satırından nasıl derlenir biliyorsanız bu kısmı atlayabilirsiniz.

Yukarıda bulunan programı masaüstünde oluşturup derleyeceğiz ve çalıştıracağız. Öncelikle terminali (uçbirim) açın.

Şu komut ile Masaüstüne gelin.

<pre class="prettyprint notranslate prettyprinted"><span class="pun">cd</span><span class="pln"> Desktop/
</span></pre>

main.c isminde bir dosya oluşturalım:

<pre class="prettyprint notranslate prettyprinted"><span class="pun">touch main.c</span></pre>

main.c dosyamızı nano editörü ile açalım:

<pre class="prettyprint notranslate prettyprinted"><span class="pun">nano main.c</span></pre>

Kodları içerisine yapıştırdıktan sonra &#8220;ctrl x&#8221; ile programı kaydedebilirsiniz. Size kaydetmek ister misiniz şeklinde sorular gelecektir, &#8220;E&#8221; diyerek bu kısımları da tamamlayın.

Şimdi main.c dosyamızın içerisinde kodlarımız var. Bu programın çalıştırılabilmesi için derlenmesi gerekiyor.

Derlemek için şu kodları girelim:

<pre class="prettyprint notranslate prettyprinted"><span class="pun">gcc main.c</span></pre>

Şimdi programımız derlendi. &#8220;ls&#8221; komutu ile bulunduğunuz dizindeki dosyaları ve klasörleri listeleyin. &#8220;main.c&#8221; ve &#8220;a.out&#8221; adındaki dosyaları göreceksiniz. main.c bizim oluşturduğumuz, içine kodları yerleştirdiğimiz dosya ve a.out ise bizim derlenmiş, çalıştırılmaya hazır dosyamız.

a.out dosyasını onur adında bir argüman ile çalıştırmak için şu komutları yazmalıyız.

<pre class="prettyprint notranslate prettyprinted"><span class="pun">./</span><span class="pln">a</span><span class="pun">.</span><span class="kwd">out</span><span class="pln"> onur</span></pre>

Gördüğünüz gibi programımız bize şu çıktıyı verecek:

<pre class="prettyprint notranslate prettyprinted"><span class="pun">Girilen arguman: onur

</span></pre>

Birden fazla argüman girmek isterseniz:

<pre class="prettyprint notranslate prettyprinted"><span class="pun">./</span><span class="pln">a</span><span class="pun">.</span><span class="kwd">out onur sanir
</span></pre>

Şeklinde girebilirsiniz.