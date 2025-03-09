'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function(button){
    return button.addEventListener('click', openModal)
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////

// Seleccionar, Crear y Eliminar Elementos

// ---- Seleccionar ----

// Seleccionar todo el Documento
console.log(document.documentElement)
// Seleccionar solo Cabecera
console.log(document.head);
// Seleccionar solo el Cuerpo
console.log(document.body);

// Seleccionar por medio de Query
const header = document.querySelector('.header');  // Retorna primera coincidencia
// Multiples Elementos
const allSections = document.querySelectorAll('.section');
console.log(allSections);
// Obtener elementos por su ID
document.getElementById('section--1');
// Obtener todos los elementos con el Nombre
const allButtons = document.getElementsByTagName('button'); // Retorna una coleccion HTML con todos los que contienen "button"
console.log(allButtons);
// Obtener todos los elementos por su Nombre de Clase
console.log(document.getElementsByClassName('btn')); // Retorna una colección HTML

// ---- Crear e Insertar Elementos ----

// Crear un elemento, se pone el nombre de la etiqueta a crear
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improve functionality and analytics.';

// Insertar un HTML
message.innerHTML = 'Probando <button class="btn bnt--close--cookie>Got It!</button>'
// Agregar el elemento como el primer hijo.
header.prepend(message);
// Usando clonacion indicando que todos los elementos secundarios se copiarán
header.append(message.cloneNode(true))
// Agrega el elemento como el ultimo hijo.
header.append(message);
// Insertar antes del elemento
header.before(message);
// Insertar despues del elemento
header.after(message);

// ---- Eliminar ----

// Eliminar elementos
document.querySelector('.btn--close--cookie').addEventListener('click', function(){
    message.remove();
    // message.parentElement.removeChild(message);
})
