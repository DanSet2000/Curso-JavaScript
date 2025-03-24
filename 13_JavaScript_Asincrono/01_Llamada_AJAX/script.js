'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// Llamada AJAX

const getCountryData = function(country){
  const request = new XMLHttpRequest();
  // Tipo de Peticion, URL a la que se realiza la Llamada
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  // Enviar la Peticion
  request.send();

  request.addEventListener('load', function(){
    // Convertir JSON 
    const [data] = JSON.parse(this.responseText);

    // Crear un Template Literal
    const html = `<article class="country">
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
  })

}


getCountryData('portugal');
getCountryData('germany')
getCountryData('usa')
getCountryData('ecuador')
