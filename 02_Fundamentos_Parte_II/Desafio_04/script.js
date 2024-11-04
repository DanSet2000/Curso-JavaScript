/*

    Mejoremos aún más la calculadora de propinas de Steven, ¡esta vez utilizando bucles!

    Tus tareas:

        - Crear un array llamado facturas que contenga los 10 valores de las facturas de prueba.
        - Crear matrices vacías para las propinas y los totales (tips y totals)
        - Utilizar la función calcTip que escribimos antes (incluida en el código de inicio) 
          para calcular las propinas y los valores totales (factura + propina) para cada valor
          de factura en la matriz de facturas. Utilice un bucle for para realizar los 10 cálculos.

    DATOS DE PRUEBA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 y 52.

    BONO:
    Escribe una función calcPromedio que tome como argumento un array llamado arr. 
    Esta función calcula la media de todos los números de la matriz dada. 
    Este es un reto DIFÍCIL (¡no lo hemos hecho antes!). A continuación te explicamos cómo resolverlo si te apetece:
    En primer lugar, tendrás que sumar todos los valores del array. Para hacer la suma, empieza por crear una variable 
    suma que empiece en 0. Luego haz un bucle sobre el array usando un bucle for. 
    En cada iteración, añade el valor actual a la variable suma. De esta forma, al final del bucle, tendrás todos 
    los valores sumados.
    Para calcular la media, divide la suma que has calculado antes por la longitud de la matriz 
    (porque ese es el número de elementos).
    Llama a la función con la matriz de totales.

*/

// Solucion

// Arreglo para almacenar las cuentas
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Arreglos Vacios
let tips = [];
const totals = [];

// CalcTip Function
function calcTip(billValue){
    if (billValue >= 50 && billValue <= 300){
        let tip = billValue*0.15;
        return tip;
    }else{
        let tip = billValue*0.20;
        return tip;
    }
}

// Loop para calcular tips
for (let i=0; i<bills.length; i++){
    tips[i] = calcTip(bills[i]);    
};

// Loop para calcular Totals
for (let i=0; i<bills.length; i++){
    totals[i] = bills[i] + tips[i];
};

// Bonus 

function calcAverage(arr){
    let sum = 0;

    for (i=0; i<arr.length; i++){
        sum += arr[i];
    }

    return sum / arr.length;

    console.log(`El Promedio es: ${sum}`);
};

console.log(tips);
console.log(totals);

calcAverage(totals);