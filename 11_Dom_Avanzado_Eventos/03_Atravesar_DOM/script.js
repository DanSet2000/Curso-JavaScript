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


////////////////////////////////////////////////////////////////////////////////////////

// -- Al hacer clic en un botón se desplazará suavemente hacia la sección indicada.

// Seleccion de los elementos a usar
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
  // Obtener coordenadas al elemento a desplazarse
  const section1Coords = section1.getBoundingClientRect();
  // Scrolling
  // window.scrollTo(section1Coords.left + window.pageXOffset, section1Coords.top + window.pageYOffset);
  // Forma mas sencilla
  /*
  window.scrollTo({
    left: section1Coords.left + window.pageXOffset,
    top: section1Coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  */
  // Manera más moderna
  section1.scrollIntoView({behavior: 'smooth'});
});

////////////////////////////////////////////////////////////////////////////////////////

// -- Atravesar el DOM

const h1 = document.querySelector('h1');

// Ir hacia abajo: Seleccionando elementos HIJO
console.log(h1.querySelectorAll('.highlight'))

// Hijos directos
console.log(h1.childNodes);
console.log(h1.children); // Otra manera que brinda una coleccion HTML en vivo

// Primer y Ultimo elemento Hijo
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Ir hacia arriba: Seleccionando elementos PADRE
console.log(h1.parentNode);
console.log(h1.parentElement);

// Elemento padre que no lo sea de manera directa
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Ir hacia los lados: Seleccionando HERMANOS

// Hermanos directos
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// Pasar elemento padre y leer todos los hijos
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(element){
  if (element !== h1) element.style.transform = 'scale(0.5)';
})