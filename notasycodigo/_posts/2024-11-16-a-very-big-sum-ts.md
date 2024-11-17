---
layout: post
title: Resolviendo A Very Big Sum TypeScript
category: "Hacker Rank TypeScript"
---

El desafío A Very Big Sum te enseña a trabajar con la **suma de elementos en un arreglo, considerando números enteros muy grandes**.

Este problema refuerza habilidades como iterar sobre un arreglo, manejar operaciones aritméticas con datos que pueden superar los límites habituales de representación en algunos lenguajes, y garantizar la precisión en los cálculos.

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
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar: number[]): number {
    // Write your code here
    if (ar.length >= 1 && ar.length <= 10) {
        let totalSum = 0;
        for (let i = 0; i < ar.length; i++) {
            if (ar[i] >= 0 && ar[i] <= 10 ** 10) {
                totalSum += ar[i];
            } else {
                console.log("Number out of range: " + ar[i]);
                return 0;
            }
        }
        return totalSum;
    } else {
        console.log("Array lenght Out of Range");
        return 0;
    }
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const arCount: number = parseInt(readLine().trim(), 10);

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result: number = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}
```

## Explicación del código:

- ### Función `aVeryBigSum`  

Esta función recibe un array de números como parámetro y devuelve un valor tipo número.

Establecemos la condición para la restricción, el tamaño del array recibido es **mayor igual a 1 y menor igual que 10**, caso contrario se muestra en la consola un mensaje del error, y retorna el valor `0`.

Se declara la variable `totalSum` para acumular la suma de todos los elementos del array.

Se utiliza el bucle `for` para iterar sobre cada número del array e ir sumándolos y guardar el resultado en la variable `totalSum`.

Se aplica la restricción establecida en el problema para cada elemento del array, **mayor igual a 0 y menor igual que 10 elevado a 10**, si no se cumple esta condición se muestra un mensaje `Number out of range: [Número no permitido]` y retorna el valor `0`

Al terminar el ciclo `for` se retorna el valor numérico de la variable `totalSum`.

```ts
function aVeryBigSum(ar: number[]): number {
    // Write your code here
    if (ar.length >= 1 && ar.length <= 10) {
        let totalSum = 0;
        for (let i = 0; i < ar.length; i++) {
            if (ar[i] >= 0 && ar[i] <= 10 ** 10) {
                totalSum += ar[i];
            } else {
                console.log("Number out of range: " + ar[i]);
                return 0;
            }
        }
        return totalSum;
    } else {
        console.log("Array lenght Out of Range");
        return 0;
    }
}
```

### Funciones, Métodos y Propiedades

- **Propiedad `lenght`**
Devuelve la cantidad de elementos en el arreglo.

- **Función `console.log`**
La función console.log es una utilidad de depuración que permite imprimir mensajes o valores en la consola.

- **Operador de Potencia `**`**
Eleva un número a una potencia específica.
`10 ** 10`

- **Declaraciones de Control: `if, else, y return`**
Se utilizan para evaluar condiciones específicas y definir el flujo del programa. `return` detiene la ejecución de la función y devuelve un valor.

