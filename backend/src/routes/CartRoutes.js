import express from 'express';
import { showCart } from '../controllers/CartController.js';
import { addToCart } from '../controllers/CartController.js'; 
import { searchProducts } from '../controllers/searchController.js';

const CartPageRouter  = express.Router();
// Add an item to the cart
// router.post('/add', cartController.addItem);

// Show the user's cart items
CartPageRouter.get('/:userId', showCart);

// Remove an item from the cart
// router.post('/remove', cartController.removeItem);


export {CartPageRouter}