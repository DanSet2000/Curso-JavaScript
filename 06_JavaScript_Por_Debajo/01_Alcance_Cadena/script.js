'use strict';

function calcAge(birthYear){
    const age = 2024 - birthYear;

    console.log(firstName); // Cadena de Alcance

    // Alcance de Funcion
    function printAge(){
        const output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996){
            const string = `You're a millenial, ${firstName}`;
            console.log(string);
        }
    }

    printAge();
    return age;

}

// Variable Global
const firstName = 'Daniel';

calcAge(2000);

// No se puede acceder por el alcance
console.log(age);