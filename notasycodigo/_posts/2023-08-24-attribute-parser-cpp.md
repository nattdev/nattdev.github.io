---
layout: post
title: Resolviendo Attribute Parser c++
category: "Hacker Rank c++"
---
El desafío Attribute Parser es un problema de procesamiento de cadenas que implica analizar y buscar atributos dentro de etiquetas.

Nos muestran un lenguaje de marcado personalizado llamado HRML, estas etiquetas tienen una etiqueta de inicio y una etiqueta final. 
Además, todos los atributos solo los encontraremos en las etiquetas de inicio.
Estos atributos pueden ser referenciados con el nombre del tag y el símbolo de la virgulilla o tilde "~"

Puedes ver el problema completo en su [página oficial](https://www.hackerrank.com/challenges/attribute-parser/problem).

```cpp
// Etiqueta de inicio
<tag-name attribute1-name = "value1" attribute2-name = "value2" ...>

// Etiqueta final
</tag-name>

// Referencia de atributos con etiquetas anidadas
tag1~value  
tag1.tag2~name
```

Trabajaremos con este input:
```cpp
6 3 # Numero de lineas del HRML, Numero de consultas
<tag1 value = "value">
<tag2 name = "name">
<tag3 another="another" final="final">
</tag3>
</tag2>
</tag1>
tag1~value
tag1.tag2.tag3~name
tag1.tag2~value
```

Output esperado:
```cpp
Query                 Value
tag1~value            "value"
tag1.tag2.tag3~name   "Not Found!"
tag1.tag2.tag3~final  "final"
```

Para comenzar dividiremos nuestro problema en 3 partes:
La primera será recibir los datos de entrada, para eso declararemos variables y contenedores. Estos elementos nos ayudarán a almacenar y manejar la información proporcionada en el problema.

```cpp
// Librerías estándar utilizadas
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <map>
#include <sstream>
using namespace std;

int t, q; // t:tag q:query
string temp; // Almacenará las etiquetas temporalmente
vector <string> content; // Vector para almacenar el contenido HRML
vector<string> query; // Vector para almacenar las consultas

```

Ahora con un bucle for almacenaremos los datos de entrada en los vectores. Utilizaremos la variable temporal `temp` para capturar cada línea de entrada y la agregaremos a los vectores correspondientes. Este proceso nos permitirá organizar y retener la información que necesitamos para resolver el problema.

```cpp
for (int i = 0; i < t; i++)
{
	getline(cin, temp);
	content.push_back(temp);
}

for (int i = 0; i < q; i++)
{
	getline(cin, temp);
	query.push_back(temp);
}
```

En esta segunda parte procesaremos los datos de entrada, Aquí, estableceremos un contenedor `map` que nos permitirá almacenar los elementos en pares clave-valor, donde la clave representa el atributo y el valor es su correspondiente valor. Además, crearemos un vector que utilizaremos para manejar las etiquetas del problema.

```cpp
map<string, string> attr;
vector<string> tag;
```

A través de un bucle for procesaremos cada línea del vector content y esta será asigna de manera temporal a la variable temp en cada iteración

```cpp
for (int i = 0; i < t; i++)
{
	temp = content[i];
	temp.erase(remove(temp.begin(), temp.end(), '"'), temp.end());
	temp.erase(remove(temp.begin(), temp.end(), '>'), temp.end());

	// remove devuelve un iterador apuntando a la posicion del primer elemento donde empiezan los elementos eliminados
	// erase elimina los caracteres desde la posicion del iterador devuelto por remove hasta el final

	// Verificamos si la línea es una etiqueta de cierre
	if (temp.substr(0, 2) == "</")
	{
		tag.pop_back();
	}
	else
	{
		stringstream ss;
		ss.str("");
		ss << temp;
		string t1, a1, v1;
		char ch;
		ss >> ch >> t1 >> a1 >> ch >> v1;

		string temp1 = "";
		if (tag.size() > 0)
		{
			temp1 = *tag.rbegin();
			temp1 = temp1 + "." + t1;
		}
		else
	}
	temp1 = t1;
	{
		tag.push_back(temp1);
		attr[*tag.rbegin() + "~" + a1] = v1;
		while (ss)
		{
			ss >> a1 >> ch >> v1;
			attr[*tag.rbegin() + "~" + a1] = v1;
		}
	}
}
```

Por último procesaremos las consultas, y verificamos si las consultas están dentro de el map attr, si es verdadero imprimiremos el valor,y si es falso imprimiremos Not Found!

```cpp
for (int i = 0; i < q; i++)
{
	if (attr.find(query[i]) == attr.end())
	{
		cout << "Not Found!\n";
	}
	else
	{
		cout << attr[query[i]] << endl;
	}
}
```

### Diagrama Attribute Parser

![diagram-attribute-parser](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/diagrams/diagram-attr-parser.svg)
