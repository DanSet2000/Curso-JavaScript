'use strict';

// ---- Rest Pattern ----

// Hace lo contrario al operador "Spread"

// 1) Desestructuracion

const array = [1, 2, ...[3, 4]];    // Spread, Derecha del Operador

const [a, b, ...others] = [1, 2, 3, 4, 5];  // Rest, Izquierda del Operador
console.log(a, b ,others);  // 1 2 [3, 4, 5]

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

// Ejemplo

const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]  
console.log(pizza, risotto, otherFood);

// Objetos

const { sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);  // thu, fri

// 2) Funciones

const add = function(...numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

// Funcion del Objeto
restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');