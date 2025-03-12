'use strict';

// ---- Programación Orientada a Objetos ----

// Prototipos

// Funcion Constructora de una Persona
const Person = function(firstName, birthYear){
  // Asignando 
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Nunca crear métodos dentro de una Función Constructora
  /*this.calcAge = function(){
    console.log(2037 - this.birthYear);
  }*/
};

// Llamando a la funcion 
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Creando Instancias de Objetos
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// Operador para revisar Instancias
console.log(jonas instanceof Person); // True

// ---- PROTOTIPOS ----

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype)

// Herencia de Prototipos
jonas.calcAge();
matilda.calcAge();

// Prototipo de Jonas
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

// Verificar si es un Prototipo
console.log(Person.prototype.isPrototypeOf(jonas)); // True
// Person es el prototipo de jonas, matilda y jack
console.log(Person.prototype.isPrototypeOf(Person)); // False

// Establecer Propiedades en el Prototipo
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

// ---- HERENCIA Y CADENA DE PROTOTIPOS EN OBJETOS ----