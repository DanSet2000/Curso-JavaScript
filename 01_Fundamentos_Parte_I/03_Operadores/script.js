// ----- Operadores -----

// Operadores Aritmeticos

const actualYear = 2024;

const ageDaniel = actualYear - 2000;
console.log(ageDaniel);

const ageSalome = actualYear - 1994;
console.log(ageSalome)

console.log(ageDaniel, ageSalome)   // Imprimiendo Varios Valores
console.log(ageDaniel * 2, ageSalome / 3) // Operaciones Aritmeticas
console.log(2 ** 3);    // 2 Elevado a la 3

// Concatenacion

const firstName = 'Daniel';
const lastName = 'Carvajal';

console.log(firstName + ' ' + lastName);

// Operadores de Asignacion

let x = 10 + 5;     // 15
x += 10;            // x = x + 10
x *= 4;             // x = x * 4

x++;                // x = x + 1
x--;                // x = x - 1

// Operadores Comparativos

// >, <, >=, <=
console.log(ageDaniel > ageSalome);     // False
console.log(ageSalome >= 18);           // True