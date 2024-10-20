---
layout: post
title: Cómo CORS Protege tus Aplicaciones Web
category: "Desarrollo De Software"
---

Cuando se trabaja en el desarrollo web, es común que una aplicación web necesite comunicarse con un servidor para obtener datos o recursos. Sin embargo, por razones de seguridad, los navegadores aplican una política conocida como **CORS** (Cross-Origin Resource Sharing). En este artículo, exploraremos qué es CORS, por qué es importante, y cómo configurarlo correctamente.

## ¿Qué es CORS?

CORS es un mecanismo de seguridad que permite a los servidores controlar cómo y cuándo los recursos de un origen (dominio) pueden ser solicitados desde otro origen. La política CORS define un conjunto de reglas que el navegador sigue para determinar si una solicitud de recursos de un origen diferente debe ser permitida o no.

### Orígenes

Un "origen" en el contexto web está definido por el esquema (http o https), el dominio (ejemplo.com), y el puerto (80, 443, etc.). Dos URLs pertenecen al mismo origen si tienen exactamente el mismo esquema, dominio y puerto.

Por ejemplo:
- `https://miapp.com` y `https://miapp.com:443` son el mismo origen.
- `https://miapp.com` y `http://miapp.com` son orígenes diferentes.
- `https://miapp.com` y `https://api.miapp.com` son orígenes diferentes.

## La Política de CORS

Cuando un navegador realiza una solicitud a un servidor que tiene un origen diferente, este envía una **solicitud CORS**. El servidor puede responder a esta solicitud especificando qué orígenes están permitidos para acceder a sus recursos.

### Encabezados CORS Comunes

1. **Access-Control-Allow-Origin**: Indica qué orígenes tienen permiso para acceder al recurso. Puede ser un origen específico (ej. `https://miapp.com`) o el asterisco (`*`) para permitir todos los orígenes.
   
2. **Access-Control-Allow-Methods**: Especifica qué métodos HTTP (GET, POST, PUT, DELETE, etc.) están permitidos al realizar solicitudes al recurso.

3. **Access-Control-Allow-Headers**: Define qué encabezados pueden ser utilizados en la solicitud.

4. **Access-Control-Allow-Credentials**: Indica si se permiten credenciales (cookies, autenticación HTTP) en las solicitudes.

### Ejemplo de Respuesta CORS

Aquí hay un ejemplo de cómo un servidor puede incluir encabezados CORS en su respuesta:

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://miapp.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type
Access-Control-Allow-Credentials: true
```

## Tipos de Solicitudes CORS

Las solicitudes CORS pueden ser clasificadas en dos tipos: **solicitudes simples** y **solicitudes preflight**.

### Solicitudes Simples

Una solicitud simple se produce cuando se utiliza un método HTTP que no requiere un preflight, como GET o POST con ciertos tipos de contenido. Estas solicitudes son directas y el navegador no realiza una verificación adicional antes de enviar la solicitud.

### Solicitudes Preflight

Cuando se utiliza un método o encabezado que no es simple, el navegador envía primero una solicitud de verificación llamada **preflight**. Esta solicitud utiliza el método OPTIONS para preguntar al servidor si la solicitud real es segura de enviar. El servidor debe responder con los encabezados CORS adecuados para permitir la solicitud real.

```http
OPTIONS /ruta-del-recurso HTTP/1.1
Origin: https://miapp.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
```

## Cómo Configurar CORS

La configuración de CORS puede variar según el servidor que estés utilizando. Aquí te muestro ejemplos para algunos servidores populares:

### Node.js con Express

Para habilitar CORS en una aplicación Node.js usando Express, puedes utilizar el paquete `cors`:

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'https://miapp.com', // Permitir solo este origen
  methods: ['GET', 'POST'], // Métodos permitidos
  credentials: true // Permitir credenciales
}));

app.get('/api/datos', (req, res) => {
  res.json({ mensaje: 'Datos recibidos correctamente' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
```

### Configuración en Apache

Para habilitar CORS en un servidor Apache, puedes añadir las siguientes líneas al archivo `.htaccess`:

```apache
Header set Access-Control-Allow-Origin "https://miapp.com"
Header set Access-Control-Allow-Methods "GET, POST"
Header set Access-Control-Allow-Headers "Content-Type"
```

## Problemas Comunes con CORS

1. **Error de CORS**: Si el servidor no permite el origen de la solicitud, el navegador bloqueará la solicitud y mostrará un error de CORS en la consola.

2. **CORS en Entornos de Desarrollo**: Al desarrollar localmente, es posible que necesites habilitar CORS para tus APIs y aplicaciones front-end. Esto puede hacerse temporalmente en la configuración del servidor o utilizando extensiones de navegador que deshabilitan CORS.