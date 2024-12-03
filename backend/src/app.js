import express from 'express';
import cors from 'cors';
import {productRoutes, cartRoutes} from './routes/productRoutes.js';
import {userRoutes} from './routes/userRoutes.js'
const app = express();

// Middleware

app.use(cors());
app.use(express.json());


// Routes

app.use('/api/products', productRoutes);
app.use('/api/cart' , cartRoutes);
app.use('/api/users', userRoutes);

// Test Route

app.get('/', (req, res) => {
  res.send('Hello, the backend is running!');
});

// Export the app

export default app;
