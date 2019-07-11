Bu C programlama eğitim serisi temel seviye eğitimden başlayıp ileri seviye eğitime doğru yol alacaktır. Eğitim serisi birçok yabancı kaynağın Türkçeleştirilmesi temeline dayanarak hazırlanmıştır. Bu seriyi takip ederek C programlama dilini iyi bir şekilde öğreneceğinize emin olabilirsiniz. Eğer daha önce herhangi bir temeliniz yoksa endişelenmeyin.
Kurulum – C Derleyicisi Bulma

C dilini öğrenmeye başlamadan önce bir derleyicimiz olduğuna emin olmalıyız. Derleyici ne demek soruyorsanız hemen cevaplayalım. Bir derleyici, yazdığınız programı bilgisayarınızın gerçekten anlayabileceği ve çalıştırabileceği bir hale getirir. Windows kullanıyorsanız Dev C++, MinGW kurabilirsiniz. Eğer Linux bir makine kullanıyorsanız, gcc’yi kullanabilirsiniz ve eğer Mac cihazınız varsa XCode kullanabilirsiniz. Şuan derleyiciniz yok ise hemen bir derleyici edinin, eğitim serisinin devamında bir derleyiciye ihtiyacımız olacak.
C Programlama
Bir derleyicinin çalışma şekli.
C Programlama’ya Giriş

Her bir bitmiş C programı “main” denilen bir fonksiyon ile başlar. Bir fonksiyon basitçe, bir şeyler yapan komutlar dizisidir. Program çalıştırıldığında ilk çağrılan fonksiyon main fonksiyonudur. Adından da anlaşılacağı üzere “main function”, “ana fonksiyon” demektir. İster bizim tarafımızdan yazılmış olsun ister başkaları tarafından yazılmış olsun, ana fonksiyondan diğer bütün fonksiyonları çağırabiliriz. Derleyici ile birlikte gelen standart fonksiyonlara erişmek için, #include yönergesiyle bir başlık (header) (kütüphane olarak da geçer) eklemeniz gerekir. Bu, başlıktaki (header) her şeyi alır ve programınızın içine gönderir. Çalışan bir programa göz atalım:

#include <stdio.h>
int main()
{
    printf( "Hayattayım!  Dikkat et.\n" );
    getchar();
    return 0;
}

Şimdi programdaki unsurlara bir bakalım:
#include <stdio.h>

“#include“, derleyiciye, yürütülebilir dosyayı oluşturmadan önce stdio.h adlı başlıktan kodu koymamızı söyleyen bir “önişlemci (preprocessor)” yönergesidir. Daha sade bir biçimde şöyle söyleyebiliriz: #include sözcüğü, stdio.h adlı başlığın -başlığa header de diyoruz, stdio.h‘ın ‘h’ harfi header’in baş harfidir-  içindeki kodların programda kullanılabilmesi için içeri aktarmayı sağlar. Programa başlık (header) eklemek, birçok farklı işleve erişmemize olanak sağlar. Hem “printf” hem de “getchar” işlevleri stdio.h‘ye eklenmiştir.
int main()

Bir sonraki önemli satır ise int main() dir. Bu satır derleyiciye main adlı bir işlev olduğunu ve işlevin bir tam sayı, dolayısıyla int döndürdüğünü bildirir. “Kıvırcık parantez” (‘{‘ ve ‘}’) fonksiyonların ve diğer kod bloklarının başlangıcını ve bitişini işaret eder. Pascal programladıysanız, onları BEGIN ve END olarak düşünebilirsiniz. Pascal’da programlamamış olsanız bile, BEGIN ve END, kıvırıcık parantezlerin işlevlerini anlamak için iyi bir yoldur. “{“, BEGIN yani başlangıç ve “}” ise END yani bitiş olarak düşünülebilir.
printf()

Printf fonksiyonu, C dilinde çıktıyı ekranda görüntülemenin standart bir yoludur. Tırnak işaretleri derleyiciye, içine yazılan dizgenin hiçbir değişiklik olmadan, olduğu gibi çıktı alınmasını bildirir. Tabi yukarıdaki programı çalıştırdıysanız, tırnak işaretleri arasında ‘\n‘ dizisi var ve çıktımızın normalde şu şekilde olmasını beklerken:

Hayattayım!  Dikkat et.\n

şu şekilde olduğunu görüyoruz:

