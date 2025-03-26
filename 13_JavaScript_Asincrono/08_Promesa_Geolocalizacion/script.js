'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Promesa API de Geolocalizacion

const getPosition = function(){
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(function(position){
      resolve(position), function(error){
        reject(error)
      }
    });
  })
}

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

const whereAmI = function(){
  getPosition().then(function(position){
    const {latitude: lat, longitude: lng} = position.coords;

    return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
  })
  .then(function(response){
    if (!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
    return response.json();
  })
  .then(function(data){
    console.log(data);
    console.log(`You are in ${data.city}, ${data.countryCode}`);

    return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
  })
  .then(function(response){
    if (!response.ok) throw new Error(`Country not found (${response.status})`);
    return response.json();  
  })
  .then(function(data){
    renderCountry(data[0]);  
  })
  .catch(function(error){
    console.error(`${error.message}`);
  });
};

btn.addEventListener('click', whereAmI)