---
layout: post
title: Posición de Elementos con la Propiedad position
category: "Bases CSS"
---
El posicionamiento de elementos nos ayuda en la maquetación de una página web. La posición define la ubicación del elemento y el comportamiento en el flujo de la página.

## Sintaxis
Se usa la propiedad `position` con sus valores `static`, `relative`, `absolute`, `fixed`o `sticky`.

```css
/** Modifica la posición del elemento **/
    position: static;
    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;
```
## Position `static`
Es el valor por defecto de la propiedad position, cada elemento creado en un documento HTML posee este valor.

La posición es establecida dentro del flujo normal de la página. El flujo normal está vinculado al orden de aparación de los elementos dentro de una página web y su propiedad display.

![position-static](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/posts/position-static.svg)

## Position `relative`
Se posiciona en el mismo lugar que `static`, la diferencia con `relative` se centra en que puede usar propiedades adicionales que modifican su posición en la página.

Con las propiedades `top`, `right`, `bottom`y `left` podemos mover el elemento a una nueva posición, pero hay que tener en cuenta que, el espacio ocupado por el elemento al inicio de la renderización de la página no se altera.

![position-relative](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/posts/position-relative.svg)

## Position `absolute`
La posición absoluta posiciona al elemento rompiendo el flujo normal de los elementos dentro de una web, y toma como referencia a su elemento padre para su posición inicial.

Al romper el flujo normal, el elemento deja de ocupar el espacio que tenía para sobreponerse al contenido. Al igual que `relative` pueden usarse propiedades adicionales para modificar su posición.

![position-absolute](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/posts/position-absolute.svg)

## Position `fixed`
Los elementos se posicionan de una forma fija tomando como referencia al viewport (área visible de la página web), salen del flujo normal y mantienen su posición incluso cuando se hace scroll a la página.

![position-fixed](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/posts/position-fixed.svg)

## Position `sticky`
Posiciona a los elementos tomando en cuenta la ubicación del scroll, las propiedades adicionales y también toma como referencia a su elemento padre.

Mientras se realiza scroll por la página, el elemento actúa en posición `relative` hasta que llega al lugar indicado en las propiedades adicionales, si tiene la propiedad `top: 5px`, entonces el scroll tiene que llegar hasta 5px por debajo de la posición del elemento padre, y desde ese punto tratar al elemento en una posición fija hasta terminar el tamaño de la altura del elemento padre.

![position-sticky](https://raw.githubusercontent.com/nattdev/nattdev.github.io/main/assets/images/posts/position-sticky.svg)
