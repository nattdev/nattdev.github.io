---
layout: post
title: ¿Qué son los Custom Hooks en React?
categories: React
---

Los **Custom Hooks** en React son funciones reutilizables que permiten extraer y compartir lógica entre componentes. Al igual que los *Hooks* integrados (como `useState` o `useEffect`), los *Custom Hooks* comienzan con la palabra `use` y pueden usar otros *Hooks* dentro de ellos. Su principal ventaja es evitar la duplicación de código cuando varios componentes necesitan la misma lógica.

## ¿Por qué usar Custom Hooks?

1. **Reutilización de Lógica**: Si tienes lógica repetida en varios componentes, puedes extraerla en un *Custom Hook* para evitar duplicación.
2. **Legibilidad y Mantenimiento**: Organizar la lógica en *Custom Hooks* hace que el código sea más modular y fácil de mantener.
3. **Separación de funciones**: Puedes separar la lógica de negocio de la presentación del componente.

## Ejemplo 1: `useWindowSize`

Este *Custom Hook* se utiliza para detectar el tamaño de la ventana.

```javascript
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    // Cleanup para remover el evento cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
```

### Uso del Hook en un Componente:

```jsx
import React from 'react';
import useWindowSize from './useWindowSize';

function WindowSizeComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Tamaño de la ventana</h1>
      <p>Ancho: {width}px</p>
      <p>Alto: {height}px</p>
    </div>
  );
}

export default WindowSizeComponent;
```

## Ejemplo 2: `useFetch`

Este *Custom Hook* realiza una llamada a una API y devuelve los datos, un estado de carga y si ocurrió algún error.

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

### Uso del Hook en un Componente:

```jsx
import React from 'react';
import useFetch from './useFetch';

function UsersList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
```