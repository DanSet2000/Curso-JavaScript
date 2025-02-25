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
