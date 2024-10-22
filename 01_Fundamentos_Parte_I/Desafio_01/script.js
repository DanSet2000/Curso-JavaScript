/*
Mark y John intentan comparar su IMC (Índice de Masa Corporal), 
que se calcula mediante la fórmula IMC = masa / (altura * altura) 
(masa en kg y altura en metros).

Tu tarea consiste en escribir un código que les ayude:

- Almacenar la masa y la altura de Mark y John en variables 
  llamadas massMark, heightMark, massJohn y heightJohn.
- Calcula el IMC de ambos utilizando la fórmula y almacena 
  los resultados en dos variables llamadas BMIMark y BMIJohn.
- Registra el valor de BMIMark y BMIJohn en la consola.
- BONUS: Crea una variable booleana markHigherBMI que contenga 
  información sobre si Mark tiene un IMC mayor que John. Regístrala también en la consola

**DATOS DE LA PRUEBA 1**: Marcos pesa 78 kg y mide 1,69 m. Juan pesa 92 kg y mide 1,95 m.

**DATOS DE LA PRUEBA 2:** Marcos pesa 95 kg y mide 1,88 m. Juan pesa 85 kg y mide 1,76 m.
*/

// Variables

const massMark = 78;    // kg 
const massJonh = 92;    // kg 
const heightMark = 1.69;
const heightJohn = 1.95;

// Methods

// BMI = mass / (height * height)

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJonh / (heightJohn * heightJohn);

console.log("Mark's BMI: ", BMIMark);
console.log("John's BMI: ", BMIJohn);

let markHigherBMI = (BMIMark > BMIJohn);

if (markHigherBMI === true){
    console.log("Mark's BMI is higher")
}else{
    console.log("John's BMI is higher")
}