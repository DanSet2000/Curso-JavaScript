'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Manejo de Errores Manualmente

// Funcion para Renderizar Errores
const renderError = function(message){
  countriesContainer.insertAdjacentText('beforeend', message);

  countriesContainer.style.opacity = 1;
}


// Manejando Promesas Rechazadas

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

// Funcion para obtener Datos y convertir a JSON
const getJSON = function(url, errorMessage = 'Something went wrong'){
  fetch(url).then(function(response){
    if(!response.ok){
    throw new Error(`Country not found ${response.status}`)
    } 

    return response.json(); // Convertir a JSON)
  })
};
// Consumir la Promesa

// Encadenando Promesas 

const getCountryData = function (country) {
  // País principal
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not Found')
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // País fronterizo
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');
    })
    .then(function (data) {
      renderCountry(data, 'neighbour');
    })
    // Manejo de Errores
    .catch(function(error){
      console.error(`${error} 💣💣💣`);
      return renderError(`Something went wrong ${error}, Try Again!`)
    })
    // Metodo Adicional que sucede pase lo que pase con la Promesa
    .finally(function(){
      countriesContainer.style.opacity = 1;
    })
};

// Funcionar al Presionar un Boton
btn.addEventListener('click', function(){
  getCountryData('portugal');
})
