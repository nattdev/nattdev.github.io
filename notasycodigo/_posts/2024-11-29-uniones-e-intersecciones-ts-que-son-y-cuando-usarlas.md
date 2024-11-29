---
layout: post
title: Uniones e Intersecciones en TypeScript ¿Qué son y cuándo usarlas?
category: "Bases TypeScript"
---

En TypeScript, las uniones y intersecciones son herramientas poderosas que **te permiten combinar tipos para crear estructuras más flexibles y específicas**. Entender cómo y cuándo usarlas puede mejorar significativamente tu capacidad para manejar datos complejos en tus aplicaciones.

## ¿Qué son las uniones (|)?
Una unión en TypeScript permite que una variable o una propiedad pueda ser de varios tipos diferentes. Se utiliza el operador `|` (barra vertical) para indicar que algo puede ser uno u otro de los tipos especificados.

- Ejemplo de Uniones  

```typescript
type Respuesta = "sí" | "no" | "quizás";

let miRespuesta: Respuesta;

miRespuesta = "sí";       // Correcto
miRespuesta = "quizás";   // Correcto
miRespuesta = "nunca";    // Error: no es parte de la unión
```

En este caso, `miRespuesta` solo puede contener uno de los valores definidos en la unión.

## ¿Cuándo usar uniones?
Cuando necesitas que una variable acepte múltiples tipos de datos.

```typescript
type ID = string | number;

let usuarioID: ID;
usuarioID = 123;         // Correcto
usuarioID = "ABC123";    // Correcto
usuarioID = true;        // Error
```

Para manejar múltiples opciones específicas en funciones.

```typescript
function mostrarMensaje(mensaje: string | string[]) {
  if (typeof mensaje === "string") {
    console.log(mensaje); // Si es un string, lo imprime directamente
  } else {
    mensaje.forEach(msg => console.log(msg)); // Si es un array, recorre cada elemento
  }
}

mostrarMensaje("Hola");             // Imprime: Hola
mostrarMensaje(["Hola", "Mundo"]);  // Imprime: Hola \n Mundo
```

## ¿Qué son las intersecciones (&)?
Una intersección en TypeScript combina múltiples tipos en uno. Una variable o propiedad debe cumplir con todos los tipos especificados al mismo tiempo. Se utiliza el operador `&` (ampersand) para esta operación.

- Ejemplo de Intersecciones  

```typescript
type Persona = {
  nombre: string;
  edad: number;
};

type Trabajador = {
  empresa: string;
  puesto: string;
};

type Empleado = Persona & Trabajador;

const empleado: Empleado = {
  nombre: "Ana",
  edad: 30,
  empresa: "TechCorp",
  puesto: "Desarrolladora",
}; // Correcto
```

En este ejemplo, Empleado debe cumplir con las propiedades de Persona y Trabajador.

## ¿Cuándo usar intersecciones?
- Cuando necesitas combinar múltiples definiciones de tipos en uno solo.

```typescript
type Direccion = {
  calle: string;
  ciudad: string;
};

type Contacto = {
  telefono: string;
  email: string;
};

type Usuario = Direccion & Contacto;

const usuario: Usuario = {
  calle: "Calle Falsa 123",
  ciudad: "Springfield",
  telefono: "123-456-789",
  email: "ejemplo@email.com",
}; // Correcto
```

- Para extender tipos en escenarios más avanzados.

```typescript
type ConPermisos = {
  permisos: string[];
};

type UsuarioAdmin = Persona & ConPermisos;

const admin: UsuarioAdmin = {
  nombre: "Carlos",
  edad: 40,
  permisos: ["admin", "editar"],
}; // Correcto
```