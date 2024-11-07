---
layout: post
title: Las APIs y Respuesta a Peticiones
category: "API"
---

**API** significa **Application Programming Interface (Interfaz de Programación de Aplicaciones)**. En pocas palabras, una API es un conjunto de reglas que permite a una aplicación interactuar con otra. Piensa en ella como el "mesero" de los programas: toma tu pedido, lo lleva a la cocina (otra aplicación) y te trae de vuelta lo que pediste.

## Ejemplo: La API de un Restaurante
Imagina que estás en un restaurante y quieres un plato de pasta. El menú te dice qué puedes pedir, pero no tienes acceso directo a la cocina. Aquí es donde entra el mesero, que actúa como una API: toma tu pedido y se lo da a los cocineros, quienes preparan tu comida y se la devuelven al mesero para que te la lleve.

Del mismo modo, una API **permite que una aplicación solicite datos o servicios de otra aplicación** sin saber los detalles internos de cómo funciona.

## Tipos de APIs Más Comunes
Las APIs vienen en diferentes tipos, pero en el desarrollo web, las más comunes son las **APIs RESTful.** Estas APIs funcionan sobre HTTP y son ideales para intercambiar datos en formato JSON, lo que las hace eficientes y fáciles de leer tanto para humanos como para máquinas.

## ¿Cómo Funciona una Petición y una Respuesta en una API?
Cuando una aplicación necesita información o necesita realizar una acción en otra aplicación, envía una **petición** a la API de esa aplicación. La estructura básica de una petición y respuesta se parece a esto:

### Petición HTTP
Enviada desde la aplicación que solicita información.

- **Métodos:**
- `GET`: Para obtener datos.
- `POST`: Para enviar datos.
- `PUT`: Para actualizar datos.
- `DELETE`: Para eliminar datos.

- **Headers:** Contienen información adicional, como autenticación o tipo de contenido.
- **Body:** (Opcional) Contiene datos en formato JSON o XML, especialmente útil en POST o PUT.

### Respuesta HTTP
La API de la otra aplicación devuelve una respuesta que contiene:

- **Código de Estado:** Un número que indica el resultado de la petición (por ejemplo, 200 para éxito, 404 para no encontrado, 500 para error del servidor).

- **Body:** Contiene la respuesta en sí, usualmente en JSON o XML. Por ejemplo, si pedimos información sobre un usuario, el cuerpo puede incluir datos como nombre, correo y dirección.

## Ejemplo Práctico
Imaginemos una app de clima que quiere mostrar la temperatura de tu ciudad. Esta app utiliza una API de clima que responde con los datos que necesita. El proceso se vería así:

**1.** La app de clima hace una **petición GET** a la API del servicio meteorológico, incluyendo en la URL el nombre de tu ciudad.  

**2.** La API recibe la petición, busca los datos del clima actual en su base de datos y envía una **respuesta** en formato JSON que podría ser algo como esto:

```json
{
  "ciudad": "Madrid",
  "temperatura": "20°C",
  "estado": "Soleado"
}
```
**3.** La app de clima recibe la respuesta y muestra la temperatura en pantalla.

## ¿Cúales son los Códigos de Estado Comunes en las Respuestas

- **200 OK :** Respuesta estandar para peticiones correctas.
- **201 Created :** Un recurso fue creado exitosamente (por ejemplo, al agregar un nuevo usuario).
- **202 Accepted :** Aceptada para procesamiento, pero todavía no completada
- **400 Bad Request :** La solicitud contiene sintaxis errónea
- **401 Unauthorized :** La petición no tiene autorización.
- **403 Forbidden :** La solicitud fue legal, pero el servidor se rehusa porque el cliente no tiene privilegios.
- **404 Not Found :** Recurso no encontrado. Cuando el servidor no encuentra la página o recurso solicitado.
- **500 Internal Server Error :** Algo falló en el servidor.

## API Key y Seguridad
Para acceder a algunas **APIs**, necesitas una **API Key**, que es una especie de contraseña que te identifica como usuario autorizado. Las APIs requieren esto para asegurar que solo usuarios autorizados puedan acceder a sus datos o servicios.