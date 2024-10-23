// ---- Valores ----

console.log("Daniel");
console.log(23);

// ---- Variables ----

// Declaracion de Variables
let firstName = 'Daniel';
console.log(23);

// Formas de Declarar Variables
let edad = 30;                  // Puede mutar su valor
edad = 31;

const primerNombre = "Jonas";   // No cambia su valor


// Tipos de Datos

let age = 23;           // Number
let name = 'Daniel';    // String
let fullAge = true;     // Boolean
let children;           // Undefined

// Conocer el Tipo de Dato
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof(javaScriptIsFun));
console.log(typeof(firstName));
console.log(typeof(children));

// ---- Conversion de Datos ----

// Conversión de Datos

const inputYear = '1991';
console.log (inputYear + 18);   // Imprime 199118

// Conversion de inputYear a Numero
console.log(Number(inputYear) + 18);    

// Convertir datos que no se pueden
console.log(Number('Jonas'));   // Retorna NAN

// Coercion de Datos

console.log('I am ' + 23 + ' years old')
console.log('I am ' + String(23) + ' years old')
console.log('23' - '10' - 3);   // 10
console.log('23' + '10' + 3);   // 23103

// ---- Falsy Values ----

// 0; ''; undefined; null; NAN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// ---- Logica Booleana ----

//A: Sara tiene una licencia de conducir.
//B: Sara tiene buena vista.

const tieneLicencia = true;     // A
const tieneBuenaVista = true;   // B

console.log(tieneLicencia && tieneBuenaVista);  // AND
console.log(tieneBuenaVista || tieneLicencia);  // OR
console.log(!tieneLicencia);    // NOT

if (tieneBuenaVista && tieneBuenaVista){
    console.log('Sarah is able to drive!');
}else{
    console.log('Someone else should drive');
}