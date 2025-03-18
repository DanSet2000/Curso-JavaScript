'use strict'

/*
    Desafio de Programación #2

    1. Usar una función de constructor para implementar un Auto. Este tiene dos propiedades
       "make" y "speed". La propiedad de speed es la velocidad actual en km/h.
    2. Implementar un método "accelerate" que permitirá incrementar la velocidad del auto
       en 10, y registrar la velocidad en consola.
    3. Implementar un método "brake" el cual reducira la velocidad del auto en 5, y 
       registrar la velocidad en consola.
    4. Crear 2 objetos auto y experimentar llamando ambos métodos múltiples veces.
    
    Recrear todo el proceso usando Clases ES6

    2. Agregar un getter llamado "speedUS" el cual retorna la velocidad actual en millas 
       mi/h (dividir para 1.6)
    3. Agregar un setter llamado "speedUS" el cual setea la velocidad actual en mi/h
       (pero la compierte en km/h antes de guardar el valor)
    4. Crear un nuevo auto y experimentar con los metodos acelerar y frenar y los getters   
    
    DATA CAR 1: 'Ford' va a 120 km/h
*/

// Solucion

class Car{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  } 
  
  // Metodos
  accelerate(){
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h`)
  }

  brake(){
    this.speed = this.speed - 5;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h`)
  }

  // Getter
  get speedUS(){
    return this.speed / 1.6;
  }

  // Setter
  set speedUS(speed){
    this.speed = speed * 1.6
  }
}

const ford = new Car('Ford', 120);

console.log(ford.speedUS)
ford.accelerate();
ford.brake();
