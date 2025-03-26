'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Consumo de Promesas

const lotteryPromise = new Promise(function(resolve, reject){

  console.log('Lotter draw is happening!')
  setTimeout(function(){
    // Generar un numero aleatorio
    if (Math.random() >= 0.5){
      resolve('You Win 💵');  // Promesa Cumplida
    } else{
      reject(new Error('You Lose :('));  // Promesa Rechazada
    }
  }, 2000)
});

lotteryPromise.then(function(response){
  console.log(response)
})
.catch(function(error){
  return console.error(error);
})

// Funcion de Espera que retorna una promesa
const wait = function(seconds){
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000);
  })
};

wait(2).then(function(){
  console.log('I waited for 2 Seconds')
  return wait(1);
}).then(function(){
  console.log('I waited for 1 Second')
});