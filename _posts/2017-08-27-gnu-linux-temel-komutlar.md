---
id: 1068
title: GNU/Linux Temel Komutlar
published: true
date: 2017-08-27T13:13:28+00:00
author: admin
layout: post
guid: http://46.101.185.50/?p=1068
permalink: /linux/gnu-linux-temel-komutlar/
colormag_page_layout:
  - default_layout
views:
  - "878"
image: /wp-content/uploads/2017/08/DeepinScreenshot_20170827154901.png
categories:
  - Linux
tags:
  - gnu
  - komut
  - komut satırı
  - linux
  - temel komutlar
---
Linux işletim sistemine yeni geçtiyseniz temel gnu/linux komutlarını bulmakta zorlanabilirsiniz. Bu bölümde başlagınçta işinize yarayacak birçok gnu/linux komutunu bulabilirsiniz. Bu yazının devamı niteliğinde bir yazı daha gelebilir.

&nbsp;

Önemli tüm diğer temel linux komutlarını vermeden önce bahsetmek istediğim bir komut var. Bu komut &#8220;**man**&#8221; komutu. man komutu sayesinde kullanımını bilmediğiniz komutların nasıl kullanıldıklarını, ne işe yaradıklarını, yaratıcısını ve benzer komutları öğrenebilirsiniz.

Manual kelimesinin kısatlması olan **man**, gnu/linux üzerinde kullanılan komutların manual sayfalarını görmenizi sağlar.

<table width="643" cellspacing="0" cellpadding="4">
  <tr valign="top">
    <td width="57">
      man
    </td>
    
    <td width="568">
      <strong>man <komut></strong> şeklinde kullanılır. Örneğin <strong>man touch</strong> ile touch komutu hakkında bilgi edinebilirsiniz.
    </td>
  </tr>
</table>

## Dizinler/Klasörler Arasında Gezme ve İçeriğini Listeleme

<table width="643" cellspacing="0" cellpadding="4">
  <colgroup> <col width="57" /> <col width="568" /> </colgroup> <tr valign="top">
    <td width="57">
      pwd
    </td>
    
    <td width="568">
      Bulunduğumuz dizini görmemizi sağlar.
    </td>
  </tr>
  
  <tr valign="top">
    <td width="57">
      cd
    </td>
    
    <td width="568">
      Change Directory’nin kısaltımıdır. Dizin değiştirmek için kullanılır. <strong>cd Desktop/</strong> şeklinde kullanılır. Üst dizine geçmek için <strong>cd ..</strong> yapabilirsiniz.
    </td>
  </tr>
  
  <tr valign="top">
    <td width="57">
      ls
    </td>
    
    <td width="568">
      Sade kullanımı bulunduğunuz dizindeki alt dizinleri ve dosyaları görüntülemek için kullanılır. Farklı dizinlerin içeriğini merak ediyorsanız, <strong>ls /dizin/adresi</strong> şeklinde kullanılır
    </td>
  </tr>
</table>

## Dosya İşlemleri

### Dosya oluşturma

<table width="643" cellspacing="0" cellpadding="4">
  <colgroup> <col width="45" /> <col width="580" /> </colgroup> <tr valign="top">
    <td width="45">
      touch
    </td>
    
    <td width="580">
      Dosya yaratmak için kullanılır. <strong>touch file.txt</strong> şeklinde kullanılır
    </td>
  </tr>
  
  <tr valign="top">
    <td width="45">
      cat
    </td>
    
    <td width="580">
      Bir dosyanın içeriğini ekrana basar. <strong>cat file.txt</strong> şeklinde kullanılır.
    </td>
  </tr>
</table>

### Dosya Taşıma, Kopyalama ve Silme

