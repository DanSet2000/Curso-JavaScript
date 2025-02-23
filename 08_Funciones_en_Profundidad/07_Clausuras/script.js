'use strict';

// ---- Funciones en Profundidad ----

// Clausuras o Cierres

const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
};

const booker = secureBooking();

booker();
booker();
booker();