'use strict';

// ---- JavaScript Moderno ----

// Importar y Exportar Módulos

// Modulo de Importacion

import { addToCart, totalPrice as price, totalQuantity } from "./shoppingCart.js";

console.log('Modulo de Importacion')

addToCart('Bread', 5);
console.log(price, totalQuantity)

// Importe de Default
import add from './shoppingCart.js'
add('Pizza', 2);

