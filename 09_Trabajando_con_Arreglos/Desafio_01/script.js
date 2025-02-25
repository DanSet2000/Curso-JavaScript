/*
    Desafio de Programación #1

    Julia y Kate realizan estudios de perros. Cada una de ellas pregunto a 5 dueños sobre la 
    edad de sus perros, y lo guardaron dentro de un arreglo (un arreglo para cada una).
    Por ahora, ellas se interesan en saber si un perro es cachorro o adulto. Un perro es adulto
    si tiene al menos 3 años, y un cachorro si es menor a 3 años.

    Crear una función 'checkDogs', la cuál acepta 2 arreglos de edades de perros, y realiza lo
    siguiente:

    1. Julia encontró que los dueños del PRIMERO y ULTIMOS DOS perros en verdad eran gatos, no perros.
       Entonces crear una copia del arreglo y remover las edades de los gatos del arreglo copiado.

    2. Crear un arreglo con ambos arreglos de Julia y Kate corregidos.
    
    3. Para cada perro restante, escribir en la consola ya sea un adulto o cachorro.
       - Dog number 1 is an adult, an is 5 years old.
       - Dog number 2 is still a puppy.

    TEST DATA 1: Julia [3, 5, 2, 12, 7]     Kate [4, 1, 15, 8, 3]
    TEST DATE 2: Julia [9, 16, 6, 8, 3]     Kate [10, 5, 6, 1, 4]

*/

// Solucion

juliaDogs = [3, 5, 2, 12, 7];
kateDogs = [4, 1, 15, 8, 3];

juliaDogs2 = [9, 16, 6, 8, 3];
kateDogs2 = [10, 5, 6, 1, 4];

const checkDogs = function(juliaArray, kateArray){

    // Crear una copia del Arreglo
    const dogsJuliaCorrected = juliaArray.slice();
    // Separar edades de los gatos
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);

    // Concatenar Ambos Arreglos
    const allDogs = dogsJuliaCorrected.concat(kateArray);

    // Escribir en consola 
    allDogs.forEach(function(dogAge, index, array){
        // Cachorro
        if (dogAge >= 3){
            console.log(`Dog number ${index + 1}: is an Adult, and is ${dogAge} years old.`)
        }else{
        // Adulto
            console.log(`Dog number ${index + 1}: is still a puppy.`)
        }

    })

}

checkDogs(juliaDogs, kateDogs)

checkDogs(juliaDogs2, kateDogs2)
