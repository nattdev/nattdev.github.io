---
layout: post
title: Unidades de Medida Utilizadas en CSS
category: "Bases CSS"
---

Para definir las dimensiones de los elementos HTML, se aplican las unidades de medida a los valores de las propiedades para determinar su longitud.

Podemos dividir las unidades de medida en dos tipos: absolutas y relativas.

## Unidades Absolutas
Su tamaño ya **está determinado** por una especificación, la unidad absoluta más utilizada dentro del diseño web, es la unidad `px`, que indica el tamaño en píxeles.
-  `px` (píxeles, equivale a 1/96 de 1in)

Otras unidades absolutas que pueden ser utilizadas son:
- `cm` (centímetros) 
- `mm` (milímetros, equivale a 1/10 de 1cm)
- `in` (pulgadas, equivale a 96px o 2,54cm)
- `pc` (picas, equivale a 12pt o 1/6 de 1in)
- `pt` (puntos, equivale a 1/72 de 1in)

Estas unidades, se usan a menudo cuando se requiere una salida en formato de impresión.

## Unidades Relativas
El tamaño de las unidades relativas **se establece en relación a algún elemento**. En algunos casos dependen de su nivel de anidamiento o en relación con su elemento root (elemento html).

- `em` (relativo al font-size determinado en su elemento padre o el font-size determinado en su propio elemento cuando se usa las propiedades width, padding, margin o height)
- `rem` (relativo al font-size determinado en su elemento root)
- `vw` (relativo al 1% del ancho del viewport)
- `vh` (relativo al 1% del alto del viewport)
- `%` (relativo al tamaño de la propiedad determinada en su elemento padre)

Otras unidades relativas, `ex`, `ch`, `vmin`, `vmax`.  

## Usabilidad
Las unidades de medida pueden usarse en distintas propiedades que especifican el ancho, el alto, los márgenes, tamaño de fuente, grosor de línea, etc.

Pueden utilizarse con las propiedades: `width`, `height`, `padding`, `margin`, `border`, `font-size`, entre otras.

```css
html {
    font-size: 27px;
}

.box {
    font-size 13px;
    width: 200px;
}

.box-child {
    font-size: 5px;
    padding: 2em; /* 2 veces el tamaño de su elemento, 10px*/
    margin: 1rem; /* 1 vez el tamaño de su elemento root, 27px */
    width: 50%; /* El 50% del ancho su elemento padre, 100px*/
    height: 60px; /* 60 pixeles absolutos*/
}
```
