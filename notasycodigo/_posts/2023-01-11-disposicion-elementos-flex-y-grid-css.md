---
layout: post
title: Disposición de Elementos con flex y grid
category: "Bases CSS"
---
Las valores flex y grid en la propiedad display nos permiten situar a los elementos de maneras diversas dentro de un contenedor, obteniendo nuevas formas para el diseño de la página.

## Sintaxis
Se usa la propiedad `display` seguido de los valores `flex` o `grid`.

```css
.caja-flexible {
    display: flex;
}

.caja-cuadricula {
    display: grid;
}
```

## Caja Flexible `display: flex`
Un contenedor con la propiedad `flex`, da la capacidad a sus elementos de ser flexibles, dicho de otra forma, poder adaptarse entre todos sus elementos a las dimensiones del contenedor padre.

Siempre y cuando, el contenido no limite la extensión o reducción del elemento, todos los elementos pueden visualizarse de una forma apropiada dentro del contenedor.

### Propiedades Especiales con `flex`
Las propiedades especiales para este modelo pueden cambiar la dirección de los elementos mostrados, el flujo con el cuál se muestran, la adaptación y la alineación de los elementos.

Dentro del modelo flex podemos establecer propiedades específicas para el contenedor y sus elementos en el interior.

#### En el contenedor flex
Cualquier elemento que posea la propiedad `display: flex` actúa como un contenedor flex.

Podemos observar la composición de un contenedor `flex` en la siguiente imagen:

![flex-composition](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/posts/flex-composition.svg)

Los ejes dentro del modelo flex son llamados: "main axis" que representa al eje "x" con dirección de izquierda a derecha, y "cross axis", que representa al eje "y" con dirección de arrriba hacia abajo.

```css
.flex-container {
  /** Establece el modelo flex **/
  display: flex;

  /** Especifica la dirección de los elementos según el sentido de sus ejes izq-der o arr-aba **/
  flex-direction: row; /* <-- Por defecto */
  /* row-reverse | column | column-reverse */

  /** Dispone a los elementos en varias líneas según la dimensión de cada elemento **/
  flex-wrap: nowrap; /* <-- Por defecto */
  /* wrap | wrap-reverse */

  /** Propiedad abreviada para mostrar las propiedades de flex-direction y flex-wrap **/
  flex-flow: row nowrap; /* <-- Por defecto */

  /** Modifica la posición en la línea de los elementos en el eje main-axis según el valor especificado **/
  justify-content: flex-start; /* <-- Por defecto */
  /* flex-end | center | stretch | space-between | space-around | space-evenly */

  /** Modifica la posición en la línea de los elementos en el eje cross-axis según el valor especificado **/
  align-items: flex-start; /* <-- Por defecto */
  /* flex-end | center | stretch | baseline */

  /** Establece la posición de todos los elementos cuando ocupen multiples líneas dentro de un contenedor y que tenga espacio sobrante en el cross-axis**/
  align-content: flex-start;
  /* flex-end | center | stretch | space-between | space-around | space-evenly */

  /** Especifica el espacio entre los elementos | Propiedad abreviada para row-gap y column-gap**/
  gap: 13px; /* | 13px 26px */

  /** Especifica el espacio entre las filas**/
  row-gap: 13px;

  /** Especifica el espacio entre las columnas**/
  column-gap: 26px;
}
```
#### En los elementos de flex (flex items)
Los elementos dentro de un contenedor con la propiedad `display: flex` actúan como flex-items.

```css
.flex-item {
  /** Especifica el orden del elemento en relación a los otros **/
  order: 0; /* <-- Por defecto */

  /** Indica cuanto más espacio tomará un elemento en relación con otros **/
  flex-grow: 2; /* <-- Por defecto */

  /** Indica cuanto espacio puede dar un elemento para contraerse en relación con otros **/
  flex-shrink: 1; /* <-- Por defecto */

  /** Establece el tamaño del elemento es similar a la propiedad width **/
  flex-basis: auto; /* <-- Por defecto */
  /* 30px | 30% | 3em | 3rem */

  /** Propiedad abreviada de flex-grow, flex-shrink y flex-basis **/
  flex: 0 1 auto; /* <-- Por defecto */

  /** Alinea al elemento en su cross-axis **/
  align-self: auto;
  /* flex-start | flex-end | center | stretch | baseline */
}
```

## Caja en Cuadrícula `display: grid`
El modelo grid permite realizar divisiones en forma de una cuadrícula o como su nombre lo indica, como una grilla. Cada división es un espacio para posicionar los elementos contenidos.

Este modelo es muy usado debido a la versatilidad que tiene para formar diversos diseños como plantilla de una página entera o de secciones más específicas como una galería.

