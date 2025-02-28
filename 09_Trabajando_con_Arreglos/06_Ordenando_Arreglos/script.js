'use strict';

// ---- Trabajando con Arreglos ----

// Ordenando Arreglos

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
const numbers = [250, 300, -150, 75, 1050, -390];
// console.log(numbers.sort());    // No es el resultado esperado.

// Usando una CallBack para Numeros
// 2 Argumentos: Valor Actual y Nuevo Valor

numbers.sort(function(a, b){
    // Ordenar en Orden Ascendente
    if (a > b){
        return 1;
    }
    if (b > a){
        return -1;
    }
});
console.log(numbers);

numbers.sort(function(a, b){
    // Ordenar en Orden Descendente
    if (a > b){
        return -1;
    }
    if (b > a){
        return 1;
    }
})
console.log(numbers);

// Metodos Mas Simplificados

// Orden ascendente
numbers.sort(function(a, b){
    return a - b;
})
console.log(numbers)

// Orden descendente
numbers.sort(function(a, b){
    return b - a;
})
console.log(numbers)

