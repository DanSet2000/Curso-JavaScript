'use strict';

// ---- Trabajando con Arreglos ----

// Métodos Adicionales con Arreglos

// ---- FIND ----

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWitdrawal = movements.find(function(movement){
    return movement < 0;
})
console.log(firstWitdrawal);