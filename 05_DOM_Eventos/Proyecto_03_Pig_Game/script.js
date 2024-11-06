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

// Condiciones de Inicio
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Funcionalidad de Rodar el Dado

btnRoll.addEventListener('click', function(){
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
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
    }

})