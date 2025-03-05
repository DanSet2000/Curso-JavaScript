'use strict';

// ---- Números, Fechas y Temporizadores ----

// Internacionalización de Fechas

const now = new Date();
// Formateando como se verá la fecha
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: '2-digit',
  year: '2-digit',
  weekday: 'long',
}

const locale = navigator.language;

// Asignando el Formato a Usar
const labelDate = document.querySelector('.labelDate');
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

// Internacionalización de Numeros

const num = 3884764.23;
// Formateando como se verá el numero
const opciones = {
  style: 'currency',  // percent, unit, currency
  unit: 'celsius',
  currency: 'EUR',
}


console.log('US',new Intl.NumberFormat('en-US', opciones).format(num));         // US 3,884,764.23
console.log('Germany',new Intl.NumberFormat('de-DE', opciones).format(num));    // DE 3,884,764.23
console.log('Syria',new Intl.NumberFormat('ar-SY', opciones).format(num));      // US 3,884,764.23

console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));
