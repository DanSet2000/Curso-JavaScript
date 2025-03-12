'use strict';

// ---- Programación Orientada a Objetos ----

// Funciones de Constructor y Operador New

// Funcion Constructora de una Persona
const Person = function(firstName, birthYear){
  // Asignando 
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Nunca crear métodos dentro de una Función Constructora
  this.calcAge = function(){
    console.log(2037 - this.birthYear);
  }
};

// Llamando a la funcion 
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Creando Instancias de Objetos
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// Operador para revisar Instancias
console.log(jonas instanceof Person); // True
