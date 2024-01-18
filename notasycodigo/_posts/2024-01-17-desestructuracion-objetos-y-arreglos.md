---
layout: post
title: Desestructuración de objetos y arreglos
category: "JavaScript"
---

Permite obtener los valores de propiedades o arreglos en diferentes variabes.

```
// Metodo tradicional
let arreglo = [ "a", "b", "c", "d"]

let posicion1 = arreglo[0]
let posicion2 = arreglo[1]

// Con desestructuración
let arreglo = [ "a", "b", "c", "d"];
let [primero, segundo] = arreglo;

// primero es a
// segundo es b

// Se usa la coma para omitir valores de arreglos

let [saludo,,,nombre] = [ "a", "b", "c", "d"];
// saludo es a
// nombre es d

// Asignando el resto a otra variable
let [saludo, ...introduccion] = [ "a", "b", "c", "d"];
//saludo es a
// introduccion es b,c y d

// Desestructuración de Objetos
// Metodo tradicional
let persona = {
    nombre: "Sarah", 
    trabajo: "Desarrollador"
};

let nombre = persona.nombre;
let trabajo = persona.trabajo;

console.log(nombre); // "Sarah"
console.log(trabajo); // "Desarrollador"

// Metodo con desestructuración
let persona = {
    nombre: "Sarah", 
    trabajo: "Desarrollador"
};

let {nombre, trabajo} = persona
```
