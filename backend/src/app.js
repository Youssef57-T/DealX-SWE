import express from 'express';
import cors from 'cors';
import session from 'express-session';
import {productRoutes, cartRoutes} from './routes/productRoutes.js';
import {userRoutes} from './routes/userRoutes.js'
const app = express();


// const corsOptions = {
//   origin: 'http://localhost:3000', 
//   credentials: true 
// };

// app.use(cors(corsOptions));
app.use(cors())
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Server is running');
});


// app.use(session({
//   secret: '1e3w7s8ab9sevs', 
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false } 
// }));

app.use('/api/products', productRoutes);
app.use('/api/cart' , cartRoutes);
app.use('/api/users', userRoutes);

app.get('/profile', (req, res) => {
  if (req.session.existingUser) {
    res.status(200).json({ existingUser: req.session.existingUser });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});


export default app;
