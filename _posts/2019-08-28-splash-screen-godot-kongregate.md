---
title: Hola mundo
published: true
---

En este ![post](https://deybismelendez.github.io/blog/API-de-Kongregate-en-Godot-3.1) mostré cómo añadir la API de Kongregate a godot para poder utilizar las caracteristicas básicas que permite esta plataforma, pero algunas personas me han preguntado: ¿Donde está el preloader? Claro que estas personas desarrollan sus juegos en engines o frameworks que ya tienen un plugin de Kongregate como Unity, Stencyl o Construct y es por eso que se les hace raro no ver una imagen de kongregate al momento de publicar un juego utilizando godot.

Pero no significa que lo estamos haciendo mal, en realidad, el preloader o el splash screen con la imagen de Kongregate es opcional, aunque hay que admitir que si creamos un juego para publicarlo exclusivamente en Kongregate deberíamos añadirlo.

Entonces vamos a ver cómo podemos resolver esto para que al cargar nuestro juego se muestre la imagen de Kongregate.

En realidad es muy sencillo, descargamos el logo de esta web [aquí](https://cdn2.kongcdn.com/assets/files/0001/4401/kongregate_anthill.png.zip). Este logo es oficial y pertenece a este [enlace](https://www.kongregate.com/pages/logos-and-branding).



Descomprimimos el archivo y lo colocamos en nuestro proyecto, y para agregarlo solo vamos a Proyecto, ajustes de proyecto, Boot Splash y lo dejaremos así:

![Godot Boot Splash](https://i.imgur.com/BhZTRQ7.png)

El background color completamente negro y en Image seleccionamos el png.

Con esto, ya tendremos el logo de Kongregate en la carga del juego.

{% include disqus.html %}
