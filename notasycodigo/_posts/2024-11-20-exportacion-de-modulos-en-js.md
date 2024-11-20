---
layout: post
title: Exportación de Módulos en Javascript
category: "Bases JavaScript"
---

Para saber como exportar un módulo correctamente **debes de saber si un módulo tiene exportación nombrada o exportación por defecto**, revisaremos la forma en que se exportan los elementos en el archivo del módulo.

## Exportación por defecto `default export`
Si un módulo tiene exportación por defecto, solo puedes importar la entidad por defecto directamente, sin llaves.

- Ejemplo de exportación por defecto:  
  
```javascript
// En el módulo (por ejemplo, express)
export default function myFunction() {
  console.log("Hello!");
}
```

- Ejemplo de importación:  
  
```javascript
// En el archivo que importa
import myFunction from 'express';  // Importación por defecto
```
En este caso, solo puedes importar myFunction sin las llaves.

## Exportación nombrada `export`
Si un módulo tiene exportación nombrada, puedes importar elementos específicos usando llaves `{}`. Un módulo puede tener varias exportaciones nombradas.

- Ejemplo de exportación nombrada:  
  
```javascript
// En el módulo (por ejemplo, express)
export function functionOne() {
  console.log("Function One");
}

export function functionTwo() {
  console.log("Function Two");
}
```

- Ejemplo de importación:  
  
```javascript
// En el archivo que importa
import { functionOne, functionTwo } from 'express';  // Importación de elementos específicos
```
Puedes importar varias funciones específicas de un módulo usando las llaves `{}`.

## Combinación de exportación por defecto y nombrada
Un módulo también puede tener una combinación de exportación por defecto y exportaciones nombradas.

- Ejemplo de importación combinada:  
  
```javascript
// En el módulo (por ejemplo, express)
export default function defaultFunction() {
  console.log("Default Function");
}

export function namedFunction() {
  console.log("Named Function");
}
```

- Ejemplo de importación:  
  
```javascript
// En el archivo que importa
import defaultFunction, { namedFunction } from 'express';
```