/*

    Se trabaja para una compañia encargada de construir termómetros inteligentes.
    La tarea más reciente fue:

    "Dado un arreglo de temperaturas de un día en particular, calcular la amplitud
    de la temperatura. Tener en cuenta que en algunos casos puede existir un error"

*/

// Solucion

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Calcular la Amplitud

// Amplitud: Diferencia entre la mayor temperatura y la menor temperatura
function calcTempAmplitude(temps1, temps2){

    // Concatenar dos arreglos
    const temps = temps1.concat(temps2);
    console.log(temps);

    // Obtener la Temperatura Maxima y Minima
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++){
        const currentTemp = temps[i];

        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }

    console.log(max, min);
}

calcTempAmplitude(temperatures, [3,5,6]);

