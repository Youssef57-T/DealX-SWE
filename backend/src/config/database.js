import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
console.log(process.env.DB_PASS)
const sequelize = new Sequelize(
  process.env.DB_NAME,  // Database name
  process.env.DB_USER,  // Database user
  process.env.DB_PASS,  // Database password
  {
    host: process.env.DB_HOST,  // Database host
    port: process.env.DB_PORT,  // Database port
    dialect: 'postgres',
  }
);

export default sequelize;
