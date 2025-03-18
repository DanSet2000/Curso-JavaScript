'use strict';

// ---- Programación Orientada a Objetos ----

// Clases ES6

// Implementando una Clase (Expresión)
// const PersonCl = class{}

// Implementando una Clase (Declaracion)
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

  // Setter
  // Setear una propiedad que ya existe
  set fullName(name){
    if (name.includes(' ')){
      this._fullName = name;
    }else{
      alert(`${name} is not a full name!`)
    }
  }

  // Crear metodo estático
  static hey(){
    console.log(`Hey there :)`);
  }
}

// Creando una Instancia de la Clase
const jessica = new PersonCl('Jessica Davis', 1996); 
console.log(jessica);
jessica.calcAge();
// Usando el getter de la Clase
console.log(jessica.age);

// Verificando el Setter
const walter = new PersonCl('Walter White', 2002);

// Agregando un método de manera manual
PersonCl.prototype.greet = function(){
  console.log(`Hey ${this.firstName}`);
}

jessica.greet();

// ---- Getters and Setters ----

// Ejemplo en un Objeto
const account = {
  owner: 'Jonas',
  movements: [200, 520, 120, 300],

  // Añadir un getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Añadir un setter
  set latest(movement){
    this.movements.push(movement);
  }
};

// Usando el Getter
console.log(account.latest);
// Usando el Setter
account.latest = 50;

// ---- Métodos Estáticos ----

PersonCl.hey = function(){
  console.log(`Hey there :)`);
}

PersonCl.hey();
//jonas.hey();  // Esto no funciona, hey no está en el prototipo de Jonas


// ---- Object.create ----

// Prototipo de todos los objetos Persona
const PersonProto = {
  calcAge(){
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

// Nuevo objeto vinculado al prototipo
const steven = Object.create(PersonProto);
console.log(steven);
// Agregando Propiedades 
steven.name = 'Steven',
steven.birthYear = 2002;
steven.calcAge();

// Verificando el Prototipo
console.log(steven.__proto__ === PersonProto);

// Creando otra Persona
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();