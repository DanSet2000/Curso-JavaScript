'use strict';

// ---- Operadores de Asignacion Logica ----

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegatarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,    // Abierto las 24 horas
            close: 24,
        }
    },

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({
        starterIndex = 1, 
        mainIndex = 0, 
        time = '20:00', 
        address}){
        console.log(`Order Received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    // Funcion usando Spread
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is you pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    // Funcion usando Rest
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// Creacion nuevos Objetos

const restaurant1 = {
    name: 'Capri',
    numGuests: 20,
}

const restaurant2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
}

// Asignando numGuests en ambos Restaurantes

restaurant1.numGuests = restaurant1.numGuests || 10;
restaurant2.numGuests = restaurant2.numGuests || 10;

console.log(restaurant1);
console.log(restaurant2);

// Operador de Asignacion de OR: Más conciso

restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;

// Operador de Asignacion de Conocimiento Teológico

restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

// Operador de Asignación Final Teológico
// Anonimizar los nombres del dueño del Restaurante

restaurant1.owner = restaurant1.owner && '<ANONYMOUS>';     // Undefined
restaurant2.owner = restaurant2.owner && '<ANONYMOUS>';     // ANONYMOUS

restaurant1.owner &&= '<ANONYMOUS>';
restaurant2.owner &&= '<ANONYMOUS>';
