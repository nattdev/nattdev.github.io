---
layout: post
title: Resolviendo Plus Minus TypeScript
category: "Hacker Rank TypeScript"
---

El desafío Plus Minus te enseña a **trabajar con arrays clasificando elementos** según sean positivos, negativos o ceros, calcular proporciones basadas en cada clasificación, iterar eficientemente sobre un array para realizar conteos, usar condiciones para evaluar valores, **manejar números decimales con precisión y formatear salidas** en un formato adecuado como proporciones con seis decimales.


## Código resuelto:
```ts
'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    if (arr.length < 0 || arr.length > 100) {
        console.log("Array size out of range")
        return
    }

    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let zeroNumbers = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < -100 || arr[i] > 100) {
            console.log("Number out of range: ", arr[i])
            return;
        }
        if (arr[i] > 0) {
            positiveNumbers++;
        } else if (arr[i] < 0) {
            negativeNumbers++;
        } else {
            zeroNumbers++;
        }
    }
    let proportionNumbers = [
        (positiveNumbers / arr.length).toFixed(6),
        (negativeNumbers / arr.length).toFixed(6),
        (zeroNumbers / arr.length).toFixed(6)
    ];
    console.log(proportionNumbers.join("\n"));
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

```

## Explicación del código:

- ### Función `plusMinus`  

Esta función recibe una un array de números como parámetro y no devuelve ningún valor.

Primero, aplicamos la restricción establecida en el problema para el tamaño de el array, **mayor a 0 y menor igual que 100**, si no se cumple esta condición se muestra un mensaje `Array size out of range` y finaliza la función con la declaración `return`.

Luego declaramos las variables `positiveNumbers`, `negativeNumbers` y `zeroNumbers`, que almacenarán el conteo total de los elementos segun las condiciones establecidas, respectivamente.

Se utiliza un bucle `for` para iterar según el tamaño del array. Dentro, se aplica la restricción establecida en el problema para cada elemento de el array, **mayor igual a -100 y menor igual que 100**, si no se cumple esta condición se muestra un mensaje `Number out of range: [Número no permitido]` y finaliza el ciclo con la declaración `return`.

También dentro del bucle se establece el flujo de control con `if`, `else if` y `else` con las condiciones requeridas para el conteo de los elementos.

Una vez que el ciclo termina, se declara una variable de tipo array `proportionDecimalNumbers` donde se almacenan los números con decimales obtenidos de la operación, limitando el número de estos con el método `toFixed()`.

Finalmente, se usa el  método `join(\n)` para imprimir cada elemento de `proportionDecimalNumbers` con un salto de línea.

```ts
function plusMinus(arr: number[]): void {
    // Write your code here
    if (arr.length < 0 || arr.length > 100) {
        console.log("Array size out of range")
        return
    }

    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let zeroNumbers = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < -100 || arr[i] > 100) {
            console.log("Number out of range: ", arr[i])
            return;
        }
        if (arr[i] > 0) {
            positiveNumbers++;
        } else if (arr[i] < 0) {
            negativeNumbers++;
        } else {
            zeroNumbers++;
        }
    }
    let proportionNumbers = [
        (positiveNumbers / arr.length).toFixed(6),
        (negativeNumbers / arr.length).toFixed(6),
        (zeroNumbers / arr.length).toFixed(6)
    ];
    console.log(proportionNumbers.join("\n"));
}
```

### Funciones, Métodos y Propiedades

- **Método `toFixed()`**
Se utiliza en números para redondearlos a un número específico de decimales y devolver el valor como una cadena de texto.

- **Método `join()`**
Se utiliza con arrays para unir todos los elementos de un array en una sola cadena de texto. Puedes especificar un delimitador (separador) para insertar entre los elementos.

- **Propiedad `lenght`**
Devuelve el número de elementos en un array o el número de caracteres en un string.

- **Función `console.log`**
La función console.log es una utilidad de depuración que permite imprimir mensajes o valores en la consola.