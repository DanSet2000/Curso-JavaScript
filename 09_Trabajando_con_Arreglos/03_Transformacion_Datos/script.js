'use strict';

// ---- Trabajando con Arreglos ----

// Transformación de Datos

// ----- MAP -----

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// Convertir estos valores de Euros a Dólares

const eurToUSD = 1.1;

const movementsUSD = movements.map(function(mov){
  return mov * eurToUSD
});

console.log(movements);     // Arreglo Original
console.log(movementsUSD);  // Arreglo Convertido a Dolar

// Usando un bucle for-of

const movementsUSDfor = []
for (const mov of movements){
  movementsUSDfor.push(mov * eurToUSD)
}

console.log(movementsUSDfor);

// Usando todos los Parametros

const movementsDescriptions = movements.map(function(movement, index, array){
  if (movement > 0){
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  }else{
    console.log(`Movement ${index + 1}: You retired ${Math.abs(movement)}`);
  }
})

// ----- FILTER -----

// Crear un arreglo de Depositos
const deposits = movements.filter(function(mov){
  return mov > 0;
})

console.log(deposits);

// Crear un arreglo de Retiros
const witdrawals = movements.filter(function(mov){
  return mov < 0;
})

console.log(witdrawals);

// Usando un bucle For-Of
const depositsFor = []

for (const mov of movements){
  if (mov > 0){
    depositsFor.push(mov);
  }
} 

console.log(depositsFor)

// ----- REDUCE -----

// Crear un balance global de la cuenta con los movimientos

// Accumulator -> Bola de Nieve
const globalBalance = movements.reduce(function(accumulator, current, index, array){
  console.log(`Iteration ${index}: ${accumulator}`)
  return accumulator + current;
}, 0);   // Valor inicial de Acumulador en la Primera Iteración

console.log(globalBalance);

// Usando un bucle For-OF
let globalBalanceFor = 0;
for (const mov of movements){
  globalBalanceFor += mov;
}
console.log(globalBalanceFor);

// Obtener un valor máximo
const max = movements.reduce(function(accumulator, movement){
  if (accumulator > movement){
    return accumulator;
  }else{
    return movement
  }
}, movements[0]);

console.log(max);