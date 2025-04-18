'use strict';

/* Selector: Mismo selector que usariamos en CSS
   Manejo de Eventos
   Escuchar un evento, pasar el tipo de evento e indicar que debe hacer */

// Generar un numero aleatorio para el juego entre 1 y 20
let secretNumber = Math.trunc((Math.random()*20) + 1);

// Reducir el puntaje con respuestas incorrectas
let score = 20;

// Almacenar el Highscore en una variable
let highscore = 0;

// Funcion que revisa si hay un numero al presionar el boton de Check
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess)

    // Comparar el numero con el del usuario

    // Caso 1: Cuando no hay un numero en el Input
    if (!guess){
        document.querySelector('.message').textContent = '⛔ No number!';

    // Caso 2: Cuando el jugador adivina el numero    
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🥳 Correct Number!';

        // Se muestra el numero ganador 
        document.querySelector('.number').textContent = secretNumber;


        // Cambiar estilos CSS
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '20rem';

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // Caso 3: Cuando el jugador elige un numero mayor    
    } else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '📈 Too High!';
            score--;    // Reducir Score
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💣 You Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }

    // Caso 4: Cuando el jugador elige un numero menor    
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

// Funcion que Reinicia el Juego
document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    secretNumber = Math.trunc((Math.random()*20) + 1);

    // Setear de nuevo los valores del Score
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    // Setear estilos CSS
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    // Setear el Input
    document.querySelector('.guess').value = '';

});

