---
layout: post
title: ¿Cuándo usar for, filter, reduce, map o forEach?
category: "Bases JavaScript"
---

En JavaScript, hay varias formas de recorrer y manipular arrays, pero elegir la correcta puede ser confuso. Aquí te explico cada opción, sus usos principales y cuándo elegir una sobre otra.

## for: La opción clásica y flexible
Un bucle que te da control total para iterar sobre un array o cualquier estructura repetitiva.

### Cuándo usarlo
- Cuando necesitas máxima flexibilidad.
- Si quieres romper (detener) el bucle antes de recorrer todos los elementos.
- Al trabajar con estructuras no iterables como objetos.  

Ejemplo:
```javascript
const numeros = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log(suma); // 15
```

## forEach: Ideal para realizar acciones por cada elemento
Un método que ejecuta una función para cada elemento de un array.

### Cuándo usarlo
- Cuando solo necesitas recorrer un array.
- Si no necesitas modificar el array original o generar un nuevo array.  
  
Ejemplo:
```javascript
const frutas = ["manzana", "plátano", "naranja"];
frutas.forEach(fruta => console.log(fruta));
// manzana
// plátano
// naranja
```

## map: Para transformar datos
Crea un nuevo array aplicando una función a cada elemento del array original.

### Cuándo usarlo
- Cuando necesitas un nuevo array con elementos transformados.
- Para operaciones como multiplicar, formatear cadenas o mapear datos.  
  
Ejemplo:
```javascript
const numeros = [1, 2, 3];
const cuadrados = numeros.map(num => num ** 2);
console.log(cuadrados); // [1, 4, 9]
```

## filter: Para quedarte con datos específicos
Crea un nuevo array con los elementos que cumplen una condición.

### Cuándo usarlo
- Cuando necesitas filtrar elementos de un array.
- Para trabajar con datos como listas o colecciones.  
  
Ejemplo:
```javascript
const edades = [12, 18, 25, 30];
const mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad); // [18, 25, 30]
```  

## reduce: Para acumular valores
Reduce un array a un único valor aplicando una función acumulativa.

### Cuándo usarlo
- Para sumar, concatenar o realizar cálculos complejos sobre un array.
- Cuando necesitas combinar los elementos en un único resultado.  
  
Ejemplo:
```javascript
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 10
```

## Otras opciones
### some y every: Comprobación de condiciones
- **some:** Retorna true si al menos un elemento cumple una condición.  
  
```javascript
const numeros = [1, 3, 5];
console.log(numeros.some(num => num % 2 === 0)); // false
```  

- **every:** Retorna true si todos los elementos cumplen una condición.  
  
```javascript
console.log(numeros.every(num => num > 0)); // true
```

### find y findIndex: Buscar elementos
- **find:** Encuentra el primer elemento que cumple una condición.  
  
```javascript
const numeros = [5, 10, 15];
console.log(numeros.find(num => num > 8)); // 10
```  

- **findIndex:** Retorna el índice del primer elemento que cumple la condición.

## ¿Cómo elegir la opción correcta?
- **Transformar datos:**
Quieres una lista de precios con impuestos añadidos. Usa `map` para crear un nuevo array donde cada precio esté actualizado.
  
```javascript
const precios = [100, 200, 300];
const preciosConImpuesto = precios.map(precio => precio * 1.15);
console.log(preciosConImpuesto); // [115, 230, 345]
```
- **Filtrar elementos:**
Necesitas una lista solo con los productos disponibles en stock. Usa `filter` para quedarte con los que tienen más de 0 unidades.
  
```javascript
const productos = [{ nombre: "A", stock: 0 }, { nombre: "B", stock: 10 }];
const disponibles = productos.filter(producto => producto.stock > 0);
console.log(disponibles); // [{ nombre: "B", stock: 10 }]
```
  
- **Acumular un resultado:**
Quieres sumar todas las ventas del día. Usa `reduce` para acumular el total.
  
```javascript
const ventas = [50, 100, 150];
const total = ventas.reduce((suma, venta) => suma + venta, 0);
console.log(total); // 300
```

- **Realizar acciones sin modificar el array:**
Quieres mostrar los nombres de los estudiantes en consola. Usa `forEach` para recorrerlos e imprimir cada uno.

```javascript
const estudiantes = ["Ana", "Luis", "María"];
estudiantes.forEach(estudiante => console.log(estudiante));
// Ana
// Luis
// María
```

- **Comprobaciones lógicas:**
Quieres saber si hay números negativos en un array. Usa `some` para verificar si al menos uno cumple la condición.

```javascript
const numeros = [1, 2, -3, 4];
console.log(numeros.some(num => num < 0)); // true
```

O si, necesitas comprobar si todos los números son mayores a 0. Usa `every`.

```javascript
console.log(numeros.every(num => num > 0)); // false
```

- **Flexibilidad total:**
Quieres sumar solo los números pares en un array. Usa un bucle `for` para verificar la condición y sumar los valores.

```javascript
const numeros = [1, 2, 3, 4];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) suma += numeros[i];
}
console.log(suma); // 6
```