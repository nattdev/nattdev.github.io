---
layout: post
title: HTML y su Función en el Desarrollo Web
category: "Bases HTML"
---

## ¿Qúe es HTML?
El Lenguage de Marcado de Hipertexto (Hipertext Markup Language) o más conocido como HTML, es el **lenguaje de marcado estándar** utilizado para crear y estructurar el contenido de las páginas web. Se basa en una estructura de etiquetas que la componen. Cada etiqueta le da información al navegador para poder renderizar o visualizar los contenidos de la página web de una manera correcta.
```html
<!DOCTYPE html> // Versión HTML5
```

## Función de HTML en el Desarrollo Web
HTML desempeña una función fundamental dentro del desarrollo web, ya que **proporciona la estructura del contenido de una página web** y de cada elemento que la compone como los encabezados, párrafos, listas, formularios y otros elementos.

### Los Hipervínculos
También permite la creación de hipervínculos o enlaces que conectan diferentes páginas entre sí. Los enlaces son essenciales para la navegación y la interconexión de contenido en la web.
```html
<a href="https://HaciaEnlace">Enlace</a>
```

### Imágenes, Videos y Audio
Con HTML podemos incluir elementos multimedia dentro de una página web, estos se incrustan directamente en el código HTML.
```html
<img src="image.jpg" alt="imagen"/>
<video src="video.mpeg" controls></video>
<audio src="audio.ogg" autoplay></audio>
```

### Formularios
Podemos utilizar los formularios para la recopilación de información de los usuarios, como registros, comentarios y datos de contacto.
```html
<form>
    <label for="primerNombre"></label>
    <input type="text" id="primerNombre" name="primerNombre"/>
    <label for="primerApellido"></label>
    <input type="text" id="primerApellido" name="primerApellido"/>
</form>
```

### Semántica
La semántica está presente en HTML con etiquetas que describen la función de cada elemento en una página web. Esto ayuda en la accesibilidad del contenido, los lectores de pantalla puedan comprender y navegar mejor por el contenido. Además, la semántica nos ofrece un mejor posicionamiento SEO, ya que ayuda a los motores de búsqueda a tener un contenido bien estructurado y de mejor comprensión.

### Interacción con CSS y JavaScript
HTML trabaja junto con CSS (Cascading Style Sheets) para agregar estilos y diseño a la página web. También se integra con JavaScript para añadir interactividad y funcionalidad dinámica a las páginas web.
```html
<link rel="stylesheet" href="styles.css"/>
<script src="script.js"></script>
```