<table width="643" cellspacing="0" cellpadding="4">
  <colgroup> <col width="45" /> <col width="580" /> </colgroup> <tr valign="top">
    <td width="45">
      cp
    </td>
    
    <td width="580">
      Dosya kopyalamak için kullanılır.<strong> cp <kaynak> <hedef></strong> şeklinde kulanılır.
    </td>
  </tr>
  
  <tr valign="top">
    <td width="45">
      mv
    </td>
    
    <td width="580">
      Dosya taşımak için kullanılır.<strong> mv <kaynak> <hedef></strong> şeklinde kullanılır.
    </td>
  </tr>
  
  <tr valign="top">
    <td width="45">
      rm
    </td>
    
    <td width="580">
      Dosya silmek için kullanılır. <strong>rm <dosya></strong> olarak kullanılır. <strong>rm *.txt</strong> şeklinde de kullanabilirsiniz. Bu şekilde bir kullanım bulunulan dizindeki sonu txt ile biten bütün dosyaları siler.
    </td>
  </tr>
</table>

### Dizin Oluşturma ve Silme

<table width="643" cellspacing="0" cellpadding="4">
  <colgroup> <col width="45" /> <col width="580" /> </colgroup> <tr valign="top">
    <td width="45">
      mkdir
    </td>
    
    <td width="580">
      Dizin oluşturmak için kullanılır. <strong>mkdir <dizin adı></strong> şeklinde kullanılır.
    </td>
  </tr>
  
  <tr valign="top">
    <td width="45">
      rm
    </td>
    
    <td width="580">
      Dizin silmek için de kullanılır. <strong>rm -r <dizin></strong> ile dizin altındaki alt dizin ve dosyaların silinmesi sağlanabilir.<strong> rm -rf <dizin></strong> ile güç kullanarak silme işlemini gerçekleştirebilirsiniz. Kullanırken dikkatli olun.
    </td>
  </tr>
</table>

### Dosya Sıkıştırma, Açma ve Arşivleme

<table width="643" cellspacing="0" cellpadding="4">
  <colgroup> <col width="45" /> <col width="580" /> </colgroup> <tr valign="top">
    <td width="45">
      tar
    </td>
    
    <td width="580">
      Dosyaları arşivlemek için kullanılır. <strong>tar cf dosyalar.tar dosya1 dosya2 dosya3</strong> şeklinde kullanılır. Bu komut; dosya1 dosya2 ve dosya3 adlı dosyaları, dosyalar.tar adlı tar arşivinde birleştirir.
    </td>
  </tr>
  
  <tr valign="top">
    <td width="45">
      gzip
    </td>
    
    <td width="580">
      Dosya sıkıştırmak için kullanılır.<strong> gzip <dosya></strong> şeklinde kullanılır. Sıkıştırılmış dosyanın uzantısı &#8220;<strong>.gz</strong>&#8221; olur.
    </td>
  </tr>
  
  <tr valign="top">
    <td width="45">
      bzip2
    </td>
    
    <td width="580">
      Dosya sıkıştırmak için kullanılır. <strong>bzip2 <dosya></strong> şeklinde kullanılır. Sıkıştırılmış dosyanın uzantısı &#8220;<strong>.bz2</strong>&#8221; olur.
    </td>
  </tr>
  
  <tr valign="top">
    <td width="45">
      gunzip
    </td>
    
    <td width="580">
      <strong>gzip</strong> ile sıkıştırılmış dosyaları açar. <strong>gunzip <dosya.gz></strong> şeklinde kullanılır.
    </td>
  </tr>
  
  <tr valign="top">
    <td width="45">
      bunzip2
    </td>
    
    <td width="580">
      <strong>bzip</strong> ile sıkıştırılmış dosyaları açar. <strong>bunzip2 <dosya.bz2></strong> şeklinde kullanılır.
    </td>
  </tr>
</table>

&nbsp;

<img class="aligncenter wp-image-1088 size-full" src="http://46.101.185.50/wp-content/uploads/2017/08/whygnulinuxisbetter.png" alt="Linux temel komutlar" width="600" height="521" srcset="http://localhost:8080/mysite/wp-content/uploads/2017/08/whygnulinuxisbetter.png 600w, http://localhost:8080/mysite/wp-content/uploads/2017/08/whygnulinuxisbetter-300x261.png 300w" sizes="(max-width: 600px) 100vw, 600px" />