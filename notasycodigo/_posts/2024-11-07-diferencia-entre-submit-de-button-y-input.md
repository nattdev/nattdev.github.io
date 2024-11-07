---
layout: post
title: Diferencia entre button y input como tipo "submit"
category: "Desarrollo De Software"
---

En HTML, un `<button type="submit">` y un `<input type="submit">`cumplen la misma función principal: ambos se utilizan para enviar un formulario cuando se hace clic en ellos. Sin embargo, hay diferencias en términos de flexibilidad y estilo.

## Flexibilidad en el Contenido y Estilos

- `<button type="submit">`: Permite incluir contenido más complejo, como texto, imágenes o íconos dentro del botón. También es más flexible en cuanto a estilos y diseño.
html

```html
<button type="submit">
  <img src="icon.png" alt="Icono"> Enviar
</button>
```

- `<input type="submit">`: Es un elemento autónomo sin posibilidad de incluir contenido adicional. Su texto se define en el atributo value, y no puede contener HTML adicional como imágenes o íconos.

```html
<input type="submit" value="Enviar">
```

## Compatibilidad con Javascript y Control de Eventos

- `<button type="submit">`: Al ser más flexible, el `<button>` permite asignar eventos de JavaScript personalizados de manera directa, lo que puede facilitar interacciones más complejas.

- `<input type="submit">`: Aunque también permite asociar eventos, es menos común personalizarlo para interacciones avanzadas en JavaScript.

## Estilización Predeterminada

- `<button type="submit">`: Puede heredar estilos más personalizados, ya que es más compatible con CSS avanzado.
- `<input type="submit">`: Tiene un estilo más básico que puede ser más difícil de personalizar en algunos casos.

## Compatibilidad en Navegadores Antiguos
-  En algunos navegadores antiguos, `<button>` puede generar problemas si se usa dentro de formularios, ya que algunos navegadores interpretan `<button>` como tipo button por defecto en lugar de submit. Sin embargo, esto es menos relevante con los navegadores modernos.

- Generalmente, `<input>` es compatible con la mayoría de los navegadores sin problemas.