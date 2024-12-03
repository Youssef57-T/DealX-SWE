import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Customer = sequelize.define('Customer', {
  customer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customer_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  the_Address: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  the_Password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }
}, {
  tableName: 'Customer', // Explicitly map to the Customer table
  timestamps: false,  // Disable timestamps (if you don't want created_at/updated_at columns)
});

export default Customer;
