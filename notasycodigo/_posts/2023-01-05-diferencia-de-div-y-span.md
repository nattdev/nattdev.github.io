---
layout: post
title: Diferencia Entre las Etiquetas div y span
category: "Bases HTML"
---
Las etiquetas div y span son dos elementos esenciales dentro de la estructura de una página web, pero cada una desempeña un papel distinto en la presentación del contenido.

# ¿Qué es un div ?
Un div es una etiqueta de HTML, se utiliza para organizar el contenido de la página, actúa como un contenedor para los elemetos que se encuentran dentro.
Se caracteriza por ser un elemento de tipo bloque `block` y toma todo el ancho de su contenedor padre por defecto.

Se emplea regularmente para estructurar secciones de contenido, encabezados o pies de página.

```html
<div>
    <h1>Título de la Sección</h1>
    <p>Soy un párrafo</p>
<div>
```

# ¿Qué es un span?
Un span es otra etiqueta de HTML muy usada, es utilizada para destacar o estilizar algún elemento concreto, se puede añadir estilos mediante CSS.
Se caracteriza por ser un elemento de tipo en línea `inline`, esto quiere decir que solo toma el espacio necesario para su contenido.

Se usa comúnmente al aplicar estilos de color de texto o formato de fuente.
```
<p>Soy un párrafo con un <span class="red">texto de color rojo</span></p>
```
