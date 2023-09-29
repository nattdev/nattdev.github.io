---
layout: post
title: Selección de Elementos Anidados CSS
category: "Bases CSS"
---
Hay varias opciones al momento de realizar una selección de elementos anidados con CSS. Los selectores junto con los combinadores forman selectores compuestos que nos permiten identificar elementos de forma más precisa.

## Selector con descendiente
Selecciona los descendientes, es decir los elementos que tienen por **padre al mismo elemento**. 

Se escribe el nombre de el elemento o su selector que lo identifique que sea el padre de los elementos anidados `div` seguido de un espacio en blanco ` ` o `>>` que funciona como combinador y luego el nombre de los elementos anidados que se seleccionan `p`.

Sintaxis completa `div p` (Selecciona todos los elementos `p` dentro del elemento `div` que actúa como padre).

Se pueden utilizar variaciones al momento de seleccionar un elemento.
- Selector de clase con descendiente `.div-class p`.
- Selector de etiqueta con descendiente `div p`.
- Selector de id con descendiente `#div-id p`.
- Selector de attributo con descendiente`div[att=valor] p`

## Combinadores de Selectores
Los combinadores son **signos, o caracteres especiales** que **aumentan la especificación del selector** al momento de seleccionar elementos.

### Elementos anidados directos o hijos directos
El combinador `>` selecciona específicamente a los elementos que sean **hijos descendientes directamente del padre**.
`.first-section > .section` selecciona a todos los elementos con clase`.section` que sean hijos directos de el elemento con clase `.first-section`, no deben de ser contenidos por otro elemento distinto al que se refiere.
```html
<div class="first-section"> <!-- Elemento Padre -->
    <div class="section section-one">1</div> <!-- Elemento Seleccionado -->
    <div class="section section-two">2</div> <!-- Elemento Seleccionado -->
    <div class="section-three">3
        <div class="section sub-section">3.1</div>
        <div class="section sub-section">3.2</div> 
</div>
```

### Elementos anidados que sean hermanos del mismo padre
Con la ayuda del combinador `~` se seleccionan a los elementos que tengan por **padre a un mismo elemento**, sin importar si hay elementos entre ellos.
`.frutas .verde ~ .rojo` selecciona a todos los elementos con clase `.rojo` que sean hermanos del elemento con clase `.verde`.

```html
<div class="frutas"> <!-- Elemento Padre -->
    <div class="verde"></div>
    <div class="rojo"></div> <!-- Elemento Seleccionado -->
    <div class="exoticas">
        <div class="verde"></div>
        <div class="rojo"></div> <!-- Elemento Seleccionado -->
</div>
```

### Elementos anidados que sean hermanos adyecentes
Con la ayuda del combinador `+` se seleccionan elementos que sean **hermanos adyacentes**, es decir que esten **juntos dentro de un mismo padre**.
`.abecedario .a + .b` selecciona a todos los elemento con clase `b` que sean hermanos adyecentes de los elementos con clase `.a` y son descendientes del elemento con clase `.abecedario`.
```html

<div class="abecedario"> <!-- Elemento Padre -->
    <div class="a">1</div>
    <div class="b">2</div> <!-- Elemento Seleccionado -->
    <div class="c">3</div>
        <div>
            <div class="a">4</div>
            <div class="b">5</div> <!-- Elemento Seleccionado -->
        </div>
    <div class="d">6</div>
</div>
```

## Ejemplo Práctico
Tenemos una estructura HTML que contine un elemento `div` con la clase `container`, dentro de él se anidan tres elementos `article` y cada elemento `article` cuenta con un elemento `h2` y dos elementos `p`.
```html
<div class="container" data="main">
    <article class="first">
        <h2>Title first article</h2>
        <p>Article text</p>
        <p>Article text</p>
    </article>
    <article class="second">
        <h2>Title second article</h2>
        <p>Article text</p>
        <p>Article text</p>
    </article>
    <article class="third">
        <h2>Title third article</h2>
        <p>Article text</p>
    </article>
</div>
```
### Selección de elementos `article`
- `div article` (selectores de etiqueta)
- `div[data=main] article` (selector de atributo y descendiente de tipo)
- `div > article` (selector de etiqueta con combinador de hijos directos)
- `first, second, third` (agrupamiento de selectores de etiqueta o tipo)

### Selección de elementos `p`
- `p` (selector de etiqueta o tipo)
- `article p` (selector de etiqueta con descendiente)
- `article > p` (combinador de hijos directos)

### Seleccion de elemento `p` adyacente a `h2`
- `h2 + p` (combinador de hermano adyacente)
