---
layout: post
title: Explorando La Documentación De React
---
Recorriendo las características y componentes principales
- Las aplicaciones de React están conformadas por "componentes".
- Un Componente es una pieza de UI (Interfaz de usuario).
	- Puede ser como un botón.
	- Puede ser grande como una página.

### Los componentes de React
- Son funciones de JavaScript que retornan marcado (markup).

```jsx
// Declarando el Componente MyButton
function MyButton() {
	return (
		<button>I'm a button</button>
	);
}
```

### Anidar en otro componente

```jsx
// Las palabras clave "export default" especifican el componente principal en el archivo

export default function MyApp() {
	return(
		<div>
			<h1>Welcome to my app</h1>
			<MyButton/> // Componente MyButton
		</div>
	);
}
```

**- Los componentes de React siempre deben de comenzar con mayúsculas.**

**- Las etiquetas HTML deben estar en minúsculas.**


### Sintaxis de marcado con JSX
La sintaxis de marcado es totalmente opcional en React.
- JSX es más estricto que HTML.
	- Se tienen que cerrar las etiquetas HTML ```<br/>```.
	- Tu componente tampoco puede devolver múltiples etiquetas de JSX, se debe envolver en un padre compartido, como ```<div></div>``` o en un envoltorio vacio ```<></>```.
```jsx
function AboutPage() {  
	return (
		<>  
			<h1>About</h1>  
			<p>Hello there.<br/>How do you do?</p>  
		</>
	);  
}
```

### Añadir estilos
En React se especifica una clase de CSS con "className"
```jsx
<img className="avatar" />
```

Luego se escribe la regla CSS para esa clase en un archivo CSS aparte:
```css
.avatar {
	border-radius: 50%;
}
```

**- En el caso más simple,  se añade una etiqueta ```<link>``` a tu html. Si se utiliza un framework consultar la documentación para saber como añadir un archivo CSS a tu proyecto**


### Mostrar datos
JSX te permite poner marcado dentro de JavaScript, las llaves te permiten "escapar" hacia Javascript de forma tal que puedas incrustar una variable de tu código.
```jsx
return (
	<h1>
		{user.name}
	</h1>
);

// Escapar en los atributos con llaves en lugar de comillas
return (
	<img className="avatar" src={user.imageUrl}
	alt={'Photo of ' + user.name} 
	style={{
          width: user.imageSize,
          height: user.imageSize
        }}/> // Concatenacion de cadenas
        // style no es una sintaxis especial, sino un objeto regular dentro de las llaves de JSX
        // Podemos usar el atributo "style" cuando tus estilos dependen de variables
);
```

### Renderizado condicional
En React, no hay una sintaxis especial para escribir condicionales. En cambio, usarás las mismas técnicas que usas al escribir codigo regular de JS, como la sentencia "if".

```jsx
let content;
if (isLoggedIn) {
	content = <AdminPanel/>;
} else {
	content = <LoginForm/>;
}

return (
	<div>
		{content}
	</div>
);
```

Podemos utilizar el operador ternario "?", este funciona dentro de JSX.
```jsx
<div>
	{isLoggedIn ? (
		<AdminPanel />
	) : (
		<LoginForm />
	)}
</div>
// Sin Else
<div>  
	{isLoggedIn && <AdminPanel />}  
</div>
```

### Renderizado de Listas
Podemos utilizar "bucles for" o la "funcion map()" de los arreglos para renderizar listas de componentes.

```jsx
const products = [
	{title: "Cabbage", id:1},
	{title: "Garlic", id:2},
	{title: "Apple", id:3},
];

// Dentro del componente utilizamos la función map(), para obtener un arreglo de elementos <li>

//La función map() crea un nuevo array con los resultados de la llamada a la funcion aplicados a cada uno de sus elementos
const listItems = products.map(product => 
	<li key={product.id}
	 style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}>
		{product.title}
	</li>
	);

return(
	<ul>{listItems}</ul>
);
```

### Responder a eventos
Se declaran "manejadores de eventos" dentro de los componentes:

```jsx
function MyButton() {
	function handleClick() {
		alert("You clicked me!");
	}
}

return(
	<button onClick={handleClick}>
		Click me
	</button>

);
```

### Actualizar la pantalla
Si se quiere que el componente recuerde alguna información y la muestre. Se le añade un "estado" al componente.

```jsx
// Primero se importa useState de React
import {useState} from 'react';

// Ahora podemos declarar una "Variable de estado" dentro de un componente

function MyButton() {
	const [count, setCount] = useState(0); // Se define el estado actual "count", y la funcion que te permite actualizarlo "setCount"
	// Convención [something, setSomething]
	function handleClick() {
		setCount(count + 1);
	}

	return(
		<button onClick={handleClick}>
			Clicked {count} times
		</button>
	);
}
```

### El uso de los Hooks
Las funciones que comienzan con "use" se llaman Hooks. useState es un Hook nativo dentro de React.
Los Hooks son más restrictivos que las funciones regulares. Solo puedes llamar a los Hooks en el primer nivel de tus componentes(u otros Hooks).
- Si quisiera utilizar useState en una condicional o en un bucle, se extrae un nuevo componente y se lo pone dentro de él.
- A menudo necesitamos que los componentes compartan datos y se actualicen en conjunto para eso:
	- Necesitamos mover el estado de los botones individuales "hacia arriba" al componente más cercano que los contiene a todos.
	
```jsx
export default function MyApp() {  
	const [count, setCount] = useState(0);  
	
	function handleClick() {  
		setCount(count + 1);  
	}  

// La información que pasas hacia abajo se llaman props. Ahora el componente "MyApp" contiene el estado "count" y el manejador de eventos "handleClick", y pasa ambos hacia abajo como props a cada uno de los botones.

return (  
	<div>  
		<h1>Counters that update separately</h1>  
		<MyButton count={count} onClick={handleClick} />  
		<MyButton count={count} onClick={handleClick} />
	</div>  
	);  
}  

function MyButton({ count, onClick }) {  

	return (  
		<button onClick={onClick}>  
			Clicked {count} times  
		</button>  
	);  
}
```
