'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Manipulacion del DOM

// -- Funcion para desplegar los Movimientos de la cuenta en el Dashboard
const displayMovements = function(account, sort = false){
  // Vaciar el contenedor y sobreescribir con la información de la función
  containerMovements.innerHTML = '';

  // Objeto combinado para poder Filtrar Movimientos y Fechas
  const combinedMovesDates = account.movements.map((movement, index) => ({
    movement: movement,
    movementDate: account.movementsDates.at(index),
  }));

  // Variable para Ordenar movimientos de la cuenta
  if(sort) combinedMovesDates.sort(function(a, b){
    return a.movement - b.movement
  })

  combinedMovesDates.forEach(function(object, index){
    // Desestructurar el Objeto
    const {movement, movementDate} = object;

    // Fecha
    const date = new Date(movementDate);
    const displayDate = formatMovementDate(date);

    // Identificar si es un retiro o deposito
    const type = movement > 0 ? 'deposit' : 'withdrawal'

    // Variable con el contenido que queremos desplegar
    const html = `        
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${movement.toFixed(2)}</div>
      </div> `;

    // Parámetros: Posicion donde pondremos el HTML, el String que contiene el HTML
    containerMovements.insertAdjacentHTML('afterbegin', html);  
  })
}

/////////////////////////////////////////////////

