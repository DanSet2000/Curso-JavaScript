'use strict'

/*
    Desafio de Programación #3

    1. Usar una función de constructor para implementar un 'Electric Car (EV)' como un hijo
       de la clase 'Car'. Aparte de los otros métodos también se tiene el nivel de carga
       en porcentaje ('charge').
    2. Implementar un método 'chargeBattery' el cual toma un argumento 'chargeTo' y setea 
       la carga de la bateria en 'chargeTo'   
    3. Implementar un metodo 'accelerate' el cual incremente la velocidad del auto en 20 y
       gasta la batería en 1%. Escribir en consola un mensaje:
       'Tesla going at 140 km/h, with a charge of 22%'
    4. Crear un auto electrico y experimentar con los metodos.
    
    DATA CAR: 'Tesla' going at 120 km/h, with a charge of 23%
*/

// Solucion

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

// Métodos en el prototipo de Car
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h`);
};
  
const ElectricCar = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

// Enlazar los Prototipos
ElectricCar.prototype = Object.create(Car.prototype);

// Metodo chargeBattery
ElectricCar.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}

// Metodo accelerate
ElectricCar.prototype.accelerate = function(){
    this.speed = this.speed + 20;
    this.charge = this.charge - 1;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`)
}

// Instancia de auto electrico
const tesla = new ElectricCar('Tesla', 120, 23)
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
