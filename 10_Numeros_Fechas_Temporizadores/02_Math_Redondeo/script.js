'use strict';

// ---- Números, Fechas y Temporizadores ----

// Matemáticas y Redondear Números

// Raiz Cuadrada
console.log(Math.sqrt(49));     // 7
console.log(25 ** (1/2));       // Usando Exponenciacion
console.log(8 ** (1/3));        // Raiz Cubica de 8

// Valor Maximo de un par de Valores
console.log(Math.max(5, 18, 23, 11, 2));       // 23
console.log(Math.max(5, 18, '23', 11, 2));     // 23

// Valor Minimo de un par de Valores  
console.log(Math.max(5, 18, 23, 11, 2));       // 2
console.log(Math.max(5, 18, 23, 11, '2'));     // 2

// Uso de Constantes Matemáticas
console.log(Math.PI * (10 ** 2));

// Funcion Aleatoria
console.log(Math.random());                   // Un numero entre 0 y 1
console.log(Math.trunc(Math.random() * 6));   // Un numero entre 0 y 5

// Funcion para Crear Numeros Aleatorios
const randomInt = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// Redondeo de Numeros
console.log(Math.trunc(23.3));    // Remueve la parte decimal de un numero
console.log(Math.round(23.9));    // Redondea siempre al proximo cercano
console.log(Math.ceil(23.9));     // Redondea siempre hacia abajo
console.log(Math.floor(23.9));    // Redondea siempre al proximo más bajo

console.log(Math.trunc(-23.3));    // -23
console.log(Math.floor(-23.3));    // -24

// Redondeo de Numeros Decimales
console.log((2.7).toFixed(0));    // 3      Devuelve una cadena y no un numero
console.log((2.7).toFixed(3));    // 2.700  Devuelve una cadena y no un numero
console.log((2.345).toFixed(2));  // 2.35  Devuelve una cadena y nó un numero

// Operador Remainder
console.log(5 % 2);   // 1    5 = 2 * 2 + 1
console.log(8 % 3);   // 2    6 = 2 * 3 + 2

// Numero Par
console.log(6 % 2);   // 0    6 = 2 * 3 
// Numero Impar
console.log(7 % 2);   // 1    7 = 2 * 3 + 1

// Funcion para revisar Numeros Pares
const isEven = function(number){
  if (number % 2 === 0){
    return true
  }else{
    return false
  }
};

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));