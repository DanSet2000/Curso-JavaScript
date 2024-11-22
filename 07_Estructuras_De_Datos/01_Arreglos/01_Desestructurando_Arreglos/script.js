'use strict';

// ---- Desestructuracion de Arreglos ----

const numbers = [2, 3, 4];

// Metodo Tradicional
const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

// Desesctructuracion de Arreglos
const [x, y, z] = numbers;
console.log(x, y, z);   // 2  3  4

// Areglos Anidados
const nested = [2, 4, [5, 6]];
//const [i, ,j] = nested; 
//console.log(i, j);  // 2  [5 , 6]
const [i, ,[j, k]] = nested;
console.log(i, j, k);   // 2  5  6

// Establecer valores predeterminados
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);

// Objeto Restaurante

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegatarian', 'Organic'],
    startedMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.startedMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

// Eligiendo el primero y segundo
const [first, second] = restaurant.categories;
console.log(first, second); // Italian   Pizzeria

// Eligiendo el primero y el tercero
const [primero, ,tercero] = restaurant.categories;  // Se deja un espacio en blanco
console.log(primero, tercero);  // Italian    Vegetarian

// Cambiando las categorias
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary);   // Pizzeria  Italian

// Llamando la Funcion
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);   // Garlic Bread   Pizza 