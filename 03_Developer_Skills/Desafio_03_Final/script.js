/*

    Dado un arreglo de predicciones de temperaturas máximas, el termómetros despliega una cadena con estas temperaturas.

    **Ejemplo:** [17, 21, 23] retornará 

    - … 17°C in 1 days … 21°C in 2 days …. 23°C in 3 days

    Crear una función denominada **printForecast** la cuál toma un arreglo como parámetros y escribe una cadena como la mencionada arriba.

    **TEST DATA:** [17, 21, 23]

    **TEST DATA 2:** [12, 5, -5, 0, 4]
    
*/

// Solucion

const temperatures = [12, 5, -5, 0, 4];

function printForecast(array){

    for (let i = 0; i < array.length; i++){
        console.log(`... ${array[i]}°C in ${i+1} days`)
    }
}

printForecast(temperatures)