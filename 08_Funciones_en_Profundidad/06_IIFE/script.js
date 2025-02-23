'use strict';

// ---- Funciones en Profundidad ----

// Expresiones de Función Invocadas Inmediatamente

// Funcion que solo se ejecute una sola vez y luego nunca más

const runOnce = function () {
    console.log('This will never run again');
};
  
runOnce();
  
// Llamando de inmediato (IIFE)
(function () {
console.log('This will never run again');
})();
  
// IIFE en Arrow Funciones
(() => console.log('This will never run again'))();