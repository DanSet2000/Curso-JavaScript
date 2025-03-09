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

////////////////////////////////////////////////

// Estilos, Atributos y Estilos

// ---- Estilos ----
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

// Obtener todas las propieades y valores
console.log(getComputedStyle(message));
// Obtener solo una propiedad
console.log(getComputedStyle(message).color);
// Cambiar una variable 
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// Propiedades Personalizadas de CSS
document.documentElement.style.setProperty('--color-primary', 'orangered');

// ---- Atributos ----
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
// Con atributos no Estandar no funciona
console.log(logo.designer);
console.log(logo.getAttribute('designer')); // De esta manera si funciona

// Establacer Atributos
logo.alt = 'Beautiful minimalist Logo';
logo.setAttribute('company', 'Bankist')

const link = document.querySelector('.nav__link-btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Atributos de Datos
console.log(logo.CDATA_SECTION_NODE.versionNumber);

// ---- Clases ----
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();
