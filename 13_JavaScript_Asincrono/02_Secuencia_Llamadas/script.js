'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Secuencia de Llamadas AJAX

// La segunda Llamada solo se ejecutará una vez que lo haga la primera
// Llamada para generar el país fronterizó del país obtenido

const renderCountry = function(data, className = ''){
  // Crear un Template Literal
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(Number(data.population) / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  // Insertar HTML creado en el Template
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}


const getCountryAndNeighbour = function(country){

  // Llamada AJAX para el Pais Elegido
  const request = new XMLHttpRequest();
  // Tipo de Peticion, URL a la que se realiza la Llamada
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  // Enviar la Peticion
  request.send();
  
  request.addEventListener('load', function(){
    // Convertir JSON 
    const [data] = JSON.parse(this.responseText);
    
    // Generar el País Elegido
    renderCountry(data);

    // Obtener el Pais Vecino
    const neigbour = data.borders?.[0];
    // Caso de paises sin otros paises fronterizos
    if (!neigbour) return;

    // Llamada AJAX para el país fronterizo
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neigbour}`);
    request2.send();

    request2.addEventListener('load', function(){
      const data2 = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbour');
    })
  })

}
  
// Multiples llamados en Paralelo
  getCountryAndNeighbour('usa');

// Callback Hell

setTimeout(() =>{
  console.log('1 Second Passed');
  setTimeout(() =>{
    console.log('2 Seconds Passed')
    setTimeout(() =>{
      console.log('3 Seconds Passed')
      setTimeout(() =>{
        console.log('4 Seconds Passed')
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

  
