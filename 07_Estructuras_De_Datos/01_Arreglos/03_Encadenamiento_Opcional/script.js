'use strict';

// ---- Encadenamiento Opcional (?.) ----

// Objeto
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


// Obteniendo Propiedad que no existe en el Objeto
console.log(restaurant.openingHours.mon);   // Undefined

// Usando Encadenamiento Opcional (?.)
console.log(restaurant.openingHours?.mon?.open);

// ---- Ejemplo ----

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Iterando sobre los dias 

for (const day of days){
    const open = restaurant.openingHours[day]?.open || 'closed';
    console.log(`On ${day}, we open at ${open}`)
}

// Metodos

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arreglos

const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];

console.log(users[0]?.name ?? 'User array empty');