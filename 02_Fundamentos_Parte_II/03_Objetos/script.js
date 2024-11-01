'use strict';

// ---- Objetos ----

const daniel = {
	firstName: 'Daniel',
	lastName: 'Carvajal',
	birthYear: 2000,
	job: 'Student',
	friends: ['Michael', 'Steven', 'Peter'],
	hasDriversLicense: true,

	calcAge: function(birthYear){
		return 2024 - birthYear;
	}

	// Usando this en la funcion
	/*calcAge: function(){
		return 2024 - this.birthYear;
	}*/
}

console.log(daniel);

// Obtener los elementos de un Objeto

// Dot Notation
console.log(daniel.lastName);

// Bracket Notation
console.log(daniel['lastName']);

const nameKey = 'Name';
console.log(daniel['first' + nameKey]); 	// firstName
console.log(daniel['last' + nameKey]); 		// lastName

// Agregar Propiedades a un Objeto

// Dot Notation
daniel.location = 'Ecuador';

// Bracket Notation
daniel['twitter'] = '@DanielC';

// Challenge

// "Daniel has 3 friends, and his best friend is called Michael"

console.log(`${daniel.firstName} has ${daniel.friends.length} friends, and his best friend is called ${daniel.friends[0]}`)

// ---- Métodos de los Objetos ----

console.log(daniel.calcAge(1991));		// Dot Notation
console.log(daniel['calcAge'](2000));	// Bracket Notation

// Challenge

// "Daniel is a 23 year old teacher, and he has a driver's license."

console.log(`${daniel.firstName} is a ${daniel.calcAge(2000)} year old teacher, and he has ${daniel.hasDriversLicense ? 'a' : 'no'} driver's license.`)