'use strict';

// ---- Bucles en Arreglos: Ciclo For-Of ----

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


// Arreglo con todo el Menu usando Spread
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Declarando Bucle For-Of
for (const item of menu){
    console.log(item);
}

// Mostrando el Elemento y el Indice Actual
for (const item of menu.entries()){
    console.log(`${item[0] + 1}: ${item[1]}`)
}

// Mostrando el Elemento y el Indice Actual Desestructurandolo
for (const [item, element] of menu.entries()){
    console.log(`${item + 1}: ${element}`)
}