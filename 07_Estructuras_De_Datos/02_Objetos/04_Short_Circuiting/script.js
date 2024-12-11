'use strict';

// ---- Short Circuiting (&&) y (||) ----

// Operador OR (||)

console.log('------- OR -------');

console.log(3 || 'Jonas');          // 3
console.log('' || 'Jonas');         // Jonas
console.log(true || 0);             // True
console.log(undefined || null);     // Null

// Operador AND (&&)

console.log('------- AND -------');

console.log(0 && 'Jonas');          // 0
console.log(7 && 'Jonas');          // Jonas
console.log('Hello' && 23 && null && 'Jonas');  // Null    