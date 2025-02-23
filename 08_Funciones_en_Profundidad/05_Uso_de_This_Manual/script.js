'use strict';

// ---- Funciones en Profundidad ----

// Métodos Call y Apply 

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book: function(fligthNum, passengerName){
        console.log(`${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${fligthNum}`)
   
        this.bookings.push({flight: `${this.iataCode}${fligthNum}`, passengerName})
    },

}

lufthansa.book(239, 'Daniel Carvajal');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

// Guardar la funcion "Book" dentro de una variable 
const book = lufthansa.book

// book(23, 'Sarah Williams'); No Funciona

// ---- Call ----

// Hacia donde se apunta la palabra this, y luego el resto de la función
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings.bookings);

book.call(lufthansa, 239, 'Juan Emilio');

// ---- Apply -----

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

// Toma una matriz de Argumentos
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss);

// Forma moderna de hacer lo mismo de Apply
book.call(swiss, ...flightData);

// ---- Bind -----

const bookEW = book.bind(eurowings);
bookEW(123, 'Steven Williams');

const bookLH = book.bind(lufthansa);
bookTame(456, 'Juanito Escarcha');

const bookLX = book.bind(swiss);
bookLX(789, 'Sarah Logan');

// De Manera Específica
const bookEW23 = book.bind(eurowings, 23); // Seteando el primer argumento a 23
bookEW23('Alfredo Mateos'); // Solo necesita el nombre ahora

// Con Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// Pasar a una funcion, se necesita Bind
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(tame));