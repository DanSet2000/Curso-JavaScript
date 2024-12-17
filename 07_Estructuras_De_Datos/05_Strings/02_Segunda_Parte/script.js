'use strict';

// ---- Strings ----

const airline = 'TAP Air Portugal';
const plane = 'A320';

// ---- Operaciones con Strings ----

// Cambiar el tamaño de las letras en una cadena
console.log(airline.toLowerCase());       // Minusculas
console.log(airline.toUpperCase());       // Mayusculas

// ---- Ejemplo ----

const passenger = 'jOnAS';                                  // jOnAS
const passengerLower = passenger.toLowerCase();             // jonas
const passengerCorrect = passengerLower[0].toUpperCase + passengerLower.slice(1); // Jonas
console.log(passengerCorrect);

// ---- Ejemplo: Comparing Email ----
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();    // Convertir a minusculas el correo
const trimmedEmail = lowerEmail.trim();         // Eliminar espacios en blanco
console.log(trimmedEmail);

// Sustitucion en las Cadenas

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

// ---- Ejemplo ----
const announcement = 'All passenger come to boarding door 23. Boarding door 23!'
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// Alternativa usando expresion regular
console.log(announcement.replace(/door/g, 'gate'));

// Metodos que retornan Booleans

const avion = 'Airbus A320neo';

// Include
console.log(avion.includes('A320'));
console.log(avion.includes('Boeing'));

// StartsWith
console.log(avion.startsWith('A320'));
console.log(avion.startsWith('Boeing'));

// EndsWith
console.log(avion.endsWith('neo'));
console.log(avion.endsWith('Boeing'));

if(avion.startsWith('Airbus') && avion.endsWith('neo')){
    console.log('Part of the NEW Airbus Family')
};

// ---- Ejercicio ----
const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed on board');
    }else{
        console.log('Welcome aboard!');
    }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');