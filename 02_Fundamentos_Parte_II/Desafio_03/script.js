/*
    Volvamos a la comparación de los IMC de Marcos y Juan.

    Esta vez, utilicemos objetos para realizar los cálculos. 
    Recuerda: IMC = masa / (altura * altura) (masa en kg y altura en metros).

    Tus tareas:

        - Para cada uno de ellos, crea un objeto con propiedades para su nombre completo, 
          masa y altura (Mark Miller y John Smith). Nombra estos objetos como mark y john, 
          y sus propiedades exactamente como fullName, mass y height.

        - Crea un método calcBMI en cada objeto para calcular el IMC 
          (el mismo método en ambos objetos). 
          Asigna el valor del IMC a una propiedad llamada bmi (en minúsculas), y 
          también devuélvelo desde el método.

        - Registra en la consola quién tiene el IMC más alto, junto con el nombre completo 
          y el IMC respectivo. Ejemplo: «¡El IMC de John Smith (28,3) es mayor que el de 
        Mark Miller (23,9)!».

    DATOS DE LA PRUEBA Marks pesa 78 kg y mide 1,69 m. John pesa 92 kg y mide 1,95 m.

*/

// Solucion

// Objetos 
const mark = {
  fullName: 'Mark Miller',
  mass: 78,        // kg
  height: 1.69,    // cm
  
  calcBMI: function(){
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
  },
}

const john = {
  fullName: 'John Smith',
  mass: 92,        // kg
  height: 1.95,    // cm
  
  calcBMI: function(){
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
  },
}

console.log(mark.calcBMI());
console.log(john.calcBMI());


if (mark.calcBMI() > john.calcBMI()){
  console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)
} else {
  console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)
}