Hayattayım!  Dikkat et.

Hemen bunun sebebini açıklayalım ‘\n’ dizisi aslında yeni bir satırı temsil eden tek bir karakter olarak ele alınır. Dikkat ettiyseniz çıktımızda 2. satıra atlandığı için kutucuk üsttekine nazaran daha geniş bir yer kaplıyor.  C’de bunun gibi çokça “kaçış dizisi (escape sequences)” bulunuyor (bundan sonra daha ayrıntılı olarak bahsedeceğiz). Şimdilik kaçış dizilerinin printf fonksiyonu tarafından ekrana doğrudan yazdırılmadığını ve ‘\n’ in bunlardan biri olduğunu bilelim. ‘\n’ dizisinin asıl yaptığı iş, imlecinizin bir sonraki satıra atlamasını sağlamaktır.

Noktalı virgüle (‘;’) dikkat edin: derleyiciye, bir komutun sonuna gelindiğini söyler. Noktalı virgülün C’de birçok satırı sonlandırmak için kullanıldığını göreceksiniz.
getchar()

Sonraki komut getchar() ‘dır. Bu başka bir fonksiyondur: tek bir karakter okur ve kullanıcının karakteri okumadan önce enter tuşuna basmasını bekler. Yazılan kodlar yukarıdan aşağıya doğru okunur. Birçok derleyici son satıra gelir, programı sonlandırır ve konsol ekranını kapatır. Bu yazılan kodlar birkaç satır olduğu için bilgisayar bunu o kadar hızlı yapar ki çoğu zaman konsol ekranını göremeyiz bile. Bu programda getchar()’ın kullanım amacı ise anlaşılacağı üzere programın saliseler içerisinde kapanmasını engellemektir. Kullanıcıdan bir girdi bekleyeceği için, kullanıcı enter’a basana kadar program kapanmayacaktır. Bu satır programın çalışıp çalışmadığını görmek için kullanılabilir.
return 0

Ve geldik son satırımıza. Programımızın sonunda, “return 0” deyimini kullanarak “ana değerden (main’den) işletim sistemine bir değer döndürürüz. Bu değer programımızın başarılı olarak çalışıp çalışmadığını söylemek için kullanılabileceğinden önemlidir. 0 (sıfır) dönüş değeri program için başarılı anlamına gelir.

Son kıvırcık parantez fonksiyonu kapatır.

Kodu bir dosyaya kesip yapıştırabilir, bir .c dosyası olarak kaydedebilir ve derleyebilirsiniz. Derleme (compile) ve çalıştırma (run) aşamaları, farenizle bir düğmeyi tıklamak kadar basittir.

Printf fonksiyonuyla oynamaya başlayabilir ve basit C programlarını yazmaya çalışabilirsiniz.
Kodunuzu Açıklama (Comment)

Yorumlar (comments) bütün programlar için önemlidir ancak küçük programlar için kritik önem taşır. Bu eğitim serisinde de kod bölümlerini açıklamak için yorumlara başvuracağız. Derleyiciye bir metnin yorum olduğunu belirttiğinizde, derleyici, yorum olarak belirttiğiniz kısmı yok sayacaktır. Bu sayede kodlarda tanımlamalar yapmanıza olanak sağlayacaktır. C dilinde bir metni yorum yapmak için ilk olarak /* ve ardından */ kullanarak çevrelemelisiniz. Bunu yaparsanız ikisi arasındaki bloku yorum olarak belirlemiş olursunuz. Yorum olarak belirttiğiniz kısımlar çoğu derleyici tarafından kolay bulunması için renklendirilecektir. Bunu yapmayan derleyiciler de bulunmakta. Kodunuzu yorum satırlarının içine yazmamaya dikkat edin. Eğer fark etmeden bunu yaparsanız program yorum olarak belirtilen alanın içindeki her şeyi yok sayacağı için kodunuz da çalışmayacaktır.

Programlamayı öğrenirken, çıktıların nasıl etkilendiğini görmek için kod bölümlerini yorumlamak oldukça yararlıdır.

Bu ders C programlama diline ufak bir giriş oldu. Minik kod satırlarının ne olduğunu açıklamaya çalıştık. Diğer derste değişkenleri, değişkenleri kullanmayı ve kullanıcıdan aldığımız girişleri nasıl değişkenlere atayacağımızı öğreneceğiz.