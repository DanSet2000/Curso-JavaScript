'use strict';

// ---- Números, Fechas y Temporizadores ----

// Fechas

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};
  

// ---- Crear una fecha ----

// Obtener la fecha actual
const now = new Date();
console.log(now);
// Parseando una fecha a partir de una Cadena
console.log(new Date('Mar 04 2025 17:45:49'));
// Escribiendo uno la fecha
console.log(new Date('December 24, 2015'));
// A partir de un objeto
console.log(new Date(account1.movementsDates[0]))
// Ingresando Datos separados
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Los meses empiezan en 0

// ---- Trabajando con Fechas ----
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

// Obtener el Año
console.log(future.getFullYear());
// Obtener el Mes
console.log(future.getMonth());
// Obtener el Día
console.log(future.getDate());
// Obtener el Dia de la Semana
console.log(future.getDay());
// Formatear Cadena en Estandar ISO
console.log(future.toISOString());

// ---- Operaciones con Fechas ----

// Restar fechas para obtener dias que pasan entre ambas
const calcDaysPassed = function(date1, date2){
  return Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
}

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);