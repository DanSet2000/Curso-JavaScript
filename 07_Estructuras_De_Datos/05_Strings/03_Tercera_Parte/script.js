'use strict';

// ---- Strings ----

// Dividir una cadena 
console.log('a+very+nice+string'.split('+'));
console.log('Daniel Carvajal'.split(' '));

// Creando variables directamente 
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Ejemplo

const capitalizeName = function(name){
    const names = name.split(' ');  // Separando Nombres
    const namesUpper = [];

    for(const word of names){
        namesUpper.push(word[0].toUpperCase() + word.slice(1));      // Primer Letra de Cada Nombre en Mayuscula
    }

    console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');

// Llenando una cadena
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));     // Longitud y Caracter a usar
console.log(message.padEnd(30, '$'));

// Ejemplo 
const maskCreditCard = function(number){
    const string = String(number);
    const last = string.slice(-4);

    return last.padStart(string.length, '*');
}

console.log(maskCreditCard(19489494516));
console.log(maskCreditCard('156165165161'));

// Repetir Múltiples Veces
const mensaje = 'Bad weather.... All Departures Delayed....';
console.log(mensaje.repeat(5));

const planesInLine = function(number){
    console.log(`There are ${number} planes in line ${'✈️'.repeat(number)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(2);