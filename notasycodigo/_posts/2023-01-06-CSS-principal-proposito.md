---
layout: post
title: El Propósito Principal de CSS
category: "Bases CSS"
---
Dentro del desarrollo web encontramos a CSS, un lenguaje que se encarga de **la presentación y el diseño de la página web**.

CSS también es conocido como Hojas de Estilo en Cascada (Cascading Style Sheets) su propósito principal es de **aplicar estilos visuales**, además de **controlar la disposición y la ubicación de los elementos** en una página web.

## Enlace con HTML
CSS proporciona estilos a los elementos HTML, se usan **tres formas** para que se apliquen los estilos.

### 1. Etiqueta `style`
Se escriben los estilos dentro de la etiqueta `<style></style>`. La etiqueta `style` va dentro de la etiqueta `head` en la estructura HTML de la página web.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Título de Página Web</tile>
        <style>
            h1 {
                color: #0d0d0d;
                background: #dedede;
                margin: 1em;
                padding: 0.3em;
            }
        </style>
    </head>
    <body>
        <h1>Mi Título Principal</h1>
    </body>
</html>
```

### 2. Enlazando con `link`
Otra forma de enlazar los estilos al documento HTML es utilizando la etiqueta `link`. Se usa dentro de `head` y se especifica la ubicación del archivo `.css` dentro del atributo `href`. 
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Título de Página Web</tile>
        <link rel="stylesheet" href="styles.css"/>
    </head>
    <body>
        <h1>Mi Título Principal</h1>
    </body>
</html>
```
```css
/** styles.css **/
h1 {
    color: #0d0d0d;
    background: #dedede;
    margin: 1em;
    padding: 0.3em;
}
```
### 3. Estilos en Línea
También se les conoce como estilos inline, como su mismo nombre lo indica son estilos que se aplican directamente al elemento dentro del documento HTML. Mediante la atributo `style` podemos aplicar los estilos al elemento.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Título de Página Web</tile>
    </head>
    <body>
        <h1 style="color: #0d0d0d; background: #dedede; margin: 1em; padding: 0.3em;">Mi Título Principal</h1>
    </body>
</html>
```

## Estilo Visual
Se pueden aplicar estilos a los elementos HTML, como colores, tipografía, márgenes, espaciado, colores de fondo, efectos visuales. Esto nos permite tener muchas opciones para crear diseños atractivos para el usuario. Algunas de las propiedades usadas son `color`, `font`, `background`, `margin`, `padding`.

## Control de Diseño
CSS puede controlar el diseño de los elementos, la ubicación y su disposición en una página web. Mediante el uso de propiedades como `display`, `position`, `width`, `height`. 

## Adaptación a Dispositivos (Responsive Design)
Un diseño web adaptable es importante porque garantiza que los usuarios de distintos dispositivos puedan visualizar e interactuar con una página web con una experiencia de usuario óptima. Se usan media queries y brakpoints para definir la disposición del contenido al ancho de pantalla requerido.
```css
@media screen and (max-width: 1250px) {
    /** styles **/
}
```

## Accesibilidad
CSS también se utiliza para mejorar la accesibilidad en una página web, permite la personalización de la presentación del contenido según las necesidades del usuario. Esto incluye el ajuste del tamaño del texto, el contraste y la navegación con el teclado.

## Compatibilidad
Con CSS podemos normalizar los estilos por defecto de los navegadores, dandole así al usuario una misma presentación en diversas plataformas.
