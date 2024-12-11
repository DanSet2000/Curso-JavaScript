'use strict';

// ---- Strings ----

const airline = 'TAP Air Portugal';
const plane = 'A320';

// ---- Operaciones con Strings ----

// Obtener la posición de un caractér en una posicion determinada
console.log(plane[0]);  // A
console.log(plane[1]);  // 3
console.log(plane[2]);  // 2

// Obtener la longitud de una cadena 
console.log(airline.length);

// ---- Metodos con Strings ----

// indexOf
console.log(airline.indexOf('r'));  // 6
console.log(airline.indexOf('portugal'));

// lastIndexOf
console.log(airline.lastIndexOf('r'));  //10

// Slice
console.log(airline.slice(4));      // Air Portugal
console.log(airline.slice(4, 7));   // Air

