---
title: Cómo crear juegos desde tu teléfono Android
published: false
---

Tal y como lo dice el título, en este post veremos lo básico para crear juegos desde un teléfono o tablet android, esta es una guía de aplicaciones que puedes descargar para lograr esto.

# Requisitos previos

Antes de comenzar es necesario recalcar que se necesita conocimiento en programación, en especial Lua, ya que es el lenguaje de programación que usaremos, aunque en este post trataré de crear un ejemplo para iniciarte en esto, no es un tutorial de programación, pronto haré un post explicando lo mas básico que necesitas para ir avanzando en este mundillo.

A parte de Lua, se necesita conocer [Love2D](https://love2d.org/), un framework de desarrollo de videojuegos basado en el lenguaje que usaremos.

Si conoces 

Si ya tienen algún conocimiento de programación pero no conoces Lua te invito a leer esto: [Lua, MuyLinux](https://www.muylinux.com/2016/05/23/lua-lenguaje-empezar-programar/) y luego puedes pasar a leer sobre Love2D.

# Aplicaciones.

Hay 4 aplicaciones básicas que utilizaremos:

El ejecutable de Love2D: [Love2D for Android](https://play.google.com/store/apps/details?id=org.love2d.android) puedes encontrar una versión mas actualizada aquí: [Love2D v11.1](https://bitbucket.org/rude/love/downloads/love-11.1-android.apk)

![Love2d](https://imgur.com/TmAigDn.png)

Un editor de código para Lua: [Comet](https://play.google.com/store/apps/details?id=cc.sidi.SigmaScript)

![Comet](https://imgur.com/tJETOW4.png)

Un editor de imágenes pixel art: [8 bit pintor](https://play.google.com/store/apps/details?id=com.onetap.bit8painter)

![8 bit pintor](https://imgur.com/TQratvG.png)

Un generador de efectos de sonido: [SFXR](https://play.google.com/store/apps/details?id=be.minimal.sfxr)

![SFXR](https://imgur.com/VsbftCV.png)

Opcionalmente podremos descargar todo tipo de recursos desde la web: [OpenGameArt](https://play.google.com/store/apps/details?id=be.minimal.sfxr)

# Explicando el entorno

La aplicación love2d ejecuta proyectos creados para el framework, lo único que debemos hacer es agregar nuestro proyecto en la carpeta `lovegame` en nuestro sdcard, si no la tienes luego de instalarlo, crealo.

Yo he creado una librería para facilitar la creación de juegos en android, es una pequeña librería que permite añadir botones multitouch o bien, ya trae consigo un gamepad que podremos utilizar.

La librería se llama `lovepad` y la podemos descargar [aquí](https://github.com/DeybisMelendez/lovepad/releases/download/v1.0.0/lovepad.lua). El archivo lo colocamos en la carpeta `lovegame`

En principio, un juego en love busca un archivo llamado `main.lua`, y lo ejecuta, así que eso es lo que haremos.

Abriremos Comet y buscaremos la carpeta lovegame y crearemos un archivo llamado `main.lua`.

