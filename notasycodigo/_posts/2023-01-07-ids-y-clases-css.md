---
layout: post
title: Selectores de Ids y Clases
category: "Bases CSS"
---
Con los selectores de Id y de clase podemos aplicar estilos a elementos específicos de una página web.

## Selector de Id
Selecciona elementos por el valor de su **atributo `id`** , este valor actúa como un **identificador único** para cada elemento que lo posee. Solo puede haber un elemento con un id específico.

El elemento en HTML se identifica con el atributo `id` seguido del valor del atributo. La sintaxis completa es `ìd="valor-de-id"`.

El siguiente ejemplo cuenta con dos selectores Ids:
- seccion1 (Se encuentra en el primer elemento `section`)
- seccion2 (Se encuentra en el segundo elemento `section`)

```html
<!-- index.html -->
<main>
    <section id="seccion1">
        <h2>Titulo de la Sección 1</h2>
         <p>Contenido de la sección 1</p>
    </section>
    <section id="seccion2">
        <h2>Titulo de la Sección 1</h2>
         <p>Contenido de la sección 1</p>
    </section>
</main>
```

Los selectores Ids empiezan con el caracter numeral `#` y luego el valor de su atributo `id`.
```css
/*** styles.css ***/
#seccion1 {
    color: red; /* Aplica el color rojo al texto */
}

#seccion2 {
    color: blue; /* Aplica el color azul al texto */
}
```

## Selector de clase
Selecciona elementos que posean el mismo valor de su **atributo `class`**. Un elemento puede tener varias clases, y varios elementos pueden tener la misma clase.

Para indentificar un elemento HTML con el selector de clase, este usa el atributo `class` seguido del valor especificado.
La sintaxis completa es `class="nombre-de-clase"`.

El siguiente ejemplo cuenta con tres selectores de clase:
- title-red (Se encuentra en los elementos `h2`)
- text-bold (Se encuentra solo en los primeros elementos `p`)
- text-blue (Se encuentra en todos los elementos `p`)

```html
<!-- index.html -->
<main>
    <section id="seccion1">
        <h2 class="title-red">Titulo de la Sección 1</h2>
         <p class="text-bold text-blue">Primer párrafo de la sección 1</p>
         <p class="text-blue">Segundo párrafo de la sección 1</p>
         <p class="text-blue">Tercer párrafo de la sección 1</p>
    </section>
    <section id="seccion2">
        <h2 class="title-red">Titulo de la Sección 1</h2>
         <p class="text-bold text-blue">Primer párrafo de la sección 2</p>
         <p class="text-blue">Segundo párrafo de la sección 2</p>
    </section>
</main>
```

Los selectores de clase se identifican con un punto al inicio `.` seguido del nombre de su clase.
```css
/*** styles.css ***/
.title-red {
    color: red; /* Aplica el color de texto rojo */
}

.text-bold {
    font-weight: bold; /* Aplica el formato del texto negrita */
}

.text-blue {
    color: blue; /* Aplica el color de texto azul */
}
```
