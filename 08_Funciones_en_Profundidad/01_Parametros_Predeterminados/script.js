'use strict';

// ---- Funciones en Profundidad ----

// Parametros Predeterminados

const bookings = [];

// Funcion que crea un objeto y agrega en el arreglo de Reservas
// Valores por Defecto en los parametros de la funcion
const createBooking = function(flightNumber, numPassengers = 1, price = 199 * numPassengers){
    const booking = {
        flightNumber,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

// Llamando a la función

createBooking('LH123');
createBooking('LH123', 2, 800);