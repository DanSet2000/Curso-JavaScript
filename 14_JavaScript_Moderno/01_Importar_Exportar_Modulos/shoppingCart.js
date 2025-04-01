// Modulo de Exportacion
console.log('Modulo de Exportacion')

// Alcance en el Modulo Actual
const shippingCost = 10;
const cart = [];

// Exportaciones a otro Modulo

export const addToCart = function(product, quantity){
  cart.push({ product, quantity });

  console.log(`${quantity} ${product} added to cart`);
}

// Exportaciones con Nombre

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity};

// Exportaciones Predeterminadas

export default function(product, quantity){
  cart.push({ product, quantity });

  console.log(`${quantity} ${product} added to cart`);
}