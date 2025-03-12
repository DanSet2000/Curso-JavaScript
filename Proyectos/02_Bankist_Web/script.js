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

// -- Eventos Relacionados con el Mouse

const h1 = document.querySelector('h1');

const alertH1 = function(e){
  alert('addEventListener: Great! You are reading the heading :D')

  // h1.removeEventListener('mouseenter', alertH1);  // Remover una vez usado
}

h1.addEventListener('mouseenter', alertH1)

// Eliminar con un temporizador
setTimeout(function(){
  h1.removeEventListener('mouseenter', alertH1)
}, 3000)

/*
h1.onmouseenter = function(e){
  alert('addEventListener: Great! You are reading the heading :D')
};
*/

////////////////////////////////////////////////////////////////////////////////////////

// -- Eventos de Propagación

// Crear un color aleatorio rgb(255,255,255)

// Generar numero random entre 1 y 255
/*
const randomInt = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funcion para generar color RGB aleatorio
const randomColor = function(){
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
}

// Seleccionar barra de navegacion
document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);    // Target: Donde se originó el evento 

  // Detener la Propagacion
  e.stopPropagation();
})

// Se colorea toda la barra de navegación
document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);    // Target: Donde se originó el evento 
})

document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target, e.currentTarget);    // Target: Donde se originó el evento 
})
*/

////////////////////////////////////////////////////////////////////////////////////////

// -- Eventos de Delegación

// Opcion más Antigua 

/*
// Seleccionar elementos de la barra de navegacion
document.querySelectorAll('.nav__link').forEach(function(element){
  return element.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);

    // Scroll
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  })
})
*/

// Mejor Opcion

// Agregar el Event Listener al elemento padre en común
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  // Determinar que elemento origina el evento
  console.log(e.target);
  // Estrategia de Emparejamiento
  if (e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    console.log(id);

    // Scroll
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  };
});

////////////////////////////////////////////////////////////////////////////////////////

// -- Componente por Pestañas 

// Seleccionar Pestañas
const tabs = document.querySelectorAll('.operations__tab');
// Seleccionar Contenedores
const tabsContainer = document.querySelector('.operations__tab-container');
// Seleccionar Areas con el Contenido
const tabsContent = document.querySelectorAll('.operations__content');

// Funcionalidad
tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Clausula de Proteccion
  if (!clicked){
    return;
  }

  // Animacion para pestañas no Seleccionadas
  tabs.forEach(function(tab){
    return tab.classList.remove('operations__tab--active');
  })
  tabsContent.forEach(function(content){
    return content.classList.remove('operations__content--active');
  })

  // Animacion al seleccionar cada Pestaña
  clicked.classList.add('operations__tab--active');
  // Activar el Contenido de Cada Pestaña
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

////////////////////////////////////////////////////////////////////////////////////////

// -- Desvanecer Elementos que no se Seleccionan en Barra de Navegación

// Seleccionar Barra de Navegación
const nav = document.querySelector('.nav');

// Funcion para efecto de Desvanecimiento
const handleHover = function (opacity) {
  return function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      siblings.forEach(function (element) {
        if (element !== link) {
          element.style.opacity = opacity;
        }
      });
      logo.style.opacity = opacity;
    }
  };
};

// Evento de Mouse (Pasando un "Argumento" en el Manejador de Eventos)
nav.addEventListener('mouseover', handleHover(0.5));
nav.addEventListener('mouseout', handleHover(1));

////////////////////////////////////////////////////////////////////////////////////////

// -- Evento de Scroll en la Barra de Navegación (Navegación Fija)

// Definir punto de aparicion Barra
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function(){
  console.log(this.window.scrollY);

  if (this.window.scrollY > initialCoords.top){
    return nav.classList.add('sticky')
  }else{
    return nav.classList.remove('sticky')
  }

})

////////////////////////////////////////////////////////////////////////////////////////

// -- Revelando Elementos a Medida Que se Acerca a Ellos

// Uso de la API Observador de Intersecciones

// Seleccionar todas las secciones a ver
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
  const [entry] = entries;
  entries.forEach(function(entry){
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  })


}

const sectionObserver = new IntersectionObserver(revealSection,{
  root: null,
  threshold: 0.15,

});

// Iterar sobre la lista de Nodos
allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})

////////////////////////////////////////////////////////////////////////////////////////

// -- Imágenes de Carga Diferida 

// Seleccionar imagenes con la propiedad data-src
const imgTargets = document.querySelectorAll('img[data-src]');

// Funcion de Retorno
const loadImage = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  // Remplazar src con data-src
  entry.target.src = entry.target.dataset.src;
  
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  })
}

const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

// Iteracion
imgTargets.forEach(function(image){
  return imgObserver.observe(image);
})

////////////////////////////////////////////////////////////////////////////////////////

// -- Construyendo un Componente de Control Deslizante

// Seleccion de elementos
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

// Slide actual
let curSlide = 0;
const maxSlide = slides.length;

//const slider = document.querySelector('.slider');
//slider.style.transform = 'scale(0.4) translateX(-800px)';
//slider.style.overflow = 'visible';

// Crear puntos de cada Slide
const createDots = function(){
  slides.forEach(function(_, index){
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${index}"></button>`);
  });
}
createDots();

// Poniendo Slides de Lado a Lado
slides.forEach(function(slide, index){
  slide.style.transform = `translateX(${100 * index}%)`
})
// 0%, 100%, 200%, 300%

// Funcion para ir a Slide
const goToSlide = function(curSlide){
  slides.forEach(function(slide, index){
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
};

// Ir al Slide Inicial
goToSlide(0);

// Ir al siguiente Slide
const nextSlide = function(){
  if (curSlide === maxSlide - 1){
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

// Ir al anterior Slide
const prevSlide = function(){
  if (curSlide === 0){
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

// Eventos de los Botones
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// Agregar eventos de teclado
document.addEventListener('keydown', function(e){
  console.log(e)

  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
})

dotContainer.addEventListener('click', function(e){
  if (e.target.classList.contains('dots_dot')){
    const {slide} = e.target.dataset.curSlide;
    goToSlide(slide)
  }
})