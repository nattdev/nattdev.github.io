---
layout: post
title: Construyendo Un Tres En Línea
categories: React
---
# Descripción general

## Exportando componente
```jsx
// "export" permite que la función sea accesible fuera del archivo
// "default" le dice a otros archivos que es la función principal en su archivo
export default function Square() {
	return <button className="square">X</button>;
}

// "return" devuelve un valor a la persona que llama a la función
// <button> Elemento JSX - Combinacion de JavaScript y etiquetas HTML
// className es una propiedad de botón o tambien llamada "prop", le dice a CSS como será el diseño.
```

## Creando componente en React
```jsx
function Square( {value} ) { // Podemos pasarle objetos al componente mediante llaves, estos se llaman props
	return <button className="square">{value}</button>; // Para pasar el valor de la prop debemos escapar a JavaScript
}

// Llamar a componente en funcion principal
	<Square value="1"/> // Nombre en Mayuscula
	// Etiqueta de cierre
	// Se tiene que pasar la propr "value" a cada componente
```

### Respondiendo a Eventos
```jsx
// Dentro del componente que escuchará al evento
function Square( {value} ) {
	function handleClick() {
		console.log("clic");
	}
	return <button className="square" onClick={handleClick}>{value}</button>;
	// Agregar la prop onClick al componente 
}
```

### Los estados "recordar cosas"
```jsx
function Square() {
	const [value, setValue] = useState(null); // "value" almacena el valor, "setValue" es una funcion que se puede usar para cambiar el valor, "null" es el valor inicial para la variable de estado

	function handleClick() {
		console.log("clic");
	}
	return <button className="square" onClick={handleClick}>{value}</button>;
}
```

### Levantando el estado
El mejor enfoque es almacenar el estado del juego en el componente Board que es el principal en lugar de en cada Square.
El componente Boards puede decirle a cada Square que va a mostrar al pasarle una "prop"

*Para recopilar datos de varios elementos secundarios o para que estos se comuniquen entre sí, declaramos el estado compartido en su componente principal.
El componente padre puede devolver ese estado a los hijos a través de props*

- El componente "Boards" mantiene qué casillas están llenas.
- El estado es privado para el componente que lo define
- No se puede actualizar el estado de "Board" directamente desde "Square"
- Pasaremos una función del componente "Board" al componente "Square" y "Square" llamará esa función cuando se haga clic en un cuadrado.

## 1. Primero agregaremos la función onSquareClick al evento onClick

```jsx
...
<button className="square" onClick={onSquareClick}>{value}
</button>
...
```

## 2. Agregamos la función "onSquareClick" a las props del componente Square

```jsx
function Square({value, onSquareClick}) {

}
```

## 3. Conectamos la prop "onSquareClick" a una función en el componente "Boards" que llamaremos "handleClick"
```jsx
// Conectamos onSquareClick a handleClick, pasamos una función a la prop del primer componente Square
<Square value={squares[0]} onSquareClick={handleClick}/>
```

## 4. Definimos la función "handleClick" dentro del componente "Boards" para actualizar la matriz "squares" que contiene el estado del tablero

```jsx
...
function handleClick(i) { // Agregamos un argumento "i" que definira el indice del cuadrado a actualizarse
	const nextSquares = squares.slice(); // Copia de la matriz
	nextSquares[i] = "X"; // El primer elemento cambia a "X"
	setSquares(nextSquares); // Actualiza el estado
}
...
```
*Llamar a la función "setSquares" le permite a React saber que el esatdo del componente ha camabiado.
Esto activa una nueva representación de los componentes que usan el estado de squares (Boards) así como también sus componentes secundarios (los ocmponentes "squares" que forman el tablero)*

### Si configuramos "onSquareClick" para que sea handleClick(0) creará un bucle infinito de renderizado.

```jsx
<Squares value={squares[0]} onSquareClick={handleClick(0)}/> // Creará un bucle infinito, al alterar el estado del componente del tablero llamando a setSquares

<Squares value={squares[0]} onSquareClick={handleClick}/> // Aquí handleClick se pasa como una prop a onSquareClick, no se llama a la función de inmediato

<Squares value={squares[0]} onSquareClick={() => handleClick(0)}/>
// Se utilizará funciones flecha para que se ejecute el código después de la flecha llamando así a handleClick(0) y no directamente
```

###  ¿Por qué el estado está en el componente Board?
Al hacer click en un Square, el componente secundario Square le pide a Board que actualice el estado del tablero. Cuando Board cambia, tanto el componente "Board" como todos los componentes secundarios "Square" se vuelven a renderizar automaticamente.
Mantener el estado de todos los cuadrados en el componente principal "Boards" nos permite determinar el ganador en el futuro

