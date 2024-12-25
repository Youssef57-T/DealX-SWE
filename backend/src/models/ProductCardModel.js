import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Product = sequelize.define('products', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING , 
        allowNull : false,
    },  
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stock_quantity: { 
        type : DataTypes.INTEGER
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false, 
});

export default Product ; 