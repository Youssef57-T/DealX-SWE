import express from 'express';
import {createUser, getUser} from '../controllers/userController.js';

const userRoutes = express.Router();

// User registration route
userRoutes.post('/', getUser); 
userRoutes.post('/signup', createUser); 

export {userRoutes};
