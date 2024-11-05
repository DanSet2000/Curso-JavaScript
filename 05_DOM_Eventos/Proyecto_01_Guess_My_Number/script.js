'use strict';

/* Selector: Mismo selector que usariamos en CSS
   Manejo de Eventos
   Escuchar un evento, pasar el tipo de evento e indicar que debe hacer */

// Generar un numero aleatorio para el juego entre 1 y 20
const secretNumber = Math.trunc((Math.random()*20) + 1);
document.querySelector('.number').textContent = secretNumber;

// Reducir el puntaje con respuestas incorrectas
let score = 20;

// Funcion que revisa si hay un numero al presionar el boton de Check
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess)

    // Comparar el numero con el del usuario
    if (!guess){
        document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🥳 Correct Number!';
    } else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '📈 Too High!';
            score--;    // Reducir Score
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💣 You Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '📉 Too Low!';
            score--;    // Reducir Score
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = '💣 You Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    } 
});

