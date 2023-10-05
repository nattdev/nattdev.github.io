---
layout: post
title: Utilidad del Selector Universal (*)
category: "Bases CSS"
---
El selector universal es una parte importante de CSS, selecciona a cualquier elemento y puede ser utilizado en diferentes situaciones.

Dentro de los tipos de selectores, tales como selectores de tipo, Id, clase, y de atributo, encontramos también al selector universal. Estos **definen que reglas CSS se aplican** a determinados elementos.

## Sintaxis
El selector utiliza un asterisco `*` para formar una regla CSS que implementará los estilos a todos los elementos sin importar el tipo de estos.

```css
* { 
/** Propiedades dadas a todos los elementos de la página**/
}
```
Si se utiliza en combinación con otros selectores, seleccionará a todos los elementos según el uso del combinador o tipo de selector.

```css
*::after, *::before {} /** Selecciona a los pseudoelementos after y before de todos los elementos **/
.first-class * {} /** Selecciona a todos los elementos dentro de una clase llamada first-class**/
.red-text + * {} /** Selecciona a todos los elementos que sean hermanos adyacentes de una clase red-text**/
```
## Utilidades
Utilizamos al selector universal en diferentes situaciones:

### Estilos Globales
Cuando queremos **establecer un estilo global** a todos los elementos de una página web, como aplicar un estilo de fuente específico.

### Resetear Estilos
Para eliminar los estilos predeterminados de los navegadores, **establecemos nuevos valores** para comenzar con un estilo de página nuevo. Esto garantiza que la página tenga una apariencia consistente en todos los navegadores.

```css
*, *::before, *::after {
  margin: 0; /** Resetea el margen de todos los elementos **/
  padding 0; /** Resetea el padding de todos los elementos **/
  box-sizing: border-box; /** Resetea el modelo de caja a border-box. **/
}
```

### Depuración
Una manera útil de **encontrar problemas en la maquetación** de una página es utilizando el selector universal y aplicando estilos que nos permitan visualizar el problema.

Usamos la propiedad `border` para observar a los contenedores alrededor de todos los elementos.
```css
* { border: 1px solid red; }
```
