---
layout: post
title: Formas de Agregar HTML con JavaScript
category: "Bases JavaScript"
---

Exploraremos diversas formas de agregar contenido HTML a un documento utilizando JavaScript. Cada método tiene sus propias ventajas y desventajas dependiendo del caso de uso.

## La propiedad `innerHTML`
El método más común para insertar contenido HTML es mediante la propiedad `innerHTML`. Permite reemplazar el contenido HTML dentro de un elemento existente.

Ejemplo:
```html
<div id="container"></div>
<script>
    const container = document.getElementById("container");
    container.innerHTML = "<p>Este es un párrafo añadido con innerHTML</p>";
</script>
```
### Ventajas:
- Fácil de usar.
- Permite agregar bloques completos de HTML.

### Desventajas:
- Reemplaza todo el contenido existente del elemento.
- Puede ser vulnerable a ataques de XSS si no se valida correctamente.
  
  
## El método `insertAdjacentHTML`
Este método permite insertar HTML relativo a la posición de un elemento existente sin reemplazar su contenido.

Ejemplo:
```html
<div id="container">Texto inicial</div>
<script>
    const container = document.getElementById("container");
    container.insertAdjacentHTML("beforeend", "<p>Nuevo párrafo al final</p>");
</script>
```

### Posiciones disponibles:
- "beforebegin": Antes del elemento.
- "afterbegin": Dentro del elemento, antes del primer hijo.
- "beforeend": Dentro del elemento, después del último hijo.
- "afterend": Después del elemento.
  

## Los métodos `createElement` y `appendChild`
Es una forma más estructurada y segura de crear y añadir elementos al DOM.

Ejemplo:
```html
<div id="container"></div>
<script>
    const container = document.getElementById("container");

    const newElement = document.createElement("p");
    newElement.textContent = "Este es un párrafo creado con createElement";

    container.appendChild(newElement);
</script>
```
### Ventajas:
- Permite construir elementos paso a paso.
- Es seguro frente a inyecciones maliciosas.

### Desventajas:
- Puede ser más verboso que innerHTML para HTML más complejo.
  

## Plantillas HTML `<template>`
Las plantillas son fragmentos de HTML que no se renderizan hasta que se copian en el DOM.

Ejemplo:
```html
<template id="template">
    <p>Este contenido viene de una plantilla</p>
</template>
<div id="container"></div>
<script>
    const template = document.getElementById("template");
    const container = document.getElementById("container");

    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
</script>
```

### Ventajas:
- Perfecto para reutilizar estructuras HTML.
- Separación clara entre estructura y lógica.
  

## Método `document.write`
Es un método antiguo que escribe directamente en el documento durante su carga.

Ejemplo:
```html
<script>
    document.write("<h1>Texto añadido con document.write</h1>");
</script>
```
### Ventajas:
- Simple para contenido rápido.
### Desventajas:
- Obsoleto en aplicaciones modernas.
- Sobrescribe todo el contenido del documento si se usa después de la carga.
