'use strict';

// ---- Programación Orientada a Objetos ----

// Herencia de Clases

// ---- Funciones de Constructor ----

const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
};

// Funcion Constructora de Estudiante
const Student = function(firstName, birthYear, course){
  Person.call(this, firstName, birthYear)
  this.course = course;
}

// Prototipo de Estudiante hereda de Persona 
Student.prototype = Object.create(Person.prototype)

// Nuevo metodo
Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__)

console.log(mike instanceof Student);   // True
console.log(mike instanceof Person);    // True

// ---- Clases ES6 ----

class PersonCl {
  // Agregar un Constructor
  constructor(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Metodos serán agregados a las propiedades de .prototype 
  calcAge(){
    console.log(2025 - this.birthYear);
  }

  // Getter 
  get age(){
    return 2025 - this.birthYear;
  }

  get fullName(){
    return this._fullName;
  }

  // Setter
  set fullName(name){
    if (name.includes(' ')){
      this._fullName = name;
    }else{
      alert(`${name} is not a full name!`)
    }
  }

  // Metodo Estatico
  static hey(){
    console.log(`Hey there :)`);
  }

  calcAge(){
    console.log(`I'm ${2025 - this.birthYear} years old, but as a student I feel more like ${2025-this.birthYear+10} years old`)
  }
}

// Clase Estudiante

class StudentCl extends PersonCl{
  constructor(fullName, birthYear, course){
    // Siempre necesitan aparecer primero los de la clase Padre
    super(fullName, birthYear)
    this.course = course;
  }

  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`)
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

// ---- Object.create ----

const PersonProto = {
  calcAge(){
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);

// Crear Estudiantes
const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();