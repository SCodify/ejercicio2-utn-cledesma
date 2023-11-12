# Clase 2 - Ejercitación

### Ejercicio 1

Tengo desarrollada la siguiente función en JavaScript:

```js
function suma(a, b, callback) {
  let c = a + b;
  callback();
}
```

_¿Que es el tercer parámetro recibido?_  
**Respuesta:**
> El tercer parámetro recibido es una función, y por definición a esta función se la denomina _callback_ (función que que se pasa como argumetno a otra función o método). 

_¿En que casos es obligatorio desarrollar este tipo de funciones?_  
**Respuesta:**
> Las funciones _callback_ son escenciales para menejar eventos asincrónicos, como por ejemplo la realización de llamadas a API.

_Realizar un llamado a la función de ejemplo._  
**Respuesta:**
  
```js
function suma(a, b, callback) {
  let c = a + b;
  callback(c);
}

function mostrarResultado(valor) {
  return `El resultado de la suma es ${valor}`
}

suma(22, 15, mostrarResultado)
// En la consola se muestra: El resultado de la suma es 37
```

---

### Ejercicio 2
Desarrollador una calculadora que tenga:
- 2 campos inputs para los operandos.
- 4 botones de operadores básicos (suma, resta, multiplicación, división). 
 
Al realizar la cuenta se deberá actualizar el campo resultado.