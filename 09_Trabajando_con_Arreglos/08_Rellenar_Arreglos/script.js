'use strict';

// ---- Trabajando con Arreglos ----

// Crear y Rellenar Arreglos Automáticamente

const x = new Array(7); // Crea un arreglo con 7 elementos vacios

// En esta matriz se puede llamar el metodo fill()
x.fill(1);  // Llena la matriz con ese valor [1, 1, 1, 1, 1, 1, 1]

x.fill(1, 3);     // Se empieza a llenar desde la posición 3
x.fill(1, 3, 5);  // Se empieza a llenar desde la posición 3 a la 5

// Array.from()
const y = Array.from({length: 7}, function(){
  return 1;
});
console.log(y);   // [1, 1, 1, 1, 1, 1, 1]

// Crear un arreglo de 1 a 7

const z = Array.from({length: 7}, function(_, index){
  return index + 1;
})
console.log(z);