'use strict';

// ---- Trabajando con Arreglos ----

// Repaso General

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Calcular cuanto se ha depositado en total en el Banco
const bankDepositSum = accounts.map(function(account){
  return account.movements;
}).flat().filter(function(movement){
  return movement > 0;
}).reduce(function(sum, current){
  return sum + current
}, 0);

console.log(bankDepositSum);

// Contar cuántos depósitos hay en el banco de al menos 1000 $
const numDeposits1000 = accounts.flatMap(function(account){
  return account.movements;
}).filter(function(movement){
  return movement >= 1000
}).length;

console.log(`There are ${numDeposits1000} deposits`);

// Crear un objeto que contenga la suma de los depositos y de los retiros
const sums = accounts.flatMap(function(account){
  return account.movements;
}).reduce(function(sums, current){
  if (current > 0) {
    sums.deposits += current;
  } else {
    sums.withdrawals += current;
  }
  return sums; 
}, {deposits: 0, withdrawals: 0})

console.log(sums);

// Funcion para convertir cualquier cadena en un caso de Título
// Es decir todas las palabras tienen mayuscula al inicio excepto algunas palabras
const convertTitleCase = function(title){
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title.toLowerCase().split(' ').map(function(word){
    return exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1);
  }).join(' ');

  return titleCase
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'))