// -- Funcion para Dar Formatos a las Fechas Empleadas en el Banco
const formatMovementDate = function(date){
  const calcDaysPassed = function(date1, date2){
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 *24)))
  }

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else{
    // Recorrer fechas de los movimientos y formato de Fechas
    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth()+1}`.padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

/////////////////////////////////////////////////

// -- Funcion para computar los nombres de usuario de cada propietario de una cuenta en la aplicación.
const createUsernames = function(accs){
  // Se agrega una nueva propiedad en cada cuenta denominada "Username"
  accs.forEach(function(acc){
    // Convertir a minusculas y Separando palabras por Espacios
    acc.username = acc.owner.toLowerCase().split(' ').map(function(name){
      return name[0]; 
    }).join('');     // Uniendo la iniciales de cada nombre
  });
};

createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////

// -- Funcion para calcular el balance global de la cuenta en base a sus movimientos
const calcDisplayBalance = function(account){
  const balance = account.movements.reduce(function(accumulator, currentMovement){
    return accumulator += currentMovement
  }, 0);
  account.balance = balance;
  labelBalance.textContent = `${balance.toFixed(2)} €`
}

/////////////////////////////////////////////////

// -- Funcion para calcular los ingresos y egresos totales de la Cuenta

const calcDisplaySummary = function(account){
  // Ingresos
  const incomes = account.movements.filter(movement => movement > 0)
                           .reduce((accumulator, currentMov) => accumulator + currentMov, 0);
  // Mostrar Ingresos en Pantalla
  labelSumIn.textContent = `${incomes.toFixed(2)} €`;

  // Retiros
  const outcomes = account.movements.filter(movement => movement < 0)
                            .reduce((accumulator, currentMov) => accumulator + currentMov, 0);
  // Mostrar Retiros en Pantalla
  labelSumOut.textContent = `${Math.abs(outcomes).toFixed(2)} €`;

  // Intereses
  const interest = account.movements.filter(movement => movement > 0)
                            .map(deposit => deposit * account.interestRate/100)
                            .filter((interest, index, array) => {return interest >= 1;})
                            .reduce((accumulator, currentInterest) => accumulator + currentInterest, 0);
  // Mostrar Intereses en Pantalla
  labelSumInterest.textContent = `${Math.abs(interest).toFixed(2)} €`;
};

/////////////////////////////////////////////////

// -- Funcion para actualizar la Interfaz del Usuario

const updateUI = function(currentAccount){
  // Desplegar los movimientos realizados
  displayMovements(currentAccount);

  // Desplegar balance general
  calcDisplayBalance(currentAccount);

  // Desplegar balance total
  calcDisplaySummary(currentAccount)
}

/////////////////////////////////////////////////


// -- Funcion para implementación de un sistema de inicio de sesión o Login

let currentAccount;

// Manejador de Eventos
btnLogin.addEventListener('click', function(e){
  // Previene que el formulario se envie
  e.preventDefault();

  // Obtener el usuario que desea acceder
  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);

  // Verificar el PIN de ingreso
  if (currentAccount?.pin === Number(inputLoginPin.value)){
    // Desplegar la interfaz y mensaje
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`  // Obtener el Primer Nombre del Usuario
    containerApp.style.opacity = 1;

    // -- Función para Agregar y Trabajar con Fechas al Abrir la Aplicación
    // Fecha Actual
    const now = new Date(); 
    // Day/Month/Year
    const day = `${now.getDate()}`.padStart(2, '0');
    const month = `${now.getMonth()+1}`.padStart(2, '0');
    const year = now.getFullYear();
    const hour = now.getHours();
    const minutes = `${now.getMinutes()}`.padStart(2, '0');
    // Formato Fecha 
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`

    // Limpiar campos del Input 
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    // Desplegar la Interfaz Grafica
    updateUI(currentAccount);
  }
});

/////////////////////////////////////////////////

// -- Funcion para implementación de sistema de transferencias entre usuarios

// Manejador de Eventos
btnTransfer.addEventListener('click', function(e){
  // Previene que el formulario se envie
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(account => account.username === inputTransferTo.value);

  // Limpiar campos del Input 
  inputTransferAmount.value = inputTransferTo.value = '';

  // Revisar el monto en la cuenta y si el usuario tiene dinero
  if (amount > 0 && currentAccount.balance >= amount && receiverAccount?.username !== currentAccount.username){
    // Realizando la Transferencia
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Agregar Fechas a la Transferencia
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

    // Actualizando la Interfaz Gráfica
    updateUI(currentAccount);
  }

});

/////////////////////////////////////////////////

// -- Funcion para realizar el cierre de una cuenta

// Manejador de Eventos
btnClose.addEventListener('click', function(e){
    // Previene que el formulario se envie
    e.preventDefault();

    // Revisar usuario
    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
      
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
      console.log(index);

      // Eliminar cuenta
      accounts.splice(index, 1);

      // Esconder UI
      containerApp.style.opacity = 0;
    }

    // Vaciar Campos 
    inputCloseUsername.value = inputClosePin.value = '';
})

/////////////////////////////////////////////////

// -- Funcion para solicitar un préstamo al Banco

btnLoan.addEventListener('click', function(e){
  // Previene que el formulario se envie
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  // Regla de Negocio
  if (amount > 0 && currentAccount.movements.some(function(movement){
    return movement >= amount * 0.1;
  })){
    // Agregar movimiento
    currentAccount.movements.push(amount);

    // Agregar Fechas a la Transferencia
    currentAccount.movementsDates.push(new Date().toISOString());

    // Actualizar UI
    updateUI(currentAccount);
  }

  // Limpiar Campos
  inputLoanAmount.value = '';
})

/////////////////////////////////////////////////

// -- Obtener el balance general de todos los movimientos de todas las cuentas del Banco

const accountMovements = accounts.map(function(account){
  return account.movements;
})
console.log(accountMovements);

// Obtener todos los Movimientos
const allMovements = accountMovements.flat();
console.log(allMovements);

// Calcular Balance General
const overallBalance = allMovements.reduce(function(accumulator, current){
  return accumulator += current
})
console.log(overallBalance)

/////////////////////////////////////////////////

// -- Función para Ordenar los movimientos de la cuenta de manera ascendente y descendente

// Variable para volver a tener el arreglo como antes
let sorted = false;

btnSort.addEventListener('click', function(e){
  // Previene que el formulario se envie
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
})

/////////////////////////////////////////////////

// -- Función para Agregar y Trabajar con Fechas al Abrir la Aplicación

// Fecha Actual
const now = new Date(); 
// Day/Month/Year
const day = `${now.getDate()}`.padStart(2, '0');
const month = `${now.getMonth()+1}`.padStart(2, '0');
const year = now.getFullYear();
const hour = now.getHours();
const minutes = `${now.getMinutes()}`.padStart(2, '0');
// Formato Fecha 
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`

