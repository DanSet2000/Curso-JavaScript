'use strict';

// Guardando el contenido en una variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Funciones para Abrir y Cerrar el Modal
const openModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Usando QuerySelectorAll
for (let i = 0; i < btnsOpenModal.length; i++){

    btnsOpenModal[i].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Eventos de Teclado
    document.addEventListener('keydown', function(e){
        console.log(e.key);

        if (e.key === 'Escape'){
            if (!modal.classList.contains('hidden')){
                closeModal();
            }
        }
    })
}





