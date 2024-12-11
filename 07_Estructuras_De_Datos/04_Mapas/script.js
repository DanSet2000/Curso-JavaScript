'use strict';

// ---- Mapas ----

// Declarando un nuevo Mapa

const rest = new Map();

// Llenando el Mapa
rest.set('name', 'Classico Italiano');  // Clave - Valor
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisboa, Portugal');

// Encandenando Varios Sets
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']) 
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed D:');

// Leer los datos de un Mapa

console.log(rest.get('name'));
console.log(rest.get((true)));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Ver si existe una propiedad o no en el Mapa
console.log(rest.has('categories'));

// Eliminar una propiedad del mapa
rest.delete(2);
console.log(rest);

// Tamaño de un mapa
console.log(rest.size);

// Limpiar un mapa
//rest.clear();

// Usando un arreglo como propiedad
rest.set([1, 2], 'Test');
console.log(rest);

// ---- Iteraciones sobre Mapas ----

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your Answer'));

console.log(answer);

if (answer === 3) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

// Convertir un Map en un Array

console.log([...question]);
