/*
    Desafio de Programación #4

    En esta ocasión, Julia y Kate están estudiando los niveles de actividad
    de diferentes razas de perros.

    1. Almacenar el peso promedio de los perros "Husky" dentro de una variable
       denominada "huskyWeight"
    2. Encontrar el nombre de la unica raza que le gusta tanto "running" y 
       "fetch" (variable "dogBothActivities")
    3. Crear un arreglo "allActivities" de todas las actividades de todas
       las razas de perros.
    4. Crear un arreglo "uniqueActivities" que contenga solo las actividades únicas
       (sin repeticiones).
    5. Varias razas les gusta nadar. ¿Que otras actividades que hacen estos perros
       les gusta? Almacenar todas las OTRAS actividades que estos perros hacen
       en un arreglo "swimmingAdjacent".
    6. Todas las razas tienen un peso promedio de 10kg o más? Escribir en la consola
       si esto es verdadero o falso.
    7. Existe algún tipo de razas que sean activas? Activo quiere decir que realicen
       3 o más actividades. Escribir en consola si es verdadero o falso               

    TEST DATA: 

    const breeds = [
        {
            breed: 'German Shepherd',
            averageWeight: 32,
            activities: ['fetch', 'swimming'],
        },
        {
            breed: 'Dalmatian',
            averageWeight: 24,
            activities: ['running', 'fetch', 'agility'],
        },
        {
            breed: 'Labrador',
            averageWeight: 28,
            activities: ['swimming', 'fetch'],
        },
        {
            breed: 'Beagle',
            averageWeight: 12,
            activities: ['digging', 'fetch'],
        },
        {
            breed: 'Husky',
            averageWeight: 26,
            activities: ['running', 'agility', 'swimming'],
        },
        {
            breed: 'Bulldog',
            averageWeight: 36,
            activities: ['sleeping'],
        },
        {
            breed: 'Poodle',
            averageWeight: 18,
            activities: ['agility', 'fetch'],
        },
    ];
*/

// Solucion

const breeds = [
    {
        breed: 'German Shepherd',
        averageWeight: 32,
        activities: ['fetch', 'swimming'],
    },
    {
        breed: 'Dalmatian',
        averageWeight: 24,
        activities: ['running', 'fetch', 'agility'],
    },
    {
        breed: 'Labrador',
        averageWeight: 28,
        activities: ['swimming', 'fetch'],
    },
    {
        breed: 'Beagle',
        averageWeight: 12,
        activities: ['digging', 'fetch'],
    },
    {
        breed: 'Husky',
        averageWeight: 26,
        activities: ['running', 'agility', 'swimming'],
    },
    {
        breed: 'Bulldog',
        averageWeight: 36,
        activities: ['sleeping'],
    },
    {
        breed: 'Poodle',
        averageWeight: 18,
        activities: ['agility', 'fetch'],
    },
];


// Tarea 1
const huskyWeight = breeds.find(function(breed){
    return breed.breed === 'Husky';
}).averageWeight;

console.log(`The Husky's breed weight is :${huskyWeight}`);

// Tarea 2
const dogBothActivities = breeds.find();