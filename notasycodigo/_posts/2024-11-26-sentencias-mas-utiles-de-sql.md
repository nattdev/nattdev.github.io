---
layout: post
title: Las Sentencias Más Útiles de SQL
category: "Bases de Datos"
---

SQL (Structured Query Language) es el **lenguaje estándar para interactuar con bases de datos relacionales**. Aunque puede parecer complejo al principio, muchas de las tareas más comunes se realizan con un conjunto reducido de sentencias.

## SELECT : Selecciona
Se utiliza para consultar datos de una tabla. Piensa en `SELECT` como un detective que encuentra exactamente lo que necesitas.

Ejemplo:

```sql
SELECT nombre, edad FROM usuarios;
```
- **Traducción:** Dame los nombres y edades de todos los usuarios.
- **Truco Extra:** Usa * si quieres seleccionar todas las columnas:

```sql
SELECT * FROM usuarios;
```

## INSERT INTO : Crear Datos
Sirve para añadir nuevos registros a una tabla. Es como llenar un formulario y enviarlo.

Ejemplo:

```sql
INSERT INTO usuarios (nombre, edad) VALUES ('Ana', 30);
```
- **Traducción:** Añade a "Ana" de 30 años a la tabla de usuarios.

## UPDATE: Actualiza datos
Modifica registros existentes. Úsalo para corregir o actualizar datos.

Ejemplo:
```sql
UPDATE usuarios SET edad = 31 WHERE nombre = 'Ana';
```
- **Traducción:** Cambia la edad de "Ana" a 31.
- **Ojo:** Siempre usa WHERE para evitar cambios masivos no deseados.

## DELETE: Elimina datos
Elimina registros de una tabla. Ten cuidado, porque lo que se borra no se recupera fácilmente.

Ejemplo:
```sql
DELETE FROM usuarios WHERE nombre = 'Ana';
```
- **Traducción:** Borra a "Ana" de la tabla de usuarios.
- **Advertencia:** Sin `WHERE`, ¡puedes borrar todos los datos de la tabla!

## CREATE TABLE: Crear tabla
Crea una nueva tabla en la base de datos. Es como construir un nuevo archivo para guardar información.

Ejemplo:
```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT
);
```
- **Traducción:** Crea una tabla llamada "usuarios" con columnas para ID, nombre y edad.

## DROP TABLE: Eliminar tabla
Elimina completamente una tabla. Úsalo con cuidado, ya que no hay vuelta atrás.

Ejemplo:
```sql
DROP TABLE usuarios;
```
- **Traducción:** Borra la tabla "usuarios" para siempre.

## ALTER TABLE: Añade o elimina columnas
Permite cambiar la estructura de una tabla, como añadir o eliminar columnas.

Ejemplo:
```sql
ALTER TABLE usuarios ADD email VARCHAR(100);
```
- **Traducción:** Añade una columna llamada "email" a la tabla "usuarios".

## WHERE: Filtrar datos
Se usa para especificar condiciones en consultas. Es el colador que filtra los datos según tus necesidades.

Ejemplo:
```sql
SELECT * FROM usuarios WHERE edad > 25;
```
- **Traducción:** Dame los usuarios con más de 25 años.

## ORDER BY: Ordena los datos
Ordena los resultados de una consulta en orden ascendente (ASC) o descendente (DESC).

Ejemplo:
```sql
SELECT * FROM usuarios ORDER BY edad DESC;
```
- **Traducción:** Dame todos los usuarios ordenados por edad de mayor a menor.

## JOIN: Combinar datos
Combina datos de dos o más tablas relacionadas. Es como unir dos piezas de un rompecabezas.

Ejemplo:
```sql
SELECT usuarios.nombre, compras.producto 
FROM usuarios
JOIN compras ON usuarios.id = compras.usuario_id;
```
- **Traducción:** Dame los nombres de los usuarios y los productos que compraron.

## GROUP BY: Agrupar datos
Agrupa datos que comparten características similares y te permite hacer cálculos, como totales.

Ejemplo:
```sql
SELECT edad, COUNT(*) 
FROM usuarios
GROUP BY edad;
```
- **Traducción:** Agrupa a los usuarios por edad y cuéntalos.

## HAVING: Filtrar datos avanzado
Filtra resultados después de agruparlos con GROUP BY.

Ejemplo:
```sql
SELECT edad, COUNT(*) 
FROM usuarios
GROUP BY edad
HAVING COUNT(*) > 1;
```
- **Traducción:** Muéstrame las edades que se repiten más de una vez.

## LIMIT: Restringir salida de datos
Restringe el número de resultados que devuelve una consulta.

Ejemplo:
```sql
SELECT * FROM usuarios LIMIT 5;
```
- **Traducción:** Dame solo los primeros 5 usuarios.
