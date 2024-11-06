'use strict';

// Seleccionar Elementos
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Funciones para Refactorizar
const init = function(){
    // Condiciones de Inicio
    diceElement.classList.add('hidden');

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    // Seteando todo de nuevo
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
}

init();

function swithPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}

// Funcionalidad de Rodar el Dado

btnRoll.addEventListener('click', function(){

    if (playing){
        // 1. Generar un numero aleatorio para el dado
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Mostrar el dado
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${dice}.png`    // Cargar la imagen del Dado

        // 3. Revisar si el dado cayó en 1
        if (dice !== 1){
            // Agregar Dice al Score
            currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else{
            // Cambiar al otro jugador
            swithPlayer();
        }
    }


})

// Funcionalidad para mantener el Score

btnHold.addEventListener('click', function(){

    if (playing){
        // 1. Agregar el Score actual al del Jugador
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Revisar si el Score del jugador es >= 100
        if (scores[activePlayer] >= 100){
            // Terminar el Juego
            playing = false;
            diceElement.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        }else{
            // Pasar al otro Jugador
            swithPlayer();
        }
    }
})

// Funcionalidad de Nuevo Juego

btnNew.addEventListener('click', init);