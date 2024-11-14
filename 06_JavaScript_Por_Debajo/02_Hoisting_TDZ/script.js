'use strict';

// ---- Hoisting ----

// Variables
// Usando variables antes de declarar
console.log(me);    // Undefined
console.log(job);   // Error

var me = 'Daniel';
let job = 'Student';
const birthYear = 2000;

// Funciones
// Usando funciones antes de declarar
console.log(addDeclaration(2, 3));  // Funciona
console.log(addExpresion(2, 3));    // Error 
console.log(addArrow(2, 3));        // Undefined

function addDeclaration(a, b){
    return a + b;
}

const addExpresion = function(a, b){
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart(); // numProducts en este punto es Undefined

var numProducts = 30;

function deleteShoppingCart(){
    console.log('All Products Deleted!')
}
