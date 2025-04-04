/*
    Steven quiere que mejores su calculadora de propinas, utilizando las mismas reglas que antes: da una propina 
    del 15% de la cuenta si el valor de la cuenta está entre 50 y 300, y si el valor es diferente, la propina es del 20%.

    Tus tareas:

    - Escribe una función calcTip que tome cualquier valor de la cuenta como entrada y devuelva la propina correspondiente, 
      calculada en base a las reglas anteriores (puedes consultar el código del primer reto de la calculadora de propinas si lo necesitas). 
      Utilice el tipo de función que más le guste. Prueba la función utilizando un valor de factura de 100.

    - ¡Y ahora vamos a usar matrices! Crea una matriz llamada billetes que contenga los datos de la prueba.
    
    - Crea un array llamado propinas que contenga el valor de la propina para cada factura, calculado a partir de la función que creaste antes.

    **BONUS**: Crea un array llamado totales que contenga los valores totales, es decir, la cuenta + la propina.

    **DATOS DE PRUEBA**: 125, 555 y 44.
    */

// Solucion

const bills = [125, 555, 44];

function calcTip(billValue){
    if (billValue >= 50 && billValue <= 300){
        let tip = billValue*0.15;
        return tip;
    }else{
        let tip = billValue*0.20;
        return tip;
    }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips);

const totals = [bills[0] + tips[0], + bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);
