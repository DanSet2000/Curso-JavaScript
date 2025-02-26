'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
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
const displayMovements = function(movements){
  // Vaciar el contenedor y sobreescribir con la información de la función
  containerMovements.innerHTML = '';

  movements.forEach(function(movement, index){
    // Identificar si es un retiro o deposito
    const type = movement > 0 ? 'deposit' : 'withdrawal'
    // Variable con el contenido que queremos desplegar
    const html = `        
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
        <div class="movements__value">${movement}</div>
      </div> `;

    // Parámetros: Posicion donde pondremos el HTML, el String que contiene el HTML
    containerMovements.insertAdjacentHTML('afterbegin', html);  
  })
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
  labelBalance.textContent = `${balance} €`
}

/////////////////////////////////////////////////

// -- Funcion para calcular los ingresos y egresos totales de la Cuenta

const calcDisplaySummary = function(account){
  // Ingresos
  const incomes = account.movements.filter(movement => movement > 0)
                           .reduce((accumulator, currentMov) => accumulator + currentMov, 0);
  // Mostrar Ingresos en Pantalla
  labelSumIn.textContent = `${incomes} €`;

  // Retiros
  const outcomes = account.movements.filter(movement => movement < 0)
                            .reduce((accumulator, currentMov) => accumulator + currentMov, 0);
  // Mostrar Retiros en Pantalla
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  // Intereses
  const interest = account.movements.filter(movement => movement > 0)
                            .map(deposit => deposit * account.interestRate/100)
                            .filter((interest, index, array) => {return interest >= 1;})
                            .reduce((accumulator, currentInterest) => accumulator + currentInterest, 0);
  // Mostrar Intereses en Pantalla
  labelSumInterest.textContent = `${Math.abs(interest)} €`;
};

/////////////////////////////////////////////////

// -- Funcion para actualizar la Interfaz del Usuario

const updateUI = function(currentAccount){
  // Desplegar los movimientos realizados
  displayMovements(currentAccount.movements);

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