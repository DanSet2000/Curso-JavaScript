'use strict';

// ---- Iteraciones ----

// Ciclo For

// Ejemplo de Ciclo For
for(let rep = 1; rep <= 10; rep++){
	console.log(`Levantando Peso: Repetición ${rep}`)
}

// Recorriendo un arreglo usando el ciclo For
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < days.length; i++){
	console.log('Today is: ' + days[i]);
}

// Guardando elementos en un nuevo arreglo
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
	ages[i] = 2024 - years[i]
};

console.log(ages);

// Recorrer una matriz de manera inversa

for (let i = years.length - 1; i >= 0; i--){
    console.log(years[i]);
}

// Un bucle for Anidado

// Bucle indicando que se hacen 3 ejercicios
for (let exercise = 1; exercise < 4; exercise++){
    console.log('------- Iniciando Ejercicio ' + exercise)

		// Bucle indicando que se realizan 5 repeticiones por cada ejercicio
    for (let rep = 1; rep < 6; rep++){
         console.log('Ejercicio: ' + exercise + ' Levantando peso en la Repeticion: ' + rep)
    }
}


// ---- While ----

// Usando el ciclo While
let rep = 1;

while (rep <= 10){
    console.log('Levantando peso en la repeticion: ' + rep);
    rep++;
}

// Ciclo While sin usar un contador

let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6){
    console.log('Haz sacado un: ' + dice);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice ===6) console.log('El ciclo va a terminar, salió un 6')
}