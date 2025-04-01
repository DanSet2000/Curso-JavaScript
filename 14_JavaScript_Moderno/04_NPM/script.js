'use strict';

// ---- JavaScript Moderno ----

import add, { cart } from './shoppingCart.js';

add('Pizza', 2);
add('Bread', 5);
add('Apples', 4);

console.log(cart);

import cloneDeep  from "lodash-es";

const state = {
  cart: [
    {product: 'bread', quantity: 5},
    {product: 'pizza', quantity: 5},
  ],
  user: {loggedIn: true},
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot){
  module.hot.accept()
}

class Person{
  #greeting = 'Hey'

  constructor(name){
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`)
  }
}

const jonas = new Person('Jonas')