---
layout: post
title: Resolviendo Solve Me First TypeScript
category: "Hacker Rank TypeScript"
---

El desafío Solve Me First es un problema básico de suma que implica **escribir una función para sumar dos números enteros y devolver el resultado**. Es ideal para familiarizarse con la sintaxis de la función y la entrada y salida de datos en el entorno de programación.


## Código resuelto:
```ts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function solveMeFirst(a: number, b: number) : number {
    return a + b;
}

function main() {
    let a: number = parseInt(readLine());
    let b: number = parseInt(readLine());

    if (1 >= a && 1 >= b && 1000 <= a && 1000 <= b) {
        let result = solveMeFirst(a, b);
        console.log(result);
    } else {
        console.log("Out of range");
    }
}
```

## Explicación del código:

- ### Función `solveMeFirst`  

Es la función encargada de recibir dos números como parámetros, sumarlos y retornar el resultado de la operación.

```ts
function solveMeFirst(a: number, b: number) : number {
    return a + b;
}
```

- ### Función `main`  

Realiza la lógica principal del ejercicio, usa la función `readLine` para leer los datos de entrada, convertirlos a números con la función `parseInt` y guardarlas en variables `a` y `b`.

Se aplica la restricción del problema, **a y b deben ser mayores iguales a 1 pero menores iguales que 1000**.

Luego declara una variable `result` para guardar el resultado de la función `solveMeFirst` y por último imprime el resultado en consola, caso contrario muestra un mensaje en consola `Out of range`.


```ts
function main() {
    let a: number = parseInt(readLine());
    let b: number = parseInt(readLine());

    if (a >= 1 && b >= 1 && a <= 1000 && b <= 1000) {
        let result = solveMeFirst(a, b);
        console.log(result);
    } else {
        console.log("Out of range");
    }
}
```