/*
    Desafio de Programación #1

    Se realizará la construcción de una aplicación sencilla de Votación

    Una votación tiene una pregunta, un array de opciones del cuál la gente puede escoger,
    y un array con el número de respuestas para cada opción. La data es almacenada en el
    objeto debajo.

    Las tareas son:

    1. Crear un método llamado "registerNewAnswer" dentro del objeto "poll". El método hace:
        1.1. Muestra una ventana nueva para el usuario donde ingresar el número de la opción
             deseada. El modal debería verse de la siguiente manera:
                '¿Cuál es tu lenguaje de programación favorito?'
                0: JavaScript
                1: Python
                2: Rust
                3: C++
                (Ingresa una opción numérica)

        1.2. Basado en el número ingresado, actualiza el array de respuestas. Por ejemplo,
             si la opción es 3, incrementa el valor en la POSICION 3 del arreglo por 1. 
             Realizar el respectivo control de errores.
    
    2. Llamar a este método en cualquier momento que el usuario de Click al botón de "Encuesta"
    
    3. Crear un metodo llamado "displayResults" el cual muestre los resultados de la encuesta.
       El método toma un string como un input (llamado 'type'), el cual puede ser o un 'string'
       o un 'array'. Si es de tipo 'array', simplemente muestra resultados del arreglo, usando
       console.log(). Si es de tipo 'string' desplegar un string de manera "Los resultados son 13, 2, 3, 1"
    
    4. Correr el método "displayResults" al final de cada llamada al meotdo "registerNewAnwer" 

    BONUS: Usar el método "displayResults" para mostrar 2 array disponibles en el test data.
    Usar ambas opciones, el 'array' y 'string'. No poner los arreglos en el objeto.

*/

// Solucion


// Objeto

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // Esto genera un array de tipo [0, 0, 0, 0]
    answers: new Array(4).fill(0),
    // Tarea 1
    registerNewAnswer(){
        // Tarea 1.1
        const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\nWrite Option Number`))
        console.log(answer)
        // Tarea 1.2
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        
        // Tarea 4
        this.displayResults();
        this.displayResults('string')
    },
    // Tarea 3
    displayResults(type = 'array'){
        if (type === 'array'){
            console.log(this.answers)
        }else if (type === 'string'){
            // Poll results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
};

// Tarea 2
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));