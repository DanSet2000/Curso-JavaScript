'use strict';

// ---- Trabajando con Arreglos ----

// Métodos Adicionales con Arreglos

// ---- FIND ----

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWitdrawal = movements.find(function(movement){
    return movement < 0;
})
console.log(firstWitdrawal);

// ---- FIND LAST ----

// Determinar el ultimo retiro: -130

const lastWitdrawal = movements.findLast(function(movement){
    return movement < 0;
});

console.log(lastWitdrawal);

// ---- FIND LAST INDEX ----

const latestLargeMovementIndex = movements.findLastIndex(function(movement){
    return Math.abs(movement) > 1000;
})

console.log(latestLargeMovementIndex);
console.log(`Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`);

// ---- SOME y EVERY ----

// Uso del metodo include 
console.log(movements.include(-130));   // True

// Saber si hay algun movimiento positivo en la matriz
const anyDeposits = movements.some(function(movement){
    return movement > 0;
});

console.log(anyDeposits);   // True

// Saber si hay un deposito mayor a 5000 dolares
const anyDeposit5000 = movements.some(function(movement){
    return movement > 5000;
});

console.log(anyDeposit5000);    // False

// Uso del método every
console.log(movements.every(function(movement){
    return movement > 0;        // False
}))

// Funcion de Llamada de manera separada

const deposit = function(movement){
    return movement > 0;
};

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// ---- FLAT y FLATMAP ----

const array = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(array.flat());  // [1, 2, 3, 4, 5, 6, 7, 8];

const arrayDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrayDeep.flat(2));  // 2do Nivel de Anidamiento