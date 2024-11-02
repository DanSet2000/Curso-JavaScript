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

