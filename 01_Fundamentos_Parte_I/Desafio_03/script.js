/*
  Hay dos equipos de gimnasia: Delfines y Koalas. Compiten entre ellos 3 veces. 
  El ganador con la puntuación media más alta gana un trofeo.

  Tus tareas:

  1. Calcule la puntuación media de cada equipo, utilizando los datos de la prueba 
     incluidos a continuación. La puntuación media de los Delfines debe asignarse a la variable puntuaciónDelfines, y la puntuación media de los Koalas debe asignarse a la variable puntuaciónKoalas.
  2. Compara las puntuaciones medias de los equipos para determinar el ganador de 
     la competición, e imprime en la consola:

  **«Los Delfines ganan el trofeo»** si ganan los Delfines, o

  **«Koalas gana el trofeo»** si gana Koalas, o

  **«Ambos ganan el trofeo»** si sus puntuaciones medias son iguales.

  **DATOS DE LA PRUEBA:** Los delfines obtuvieron 96, 108 y 89 puntos. Los koalas obtienen 88, 91 y 110 puntos.
*/

// Variables

let scoreDolphins = ((96+108+89)/3);
let scoreKoalas = ((88+91+110)/3);

console.log(scoreKoalas);
console.log(scoreDolphins);

if (scoreKoalas === scoreDolphins){
    console.log("Both win the trophy");
}else if (scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy")
}else{
    console.log("Dolphins win the trophy")
}