'use strict';

// ---- Arreglos ----

const friends = ['Michael', 'Steven', 'Jonas'];
console.log(friends);

// Obtener el elemento en una posicion dentro de un arreglo
console.log(friends[0]);    
console.log(friends[1]);
console.log(friends[2]);

// Obtener el tamaño del arreglo 
console.log(friends.length);

// Obtener el ultimo elemento del arreglo
console.log(friends[friends.length - 1])

// Otra manera de declarar un arreglo
const years = new Array(2000, 2005, 2010, 2015);

// Definiendo un nuevo elemento en una posicion ocupada
friends[2] = 'Mathew';

// Arreglo con elementos de diferente tipo
const daniel = ['Daniel', 'Carvajal', 2000, 'Student', friends];

// ---- Ejercicio ----

const calcAge = function(birthYear){
    return 2024 - birthYear
};

// Usando el arreglo de years

const year1 = calcAge(years[0]);
const year2 = calcAge(years[1]);
const year3 = calcAge(years[2]);
const year4 = calcAge(years[3])

// Guardando las edades en un nuevo arreglo
const ages = [year1, year2, year3, year4]
console.log(ages)

// ---- Operaciones de Arreglos ----

// Push: Agrega un elemento al final de un arreglo
const amigos = ['Michael', 'Steven', 'Jonas'];
amigos.push('Cristian');
console.log(amigos);

// La funcion Push devuelve el nuevo tamaño del arreglo.
const newLength = amigos.push('Jay');
console.log (newLength);


// Unshift: Agrega un elemento al inicio de un arreglo
amigos.unshift('John');
console.log(amigos)

// Pop: Elimina un elemento al final de un arreglo.
amigos.pop();

// Shift: Elimina un elemento al inicio del arreglo
amigos.unshift();

// indexOf: Indica en que posicion del arreglo se encuentra un elemento
amigos.indexOf('Steven');
console.log(amigos.indexOf('Steven'));

// Includes: Retorna True si el elemento existe en el arreglo.

// Si encuentra el elemento retorna un true
amigos.includes('Adrian');
// Si no encuentra el elemento retorna un false
amigos.includes('Carlos');

// Condicional
if (amigos.includes('Peter')){
	console.log('Tienes un amigo llamado Peter');
}else{
	console.log('No tienes un amigo con ese nombre');
}	