---
layout: post
title: Comprendiendo Fetch API y las Llamadas HTTP en JavaScript
category: "Desarrollo De Software"
---

La **Fetch API** es una funcionalidad de JavaScript que permite hacer llamadas HTTP a servidores y obtener datos sin recargar la página. Esto es útil para trabajar con datos dinámicos, como una lista de productos o el clima actual, que se actualizan en tiempo real. La Fetch API se introdujo en ES6 como una alternativa más moderna y versátil a `XMLHttpRequest`.

### ¿Cómo Funciona la Fetch API?

La Fetch API usa el método `fetch()`, que permite realizar peticiones HTTP, ya sea para obtener datos, enviar información, actualizar o eliminar recursos en un servidor. La estructura básica de `fetch()` es muy simple, y se basa en **promesas** para manejar la respuesta de forma asíncrona.

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

- `fetch(url)`: El método `fetch()` recibe una URL como parámetro.
- `.then(response => response.json())`: Convierte la respuesta en formato JSON.
- `.catch(error => ...)`: Captura cualquier error en la petición.

### Ejemplo Práctico de una Petición GET

Supongamos que tienes una API que devuelve información de películas. Puedes usar `fetch()` para obtener una lista de películas y mostrarlas en tu aplicación:

```javascript
fetch('https://api.ejemplo.com/peliculas')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(pelicula => {
      console.log(`Título: ${pelicula.title}`);
    });
  })
  .catch(error => console.error('Error en la petición:', error));
```

En este caso:
- Primero verificamos si la respuesta es correcta con `response.ok`.
- Luego, si todo está bien, extraemos los datos en JSON y los mostramos en la consola.

### Métodos HTTP con Fetch

La Fetch API es muy versátil y permite realizar peticiones con otros métodos HTTP, como `POST`, `PUT` o `DELETE`. Para ello, basta con agregar un objeto de configuración como segundo parámetro.

#### Ejemplo de Petición POST

Imaginemos que quieres enviar los datos de un nuevo usuario a una API:

```javascript
fetch('https://api.ejemplo.com/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nombre: 'Juan',
    email: 'juan@ejemplo.com'
  })
})
  .then(response => response.json())
  .then(data => console.log('Usuario creado:', data))
  .catch(error => console.error('Error:', error));
```

En este ejemplo:
- `method: 'POST'` especifica el tipo de petición.
- `headers`: Define el tipo de contenido que estamos enviando (en este caso, JSON).
- `body`: Convierte los datos en JSON para enviarlos en el cuerpo de la petición.

### Manejo de Errores en Fetch

Es importante manejar errores en las peticiones, ya que no todas las respuestas son exitosas. Al usar `fetch()`, podemos agregar verificaciones para asegurarnos de que todo esté en orden.

```javascript
fetch('https://api.ejemplo.com/usuarios')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error en la petición:', error));
```

### Códigos de Estado y `response.ok`

El método `fetch()` no lanza un error automáticamente cuando el servidor devuelve un error (como `404` o `500`), así que debemos usar `response.ok` para verificar el estado de la respuesta. Si `ok` es `false`, entonces significa que hubo un error en la respuesta, y podemos manejarlo como queramos.

### Fetch API y Asincronía con `async`/`await`

Con `async` y `await`, puedes escribir peticiones Fetch de manera más clara y fácil de leer, especialmente cuando tienes varias peticiones en cadena.

```javascript
async function obtenerPeliculas() {
  try {
    const response = await fetch('https://api.ejemplo.com/peliculas');
    if (!response.ok) throw new Error('Error en la respuesta');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error en la petición:', error);
  }
}
obtenerPeliculas();
```

### Ventajas de la Fetch API
- **Más Simplicidad**: Su sintaxis es más moderna y fácil de entender en comparación con `XMLHttpRequest`.
- **Basado en Promesas**: Permite un mejor control sobre el flujo asíncrono de datos.
- **Flexible y Personalizable**: Puedes definir headers, métodos, cuerpo, y otras opciones sin demasiada complejidad.