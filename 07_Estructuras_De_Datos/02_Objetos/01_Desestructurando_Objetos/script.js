'use strict';

// ---- Desestructuracion de Objetos ----

// Objeto Restaurante

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
};

// Definir algunas variables y escribir exactamente los nombres de las propiedades para extraerlos

// Desestructurando el Objeto Restaurante
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Usando nombres diferentes para las variables
// Nombre Actual: Nuevo Nombre
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Establecer valores predeterminados
const { menu = [],  starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutacion de Variables al Desestructurar Objetos
let a = 111;
let b = 999;
const object = {a: 23, b: 7, c: 14};

//{a, b} = obj; -- Error de Sintaxis
({ a, b } = object);   // a = 23   b = 7
console.log(a, b);

// Objetos Anidados
const {
    fri: { open, close },
} = openingHours;
console.log(open, close);

// Ejercicio de Funcion
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sol, 21',
    mainIndex: 2,
    startedIndex: 2,
});

restaurant.orderDelivery({
    address: 'Via del Sol, 21',
    startedIndex: 1,
});