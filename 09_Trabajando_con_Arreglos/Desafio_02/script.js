/*
    Desafio de Programación #2

    Continuando el ejericio anterior, se desea convertir la edad de los perros en años humanos 
    y calcular la edad promedio de los perros en su estudio.

    Crear una función llamada 'calcAverageHumanAge' la cual acepta un arreglo de edades de perros
    y realiza lo siguiente:

    1. Calcular la edad de los perros en años humanos usando la fórmula: 
       - Si el perro es menor o igual a 2 años, edadHumana = 2 * edadPerro. 
       - Si el perro es mayor a 2 años, edadHumana = 16 + edadPerro * 4

    2. Excluir todos los perros menores a 18 años humanos.
    
    3. Calcular la edad humana promedio de todos los perros adultos.

    4. Correr la función en ambos datasets.

    TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
    TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// Solucion

const testData1 = [5, 2, 4, 1, 15, 8, 3]
const testData2 = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function(dogsArray){

    // Tarea 1
    const dogsToHuman = dogsArray.map(function(ages){
        if (ages > 2){
            return 16 + ages * 4
        }else{
            return 2 * ages
        }
    })

    // Tarea 2
    const humansFiltered = dogsToHuman.filter(function(ages){
        return ages > 18;
    })

    // Tarea 3
    const averageAge = humansFiltered.reduce(function(accumulator, current){
        return (accumulator + current);
        
    }, 0) / humansFiltered.length;

    console.log(dogsToHuman);
    console.log(humansFiltered)
    console.log(`The average age of the Dogs is ${averageAge}`)
}

calcAverageHumanAge(testData1);


calcAverageHumanAge(testData2);