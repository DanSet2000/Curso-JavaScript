'use strict';

// ---- Iteración sobre Objetos ----

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

// Obtener las propiedades de un Objeto
const properties = Object.keys(restaurant.openingHours);
console.log(properties);    // Thu Fri Sat

let openString = `We are open on ${properties.length} days: `;


// Iteracion sobre los Nombres de las Propiedades (Keys)

for (const day of Object.keys(restaurant.openingHours)){
    openString += `${day}, `;
}

console.log(openString);

// Iteracion sobre los Valores de las Propiedades (Funciona igual que con Propiedades)

const values = Object.values(restaurant.openingHours);
console.log(values);

// Iteracion sobre el Objeto Entero

// Entries (Llave y Valor)
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
  