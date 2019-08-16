---
title: Cómo crear juegos desde tu teléfono Android
published: true
---

Tal y como lo dice el título, en este post veremos lo básico para crear juegos desde un teléfono o tablet android, esta es una guía de aplicaciones que puedes descargar para lograr esto.

## Requisitos previos

Antes de comenzar es necesario recalcar que se necesita conocimiento en programación, en especial Lua, ya que es el lenguaje de programación que usaremos.

A parte de Lua, se necesita conocer [Love2D](https://love2d.org/), un framework de desarrollo de videojuegos basado en Lua.

Yo escribí un blog al respecto hace un tiempo, si quieres darle un vistazo ve [aquí.](https://lualove2d.blogspot.com/search/label/principio)

Además también tengo una serie en mi canal de [Youtube](https://www.youtube.com/watch?v=K-UARJLjPig&list=PLoXNpYRpQVcDGBdj1pjeu5Jht_j-FlnQi).

Si ya tienen algún conocimiento de programación pero no conoces Lua te invito a leer esto: [Lua, MuyLinux](https://www.muylinux.com/2016/05/23/lua-lenguaje-empezar-programar/) y luego puedes pasar a leer sobre Love2D.

## Aplicaciones.

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

## Explicando el entorno

La aplicación love2d ejecuta proyectos creados para el framework, lo único que debemos hacer es agregar nuestro proyecto en la carpeta `lovegame` en nuestro sdcard, si no la tienes luego de instalarlo, crealo.

Yo he creado una librería para facilitar la creación de juegos en android, es una pequeña librería que permite añadir botones multitouch o bien, ya trae consigo un gamepad que podremos utilizar.

La librería se llama `lovepad` y la podemos descargar [aquí](https://github.com/DeybisMelendez/lovepad/releases/download/v1.0.0/lovepad.lua). El archivo lo colocamos en la carpeta `lovegame`

En principio, un juego en love busca un archivo llamado `main.lua`, y lo ejecuta, así que eso es lo que haremos.

Abriremos Comet y buscaremos la carpeta lovegame y crearemos un archivo llamado `main.lua`.

Ahí podremos escribir el siguiente código:

```lua
local lovepad = require 'lovepad' -- cargamos la libreria
lovepad:setGamePad() -- configuramos el gamepad por defecto

function love.draw() -- funcion que trae love para dibujar objetos
    -- Aqui escribimos nuestro codigo para dibujar los objetos del juego
    lovepad:draw() --funcion obligatoria de lovepad para dibujar el gamepad
end

function love.update(dt) -- function que trae love para actualizar la pantalla
    -- aqui escribimos la logica del juego
    lovepad:update() -- function obligatoria de lovepad para actualizar el gamepad
end
```

Si guardamos y ahora abrimos Love2D nos aparecería algo como esto:

![Screenshot 1](https://imgur.com/rHnSjOT.png)

Ahora si ya podemos comenzar a programar nuestro juego, ya tenemos las herramientas básicas para desarrollar un juego en love2d.

Continuaremos con un pequeño ejemplo de cómo trabajar con lovepad.

ahora vamos a crear un sprite con 8 bit pintor, yo hice esto:

![Screenshot 2](https://imgur.com/BUgMxmJ.png)

Este dibujo lo exporté y lo coloqué en la carpeta `lovegame`.

Ahora podemos abrir el `SFXR` y elegir un sonido aleatorio, seleccionamos `edit` y luego `export wav` para generar el audio.

![Screenshot 3](https://imgur.com/X0L0RWA.png)

![Screenshot 4](https://imgur.com/hlMjAUY.png)

Lo movemos a la carpeta `lovegame`. Ahora renombramos los archivos, a  la imagen le ponemos `sprite.png` y al sonido `sonido.wav`.

Nos devolvemos a Comet y modificamos el archivo `main.lua`:

```lua
local lovepad = require 'lovepad'
lovepad:setGamePad()

local ball = {} -- creamos una tabla para manejar las variables de la bola

ball.x = 100 -- asignamos una variable x para manejar la posicion en x
ball.y = 100 -- asignamos una variable y para manejar la posicion en y
ball.speed = 100
ball.img = love.graphics.newImage('sprite.png') -- cargamos la imagen
ball.sound = love.audio.newSource('sonido.wav', 'static') -- cargamos el sonido
function love.draw()
    love.graphics.draw(ball.img, ball.x, ball.y) -- dibujamos la bola en pantalla.
    lovepad:draw()
end

function love.update(dt)
    -- agregamos la logica de los botones
    -- Si está siendo apretado 'botón' mueve la bola...
    if lovepad:isDown('Up') then ball.y = ball.y - ball.speed * dt end
    if lovepad:isDown('Down') then ball.y = ball.y + ball.speed * dt end
    if lovepad:isDown('Left') then ball.x = ball.x - ball.speed * dt end
    if lovepad:isDown('Right') then ball.x = ball.x + ball.speed * dt end
    -- isPressed solo devuelve true una vez, a diferencia de isDown.
    if lovepad:isPressed('Up') or lovepad:isPressed('Down')
    or lovepad:isPressed('Left') or lovepad:isPressed('Right') then
        ball.sound:play()
    lovepad:update()
end
```
Si guardas esto y luego vas a Love2D verás como aparece la bola y ahora con los botones puedes moverlo y cada vez que presionas un botón se escucha el sonido.

Y esto sería todo por el post, espero te haya servido, si tienes alguna duda hazmelo saber en los comentarios, si te interesa conocer mejor cómo funciona lovepad puedes ver toda la información en este [link](https://github.com/DeybisMelendez/lovepad/blob/master/README.md).

{% include disqus.html %}
