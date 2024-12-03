import express from 'express';
import {createUser, getUser} from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/', getUser); 
userRoutes.post('/signup', createUser); 

export {userRoutes};
