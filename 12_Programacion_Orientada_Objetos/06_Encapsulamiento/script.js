'use strict';

// ---- Programación Orientada a Objetos ----

// Encapsulamiento

// 1. Campos Públicos
// 2. Campos Privados
// 3. Métodos Públicos
// 4. Métodos Privados
// Versión Estática de los 4

class Account {
  // Campos Publicos
  locale = navigator.language;
  bank = 'Bankist'
  // Campos Privados
  #movements = []
  #pin;

  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`)
  }

  // Interfaz Pública
  getMovements(){
    return this.#movements;
  }

  deposit(value){
    this.#movements.push(value)
  };

  withdrawal(value){
    this.deposit(-value)
  }

  // Metodos Privados
  #approveLoan(value){
    return true;
  }

  requestLoan(value){
    if (this.approveLoan(value)){
      this.deposit(value);
      console.log(`Loan approved`);
    }
  }


}


const account1 = new Account('Jonas', 'EUR', 1111);
console.log(account1)

//console.log(account1.#movements); // Error Campo Privado