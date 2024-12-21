import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Cart_items= sequelize.define('Cart_items', {

cart_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
},
product_id: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true, 
},
quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, 
},


}, {
tableName: 'cart_items',
timestamps: false, 
});

const Cart = sequelize.define('Cart', {
cart_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
},
user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
}, {
tableName: 'cart',
timestamps: false,
});

export default { Cart_items, Cart };


// // Add an item to the cart
// const addItem = async (userId, ProductId) => {
//     const existingItem = await CartItem.findOne({
//       where: { userId, itemId},
//     });

//     if (existingItem) {
//       // Update the quantity if the item exists
//       existingItem.quantity += quantity;
//       await existingItem.save();
//       return existingItem;
//     } else {
//       // Insert new item if it doesn't exist
//       const newItem = await CartItem.create({
//         userId,
//         itemId,
//        
//       });
//       return newItem;
//     }
//   };
//   // Show the cart items for a specific user
//   const getCartItemsByUser = async (userId) => {
//     const cartItems = await CartItem.findAll({
//       where: { userId },
//     });
//     return cartItems;
//   };

//   // Remove an item from the cart
//   const removeItem = async (userId, itemId, platform) => {
//     const itemToRemove = await CartItem.findOne({
//       where: { userId, itemId},
//     });

//     if (itemToRemove) {
//       await itemToRemove.destroy();
//       return true;
//     }
//     return false;
//   };




// const CartItem = sequelize.define('CartItem', {
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       field: 'user_id',
//     },
//     itemId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       field: 'item_id',
//     },
//     platform: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       defaultValue: 1,
//     },
//     price: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//   }, {
//     tableName: 'cart_items',
//     timestamps: false, // Assuming no timestamps are needed
//   });