### Propiedades especiales con `grid`
De la misma manera que `flex`, las propiedades especiales para este modelo pueden crear una cuadrícula especificada por la cantidad y tamaño de las filas y columnas, cambiar la dirección de los elementos mostrados, el flujo con el cuál se muestran, la adaptación y la alineación de los elementos.

Dentro del modelo grid también podemos establecer propiedades específicas para el contenedor y sus elementos internos.

#### En el contenedor grid
Cualquier elemento que posea la propiedad `display: grid` actúa como un contenedor grid.

Podemos observar la composición de un contenedor `grid` en la siguiente imagen:

![grid-composition](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/posts/grid-composition.svg)

Se conforma por filas y columnas establecidas en las propiedades del contenedor grid.

Para dividir la cuadrícula se utilizan líneas que separan a las filas y a las columnas, estas líneas empiezan de izquierda hacia la derecha y de arriba hacia abajo con una notación de orden de número 1, que se refiere a la primera línea y así consecutivamente.

El espacio que forman las líneas son llamadas celdas y agrupadas pueden conformar áreas.

```css
.grid-container {
  /** Establece el modelo grid **/
  display: grid;

  /** Indica el tamaño y la cantidad de filas **/
  grid-template-rows: 1fr 1fr;
  /* 20px 20px | 50px auto 20px */

  /** Indica el tamaño y la cantidad de columnas **/
  grid-template-columns: 3fr 3fr;
  /* 13px 26px | 32px auto 43px */

  /** Indica las celdas que conforman un area **/
  grid-template-areas: "header header";
  /* "main sidebar" */

  /** Propiedad abreviada de grid-template-rows, grid-template-columns y grid-template-areas **/
  grid-template: 30px 60px / 50px 1fr;
  /* "one one one" 40px */

  /** Define el espacio entre las filas **/
  row-gap: 13px;

  /** Define el espacio entre las columnas **/
  column-gap: 26px;
  
  /** Propiedad abreviada de row-gap y column-gap **/
  gap: 13px 26px;

  /** Alinea horizontalmente a los elementos **/
  justify-items: start;
  /* center | end | stretch */

  /** Alinea verticalmente a los elementos **/
  align-items: start;
  /* center | end | stretch | baseline */

  /** Propiedad abreviada de align-items y justify-items **/
  place-items: start end;

  /** Alinea a todo el contenido de grid en el eje horizontal**/
  justify-content : start;
  /* center | end | stretch | space-around | space-between | space-evenly */

  /** Alinea a todo el contenido de grid en el eje vertical**/
  align-content : start;
  /* center | end | stretch | space-around | space-between | space-evenly */

  /** Propiedad abreviada de align-content y justify-content **/
  place-content: center end;

  /** Establece de manera automática las dimensiones de las filas que se crean según el tamaño establecido**/
  grid-auto-rows: 60px;

  /** Establece de manera automática las dimensiones de las filas que se crean según el tamaño establecido**/
  grid-auto-columns: 60px;

  /** Coloca automáticamente a los elementos dentro del contenedor **/
  grid-auto-flow: row;
  /* column */

  /** Propiedad abreviada de grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns y grid-auto-flow **/
  grid: 300px 600px / 30px 60px;
  /* auto-flow / 23px 30px 1fr */
}
```

#### En los elementos de grid (grid-items)
Los elementos dentro de un contenedor con la propiedad `display: grid` actúan como grid-items.

```css
.grid-item {
  /** Indica el inicio de la posición del elemento en las filas **/
  grid-row-start: 1; /* | first <-- Nombre establecido a una posición */

  /** Indica el final de la posición del elemento en las filas **/
  grid-row-end: 3; /* | four <-- Nombre establecido a una posición */

  /** Indica el inicio de la posición del elemento en las columnas **/
  grid-column-start: 1; /* | first <-- Nombre establecido a una posición */

  /** Indica el final de la posición del elemento en las columnas **/
  grid-column-end: 2; /* | col2 <-- Nombre establecido a una posición */

  /** Propiedad abreviada de grid-column-start y grid-column-end**/
  grid-column: 6 / span 3; /* Toma 3 espacios desde la línea 6*/

  /** Propiedad abreviada de grid-row-start y grid-row-end**/
  grid-column: 3 / 6;

  /** Asigna un nombre de area al elemento | Propiedad abreviada de grid-row-start, grid-column-start, grid-row-end, grid-column-end **/
  grid-area: header; /* | 1 / 3 / span 2 / 6 */

  /** Alinea al elemento en el eje horizontal **/
 justify-self: start; /* | center | end | stretch */

  /** Alinea al elemento en el eje vertical **/
 align-self: start; /* | center | end | stretch */

  /** Propiedad abreviada de align-self y justify-self **/
 place-self: start center; /* | stretch end */
}
```
