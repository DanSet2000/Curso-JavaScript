'use strict';

// ---- Números, Fechas y Temporizadores ----

// Temporizadores

setTimeout(function(){
    console.log('Here is your pizza')
}, 3000);   // 3 Segundos
console.log('Waiting....');


setTimeout(function(ingredient, ingredient2){
    console.log(`Here is your pizza with ${ingredient} and ${ingredient2}`)
}, 3000, 'olives', 'spinach');   // 3 Segundos



// Cancelar el temporizador
const ingredients = ['olives', 'spinach']

const pizzaTimer = setTimeout(function(ingredient, ingredient2){
    console.log(`Here is your pizza with ${ingredient} and ${ingredient2}`)
}, 3000, ...ingredients);   // 3 Segundos

if (ingredients.includes('spinach')){
    clearTimeout(pizzaTimer)
}

// Intervalos
setInterval(function(){
    const now = new Date();
    console.log(now)
}, 1000)