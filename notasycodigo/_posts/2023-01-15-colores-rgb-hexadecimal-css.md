---
layout: post
title: Determinar Colores con RGB y Hexadecimal
category: "Bases CSS"
---

Los colores son esenciales dentro del diseño web, permiten la personalización del texto y los elementos HTML según las sensaciones que se quieran obtener a través de ellos.

Para especificar colores en CSS, usamos el modelo RGB junto a la notación Hexadecimal.

## El modelo RGB
Representa los elementos de Red(R), Green(G) y Blue(B), que se definen con un valor numerico entero entre 0 y 255 determinando la intensidad del color.
También pueden representarse con valores porcentuales, pero no pueden mezclarse.

``` rgb(50%, 20%, 55) /* No es válido */ ```

### Canal Alpha

Se puede proporcionar un elemento adicional llamado "Alpha"(A), que es un canal que especifica la opacidad de color mediante los valores decimales de 0 para totalmente transparente entre 1 para opaco.

### Sintaxis
Usamos la notación funcional que se representa con la siguiente estructura: ``` rgb(R, G, B) ```

```css
color: rgb(0, 0, 0); /* Sin intensidad de color - Negro */
color: rgb(255, 255, 255); /* Intensidad de color - Blanco */
color: rgba(255, 0, 0, 0.5); /* Color Rojo intenso con 0.5 de opacidad */
color: rgba(0, 255, 0, 1); /* Color Verde intenso con 1 de opacidad */
color: rgba(0, 0, 255, 0); /* Color Azul intenso con 0 de opacidad */
```

## La notación Hexadecimal
Los colores se definen mediante el modelo RGB, en un código hexadecimal que se representa mediante caracteres que van desde el `0` al `9` y de `A` hasta la `F`. Siendo `0` el valor con menor intesidad y `F` el de mayor intensidad.

## Sintaxis
Se utiliza un numeral `#` antes de todos los caracteres. Podemos representar los colores con una notación de tres dígitos o una de seis. Cada dígito o cada par de dígitos define cada color del modelo RGB.

` #RGB o #RGBA o #RRGGBB o #RRGGBBAA`

```css
color: #000; /* Sin intensidad de color - Negro */
color: #00000;
color: #fff; /* Intensidad de color - Blanco */
color: #fffff; 
color: #f008; /* Color Rojo intenso con 0.5 de opacidad */
color: #0f0f; /* Color Verde intenso con 1 de opacidad */
color: #00f0; /* Color Azul intenso con 0 de opacidad */
```
