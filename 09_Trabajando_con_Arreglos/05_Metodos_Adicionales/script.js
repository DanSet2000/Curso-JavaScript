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