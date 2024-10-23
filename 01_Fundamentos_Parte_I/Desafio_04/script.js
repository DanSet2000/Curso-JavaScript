/*
Steven necesita una calculadora de propinas muy sencilla para cuando vaya a comer a un 
restaurante. En su país, es habitual dar una propina del 15% si el valor de la cuenta está 
entre 50 y 300 €. Si el valor es diferente, la propina es del 20%.

Tus tareas:

- Calcular la propina, en función del valor de la cuenta. Para ello crea una variable llamada
  propina. 
  No está permitido utilizar una sentencia if...else (si te resulta más fácil, puedes empezar 
  con una sentencia if...else, y luego intentar convertirla en un operador ternario).
- Imprime una cadena en la consola que contenga el valor de la cuenta, la propina y el valor final (cuenta + propina).
- **Ejemplo**: La cuenta era 275, la propina 41,25 y el valor total 316,25.

**Nota**: Utilice los valores de las variables factura y propina para construir esta cadena. 
No los codifiques 🙂 .

**DATOS DE PRUEBA:** Prueba con diferentes valores de factura: 275, 40 y 430

**CONSEJO:** Para calcular el 20% de un valor, simplemente multiplíquelo por 20/100 = 0.2

**PISTA 2:** El valor X está entre 50 y 300, si es >= 50 && <= 300 😉 .
*/

// Solucion 

let bill = 275;
let tip; 

50 <= bill <= 300 ? tip = bill*0.15 : tip = bill*0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)