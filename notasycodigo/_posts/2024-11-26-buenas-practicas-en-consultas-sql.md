---
layout: post
title: Buenas Prácticas en Consultas SQL
category: "Bases de Datos"
---

El lenguaje SQL es una herramienta poderosa para gestionar bases de datos, pero para aprovecharlo al máximo, **es esencial seguir buenas prácticas que aseguren consultas rápidas, comprensibles y escalables**.

## Nombra tus tablas y columnas de forma clara y consistente
- **Usa nombres descriptivos:** Los nombres deben reflejar claramente el contenido o propósito de la tabla o columna. Por ejemplo:
❌ t1 ➡️ ✅ usuarios
❌ c2 ➡️ ✅ fecha_creacion

- **Evita espacios y caracteres especiales:** Usa _ para separar palabras. Ejemplo: nombre_completo.

- **Establece un estándar:** Decide si usarás nombres en singular o plural (como usuario vs. usuarios) y sé consistente en toda tu base de datos.

## Selecciona solo los datos que necesitas
- Evita usar SELECT * porque puede traer columnas innecesarias, lo que afecta el rendimiento.
Selecciona solo las columnas que vas a usar:
```sql
SELECT nombre, email FROM usuarios;  
```
Esto asegura que solo obtendrás las columnas relevantes.

## Utiliza índices sabiamente
- **Qué son los índices:** Un índice acelera las consultas al permitir búsquedas más rápidas, pero consume espacio y puede ralentizar inserciones o actualizaciones.

### Cuándo usarlos:

- En columnas que se consultan frecuentemente en cláusulas `WHERE`.
- En columnas que se usan para unir tablas con `JOIN`.
- Para claves primarias `(PRIMARY KEY)` o únicas `(UNIQUE)`.
  
Ejemplo para crear un índice:

```sql
CREATE INDEX idx_usuarios_email ON usuarios (email);  
```

## Filtra datos eficientemente
Usa cláusulas `WHERE`, `HAVING` y condiciones adecuadas para reducir los datos que la consulta necesita procesar.

- Ineficiente:
```sql
SELECT * FROM usuarios;  
-- Filtrar manualmente en tu aplicación consume recursos innecesarios  
```
Eficiente:
```sql
SELECT nombre, email FROM usuarios WHERE activo = 1;  
```

## Aplica normalización, pero con cuidado
- **Qué es la normalización:** Es dividir datos en varias tablas para evitar redundancia y mantener la consistencia.

### Ventajas:
- **Reduce duplicación de datos:** Hace que las actualizaciones sean más fáciles y seguras.

## Escribe consultas legibles y mantenibles
- **Usa sangría y espacios:** Esto hace que tus consultas sean más fáciles de leer.
```sql
SELECT nombre, email  
FROM usuarios  
WHERE activo = 1  
ORDER BY fecha_creacion DESC;
```
    
- **Usa comentarios:** Documenta el propósito de consultas complejas.
- 
```sql
-- Seleccionar usuarios activos ordenados por la fecha de creación  
SELECT nombre, email  
FROM usuarios  
WHERE activo = 1  
ORDER BY fecha_creacion DESC;  
```
  

## Aprovecha las funciones incorporadas
SQL tiene funciones útiles para manipular datos directamente en las consultas.

Ejemplo de uso de funciones:
```sql
SELECT UPPER(nombre) AS nombre_mayuscula, COUNT(*) AS total  
FROM usuarios  
WHERE activo = 1  
GROUP BY nombre;  
```
  
## Utiliza transacciones para cambios importantes
Cuando realizas múltiples operaciones que dependen entre sí, usa transacciones para garantizar que todas se ejecuten correctamente o ninguna lo haga.

```sql
BEGIN TRANSACTION;  
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;  
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;  
COMMIT; -- Confirma los cambios  
-- O ROLLBACK si algo falla  
```

## Prueba tus consultas en entornos seguros
Antes de ejecutar una consulta de eliminación o actualización, prueba primero un SELECT con el filtro para asegurarte de que estás afectando los datos correctos.
```sql
-- Verifica los datos a eliminar  
SELECT * FROM usuarios WHERE inactivo = 1;  

-- Ahora puedes eliminarlos  
DELETE FROM usuarios WHERE inactivo = 1;  
```
  
## Monitorea y optimiza el rendimiento
- Si tus consultas son lentas: Usa el comando `EXPLAIN` para entender cómo las ejecuta el DBMS.
Revisa índices y busca formas de simplificar las consultas.
