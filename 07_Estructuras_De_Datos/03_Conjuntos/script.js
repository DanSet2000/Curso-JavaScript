'use strict';

// ---- Conjuntos (Sets) ----


// Declaracion de Conjuntos
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);     // Set(3) {Pasta, Pizza, Rissoto}

// Nuevo conjunto de Cadena
console.log(new Set('Daniel'));

// ---- Operaciones con Conjuntos ----

// Obtener el tamaño de un Conjunto
console.log(ordersSet.size);

// Comprobar si un elemento existe dentro del Conjunto
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// Agregar elementos a un Conjunto
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Eliminar elementos a un Conjunto
ordersSet.delete('Garlic Bread');
console.log(ordersSet);

// Eliminar todos los elementos de un Conjunto
/*ordersSet.clear();*/

// Iteraciones sobre un Conjunto

for (const order of ordersSet) {
    console.log(order);
}

// ---- Ejemplo ----

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// Cuantas letras hay en un conjunto de un Nombre

console.log(new Set('danielcarvajal').size);

// ---- Nuevas Operaciones con Conjuntos ----

// Conjuntos 
const italianFood = new Set(['pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil']);

const mexicanFood = new Set(['tortillas', 'beans', 'rice', 'tomatoes', 'avocado', 'garlic']);

// Encontrar elementos comunes entre 2 Conjuntos
const commonFood = italianFood.intersection(mexicanFood);
console.log('Intersection:', commonFood)
console.log([...commonFood]);   // Creando un Arreglo

// Todos los elementos presentes en 2 Conjuntos
const italianMexicanFusion = italianFood.union(mexicanFood);
console.log('Union:', italianMexicanFusion);

// Un nuevo conjunto que tiene todos los elementos presentes en el 1er Conjunto pero no el 2do
const uniqueItalianFood = italianFood.difference(mexicanFood);
console.log('Difference:', uniqueItalianFood);

const uniqueMexicanFood = mexicanFood.difference(italianFood);
console.log('Difference:', uniqueMexicanFood);

// Elementos presentes en los 2 Conjuntos pero no en Ambos 
const uniqueItalianAndMexicanFood = italianFood.symmetricDifference(mexicanFood);
console.log('Symetric Difference:', uniqueItalianAndMexicanFood)