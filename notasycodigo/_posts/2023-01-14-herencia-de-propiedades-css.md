---
layout: post
title: El Concepto de Herencia de Propiedades
category: "Bases CSS"
---

La herencia dentro de los estilos CSS permite que los elementos anidados o también conocidos como elementos hijos puedan obtener las propiedades de su elemento padre.

En un contexto cotidiano se podría hablar de herencia, como la obtención de algún bien que es transferido de una persona a otra que tenga una relación de por medio.

En el caso de la herencia dentro de CSS, se actúa de la misma manera cuando los elementos que están dentro de otro elemento que puede ser llamado elemento padre o contenedor, **reciben sus propiedades** en algunos casos de **manera automática** y en otros directamente especificados con el **control de la herencia**.

## Conceptos Relacionados con Herencia
Los conceptos como los **estilos en cascada** y la **especificidad** son importantes para complementar el concepto de herencia y entender como se aplican las reglas CSS y evitar los conflictos de estilos.

### Los Estilos en Cascada
Este concepto que viene explicito como parte de las letras CSS (Cascading Style Sheets), indica que los estilos están determinados de una forma que se asemeja a una cascada por **el orden en que se presentan las reglas**.

Si se encuentran dos estilos que se aplican al mismo elemento, y tienen la misma especificidad, por la definición anterior solo se aplicará la que **se posiciona en ultimo lugar**.

En el siguiente ejemplo, tenemos a un elemento `div` con tres clases aplicadas `primero`, `segundo` y `tercero`.

```html
<div class="primero tercero segundo">Posiciones<div>
```
```css
.primero { color: red; }
.segundo { color: green; }
.tercero { color: blue; } 
```
Son tres clases que tienen el mismo nivel de especificidad y se aplican al mismo elemento `div`.
Solo la clase `tercero` se aplica, ya que se encuentra en la última posición de reglas.

### La Especificidad
Cuando se hace uso de los selectores, cada uno de ellos tiene **un valor determinado de especificidad**, este valor es procesado por el navegador , y según la suma de la cantidad y tipo de selectores se calcula un valor que sirve para priorizar reglas CSS encima de otras.

Un selector de etiqueta es menos específico que un selector de clase, y un selector de clase es menos específico que un selector de ID. Podemos entender que cada selector de clase tiene un valor de especificidad distinto y si estos estilos se aplican al mismo elemento, solo **se aplicará el de mayor especificidad sin importar el orden**.

## Controlar la Herencia
Para el contro de la herencia se puede hacer uso de las propiedades universales, estos son valores que pueden ser aceptados por todas las propiedades CSS.

### `inherit`
Establece la **herencia con su elemento padre**. Se usa en casos en donde las propiedades no se heredan automáticamente.

### `initial`
Aplica el valor de la propiedad establecida **por defecto del navegador**.

### `unset`
Restablece la **propiedad a su valor puro**, si no posee herencia actúa como `initial` y en el caso que si la posea como `inherit`.

```css
.padre {
    border: 1px solid black; /* Propiedad de herencia no automática*/
    width: 50%; /* Propiedad de herencia no automática*/
    font-size: 30px; /* Propiedad de herencia automática*/
    background: yellow; /* Propiedad de herencia no automática*/
}

.hijo {
    border: inherit; /* Hereda el border del padre */
    width: inherit; /* Hereda el width del padre */
    font-size: 60px; /* Establece su tamaño de fuente al elemento */
    background: initial; /* Restablece el valor por defecto del navegador */
}

/** Estilo aplicado al hijo **/
.extra-style {
    font-size: unset; /* Restablece a su valor por herencia automática, 30px del padre */
}

```

## Restablecer Todas las Propiedades
La propiedad `all` puede ser útil cuando se quieren borrar los cambios establecidos en los estilos, o cuando se quiere aplicar varias propiedades heredadas a un elemento. 

Se usa la propiedad `all` seguido de los valores:
- `inherit`
- `initial`
- `unset` 
- `revert`, este último revierte las propiedades a sus valores por defecto según el navegador.

## La Propiedad `!important`
En CSS podemos utilizar la declaración `!important` (obsérvese que lleva un signo de interrogación al inicio), se utiliza luego del valor de una propiedad como en `color: white !important`, esto otorga a la propiedad **la especificidad más alta**, sin importar los cálculos de especificidad o el orden de la regla CSS.

```css
/** Todos las reglas son aplicadas a un mismo elemento**/
.clase { background: yellow;  }

#selectorID { background: blue; }

div {   background: green !important; }

.clase#selectorID { background: brown; }
```

En el ejemplo anterior el selector de tipo, que es el menos específico de todos los selectores declarados. Es el selector que toma la especificidad más alta, y es el que se aplica al elemento, un estilo de color de fondo verde.
