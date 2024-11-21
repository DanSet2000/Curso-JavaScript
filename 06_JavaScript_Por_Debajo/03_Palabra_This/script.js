'use strict';

// ---- This ----

console.log(this);

function calcAge(birhtYear){
    console.log(2024 - birhtYear);
    console.log(this);  // Undefined
}

calcAge(2000);

// Funcion de Flecha
const calcAgeArrow = birhtYear =>{
    console.log(2024 - birhtYear);
    console.log(this);  // 24
}

calcAgeArrow(2000);

// Objeto 

const daniel = {
    year: 2000,
    calcAge: function(){
        console.log(this);
    }
}

daniel.calcAge();
