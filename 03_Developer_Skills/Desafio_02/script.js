/*

    Se trabaja para una compañia encargada de construir termómetros inteligentes.
    La tarea más reciente fue:

    "Dado un arreglo de temperaturas de un día en particular, calcular la amplitud
    de la temperatura. Tener en cuenta que en algunos casos puede existir un error"

    Para esta parte se tiene un error, se desea cambiar de grados Celsius a Kelvin
*/

// Solucion

const measureKelvin = function(){
    
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius:'))
    }

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());