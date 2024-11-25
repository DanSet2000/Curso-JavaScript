'use strict';

// ---- Spread Operator ----

const array = [7, 8, 9];

// Agregando nuevos elementos al arreglo usando Spread
const newArray = [1, 2, ...array];  // 1  2  7  8  9
console.log(newArray);      // [1, 2, 7, 8, 9]
console.log(...newArray);   // 1  2  7  8  9

// Ejercicio

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

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is you pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
};

// Agregar un nuevo elemento al menu

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu);

// USOS

// Copiar un arreglo
const mainMenuCopy = [...restaurant.mainMenu];

// Unir dos arreglos
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables
const str = 'Daniel';
const letters = [...str, ' ', 'S'];
console.log(letters);

// Ejercicio con una Funcion
const ingredients = [
  prompt('Lets make pasta! Ingredient 1?'),
  prompt('Lets make pasta! Ingredient 2?'),
  prompt('Lets make pasta! Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
