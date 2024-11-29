---
layout: post
title: Tipos vs Interfaces en TypeScript ¿Cuál elegir?
category: "Bases TypeScript"
---

Cuando trabajas con TypeScript, probablemente te has preguntado si deberías usar tipos (type) o interfaces (interface) **para definir la forma de tus objetos**. Aunque ambos se usan para describir estructuras de datos, tienen diferencias clave que pueden influir en tu decisión.

## ¿Qué son los type e interface?
- ### type  
Un `type` en TypeScript es una manera de darle un nombre a cualquier tipo de dato. Puedes usarlo para crear alias de tipos primitivos, uniones, intersecciones, e incluso para describir objetos complejos.

- ### interface  
Una `interface` es una estructura que define la forma de un objeto. Es útil para describir propiedades y métodos que un objeto debe implementar, con soporte especial para la herencia.

## Diferencias Clave
- ### Uso Básico  
Ambos se pueden usar para describir objetos, pero tienen sintaxis ligeramente diferente.

-  Con type:  

```typescript
type Persona = {
  nombre: string;
  edad: number;
};
```

- Con interface:

```typescript
interface Persona {
  nombre: string;
  edad: number;
}
```

- ### Extensibilidad  
Las interfaces son más flexibles al extenderse, mientras que los type tienen limitaciones en este aspecto.

- Extensión con interface:

```typescript
interface Persona {
  nombre: string;
  edad: number;
}

interface Estudiante extends Persona {
  grado: string;
}
```

- Extensión con type:

```typescript
type Persona = {
  nombre: string;
  edad: number;
};

type Estudiante = Persona & {
  grado: string;
};
```

Ambos funcionan, pero las interfaces son más claras y naturales para extenderse.

- ### Uniones y Tipos Complejos  
Con type, puedes crear tipos más dinámicos, como uniones o intersecciones. Esto no es posible con interface.

```typescript
type Respuesta = "sí" | "no" | "tal vez"; // Unión de tipos

type Coordenadas = { x: number } & { y: number }; // Intersección de tipos
```

- ### Declaraciones Múltiples  
Las interfaces permiten múltiples declaraciones, que se fusionan automáticamente, mientras que los type no.

- Con interface:

```typescript
interface Vehiculo {
  ruedas: number;
}

interface Vehiculo {
  motor: string;
}

const auto: Vehiculo = { ruedas: 4, motor: "eléctrico" }; // Funciona
```
  
  - Con type:  

```typescript
type Vehiculo = { ruedas: number; };
type Vehiculo = { motor: string; }; // Error: ya existe un `type` llamado Vehiculo
```

- ### Rendimiento y Herramientas  
Ambos son equivalentes en rendimiento, pero las interfaces son más fáciles de usar en herramientas como el autocompletado de TypeScript.

## ¿Cuándo usar type?
- Cuando necesitas uniones o intersecciones.

```typescript
type Resultado = "éxito" | "error";
```

- Para definir tipos complejos.

```typescript
type Callback = (mensaje: string) => void;
```

- Si estás creando un alias para un tipo existente.

```typescript
type ID = string | number;
```

## ¿Cuándo usar interface?
- Cuando necesitas definir la forma de un objeto o clase.

```typescript
interface Usuario {
  nombre: string;
  activo: boolean;
}
```

- Si planeas extender o fusionar la definición más adelante.

```typescript
interface Configuracion {
  tema: string;
}

interface Configuracion {
  modoOscuro: boolean;
}
```

## ¿Cuál elegir?
- Usa **interface** para describir objetos, clases y estructuras que necesitas extender o fusionar.
- Usa **type** para uniones, intersecciones y alias simples de tipos.