---
layout: post
title: Resolviendo Inherited Code c++
category: "Hacker Rank c++"
---

El desafío Inherited Code es un problema donde se aplica el manejo de excepciones y errores.

Nos entregan un bloque de código que realiza una validación de nombre de usuario de una compañia y nos piden completar el código para que este funcione correctamente cuando una excepción BadLengthException es lanzada al validar que el nombre de usuario es demasiado corto.

Puedes ver el problema completo en su [página oficial](https://www.hackerrank.com/challenges/inherited-code/problem)

Declararemos una clase llamada BadLenghtException que hereda de la clase base `exception`. Esto lo convierte en un tipo de excepción que puede ser capturado y manejado. También declararemos una variable privada de tipo string llamada `message`.

```cpp
class BadLenghtException : public exception {
    private:
        string message;
};
```
Creamos un constructor de la clase, este recibirá un argumento `n`, que representa la longitud del nombre de usuario. Seguido de dos puntos `:` inicializamos el atributo `message` y que recibirá al valor `n` convertido en una cadena de caracteres.

```cpp
class BadLenghtException : public exception {
    private:
        string message;
    public:
        BadLenghtException(int n) : message(to_string(n)) {}
};
```

Por último sobreescribimos el método `what()` de la clase base `exception`. Este método se utiliza para obtener una descripción de la excepción.
Usamos el tipo de dato de retorno de `what()`, el cual es `const char*` esto nos devolverá un puntero a caracteres constantes.

```cpp
class BadLenghtException : public exception {
    private:
        string message;
    public:
        BadLenghtException(int n) : message(to_string(n)) {
        const char* what() const throw() {
        // const char*  | tipo de dato de retorno
        // what() | método sobreescrito
        // const | asegura que la función no modifique ningún atributo de la instancia de la clase
        // throw() | indica que la función no arrojará excepciones (opcional desde c++11)
        }
};
```

Agregamos el retorno del método `what()`, este devolverá un puntero a caracteres constantes aplicando el método `c.str()` al atributo `message`.


```cpp
class BadLenghtException : public exception {
    private:
        string message;
    public:
        BadLenghtException(int n) : message(to_string(n)) {
        const char* what() const throw() {
            return message.c_str();
        }
};
```
### Código Completo
```cpp
//C++14

#include <iostream>
#include <string>
#include <sstream>
#include <exception>
using namespace std;

class BadLengthException {
    private:
    string message;
    public:
        BadLengthException(int n) : message(to_string(n)) {}
        const char* what() const throw() {
            return message.c_str();
        }
};

//** Código presentado en el problema  **//

bool checkUsername(string username) {
	bool isValid = true;
	int n = username.length();
	if(n < 5) {
		throw BadLengthException(n);
	}
	for(int i = 0; i < n-1; i++) {
		if(username[i] == 'w' && username[i+1] == 'w') {
			isValid = false;
		}
	}
	return isValid;
}

int main() {
	int T; cin >> T;
	while(T--) {
		string username;
		cin >> username;
		try {
			bool isValid = checkUsername(username);
			if(isValid) {
				cout << "Valid" << '\n';
			} else {
				cout << "Invalid" << '\n';
			}
		} catch (BadLengthException e) {
			cout << "Too short: " << e.what() << '\n';
		}
	}
	return 0;
}

//*************************************//
```
