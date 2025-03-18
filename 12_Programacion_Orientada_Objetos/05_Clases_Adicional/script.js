'use strict';

// ---- Programación Orientada a Objetos ----

// Clases - Extra

class Account {
  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // Mas propiedades en el Constructor
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`)
  }

  // Interfaz Pública
  deposit(value){
    this.movements.push(value)
  };

  withdrawal(value){
    this.deposit(-value)
  }

  approveLoan(value){
    return true;
  }

  requestLoan(value){
    if (this.approveLoan(value)){
      this.deposit(value);
      console.log(`Loan approved`);
    }
  }
}

// Instancia de Cuentas
const account1 = new Account('Jonas', 'EUR', 1111);

