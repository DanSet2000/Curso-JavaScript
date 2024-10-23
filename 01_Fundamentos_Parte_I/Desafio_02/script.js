/*
## Enunciado:

Utilice el ejemplo del IMC del Desafío nº 1, y el código que ya ha escrito, y mejórelo:

1. Imprima un bonito mensaje en la consola, indicando al usuario quién tiene el IMC más alto. 
   El mensaje puede ser:
    
  **«¡El IMC de Mark es mayor que el de John!» o “¡El IMC de John es mayor que el de Mark!”.**
    
2. Modifique las salidas anteriores para utilizar literales de plantilla para incluir 
   los valores de IMC en las salidas.

Ejemplo: «¡El IMC de Marcos (28,3) es mayor que el de Juan (23,9)!» o 
  “¡El IMC de Juan (29,1) es mayor que el de Marcos (27)!”.

Nota: No redondees los valores del IMC. Déjalos como están.
*/

// Variables
let massMark = 78; //kg 
let heightMark = 1.69;
let massJohn = 92; //kg 
let heightJohn = 1.95;

// Calculos
let BMIMark = massMark/(heightMark * heightMark);
let BMIJohn = massJohn/(heightJohn * heightJohn);

// Resultados

console.log("Mark's BMI: " + BMIMark);
console.log("John's BMI: " + BMIJohn);

// If - Else 

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark} is higher than John's (${BMIJohn})!`)
}else{
    console.log(`John's BMI (${BMIJohn} is higher than Mark's (${BMIMark})!`)
}
