---
layout: post
title: Diseño Responsivo y Media Querys
category: "Bases CSS"
---

Una página web con un diseño que se adapte a todos los dispositivos ofrece al usuario una experiencia de usuario óptima. 

Dentro de los dispositivos que habitualmente usamos están las computadoras de escritorio, las tabletas y los celulares. 

Para que el contenido de la página web pueda visualizarse de una forma correcta y adaptarse a los diferentes tipos de pantalla, es necesario usar los estilos CSS y una estructura HTML pensada en un **diseño responsive**, también llamado adaptable o responsivo.

## Mobile First
Actualmente se ha expandido el uso del teléfono móvil en especial el de los smarthpones, además de las tablets, y es muy usado el concepto de Mobile First, que consiste en diseñar la página web priorizando su visualización en los dispositivos móviles.

Esto indica que el proceso de desarrollo tiene que iniciarse pensando **primero en una versión móvil**, y luego se adapta a una versión para escritorio.

## La etiqueta `<meta>` Viewport
Se encuentra dentro de la etiqueta `<head>` dentro de una estructura HTML y  permite escalar nuestra web al tamaño de la pantalla del dispositivo. La meta etiqueta "viewport" se ha convertido en un estándar dentro del diseño responsive.
```html
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

## Media Querys
Usamos media querys para añadir condiciones a las reglas CSS que quieran mostrarse en determinados tamaños de pantalla.

### Sintaxis
Se usa la regla `@media` seguido de declaraciones opcionales que definirán el alcance de los estilos aplicados.

```css
@media screen and (max-width: 600px) {
/** Estilos a aplicar **/
    div {
        display: flex
        flex-direction: column;
     }
}
@media screen and (min-width: 601px) {
    div {
        flex-direction: row;
    }
}
```
#### `screen`
Se refiere a los dispositivos que poseen una pantalla.

#### `and`
Conector que agrupa varias declaraciones en una misma condición.

#### `max-width`
Especifica un ancho máximo, si no existen condiciones anteriores aplica el estilo en una pantalla de ancho `0px` hasta `600px`.

#### `min-width`
Especifica un ancho mínimo, si no existen condiciones adicionales se aplica desde el valor `601px` hasta la medida del ancho total de la pantalla.

## Tamaños de Pantalla
Se pueden sugerir valores referenciales para adaptar los estilos a los diferentes tipos de pantalla, sin embargo no podemos especificarlos todos. 

La aparición de dispositivos con diversas características se renueva cada año. El diseño responsive esta sujeto a estas nuevas propuestas y tiene que adaptarse a los nuevos dispositivos.

Según DevTools de Chromium tenemos las siguientes medidas referenciales:

```css
/** Móvil pantalla pequeña **/
@media screen and (max-width: 320px) {}
/** Móvil pantalla mediana **/
@media screen and (max-width: 375px) {}
/** Móvil pantalla grande **/
@media screen and (max-width: 425px) {}
/** Tablet **/
@media screen and (max-width: 768px) {}
/** Laptop **/
@media screen and (max-width: 1024px) {}
/** Laptop pantalla grande**/
@media screen and (max-width: 1440px) {}
/** 4K **/
@media screen and (max-width: 2560px) {}
```
