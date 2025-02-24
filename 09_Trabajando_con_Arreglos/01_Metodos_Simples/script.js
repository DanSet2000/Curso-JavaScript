'use strict';

// ---- Trabajando con Arreglos ----

// Métodos Simples

const currencias = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling']
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Matriz simple de ejemplo

let arr = ['a', 'b', 'c', 'd', 'e'];

// -- Slice --

arr.slice(2);       // Se empieza a extraer el arreglo desde la posición 2
console.log(arr.slice(2));      // [c, d, e]

arr.slice(2, 4);    // El parámetro final no es incluido en el arreglo
console.log(arr.slice(2, 4));   // [c, d]

arr.slice(-2);      // Comienza a copiar desde el final del arreglo
console.log(arr.slice(-2));     // [e]

arr.slice(1, -2);   // Extrae desde posicion 1 y extrae todo menos los ultimos 2 elementos
console.log(arr.slice(1, -2));  // [b ,c]

arr.slice();        // Crea una copia del arreglo

// -- Splice --

let arraySplice = ['a', 'b', 'c', 'd', 'e'];

// Comienza el corte desde la posición 2
console.log(arraySplice.splice(2));     // [a, b]

// Eliminar el ultimo elemento de un arreglo
console.log(arraySplice.splice(-1));

// -- Reverse --

let arrayReverse = ['a', 'b', 'c', 'd', 'e'];

const arrayReverse2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arrayReverse2.reverse());   // [f, g, h, i, j]

// -- Concat --

// El primer arreglo sera el que llame al metodo y el segundo al que pasamos el metodo
const letters = arrayReverse.concat(arrayReverse2);   

console.log(letters);

// -- Join --

console.log(letters.join('-'));     // [a-b-c-d-e-f-g-h-i]

// -- At --

const arrayAt = [23, 11, 64];

// Obtenemos el valor en la posición indicada
console.log(arrayAt.at(0));     // 23

// Obtener ultimo elemento de la matriz
console.log(arrayAt.at(-1));    // 64

// Uso en Strings
console.log('jonas'.at(0));      // j
console.log('jonas'.at(-1));     // s