'use strict';

// ---- JavaScript Moderno ----

// Patrón de Módulos

// Funcion Invocada Automaticamente 
const ShoppingCart2 = (function(){
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function(product, quantity){
    cart.push({ product, quantity });
  
    console.log(`${quantity} ${product} added to cart`);
  }
  
  const orderStock = function(product, quantity){
    cart.push({ product, quantity });
  
    console.log(`${quantity} ${product} ordered from supplier`);
  }

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  }
})();

ShoppingCart2.addToCart('Apple', 4)
ShoppingCart2.addToCart('Pizza', 2)

console.log(ShoppingCart2)

///////////////////////////////////////
// CommonJS Modules
// Export
/*
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');
*/