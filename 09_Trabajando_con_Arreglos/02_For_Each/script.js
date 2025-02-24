'use strict';

// ---- Trabajando con Arreglos ----

// For Each

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Imprimir un mensaje para cada movimiento realizado en la cuenta

// Usando For-Of
for (const movement of movements){
    if (movement > 0){
        console.log(`You deposited ${movement}`)
    }else{
        console.log(`You withdre ${Math.abs(movement)}`)
    }
}

// Usando For Each

console.log('---- For Each ----')
movements.forEach(function (movement) {
    // Recibe el elemento actual de la matriz como un argumento
    if (movement > 0) {
      console.log(`You deposited ${movement}`);
    } else {
      console.log(`You retired ${Math.abs(movement)}`);
    }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ....

// Accediendo al indice del elemento del arreglo

// Orden de los Argumentos: elemento, indice del elemento, nombre del arreglo
movements.forEach(function (movement, index, array) {
    // Recibe el elemento actual de la matriz como un argumento
    if (movement > 0) {
      console.log(`Movement ${index + 1}: You deposited ${movement}`);
    } else {
      console.log(`Movement ${index + 1}: You retired ${Math.abs(movement)}`);
    }
});
  
// ---- Usando For Each en Mapas y Conjuntos ----

// Map
const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling'],
  ]);
  
  // Parametros: valor actual, key, nombre del Mapa
  currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
  });
  
  // Set
  const currenciesUnique = new Set(['USD', 'GPB', 'USD', 'EUR', 'EUR']);
  
  currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${_}`);
  });
  