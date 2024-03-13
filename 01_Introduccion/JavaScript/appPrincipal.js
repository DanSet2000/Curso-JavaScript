alert('Alerta enviada desde un archivo externo');

// ----------- TIPOS DE DATOS ---------------- 

// Esto es un comentario

/* Esto tambien es un comentario */

// Se utiliza para imprimir mensajes en
console.log('Esta es la consola');      // String

console.log("También es un string de consola");     // String

console.log(20)     // Valor numérico

console.log("20")   // String

// Utilizar el punto para los decimales 

console.log(20.6)

console.log(true)       // Boolean

console.log("true")     // String

console.log(false)      // Boolean

// ------------- VARIABLES ------------------

let nombreUsuario = "Daniel"
let edadUsuario = 23

console.log(nombreUsuario, edadUsuario)

// Practica

let nacionalidadUsuario = "Ecuatoriano"

console.log("Su nacionalidad es: ",nacionalidadUsuario)

let estaComprometido = false

console.log("¿Esta comprometido? ",estaComprometido)

// --------------- CONCATENACION ----------------

// Para unir variables se utiliza el signo "+"

console.log("Mi nombre es " + nombreUsuario)


console.log("Me llamo " + nombreUsuario + " y tengo" + edadUsuario + " anios")

// -------------- PROMPT() ----------------------

let numUno = prompt("Ingrese un numero")
let numDos = prompt("Ingrese otro numero")

// Miro que tipo de dato recibo del usuario por el Prompt
console.log(typeof(numUno))

// Convierto los datos a Int
let suma = parseInt(numUno) + parseInt(numDos)

alert("La suma de tus numeros es " + suma)

// ------------ OPERADORES ------------------------

// Aritmeticos

let resultado = (2 * (100/5) + 10)

console.log(resultado)

// Relacionales

let resulRelacional = 10 < 20

console.log(resulRelacional)

// Logicos

let resulLogico = true || false || true

console.log(resulLogico)

// -------------------- ESTRUCTURAS DE CONTROL -------------------

let stringUsuario = prompt('Escriba "Javascript"')

// Ejemplo 1
if(stringUsuario === 'Javascript'){
    console.log("Correcto")
}else{
    console.log("Mal Escrito")
}

// Ejemplo 2
let numUsuario = parseInt(prompt('Ingrese un numero del 1 al 10'))

if(numUsuario <= 10){
    console.log("Bien escrito")
}else{
    console.log("Error. Numero mayor de 10")
}

// SWITCH

let opcionUsuario = prompt(`
    Elija una opcion:
        1: Libros
        2: Películas
        3: Juegos`
    );

    console.log(opcionUsuario);

    switch(opcionUsuario){
        case '1':
            console.log("El Principito")
            break;
        case '2':
            console.log("Avatar")
            break;
        case '3':
            console.log("Need For Speed")
            break;
        default:
            console.log("Ingrese otro numero")
            break;
    }

// WHILE

let numeroWhile = 1 

while (numeroWhile <= 10){
    console.log(numero)
    numeroWhile = numeroWhile + 1   // numeroWhile++ (otra forma)
}

console.log("Fin Numero " + numeroWhile)