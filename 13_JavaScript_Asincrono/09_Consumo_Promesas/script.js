'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Consumo de Promesas con Async / Await

const getPosition = function(){
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

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

getPosition().then(function(position){
  console.log(position)
});

// Funcion Asincrona 
const whereAmI = async function(country){
  // Geolocalizacion
  const posistion = await getPosition();
  const { latitude: lat, longitude: lng } = position.coords;

  // Reverse Geocoding
  const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
  const dataGeo = await resGeo.json();

  // Country Data
  const response = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryCode}`);

  const data = await response.json();
  renderCountry(data[0]);
};

whereAmI('Portugal');
btn.addEventListener('click', whereAmI)