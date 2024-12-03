// models/Cart.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Cart = sequelize.define('Cart_items', {
   
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, // Assuming composite primary key with cart_id
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1, // Optional default value for quantity
    },
   
}, {
 tableName: 'cart_items', // Name of the table in the database
    timestamps: false, // Disables Sequelize's automatic `createdAt` and `updatedAt` fields
});

export default Cart;
