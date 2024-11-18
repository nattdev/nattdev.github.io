---
layout: post
title: Resolviendo Diagonal Difference TypeScript
category: "Hacker Rank TypeScript"
---

El desafío Diagonal Difference **te enseña a trabajar con matrices bidimensionales**, específicamente a calcular las sumas de las diagonales principal y secundaria. **Aprendes a usar índices para acceder a elementos de las filas y columnas de la matriz**, y a aplicar loops y condiciones para realizar cálculos específicos.

## Código resuelto:
```ts
'use strict';

import { WriteStream, createWriteStream } from "fs";
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

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let absDifference = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for( let j = 0; j < arr.length; j++) {
            if(arr[i][j] < -100 || arr[i][j] > 100) {
                console.log("Number out of range: ", arr[i][j])
                return 0;
            }
        }
        leftDiagonalSum+= arr[i][i];
        rightDiagonalSum+= arr[i][(arr.length - 1) - i];    
        absDifference = Math.abs(leftDiagonalSum - rightDiagonalSum);
    }
    return absDifference;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    let arr: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
```

## Explicación del código:

- ### Función `diagonalDifference`  

Esta función recibe una matriz bidimensional como parámetro y devuelve un valor tipo número.

Primero, declaramos las variables `leftDiagonalSum` y `rightDiagonalSum`, que almacenarán la suma total de los elementos de la diagonal izquierda y la diagonal derecha, respectivamente. También declaramos la variable `absDifference`, que almacenará la diferencia absoluta entre las sumas de las dos diagonales.

Se utiliza un bucle `for` para iterar según el tamaño del array, donde el índice i representa cada fila. Dentro, se crea otro bucle que utiliza el índice j para representar cada columna. Estos dos bucles trabajan en conjunto para recorrer cada elemento del array bidimensional de manera eficiente.

Se aplica la restricción establecida en el problema para cada elemento de la matriz bidimensional, **mayor igual a -100 y menor igual que 1000**, si no se cumple esta condición se muestra un mensaje `Number out of range: [Número no permitido]` y retorna el valor `0`

A lo largo del ciclo, se acumulan las sumas de los elementos de las diagonales izquierda y derecha utilizando el índice `i` para las diagonales. La diagonal izquierda se calcula utilizando el mismo índice para las filas y las columnas `i`, mientras que la diagonal derecha se calcula usando el índice i para las filas y `n - i - 1` para las columnas, donde `n` es el tamaño de la matriz.

Una vez que el ciclo termina, se calcula la diferencia absoluta entre las dos sumas de las diagonales, y este valor se almacena en la variable  `absDifference`.

Finalmente, la función retorna el valor almacenado en `absDifference`.

```ts
function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let absDifference = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for( let j = 0; j < arr.length; j++) {
            if(arr[i][j] < -100 || arr[i][j] > 100) {
                console.log("Number out of range: ", arr[i][j])
                return 0;
            }
        }
        leftDiagonalSum+= arr[i][i];
        rightDiagonalSum+= arr[i][(arr.length - 1) - i];    
        absDifference = Math.abs(leftDiagonalSum - rightDiagonalSum);
    }
    return absDifference;
}
```

### Funciones, Métodos y Propiedades

- **Método `Math.abs`**
Método de la propiedad Math que devuelve el valor absoluto de un número.

- **Índices del bucle `i y j`**
i y j son variables de índice que se utilizan dentro de los bucles for para acceder a las filas y columnas de la matriz.

- **Propiedad `lenght`**
Devuelve el número de elementos en un array o el número de caracteres en un string.

- **Función `console.log`**
La función console.log es una utilidad de depuración que permite imprimir mensajes o valores en la consola.