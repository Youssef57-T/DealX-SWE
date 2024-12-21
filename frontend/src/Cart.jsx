import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainNav from './Main_Nav';

const CartPage = () => {
const [marketplaces, setMarketplaces] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const userId = 1; // Replace with actual user_id logic

useEffect(() => {
const fetchCartData = async () => {
    try {
    const response = await axios.get(`http:localhost:5000/api/cartpage/${userId}`);
    setMarketplaces(response.data.marketplaces);
    } catch (err) {
    setError('Failed to fetch cart data.');
    } finally {
    setLoading(false);
    }
};

fetchCartData();
}, [userId]);

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

return (
<>
    <MainNav />

    <div className="cart-page">
    <h1>Your Cart: {marketplaces.reduce((total, m) => total + m.products.length, 0)} items</h1>

    <div className="cart-content">
        <div className="cart-marketplaces">
        {marketplaces.map((marketplace) => (
            <div className="marketplace" key={marketplace.name}>
            <h2>{marketplace.name}</h2>
            {marketplace.products.map((product, index) => (
                <div className="product" key={index}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
                <div className="product-details">
                    <span>{product.name}</span>
                    <span>QTY: {product.quantity}</span>
                    <span>{product.price} $</span>
                </div>
                </div>
            ))}
            </div>
        ))}
        </div>

        <div className="cart-summary">
        <h3>Subtotal: {marketplaces.reduce((total, m) => total + m.products.reduce((sum, p) => sum + p.quantity, 0), 0)} items</h3>
        <p>$ {marketplaces.reduce((total, m) => total + m.products.reduce((sum, p) => sum + p.price * p.quantity, 0), 0).toFixed(2)}</p>
        <h3>Est. taxes:</h3>
        <p>$ 200</p>
        <hr />
        <h3>Est. total</h3>
        <p>with delivery $100</p>
        <h2>$ {(marketplaces.reduce((total, m) => total + m.products.reduce((sum, p) => sum + p.price * p.quantity, 0), 0) + 200 + 100).toFixed(2)}</h2>
        <button className="checkout-btn">Checkout</button>
        </div>
    </div>
    </div>
</>
);
};

export default CartPage;
