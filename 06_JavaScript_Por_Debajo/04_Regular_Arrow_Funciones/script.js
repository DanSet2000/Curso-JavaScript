'use strict';

// ---- Regular vs Arrow Functions ----

var firstName = 'Matilda';  // Con esto la  funcion greet si usara 'Hey Matilda'

const daniel = {
    firstName: 'Daniel',
    year: 2000,
    calcAge: function(){
        console.log(2024 - this.year)
    },

    // Funciones de Flecha no tienen su propia palabra clave "this"
    greet: () => console.log(`Hey ${this.firstName}`),  // Undefined
}

jonas.greet();
