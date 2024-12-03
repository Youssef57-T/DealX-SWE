import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('user', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(50), // Matches character varying(50)
    allowNull: true,
    unique: true, // Assuming usernames are unique
  },
  email: {
    type: DataTypes.TEXT(100), // Matches character varying(100)
    allowNull: true,
    unique: true, // Emails should be unique
  },
  password_hash: {
    type: DataTypes.STRING(255), // Matches character varying(255)
    allowNull: true,
  },
  full_name: {
    type: DataTypes.STRING(100), // Matches character varying(100)
    allowNull: true,
  },
  address: {
    type: DataTypes.TEXT, // Matches text type
    allowNull: true,
  },
  phone_number: {
    type: DataTypes.STRING(15), // Matches character varying(15)
    allowNull: true,
  },
  type : { 
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: true, 
  }
}, {
  tableName: 'users', // Matches your table name
  timestamps: false,  // Assuming no `created_at` or `updated_at` columns
});

export default User;
