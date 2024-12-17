'use strict';

// ---- Strings ----

// Dividir una cadena 
console.log('a+very+nice+string'.split('+'));
console.log('Daniel Carvajal'.split(' '));

// Creando variables directamente 
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr. ', firstName, lastName.toUpperCase].join(' ');
console.log(newName);