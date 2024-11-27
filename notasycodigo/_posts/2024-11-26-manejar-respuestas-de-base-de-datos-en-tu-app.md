---
layout: post
title: Cómo Manejar Respuestas de la Base de Datos en Tu Aplicación
category: "Bases de Datos"
---

Interactuar con una base de datos no solo implica realizar consultas, sino también manejar las respuestas que esta nos devuelve. Saber cómo **tratar los datos correctamente es esencial para crear aplicaciones eficientes y funcionales**.

## Conexión y consulta
Antes de manejar una respuesta, necesitas conectarte a tu base de datos y ejecutar una consulta. Por ejemplo, en Node.js con SQLite:

```js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
        console.error('Error al ejecutar la consulta:', err.message);
    } else {
        console.log('Datos obtenidos:', rows);
    }
});
```

En este ejemplo:

- `rows` es la respuesta que contiene los datos obtenidos de la consulta.
- Si ocurre un error, este se maneja con el bloque `if (err)`.


## Tipos de respuestas comunes
Dependiendo de tu consulta, la respuesta de la base de datos puede variar. Aquí tienes los casos más comunes:

1. **Consulta de datos (SELECT):**
Las consultas SELECT devuelven filas de datos. Estas se suelen manejar como arreglos de objetos en muchos lenguajes:

    ```js
    [
        { id: 1, name: 'Juan', age: 30 },
        { id: 2, name: 'María', age: 25 }
    ]
    ```
  
2. **Inserción de datos (INSERT):**
Al insertar datos, la respuesta puede incluir información como el ID del nuevo registro.

    ```js
    {
        lastInsertRowid: 10
    }
    ```

3. **Actualización y eliminación (UPDATE y DELETE):**
Estas operaciones suelen devolver el número de filas afectadas.

    ```js
    {
        changes: 2
    }
    ```

## Pasos para manejar la respuesta
1. **Validar la respuesta:**
Comprueba si la operación se realizó correctamente.

    ```js
    db.run('DELETE FROM users WHERE id = ?', [userId], function (err) {
        if (err) {
            console.error('Error al eliminar el usuario:', err.message);
        } else if (this.changes === 0) {
            console.log('No se encontró ningún usuario con ese ID.');
        } else {
            console.log('Usuario eliminado correctamente.');
        }
    });
    ```

2. **Transformar los datos:**
A veces, los datos necesitan ser procesados antes de usarlos en tu aplicación. Por ejemplo, convertirlos a un formato específico.

    ```js
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            console.error(err);
        } else {
            const formattedData = rows.map(row => ({
                fullName: `${row.name} (Edad: ${row.age})`
            }));
            console.log('Datos formateados:', formattedData);
        }
    });
    ```

3. **Manejar errores:** 
   Los errores son inevitables, pero se pueden manejar adecuadamente para evitar que tu aplicación falle.

    ```js
    db.all('SELECT * FROM nonexistent_table', (err, rows) => {
        if (err) {
            console.error('Ocurrió un error:', err.message);
        } else {
            console.log(rows);
        }
    });
    ```
  
## Buenas prácticas al manejar respuestas
- **Siempre valida la respuesta:** Asegúrate de que no haya errores y de que los datos sean los esperados.

- **Usa estructuras claras:** Define funciones específicas para manejar datos. Por ejemplo:

    ```js
    function handleUserData(rows) {
        return rows.map(row => ({
            id: row.id,
            name: row.name.toUpperCase()
        }));
    }
    ```

- **Cuidado con los datos sensibles:** Evita mostrar información confidencial en los logs.

- **Usa promesas o async/await:** Hace que el código sea más limpio y fácil de leer.

    ```js
    const getUsers = async () => {
        try {
            const rows = await db.promise().all('SELECT * FROM users');
            console.log('Usuarios:', rows);
        } catch (err) {
            console.error('Error al obtener usuarios:', err);
        }
    };
    ```
