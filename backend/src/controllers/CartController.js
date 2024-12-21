import Cart_items from '../models/CartModel.js';
import Cart from '../models/CartModel.js'


export async function addToCart(req, res) {
    try {
    const { id: product_id } = req.params;
    const { quantity, cart_id } = req.body;



    if (!product_id ) {
        return res.status(400).json({ message: 'productId and userId are required' });
    }
    
    const existingCartItem = await Cart_items.findOne({ where: {product_id } });
    if (existingCartItem) {

        return res.status(409).json({ message: 'Product is already in the cart' });
    }

    const newCartItem = await Cart_items.create({
        cart_id,
        product_id,
        quantity,
    });
    
    res.status(201).json({
        message: 'Product added to cart successfully',
        cartItem: newCartItem,
    });
    } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({
        message: 'Error adding product to the cart',
        error: error.message,
    });
    }
    }

export async function showCart (req, res) {

    try {
const { userId } = req.params;

// Get active cart for the user
const cart = await Cart.findAll ({ where: { user_id: userId } });
console.log(cart)
if (!cart) {
    return res.status(404).json({ message: 'No active cart found' });
}

// Get all items in the cart
const items = await Cart_items.findAll({ where: { cart_id: cart.id } });

// Categorize items by platform
// const categorizedItems = items.reduce((acc, item) => {
//     if (!acc[item.platform]) acc[item.platform] = [];
//     acc[item.platform].push(item);
//     return acc;
// }, {});

res.status(200).json({
    user_id: cart.user_id,
    items: categorizedItems,
    total_items: cart.total_items,
    total_price: cart.total_price,
    created_at: cart.created_at,
    updated_at: cart.updated_at,
    status: cart.status,
    checkout_details: cart.checkout_details,
});
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Failed' });
}
};


// exports.removeItem = async (req, res) => {
// try {
// const { userId, itemId, platform } = req.body;

// // Get the user's active cart
// const cart = await Cart.findOne({ where: { user_id: userId} });
// if (!cart) {
//     return res.status(404).json({ message: 'No active cart found' });
// }

// // Remove the item from the cart
// const result = await Cart_items.destroy({
//     where: { cart_id: cart.id, item_id: itemId, platform },
// });

// if (result) {
//     // Recalculate the total items and total price in the cart
//     const totalItems = await Cart_items.sum('quantity', { where: { cart_id: cart.id } });
//     const totalPrice = await Cart_items.sum('total_price', { where: { cart_id: cart.id } });

//     cart.total_items = totalItems;
//     cart.total_price = totalPrice;
//     await cart.save();

//     res.status(200).json({ message: 'Item removed from cart' });
// } else {
//     res.status(404).json({ message: 'Item not found in cart' });
// }
// } catch (err) {
// console.error(err);
// res.status(500).json({ error: 'Failed to remove item from cart' });
// }
// };



//     const { Cart, CartItem } = require('../models/cartModel');  // Import models

// exports.addToCart = async (req, res) => {
//   try {
//     const { userId, itemId , quantity} = req.body;

//     // Find or create a cart for the user
//     let cart = await Cart.findOne({ where: { user_id: userId, status: 'Active' } });
//     if (!cart) {
//       cart = await Cart.create({ user_id: userId });
//     }

//     // Check if the item already exists in the user's cart
//     let cartItem = await CartItem.findOne({
//       where: { cart_id: cart.id, item_id: itemId, platform },
//     });

//     if (cartItem) {
//       // If the item exists, update the quantity and total price
//       cartItem.quantity += quantity;
//       cartItem.total_price = cartItem.quantity * cartItem.unit_price;
//       await cartItem.save();
//     } else {
//       // If the item does not exist, create a new cart item
//       cartItem = await CartItem.create({
//         cart_id: cart.id,
//         item_id: itemId,
//         platform,
//         name,
//         quantity,
//         unit_price,
//         total_price: quantity * unit_price,
//       });
//     }

//     // Update the cart total price and item count
//     const totalItems = await CartItem.sum('quantity', { where: { cart_id: cart.id } });
//     const totalPrice = await CartItem.sum('total_price', { where: { cart_id: cart.id } });

//     cart.total_items = totalItems;
//     cart.total_price = totalPrice;
//     await cart.save();

//     res.status(200).json({ cartItem, cart });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to add item to cart' });
//   }
// };
// exports.showCart = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     // Get active cart for the user
//     const cart = await Cart.findOne({ where: { user_id: userId, status: 'Active' } });
//     if (!cart) {
//       return res.status(404).json({ message: 'No active cart found' });
//     }

//     // Get all items in the cart
//     const items = await CartItem.findAll({ where: { cart_id: cart.id } });

//     // Categorize items by platform
//     const categorizedItems = items.reduce((acc, item) => {
//       if (!acc[item.platform]) acc[item.platform] = [];
//       acc[item.platform].push(item);
//       return acc;
//     }, {});

//     res.status(200).json({
//       user_id: cart.user_id,
//       items: categorizedItems,
//       total_items: cart.total_items,
//       total_price: cart.total_price,
//       created_at: cart.created_at,
//       updated_at: cart.updated_at,
//       status: cart.status,
//       checkout_details: cart.checkout_details,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to fetch cart items' });
//   }
// };
// exports.removeItem = async (req, res) => {
//   try {
//     const { userId, itemId, platform } = req.body;

//     // Get the user's active cart
//     const cart = await Cart.findOne({ where: { user_id: userId, status: 'Active' } });
//     if (!cart) {
//       return res.status(404).json({ message: 'No active cart found' });
//     }

//     // Remove the item from the cart
//     const result = await CartItem.destroy({
//       where: { cart_id: cart.id, item_id: itemId, platform },
//     });

//     if (result) {
//       // Recalculate the total items and total price in the cart
//       const totalItems = await CartItem.sum('quantity', { where: { cart_id: cart.id } });
//       const totalPrice = await CartItem.sum('total_price', { where: { cart_id: cart.id } });

//       cart.total_items = totalItems;
//       cart.total_price = totalPrice;
//       await cart.save();

//       res.status(200).json({ message: 'Item removed from cart' });
//     } else {
//       res.status(404).json({ message: 'Item not found in cart' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to remove item from cart' });
//   }
// };
