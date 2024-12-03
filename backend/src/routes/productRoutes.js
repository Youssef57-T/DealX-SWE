import express from 'express';
import { getProducts } from '../controllers/ProductController.js';
import { addToCart } from '../controllers/CartController.js'; // Use a separate controller for cart logic

const productRoutes = express.Router();
const cartRoutes = express.Router();

// Product routes
productRoutes.get('/', getProducts);

// Cart routes
cartRoutes.post('/:id', addToCart);

export { productRoutes, cartRoutes };
