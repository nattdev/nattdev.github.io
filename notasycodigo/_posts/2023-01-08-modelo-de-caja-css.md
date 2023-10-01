---
layout: post
title: Modelo de Caja o Box Model
category: "Bases CSS"
---

El modelo de caja o también llamado Box Model es una característica de CSS que consiste en una caja alrededor de cada elemento HTML.

Cada caja tiene **características que definirán el comportamiento** de un elemento dentro de una web.

## Partes del Modelo Caja

### Content
Es el **contenido del elemento**, pueden ser caracteres o una imagen. Puede modificarse con las propiedades `display`, `width`, `height`.

```html
<p>Este es el contenido del elemento p</p>
<img src="contenido.jpg"/> <!-- La imagen contenido.jpg que se muestra es el contenido del elemento img -->
```

### Padding
El padding es el **área que rodea al contenido**, se muestra de forma transparente. Puede modificarse con la propiedad `padding`.

### Border
Es el **borde que rodea el área del padding**, puede modificarse en grosor, color y estilo con la propiedad `border`.

### Margin
Es el área más externa, el que separa al elemento de otros y es el **espacio que rodea el borde**, se muestra de forma transparente al igual que el padding. Puede modificarse con la propiedad `margin`.

![box-model](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/posts/box-model.svg)

## Comportamiento predeterminado
Cada elemento HTML tiene un comportamiento predefinido, y podemos observarlo en su propiedad `display`.

### Elementos bloque o `block`
Estos elementos toman **todo el ancho** de la pantalla, y su altura es definida por el contenido.
- Es el caso de los elementos `div`, `main` o `section`, tienen la propiedad `display` con el valor `block`.

### Elementos en línea o `inline`
Estos elementos toman solo el ancho y el alto necesario que **ocupa el contenido**.
- Es el caso de los elementos `a`, `span`, `em`, `strong`, tienen la propiedad `display` con el valor `inline`.

## Visualización interna y externa
Los elementos también pueden tener una disposición diferente cuando toman el valor `flex` o `grid`. La forma en que se posicionan los elementos dentro de ellos cambia.

### Display flex
Los elementos con display `flex`, actúan como contenedores y su **visualización externa es de tipo `block`**, mientras que su **visualización interna** es decir la forma en que se ordenan los elementos dentro, **se establece en tipo `flex`**, estableciendo a los elementos que se posicionen uno tras otro, tomando el ancho minimo de su contenido.

![flex-template](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/posts/flex-template.svg)

### Display grid
El mismo comportamiento se aplica con el valor `grid` de la propiedad `display`, la **visualización externa es de tipo `block`**, mientras que la **visualización interna toma el valor de `grid`**, dando a los elementos la disposición dentro de una grilla.

![grid-template](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/posts/grid-template.svg)

## Modelo de Caja Estándar y Alternativo
Los navegadores usan de manera predeterminada el modelo de caja estándar que toma como el ancho total solo al tamaño del contenido, aplicando la propiedad `display` con el valor `content-box`.

El modelo de caja alternativo no solo toma el tamaño del contenido, sino que también suma el tamaño del relleno (padding) y el tamaño del borde (el grosor), en el cálculo del tamaño total, esto se puede aplicar con la propiedad `display` y el valor `border-box`.
