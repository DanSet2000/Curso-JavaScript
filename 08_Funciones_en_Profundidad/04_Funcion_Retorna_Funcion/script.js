'use strict';

// ---- Funciones en Profundidad ----

// Función que Retorna una Funcion

const greet = function (greeting){
  return function(name){
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

// Llamando funcion

greet('Hello')('Jonas');

// Usando Funciones de Flecha

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Jonas');