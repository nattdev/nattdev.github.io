---
layout: post
title: React Context en la Gestión de Estado Global
categories: React
---

En el desarrollo de aplicaciones con React, el manejo de estados y la comunicación entre componentes puede convertirse en un reto, especialmente cuando se deben pasar propiedades ("props") a través de múltiples niveles. Este problema se conoce como "prop drilling" y puede dificultar el mantenimiento y la escalabilidad de una aplicación. 

Para abordar este desafío, **React Context** ofrece una solución eficiente para compartir datos globales entre componentes sin necesidad de pasar props manualmente a cada nivel. Exploraremos cómo funciona React Context y cuándo utilizarlo en tus proyectos.

## ¿Qué es React Context?

React Context es una API que permite compartir valores entre varios componentes sin tener que pasar props explícitamente a través de la jerarquía de componentes. Esta herramienta resulta útil para datos globales como temas, autenticación de usuarios, o configuraciones de la aplicación.

### Componentes de React Context

- **`createContext()`**: Crea un nuevo contexto que contiene la información que deseamos compartir.
- **`Provider`**: Es el componente que proporciona el valor del contexto a los componentes que lo consumen.
- **`useContext()` o `Consumer`**: Los componentes pueden acceder al contexto utilizando este hook o componente.

## Ejemplo Práctico

Supongamos que estamos desarrollando una aplicación que permite cambiar entre un tema claro y oscuro. Queremos que esta configuración esté disponible en varios componentes sin necesidad de pasar props a través de todos los niveles.

### Paso 1: Crear el Contexto

El primer paso es crear el contexto utilizando `createContext()`.

```jsx
import React, { createContext } from 'react';

// Creación del contexto
export const ThemeContext = createContext();
```

### Paso 2: Proveer el Contexto

En el componente principal de la aplicación, podemos utilizar el componente `Provider` para proporcionar el valor del contexto. En este caso, el valor será el tema actual y una función para cambiarlo.

```jsx
import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Toolbar from './Toolbar';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

### Paso 3: Consumir el Contexto

Ahora, en cualquier componente descendiente de `Provider`, podemos acceder al valor del contexto utilizando `useContext()`.

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      Cambiar Tema
    </button>
  );
}

export default ThemeButton;
```

En este ejemplo, el botón cambia el tema utilizando los valores proporcionados por el contexto, sin necesidad de recibir props directamente.

### ¿Cuándo No Usar React Context?

Si bien React Context es útil, no siempre es la mejor opción:

1. **Rendimiento**: Cada vez que el valor del contexto cambia, todos los componentes que lo consumen se vuelven a renderizar. Esto puede tener un impacto negativo en aplicaciones grandes.
2. **Uso excesivo**: Si los datos solo son relevantes para un pequeño número de componentes cercanos, es preferible pasar props en lugar de utilizar un contexto global.

## Alternativas a React Context

Si necesitas manejar un estado global más complejo o específico, existen otras herramientas que puedes considerar:

- **Redux**: Ideal para aplicaciones grandes donde el estado global es complejo y necesita ser gestionado de forma predecible.
- **Recoil**: Ofrece una alternativa más flexible a React Context, simplificando la manipulación del estado compartido.
- **Zustand**: Un enfoque ligero y sencillo para gestionar el estado global.

React Context es una solución efectiva para evitar el "prop drilling" en aplicaciones React, permitiendo compartir datos globales de manera sencilla y eficiente. Sin embargo, es importante evaluar cuándo y cómo usarlo, ya que en algunos casos puede no ser la opción más óptima.