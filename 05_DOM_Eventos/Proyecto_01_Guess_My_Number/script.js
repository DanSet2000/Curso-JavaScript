'use strict';

// Selector: Mismo selector que usariamos en CSS

// Manejo de Eventos

// Escuchar un evento, pasar el tipo de evento e indicar que debe hacer

// Funcion que revisa si hay un numero al presionar el boton de Check
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess)

    if (!guess){
        document.querySelector('.message').textContent = '⛔ No number!';
    }
});