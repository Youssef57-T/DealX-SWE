import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { motion } from 'framer-motion';
import { useUser } from './UserContext';


function Card({ product }) {

  const [inCart, setInCart] = useState(false); 
  const [inWishlist, setInWishlist] = useState(false);
  const navigate = useNavigate();
  const {user} = useUser();
  const handleAddToCart = async () => {
      try {
        console.log("this is quantity" , product.stock_quantity)
        const requestData = {
          
          stock_quantity: product.stock_quantity,     
          user_id: user.data.user_id,      
        };

        if (!inCart) {

          
          await axios.post(`http://localhost:5000/api/cart/${product.product_id}` ,requestData);
          setInCart(true);
          
          alert('Product added to cart!');
          


          
        } else {
      await axios.put(`http://localhost:5000/api/cart/${product.product_id}`, requestData);
      alert('Product quantity updated in cart!');
      navigate('/cart');
    }

    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };


  const handleAddToWishlist = async () => {
    try {
      if (!inWishlist) {
        await axios.post('/api/wishlist', { productId: product.id });
        setInWishlist(true);
        alert('Product added to wishlist!');
      } else {
        navigate('/wishlist'); 
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const handleCardClick = (product) => {
    navigate(`/product` , {state : {product}});
  };

  return (
    <motion.div 
    className="product-card" onClick={() => handleCardClick(product)}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }} // Trigger animation once when card is in view
  >
    
    
         <div className="card-image">
        <img src={product.image_url} alt="Product Image" />
      </div>
      <div className="card-details">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="card-footer">
          <span className="product-price">${product.price}</span>
          <span className="product-price">${product.stock_quantity}</span>

          <button
            className="add-to-cart"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          > <div className="fa fa-shopping-cart"></div>
         </button>
          <button
            className="add-to-cart"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering card click
              handleAddToWishlist();
            }}
          ><div className="fa-solid fa-heart-circle-plus"></div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
