'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Cadena de Eventos

// Orden de Ejecucion

console.log('Test Start');  // 1

setTimeout(function(){    // 3
  console.log('O seconds timer')
}, 0)

// Promesa que se resuelva de Inmediato
Promise.resolve('Resolve promise 1').then(function(response){ // 2
  console.log(response);
})

console.log('Test Ended');  // 1