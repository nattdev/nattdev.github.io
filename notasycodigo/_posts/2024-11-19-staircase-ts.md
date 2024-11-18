---
layout: post
title: Resolviendo Staircase TypeScript
category: "Hacker Rank TypeScript"
---

El desafío Staircase te enseña a **usar bucles para construir patrones dinámicos, manejar índices estratégicamente para alinear elementos con espacios y caracteres especiales, y aplicar lógica matemática** para resolver problemas de posicionamiento.

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

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n: number): void {
    // Write your code here
    if (n < 0 || n > 100) {
        console.log("Number out of range");
        return;
    }
    
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            process.stdout.write(" ");
        }
        process.stdout.write("#".repeat(n + 1 - i));
        console.log("");
    }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    staircase(n);
}
```

## Explicación del código:

- ### Función `staircase`  

Esta función recibe una un valor tipo número y no retorna ningún valor.

Primero, aplicamos la restricción establecida en el problema para el tamaño de la escalera, **mayor a 0 y menor igual que 100**, si no se cumple esta condición se muestra un mensaje `Number out of range` y finaliza la función con la declaración `return`.

Se utiliza un bucle `for` para iterar según el tamaño de la escalera dada,  con la expresión de control `let i = n; i > 0; i--` donde se asigna el tamaño del array a `i` y se decrementa el índice. Dentro de este bucle, se crea otro bucle `for` que toma la variable del índice `i` para calcular las veces que se imprimen los espacios. Esto se logra escribiendo un espacio por cada valor de `j` desde 0 hasta `i - 1`.

Después de imprimir los espacios, se utiliza el método `process.stdout.write()` para imprimir los símbolos `#`, cuyo número se calcula como `n + 1 - i`, representando la cantidad de escalones visibles en la fila actual. Finalmente, se llama a `console.log("")` para añadir un salto de línea y pasar a la siguiente fila de la escalera.

```ts
function staircase(n: number): void {
    // Write your code here
    if (n < 0 || n > 100) {
        console.log("Number out of range");
        return;
    }
    
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            process.stdout.write(" ");
        }
        process.stdout.write("#".repeat(n + 1 - i));
        console.log("");
    }
}
```

### Funciones, Métodos y Propiedades

- **Método `process.stdout.write()`**
Permite escribir directamente a la salida estándar sin agregar un salto de línea a diferencia de `console.log()`.

- **Método `repeat()`**
Permite multiplicar una cadena para que se repita un número de veces.

- **Función `console.log`**
La función console.log es una utilidad de depuración que permite imprimir mensajes o valores en la consola.