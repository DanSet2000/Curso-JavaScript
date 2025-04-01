'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Desafio de Programacion #2

/*  1. Crear una funcion 'createImage' la cual recibe como entrada 'imgPath'. Esta funcion
       retorna una promesa la cual agrega una nueva imagen y establece el atributo .src
       a la imagen proporcionada. Cuanoo la imagen termina de cargarse, se añate al DOM con la 
       clase 'Imagen', y se resuelve la promesa. El valor llenado debería ser el elemento de la 
       imagen. En caso de existir un error cargando la imagen, rechazar la promesa.
    2. Consumir la promesa usando .then y agregando el manejo de errores.
    3. Después de que la imagen ha sido cargada, pausar la ejecución por 2 segundos.
    4. Después que hayan pasado los 2 segundos, esconder la imagen actual, y cargar una
       segunda imagen.
    5. Despues que la segunda imagen haya sido cargada, volver a pausar la ejecución por 2 
       segundos.
    6. Despues que hayan pasado 2 segundos más, esconder la imagen actual.   
*/

const wait = function(seconds){
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
  return new Promise(function(resolve, reject){
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function(){
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function(){
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg').then(img => {
  currentImg = img
  console.log('Image 1 Loaded');
  return wait(2);
}).then(()=>{
  currentImg.style.display = 'none'
  return createImage('img/img-2.jpg')
})
.then(img => {
  currentImg = img
  console.log('Image 2 Loaded');
  return wait(2);
})
.then(() => {
  currentImg.style.display = 'none'
})
.catch(err => {
  console.error(err)
})