/*
    Volvemos a los dos equipos de gimnasia, ¡los Delfines y los Koalas! Hay una nueva disciplina de gimnasia, que funciona de manera diferente.

    Cada equipo compite 3 veces, y luego se calcula la media de las 3 puntuaciones (por tanto, una puntuación media por equipo).

    Un equipo sólo gana si tiene al menos el doble de la puntuación media del otro equipo. De lo contrario, ¡ningún equipo gana!

    Tus tareas:

    Crear una función arrow calcAverage para calcular la media de 3 puntuaciones. Esta función debe tener tres parámetros y devolver un único número (la puntuación media).

    Crea dos nuevas variables - scoreDolphins y scoreKoalas, y asígnales el valor devuelto por la función calcAverage (necesitarás llamar a esta función, y pasar las puntuaciones como argumentos).

    Crear una función checkWinner que tome la puntuación media de cada equipo como parámetros (avgDolphins y avgKoalas), y luego registre el ganador en la consola, junto con los puntos de victoria, 
    de acuerdo con la regla anterior. Ejemplo: Los Koalas ganan (30 vs. 13) (usa avgDolphins y avgKoalas en lugar de valores codificados).

    Usa la función checkWinner para determinar el ganador tanto para DATA 1 como para DATA 2.

    Ignora los empates esta vez. En su lugar, registre Ningún equipo gana... en la consola si no hay ganador.


    DATOS DE PRUEBA 1: Los delfines obtuvieron 44, 23 y 71 puntos. Koalas anotó 65, 54 y 49.

    DATOS DE LA PRUEBA 2: Los delfines obtuvieron 85, 54 y 41 puntos. Koalas anotó 23, 34 y 27.
*/

// Solucion


const calcAverage = (data1, data2, data3) => (data1 + data2 + data3)/3;


let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas){
    
    if (avgDolphins >= 2 * avgKoalas){
        return `Dolphins win ${avgDolphins} vs ${avgKoalas}`;
    }else if (avgKoalas >= 2 * avgDolphins){
        return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
    }else {
        return `No team wins...`
    }
}

console.log(scoreDolphins);
console.log(scoreKoalas);

console.log(checkWinner(scoreKoalas, scoreDolphins))