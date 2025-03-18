/*
    Desafio de Programación #1

    1. Usar una función de constructor para implementar un Auto. Este tiene dos propiedades
       "make" y "speed". La propiedad de speed es la velocidad actual en km/h.
    2. Implementar un método "accelerate" que permitirá incrementar la velocidad del auto
       en 10, y registrar la velocidad en consola.
    3. Implementar un método "brake" el cual reducira la velocidad del auto en 5, y 
       registrar la velocidad en consola.
    4. Crear 2 objetos auto y experimentar llamando ambos métodos múltiples veces.
    
    
    DATA CAR 1: 'BMW' yendo a 120 km/h
    DATA CAR 2: 'Mercedes' yendo a 95 km/h
*/

// Solucion

const Car = function(make, speed){
    // Asignando 
    this.make = make;
    this.speed = speed;
};

// Agregar Metodos 
Car.prototype.accelerate = function(){
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h`)
}

Car.prototype.brake = function(){
    this.speed = this.speed - 5;
    cconsole.log(`${this.make} is going at a speed of ${this.speed} km/h`)
}

// Creando Instancias del Objeto Car

const bmw =  new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw);
console.log(mercedes);