*El atributo "onClick" del elemento DOM "button" es un componente integrado.
Para componentes personalizados como Square, el nombre depende del que se le dé.
Por convención se usan nombres on[Event] para props que representan eventos y handle[Event] para las definiciones e funciones que manejan los eventos*

### ¿Por qué es importante la inmutabilidad?

Se hace una copia de la matriz para no modificar la matriz existente, evitar la mutación directa de datos te permite mantener intactas las versiones anteriores de los datos y poder reutilizarlas o restablecerlas más adelante.
La inmutabilidad hace que la sea muy fácil para los componentes comparar si sus datos han cambiado o no.

## Marcar turnos con useState y booleanos
```jsx
function Board() {
	const[xIsNext, setXIsNext] = useState(true);
	function handleClick(i) {
	...
		if(squares[i]) { // Comprobamos si el cuadrado esta lleno, si es así genera un return, que bloqueará la actualizacion del estado del tablero
			return;
		}
		if(xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		setSquares(nextSquares);
		setXIsNext(!xIsNext); // Cambia el booleano a su negación True or False
	}
}
```

## Declarando un ganador
Se debe mostrar:
	- Cuando se gana el juego
	- Cuando no haya mas turnos

## Creamos la función calculateWinner fuera de los componentes

```jsx
function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],  
		[6, 7, 8],  
		[0, 3, 6],  
		[1, 4, 7],  
		[2, 5, 8],  
		[0, 4, 8],  
		[2, 4, 6]
	];

	for (let i = 0; i < lines.lenght; i++) {
		const [a, b, c] = lines[i];
		if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
```

Se llama la función en la función handleClick del componente Board para comprobar si el jugador a ganado.

```jsx
function handleCLick() {
	if(squares[i] || calculateWinner(squares)) {
		return;
	}

}
```

## Agregando un texto de ganador
Agregamos una sección "status" al componente "Board". El status mostrará el ganador si el juego termina y si el juego está en curso al siguiente jugador.

```jsx
// Dentro del componente Board
const winner = calculateWinner(squares);
let status; // Creamos una variable status
if (winner) {
	status = "Ganador: " + winner;
} else {
	status = "Siguiente Jugador: " + (xIsNext ? "X" : "O");
}

// En el renderizado agregamos
return (
	<div>
		<div className="status">{status}</div>
	</div>

);

```

## Almacenar historial de movimientos
### Levantando el estado
```jsx
// Nuevo componente de nivel superior Game
export default function Game() {
//Creamos estados
	//const[xIsNext, setxIsNext] = useState(true); // Estado que rastrea que jugador es el siguiente, estado redundante
	const xIsNext = currentMove % 2 === 0;
	const[history, setHistory] = useState([Array(9).fill(null)]); // Matriz de un solo elemento que contiene una matriz de 9 nulls
	const currentSquares = history[history.length - 1]; // Lee la matriz de los ultimos cuadrados de history
	const [currentMove, setCurrentMove] = useState(0); // Realiza un seguimiento de que paso está actualmente viendo el usuaario
	const currentSquares = history[currentMove];


	function handlePlay(nextSquares) {  // Está funcion será llamada por el componente Board para actualizar el juego
	// setHistory([...history, nextSquares]);  
	const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];  
	setHistory(nextHistory);  
	setCurrentMove(nextHistory.length - 1); // Apunta a la ultima entrada del historial
	// setXIsNext(!xIsNext); Estado redundante
	}	

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
		// setXIsNext(nextMove % 2 === 0); Estado redundante
	}
// Map sobre history
	const moves = history.map((squares, move) => {
		let description;
		if(move > 0){
			description = "Ir al movimiento #" + move;
		} else {
			description = "Ir al inicio del juego"
		}
		return(
			<li key={move}> // Se usa una key para identificar la modificacion del elemento
				<button onCLick={() => jumpTo(move)}>{description}</button> // Tiene un controlador onClick que llama a una función jumpTo
			</li>
		);
	}); 

	return(
		<div className="game">
		<div className="game-board">
			<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/> // Pasamos como props xIsNext, currentSquares, handlePlay
		</div>
		<div className="game-info">
			<ol>{moves}</ol>
		</div>
		</div>
	);
}

// Para que Board este controlada por Game, tiene que recibir las tres props, xIsNext, squeares, onPlay(será una nueva función que llama con la mtriz de cuadrados actualizada cuando un jugador hace un movimiento)
function Board({ xIsNext, squares, onPlay }) {
...
	function handleClick(i) {
	...
	onPlay(nextSquares); // Reemplazamos las llamadas setSquares y setXIsNext, con una sola llamada a su nueva función onPlay
	// onPlay actualiza el componente Board cuando el usuario hace clic en un cuadrado.
	}

}
```
