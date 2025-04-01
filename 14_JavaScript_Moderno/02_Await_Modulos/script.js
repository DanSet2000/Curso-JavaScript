'use strict';

// ---- JavaScript Moderno ----

// Importar y Exportar Módulos
console.log('Modulo de Importacion')

// Await en Modulos

//console.log('Start Fetching')
//console.log('Finish Fetching')

// Funcion obtener la ultima publicacion

const getLastPost = async function() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await response.json();

  //console.log(data);

  return {title: data.at(-1).title, text: data.at(-1).body}
}

const lastPost = getLastPost();

console.log(lastPost);

lastPost.then(last => console.log(last))

const lastPost2 = await getLastPost();
console.log(lastPost2)