'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Promesas y API Fetch

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


// Nuevo manera de enviar solicitudes

//const request = fetch(`https://restcountries.com/v2/name/portugal`);
//console.log(request); 

// Consumir la Promesa

/*
const getCountryData = function(country){
  fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
    console.log(response);
    // Convertir a JSON los Datos Obtenidos y Retorna una Proemsa
    return response.json();
  }).then(function(data){
    console.log(data);
    renderCountry(data[0]);
  })
}
*/

// Encadenando Promesas 

const getCountryData = function (country) {
  // País principal
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json(); // Convertir a JSON
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      // País fronterizo
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(function (response) {
      return response.json(); 
    })
    .then(function (data) {
      renderCountry(data, 'neighbour');
    })
};

getCountryData('germany')