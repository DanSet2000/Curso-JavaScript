'use strict';

// ---- Primitivos vs Objetos ----

// Primitivos
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName); // Davis  Williams

// Reference Types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before Marriage: ', jessica);      // Davis
console.log('After Marriage', marriedJessica);  // Davis

// Copiando objetos
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

// Fusionar dos objetos
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage: ', jessica2);     // Williams
console.log('After Marriage', jessicaCopy);     // Davis
// Cambiando el arreglo en la copia de Jessica
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');