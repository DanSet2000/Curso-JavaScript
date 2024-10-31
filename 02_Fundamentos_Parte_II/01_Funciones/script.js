'use strict';

// ---- Funciones ----

// Crear una funcion

function logger(){
    console.log('My name is Daniel');
}

// Llamar o Invocar la Funcion
logger();

// Ejemplo de Funcion

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`

    return juice;
}

const appleJuice = fruitProcessor(5, 0);    // Para poder ver Juice
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(5, 2);
console.log(appleOrangeJuice)

// ---- Funciones: Declaraciones vs Expresiones ----

// Declaracion

function calcAge1(birthYear){
    return 2024 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);

// Expresion

const calcAge2 = function (birthYear){
    return 2024 - birthYear;
}

const age2 = calcAge2(1995);
console.log(age2);

// ---- Funcion de Flecha ----

const calcAgeArrow = birthYear => 2024 - birthYear;  
// Escribimos que es lo que queremos retornar

const age3 = calcAgeArrow(1995);
console.log(age3);

// Ejemplo más Amplio

const yearsUntilRetirement = birthYear => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;

    return retirement;
}

console.log(yearsUntilRetirement(1991));

// Ejemplo con más Parámetros

const nameYearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years.`;
}

console.log(nameYearsUntilRetirement(1965, 'Daniel'));

// ---- Funcion Que Llama a Otras Funciones ----

function cutFruitPieces(fruit){
    return fruit * 4;
}

function procesadorFruta(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`

    return juice;
}

console.log(procesadorFruta(2, 3))