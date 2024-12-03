import app from './app.js';  // Import the app (use .js extension if not using a bundler like Webpack)
import sequelize from './config/database.js';
import dotenv from 'dotenv'; // or 'require' if using CommonJS

dotenv.config(); // Load environment variables from .env file

console.log(process.env.DB_NAME); // Debugging: check if it's loaded correctly

(async () => {
  try {
    // Wait for the database connection
    await sequelize.authenticate();
    
    console.log('Database connection established successfully.');
    
    // Start the server after the database is connected
    app.listen(5000, () => {
      console.log('Server is running on http://localhost:5000');
    });

  } catch (error) { 
    console.error('Unable to connect to the database:', error.message); // Log error message
    console.error(error.stack); // Log full stack trace for debugging
    process.exit(1);  // Exit if the database connection fails
  }
})();
