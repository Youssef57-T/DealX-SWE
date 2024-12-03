import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle navigation
import axios from 'axios'; // For API calls

function Card({ product }) {
  const [inCart, setInCart] = useState(false); // State to track cart status
  const [inWishlist, setInWishlist] = useState(false); // State to track wishlist status
  const navigate = useNavigate(); // React Router hook for navigation
  // Handle adding to cart
  const handleAddToCart = async () => {
      try {
        if (!inCart) {

          const requestData = {
          
            quantity: product.stock_quantity,     
            cart_id: 123,      
          };
          // API call to add product to cart
          await axios.post(`http://localhost:5000/api/cart/${product.product_id}` ,requestData);
          setInCart(true);
          alert('Product added to cart!');
        } else {
          // Navigate to cart if already in cart
          navigate('/cart');
        }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  // Handle adding to wishlist
  const handleAddToWishlist = async () => {
    try {
      if (!inWishlist) {
        await axios.post('/api/wishlist', { productId: product.id }); // API call to add product to wishlist
        setInWishlist(true);
        alert('Product added to wishlist!');
      } else {
        navigate('/wishlist'); // Navigate to wishlist if already in wishlist
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  // Navigate to product details page
  const handleCardClick = (product) => {
    navigate(`/product` , {state : {product}}); // Assumes a route like /product/:id exists
  };

  return (
    <div className="product-card" onClick={() => handleCardClick(product)}>
      <div className="card-image">
        <img src={product.image_url} alt="Product Image" />
      </div>
      <div className="card-details">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="card-footer">
          <span className="product-price">${product.price}</span>
          <button
            className="add-to-cart"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering card click
              handleAddToCart();
            }}
          > <div className="fa fa-shopping-cart"></div>
         </button>
          {/* <button
            className="add-to-wishlist"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering card click
              handleAddToWishlist();
            }}
          >
            {inWishlist ? 'View Wishlist' : 'Add to Wishlist'}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
