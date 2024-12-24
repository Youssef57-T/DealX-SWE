import app from './app.js'; 
import sequelize from './config/database.js';
import dotenv from 'dotenv'; 

dotenv.config(); 

console.log(process.env.DB_NAME); 

(async () => {
  try {
    await sequelize.authenticate();
    
    console.log('Database connection established successfully.');
    
    app.listen(5000, () => {
      console.log('Server is running on http://localhost:5000');
    });

  } catch (error) { 
    console.error('Unable to connect to the database:', error.message); 
    console.error(error.stack)
    process.exit(1); 
  }
})();
