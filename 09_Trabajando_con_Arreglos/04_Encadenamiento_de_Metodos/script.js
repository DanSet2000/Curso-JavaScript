'use strict';

// ---- Trabajando con Arreglos ----

// Encadenamiento de Métodos

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const eurToUSD = 1.1;

// Pipeline de Metodos
const totalDepositsUSD =
movements.filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
