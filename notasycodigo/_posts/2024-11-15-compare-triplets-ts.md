---
layout: post
title: Resolviendo Compare the Triplets TypeScript
category: "Hacker Rank TypeScript"
---

El desafío Compare the Triplets te **enseña a trabajar con comparaciones entre elementos de dos listas, evaluando cada par de valores según criterios específicos.** Este problema refuerza habilidades clave como iterar sobre arreglos, aplicar condiciones para asignar puntuaciones y manejar estructuras de datos simples. 


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
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a: number[], b: number[]): number[] {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] >= 1 && a[i] <= 100 && b[i] >= 1 && b[i] <= 100) {
            if (a[i] > b[i]) {
                aliceScore++;
            } else if (a[i] < b[i]) {
                bobScore++;
            }
        } else {
            console.log("Number out of range");
            return [0, 0];
        }
    }
    return [aliceScore, bobScore];
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b: number[] = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result: number[] = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

```

## Explicación del código:

- ### Función `compareTriplets`  

Está función recibe como parámetros dos arreglos con valores numéricos, y retorna el mismo tipo de valor.

Primero se declaran e inicializan las variables `aliceScore` y `bobScore` para acumular el puntaje según la evaluación.

Se utiliza un bucle `for` que itera tantas veces como elementos tenga el array `a`, permitiendo procesar cada elemento individualmente.

Se aplica la condición para la restricción de cada uno de los valores dentro de los arrays `a` y `b`, los valores deben estar en el **rango de mayor igual a 1 y menor igual a 100**, en caso contrario la función muestra en consola `Number out of range` `y retorna `[0, 0]`.

Dentro establecemos las condicionales `if`, `else if`. En cada iteración se evaluan los valores y se acumula el score según la condición.

Al terminar el ciclo `for` se retorna el valor de las variables `aliceScore` y `bobScore` dentro de un array.

```ts
function compareTriplets(a: number[], b: number[]): number[] {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] >= 1 && a[i] <= 100 && b[i] >= 1 && b[i] <= 100) {
            if (a[i] > b[i]) {
                aliceScore++;
            } else if (a[i] < b[i]) {
                bobScore++;
            }
        } else {
            console.log("Number out of range");
            return [0, 0];
        }
    }
    return [aliceScore, bobScore];
}
```