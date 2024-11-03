---
layout: post
title: Reactividad en React, Vue y Angular
category: "Desarrollo De Software"
---

Hoy nos metemos en las entrañas de la **reactividad** en tres de los frameworks y bibliotecas de JavaScript más populares: **React**, **Vue** y **Angular**. Sabemos que todos ellos son "reactivos", pero la forma en la que manejan la reactividad es diferente, y entender estas diferencias te ayudará a elegir el mejor enfoque para cada proyecto.

## ¿Qué es la Reactividad?

La reactividad en desarrollo web significa que, cuando los datos de tu aplicación cambian, la UI se actualiza automáticamente para reflejar esos cambios. Imagina que quieres que un contador de visitas se actualice en pantalla cada vez que alguien entra en tu página; gracias a la reactividad, no tienes que refrescar manualmente el DOM cada vez que el contador cambia.

Vamos a ver cómo cada tecnología aborda este proceso.

## React y su Virtual DOM

**React** introduce el concepto de **Virtual DOM**, que permite una actualización eficiente al comparar el nuevo estado del DOM virtual con el estado anterior y renderizar solo los cambios.

### ¿Cómo funciona la Reactividad en React?

React no tiene reactividad "nativa" como Vue, pero utiliza **Hooks** (`useState`, `useEffect`) en sus componentes funcionales. Esto permite que los cambios en el estado o en las props desencadenen un re-renderizado del componente.

**Ejemplo**:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

Cada vez que actualizamos el estado con `setCount`, React detecta el cambio y vuelve a renderizar el componente afectado.

### Pros y Contras
- **Pros:** Flexibilidad, ideal para interfaces dinámicas.
- **Contras:** React depende de estrategias como memoización para optimizar rendimiento en aplicaciones grandes.

## Vue y su Sistema Reactivo
Vue tiene un sistema de reactividad nativo. La reactividad de Vue se basa en observadores y proxies para rastrear los cambios en los datos y actualizar automáticamente el DOM.

### ¿Cómo funciona la Reactividad en Vue?
Vue observa los cambios en propiedades reactivas (data) dentro de sus componentes. Si un valor cambia, Vue automáticamente actualiza el DOM.

**Ejemplo:**

```html
<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count += 1;
    }
  }
}
</script>
```

### Pros y Contras
- **Pros:** Reactividad nativa y directa, fácil de entender y usar.
- **Contras:** No está optimizado para manipular datos extremadamente grandes.

## Angular y los Observables de RxJS
Angular es un framework completo que maneja la reactividad mediante Observables (RxJS) y su sistema de Zone.js. En Angular, la reactividad puede sentirse más estructurada y es muy útil en aplicaciones grandes.

### ¿Cómo funciona la Reactividad en Angular?
Angular utiliza Observables para rastrear y gestionar eventos asíncronos, como los datos de entrada de usuario o respuestas de API. La reactividad en Angular está algo más "explícita", ya que normalmente configuramos los streams manualmente.

**Ejemplo:**
```typescript
Copiar código
import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  template: `
    <div>Contador: {{ count }}</div>
  `
})
export class CounterComponent {
  count: number = 0;

  ngOnInit() {
    interval(1000).subscribe(() => this.count += 1);
  }
}
```

### Pros y Contras
- **Pros:** Ideal para proyectos grandes, facilita la manipulación de datos en tiempo real.
- **Contras:** Curva de aprendizaje más alta debido a la dependencia en RxJS.

