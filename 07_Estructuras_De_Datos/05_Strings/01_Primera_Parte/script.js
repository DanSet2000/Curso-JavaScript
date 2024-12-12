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

console.log(airline.slice(0, airline.indexOf(' ')));         // Obtener una palabra hasta un espacio vacio
console.log(airline.slice(airline.lastIndexOf(' ') + 1))     // Portugal

console.log(airline.slice(-2));     // al

// ---- Ejemplo ----
const checkMiddleSeat = function(seat){
    // B y E son asientos de la Mitad
    const asiento = seat.slice(-1);
    if (asiento === 'B' || asiento === 'E'){
        console.log('You got the middle seat');
    }else{
        console.log('You got lucky');
    }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');