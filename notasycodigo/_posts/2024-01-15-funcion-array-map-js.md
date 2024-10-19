---
layout: post
title: La función ARRAY.map()
category: "Bases JavaScript"
---

Nos permite iterar sobre un arreglo y modificar sus elementos utilizando una funcion callback. Esta funcion se ejecuta en cada uno de los elementos obteniendo nuevos valores.

```js
// Metodo tradicional
let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 3;
}

console.log(arr); // [9, 12, 15, 18]

// Con el metodo Array.map()
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);

```
