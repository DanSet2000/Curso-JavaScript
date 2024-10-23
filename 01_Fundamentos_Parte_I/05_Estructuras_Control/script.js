// ----- Estructuras de Control -----

// If - Else

const age = 15;

const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('You can Drive')
}else{
    console.log('You are not allowed to drive')
}

// Usando Template Strings

if (age >= 18){
    console.log('You can start driving 🚗');
}else{
    const yearsLeft = 18 - age;
    console.log(`Too young to drive. Please wait another ${yearsLeft} years`)
}

// Ejemplo

const birthYear = 1991;
let century;

if (birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}

console.log(`You were born in the ${century} century.`)

// Switch

const day = 'Lunes';

switch (day){
    case 'Lunes': 
        console.log("Es Lunes");
        break;
    case 'Martes':
        console.log("Es Martes");
        break;
    case 'Miercoles':
        console.log("Es Miercoles");
        break;
    case 'Jueves':
        console.log("Es Jueves");
        break;
    case 'Viernes':
        console.log("Es Viernes");
        break;
    default:
        console.log("Es fin de semana");  
        break;                  
}

// Operador Ternario

const edad = 23;
edad >= 18 ? console.log('Me gusta el vino') : console.log('Me gusta el agua');

// condicion ? opción 1 : opción 2