'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Desafio de Programacion #1

/*
  Crear una funcion denominada 'whereAmI' la cual genera un pais solo basado en las coordenadas
  del GPS.

  Parte 1:

  1. Crear una funcion 'whereAmI' la cual toma como entradas un valor de latitud y longitud
     (estas son coordenadas GPS).
  2. Realizar 'Geocoding inverso' de las coordenadas proporcionadas. Convertir las coordenadas
     en una locación significativa, como una ciudad o un país.
     El AJAX llamara a una URL con un formato. Usar fetch API y promesas para obtener los datos
     No usar getJSON.
  3. Una vez que se tiene la data, tomar un vistazo  en consola para ver los atributos recibidos
     acerca de la localización. Usar estos datos para escribir un mensaje en consola 
     'You are in Berlin, Germany'
  4. Encadenar un metodo .catch para terminar la cadena de promesa y logear errores en consola.
  5. Esta API permite realizar solo 3 peticiones por segundo. Si recargas rapido, obtendra un error
     de código 403. Este es un error con la peitción. Crear un error para rechazar la promesa,
     con un mensaje de error.

  Parte 2:
  
  6. Usar la data recibida para renderizar un país. Obtener el atributo relevante y conectarlo 
     con la API de países.
  7. Mostrar el país y catch cualquier error.

  // APIs a Usar
  https://api.bigdatacloud.net/data/reverse-geocode-client?latitute=${lat}&longitude=${lng}
  
  // TEST DATA

  TEST 1: 52.508, 13.381
  TEST 2: 19.037, 72.873
  TEST 3: -33.933, 18.474

*/

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

const whereAmI = function(lat, lng){
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
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

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873)
whereAmI(-33.933, 18.474)