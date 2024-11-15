---
layout: post
title: Resolviendo Simple Array Sum TypeScript
category: "Hacker Rank TypeScript"
---

El desafío Simple Array Sum es una forma de practicar cómo **iterar sobre un arreglo y realizar operaciones con sus elementos**. Te enseña a validar condiciones dentro del arreglo, como asegurarte de que los números estén dentro de un rango específico (1 a 1000), y a manejar posibles errores al procesar datos.


## Código resuelto:
```ts
'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar: number[]): number {
    // Write your code here
    if (ar.length < 0 && ar.length >= 1000) {
        console.log("Array length out of range");
        return 0;
    }

    let totalSum: number = 0;

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > 0 && ar[i] <= 1000) {
            totalSum += ar[i];
        } else {
            console.log("Number out of range:", ar[i]);
            return 0;
        }
    }
    return totalSum;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const arCount: number = parseInt(readLine().trim(), 10);

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result: number = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}
```

## Explicación del código:

- ### Función `simpleArraySum`  

Esta función recibe un array de números como argumento y devuelve un valor tipo número.

Establecemos la condición para la restricción, el tamaño del array recibido es **mayor a 0 y menor igual que 1000**.

Se declara la variable `totalSum` para acumular la suma de todos los numeros del array.

Se utiliza el bucle `for` para iterar sobre cada número del array e ir sumándolos y guardar el resultado en la variable `totalSum`.

Se aplica la restricción establecida en el problema para cada elemento del array, **mayor a 0 y menor igual que 1000**,

Al terminar el ciclo `for` se retorna el valor numérico de la variable `totalSum`, caso contrario muestra un mensaje en consola con el error encontrado y retorna el valor `0.`

```ts
function simpleArraySum(ar: number[]): number {
    // Write your code here
    if (ar.length < 0 && ar.length >= 1000) {
        console.log("Array length out of range");
        return 0;
    }

    let totalSum: number = 0;

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > 0 && ar[i] <= 1000) {
            totalSum += ar[i];
        } else {
            console.log("Number out of range:", ar[i]);
            return 0;
        }
    }
    return totalSum;
}
```