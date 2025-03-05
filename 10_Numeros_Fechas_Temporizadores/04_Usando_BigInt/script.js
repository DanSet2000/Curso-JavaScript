'use strict';

// ---- Números, Fechas y Temporizadores ----

// Trabajando con BigInt

// Enteros tradicionales
console.log(2 ** 53 - 1);               // Numero mas grande que JS puede representar
console.log(Number.MAX_SAFE_INTEGER);   // El Mismo

// BigInt
console.log(123248734873489348934583495342890623980n);  // La n transforma de numero normal a BigInt
console.log(BigInt(123248734873489348934583495342890623980));   

// Operaciones con BigInt
console.log(10000n + 10000n);
console.log(10000n * 2000n);

// Comparacion y Excepciones
console.log(20n > 15);      // True
console.log(20n === 20);    // False
console.log(typeof 20n);
console.log(20n === '20');  // True

const huge = 128912398123n;
console.log(huge + ' is really big number!');

// Divisiones
console.log(10n / 3n);  // Devuelve el BigInt mas cercano
