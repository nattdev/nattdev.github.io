---
layout: post
title: Estructura básica de una página web en HTML
category: "Bases HTML"
---

Para crear una página web en HTML es importante establecer una estructura sólida que defina su base.

La estructura incluye varios elementos que son esenciales.

### Estructura básica
```html
<!DOCTYPE html> <!-- Declara la versión del documento -->
<html lang="es"> <!-- Etiqueta raíz del documento -->
    <head> <!-- Encabezado de la página -->
    <!-- #### Contenido de head #### -->
    </head>
    <body> <!-- Cuerpo de la página -->
    <!-- #### Contenido de body #### -->
    </body>
</html>
```

### Etiqueta `<!DOCTYPE html>`
La declaración `DOCTYPE` es la primera línea de código en todo documento HTML, esta proporciona información sobre la versión de HTML de la página. 

### Etiqueta `<html>`
Es la etiqueta raíz del documento, con el atributo `lang` se puede especificar el idioma de la página. con el atributo `lang="es"`

### Etiqueta `<head>`
Es el encabezado de página, contiene metadatos, el título de la página y enlaces a hojas de estilo (css) y scripts. Esta información no se visualiza en la página directamente.

Dentro de la etiqueta `head`, encontramos:

```html
<head>
    <meta charset="UTF-8"> <!-- Especifica la codificación de caracteres -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Establece la vista en dispositivos móviles -->
    <title>Título de la página</title>
    <link rel="stylesheet" href="styles.css"> <!-- Enlace a hoja de estilo styles.css -->
    <script src="script.js"></script> <!-- Enlace a script script.js -->
</head> 
```
### Etiqueta `<body>`
Es el cuerpo de la página, contiene varios elementos que crearán la estructura de la página visualmente. Se utiliza el HTML semántico para una mayor accesibilidad y descripción de los contenidos de la página, cada elemento comunica la función de una sección específica de la página.
Todos los elementos que encontramos en body se muestran directamente al usuario.

```html
<body>
    <header> <!-- Encabezado de la página -->
        <h1>Título Principal</h1>
        <nav> <!-- Barra de navegación -->
            <ul>
                <li><a>Sección 1</a></li>
                <li><a>Sección 2</a></li>
                <li><a>Sección 3</a></li>
            </ul>
        </nav>
    </header>
    <main> <!-- Contenido principal de la página -->
        <section id="seccion1"> <!-- Sección 1 -->
            <h2>Subtítulo de la Sección 1</h2>
            <p>Contenido de la sección 1</p>
        </section>
        <section id="seccion2"> <!-- Sección 2 -->
            <h2>Subtítulo de la Sección 2</h2>
            <p>Contenido de la sección 2</p>
        </section>
        <section id="seccion3"> <!-- Sección 3 -->
            <h2>Subtítulo de la Sección 3</h2>
            <p>Contenido de la sección 3</p>
        </section>
    </main>
    <footer> <!-- Pie de página -->
    </footer>
</body>
```
Etiquetas semánticas:
- `<header>` Es el encabezado de una sección o de toda la página.
- `<nav>` Define una sección de navegación que puede ser un menú.
- `<main>` Dentro se coloca el contenido principal de la página.
- `<article>` Se utiliza para contenido independiente, como una publicación de blog o una noticia.
- `<section>` Define el contenido de las secciones.
- `<aside>` Define contenido secundario o relacionado, como las barras laterales.
- `<footer>` Contiene el pie de página de una sección o de toda la página.
