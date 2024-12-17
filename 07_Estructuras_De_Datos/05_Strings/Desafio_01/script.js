'use strict';

// ---- Desafío de Programación ----

/*
  Escribir un programa que recibe una lista de varios nombres escritos en
  underscore_case y convertirlos en Camel Case

  El input vendrá desde el área de texto insertada en el DOM, y la conversión
  ocurrira cuando el botón indicado es presionado

  TEST DATA:
  underscore_case
  first_name
  Some_Variable
  calculate_AGE
  delayed_departure

  Deberia de producir esta salida (5 console.log separados)

  underscoreCase        ✅
  firstName             ✅✅
  someVariable          ✅✅✅
  calculateAge          ✅✅✅✅
  delayedDeparture      ✅✅✅✅✅
*/

// Solucion

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Seleccionando el boton

document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelector('textarea').value;

    const rows = text.split('\n');  // Separando cada linea

    for (const [index, row] of rows.entries()){
        const [first, second] = row.toLowerCase().trim().split('_')
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
        console.log(`${output.padEnd(20)}${'✅'.repeat(index+1)}`);
    }


});