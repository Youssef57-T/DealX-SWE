// src/models/user.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    is_premium: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    // Add other fields as necessary
}, {
    tableName: 'users', // Make sure this matches your DB table name
    timestamps: false,  // Set to true if your table includes createdAt/updatedAt
});

export default User;
