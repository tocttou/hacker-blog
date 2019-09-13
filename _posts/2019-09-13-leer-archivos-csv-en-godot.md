---
title: Leer archivos CSV en Godot
published: true
---

Últimamente he estado usando bastantes archivos CSV tanto para almacenar datos de niveles como de objetos, ¿Por qué no uso JSON? porque en algunos casos no es tan necesario, además, los archivos CSV se pueden administrar desde un editor de cálculo como Excel, Calc, Spreadsheets, etc.

# ¿Qué es un CSV?

CSV signfica *comma separated values*, es decir, valores separados por comas, y es que es básicamente eso, una lista. Imagina que necesitas almacenar una lista de objetos, con la ubicacion de un ícono que corresponde al objeto. ¿Usar un JSON o XML para algo tan simple?.

Por otro lado, no hay una norma estricta para escribir un CSV, aunque he encontrado algunas webs que intentan estandarizar el formato para poder responder a algunas restricciones que tiene y que sea posible trabajar globalmente como lo hacen otros formatos con un estandar preciso, como lo son YAML, JSON, XML, etc...

Por dar un ejemplo, un archivo CSV no comprende bien el uso del `\n` (lineas) o `,` (coma), ya que para separar las filas y columnas lo usa, en estos casos se enriquese el formato CSV separando los valores con `""` pero en este caso no lo aplicaré.

# Formato del CSV

Puedes escribir el archivo CSV desde cualquier editor plano o en cualquier editor de cálculo.

Ejemplo con el editor plano, cuando solo necesitamos una lista:
```
Deybis Melendez,Matías Muñoz, Iki Capitan,Kalpar,Nabi Sama,
```

Ejemplo con el editor plano cuando necesitamos una lista con varios valores:
```
id, icono, precio,
Espada, items/espada.png, 200,
Escudo, items/escudo.png, 150,
Armadura, items/armadura.png, 100,
```
La cabecera puede ser opcional.

Ejemplo usando Spreadsheets:

![Ejemplo CSV](https://i.imgur.com/j4NoWkS.png)

Como estarás viendo, cuando se trata de una lista simple o bien cuando necesitamos una lista con varios valores puede venir bien usar este formato.

Nota que cuando usamos un editor de cálculo no permite formatear ni usar fórmulas, así que cuidado con eso.

# El código

**NOTA**: Godot usa archivos CSV para administrar multi idiomas por lo que es mejor nombrar estos archivos como TXT para evitar que godot cause algún error leyendo estos archivos.

Dependiendo de la utilidad que necesitamos, podemos hacer diferentes funciones, por ejemplo, en caso de que sea una simple lista, podriamos escribir el siguiente código:

```
func simple_csv2Array(csv):
	var file = File.new()
	file.open(csv, File.READ)
	var content = file.get_as_text()
	content = content.split(",")
	content = Array(content)
	content.erase("") # debido a que generalmente dejamos una última coma
  return content
```

Con esta función conseguimos un array con los valores de ese archivo.

En caso de que sea una tabla (lista con diferentes valores) y lo queremos en un array podemos escribir lo siguiente:

```
func csv2Array(csv):
	var file = File.new()
	file.open(csv, File.READ)
	var content = file.get_as_text()
	content = content.split("\n")
	content = Array(content)
	content.erase("") # debido a que siempre queda un \n al final
	var array = []
	for item in content:
		item = item.split(",")
		item = Array(item)
		item.erase("") # debido a que siempre queda una coma al final
		array.append(item)
	return array
```

Y por último, en caso que necesitemos convertirlo en un diccionario, donde el index sería el primer valor de cada línea:

```
func csv2Dict(csv):
	var file = File.new()
	file.open(csv, File.READ)
	var content = file.get_as_text()
	content = content.split("\n")
	content = Array(content)
	content.erase("") #cleaning
	var dict = {}
	for item in content:
		var items = item.split(",")
		items = Array(items)
		items.erase("")
		dict[items[0]] = items.duplicate()
		dict[items[0]].erase(items[0])
	return dict
```

Con esto ya podemos trabajar nuestros archivos CSV para nuestros proyectos en godot. Este es el código que he estado usando yo, si reconoces algún error o encuentras una forma mejor o mas optimizada no dudes en comentarlo.

Por último, te dejo el archivo *.gd por si lo deseas utilizar en tu proyecto: [CSV GIST](https://gist.github.com/DeybisMelendez/42686b5d63aee8040f49e71af6798825)

{% include disqus.html %}
