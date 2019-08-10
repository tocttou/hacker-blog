---
title: API de Kongregate en Godot 3.1
published: true
---

He estado investigando cómo integrar la API de Kongregate con Godot, ya que últimamente estoy interesado en participar en los concursos mensuales de esta plataforma.

Estaba a punto de descargar Stencyl (un engine de videojuegos que ya tiene kongregate integrado) cuando me dispuse a revisar si existía algún script, plugin o lo que sea, que me permita trabajar con la API de Kongregate en Godot, según las reglas de Kongregate, es necesario incluir su API y darle uso para participar, así que encontré en la documentación de Godot la clase JavaScript, con el que puedes ejecutar la función eval.

## Integrando la API

Primero, necesario incluir en la etiqueta <head> del html el kongregate-api.js, esto se puede hacer manualmente, luego de exportar el juego a html5, modificamos el archivo html e incluimos la api, aunque también lo podemos hacer directamente con Godot, en el momento de exportar, incluimos en el parametro HEAD INCLUIDE lo siguiente:

```javascript
<script type='text/javascript'  src='https://cdn1.kongregate.com/javascripts/kongregate_api.js'></script>
```

![Incluyendo el codigo en head include](https://i.imgur.com/EQ14yUQ.png)

Luego de hacer esto, ya podemos trabajar con la API, pero hay que entender cómo hacerlo.

## Creando el plugin

En nuestro proyecto de Godot, vamos a crear un script y le nombraremos `Kongregate.gd`, luego lo añadimos como un autoload.

![Creando el autoload Kongregate](https://i.imgur.com/esxhCze.png)

## Cargando la API

Vamos a borrar todo el contenido del Kongregate.gd excepto la primer línea, que debería decir `Extends Node`.

Como ya tendremos el API de kongregate cargado en el Head del html, ahora necesitamos cargar estas funciones, es decir inicializar la API.

Para lograr eso podemos poner lo siguiente:

```swift
func _ready():
	JavaScript.eval("kongregateAPI.loadAPI(function(){window.kongregate = kongregateAPI.getAPI();});")
```

Cabe mencionar que si lo hacemos de esta manera, no podremos obtener correctamente algunos parametros en el ready al instante, por lo que debemos manejar esto con cuidado, opcionalmente podríamos incluir la línea de javascript `kongregateAPI.loadAPI(function(){window.kongregate = kongregateAPI.getAPI();});` debajo de la etiqueta <body> de nuestro html, justo antes de cualquier ejecución del juego, o bien, incluirlo en el Head Include al momento de exportar, aunque esto último no es del todo recomendado.

Pero si no queremos complicarnos las cosas, podemos incluirlo en el `_ready`.

## Utilizando la API

Como mencioné al inicio, podemos ejecutar la API de Kongregate con la función eval() de la clase Javascript que trae Godot, podemos escribir lo siguiente para obtener el nombre de usuario del jugador:

```swift
func get_user_name():
	return JavaScript.eval("kongregate.services.getUsername();")
```

Con esto estamos ejecutando la API de Kongregate y al mismo tiempo obtener el resultado. De esta manera podemos acceder al nombre del usuario en cualquier parte de nuestro juego escribiendo `Kongregate.get_user_name()`

Podemos subir las estadisticas del juego con la siguiente función:

```swift
func submit_stats(stat, value):
	JavaScript.eval("kongregate.stats.submit('"+ stat +"', " + str(value) + ");")
```

Nótese que al rededor de la palabra stat en la segunda línea, hay comillas simples y dobles, esto es porque la función eval requiere que la sentencia se escriba como String, y la función submit require que el stat sea un string, la función debería escribirse: `kongregate.stats.submit('stat', value);` donde stat es un string y value un número entero.

Con esto, ya podemos trabajar en añadir las funciones que queramos de la API de Kongregate, ya mostré cómo incluir las 2 mas básicas, me quedaría pendiente crear un script que incluya al menos las funciones mas importantes, como guardar partida, cargar partida, entre otras...

El código que hemos escrito en su totalidad sería el siguiente:

```swift
extends Node

func _ready():
	JavaScript.eval("kongregateAPI.loadAPI(function(){window.kongregate = kongregateAPI.getAPI();});")

func get_user_name():
	return JavaScript.eval("kongregate.services.getUsername();")

func submit_stats(stat, value):
	JavaScript.eval("kongregate.stats.submit('"+ stat +"', " + str(value) + ");")
```

Esto es mas que suficiente para cumplir con la regla de incluir la API de kongregate y ya podremos participar en los concursos mensuales. Mas adelante publicaré un repositorio con la API mas importante y que podemos usar para sacarle mas provecho a esta plataforma.

Déjame un comentario con tu opinión al respecto :D

Si deseas escribirme:

Puedes entrar a mi [Discord](https://discord.gg/xDZK4V5)

O bien escríbeme por [Instagram](https://www.instagram.com/deybismelendez/)

{% include disqus.html %}
