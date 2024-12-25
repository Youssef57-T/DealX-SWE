import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainNav from './Main_Nav';
import { useUser } from './UserContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Initialize Stripe
const stripePromise = loadStripe('your-publishable-key-here');

const CartPageContent = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoadingCart, setIsLoadingCart] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const { user } = useUser();

  const stripe = useStripe();
  const elements = useElements();

  const userId = user?.data?.user_id;

  useEffect(() => {
    if (!userId) return;

    const fetchCartData = async () => {
      try {
        setIsLoadingCart(true);
        const response = await axios.get(`http://localhost:5000/api/cartpage/${userId}`);
        setProducts(response.data.items || []);
      } catch (err) {
        setError('Failed to fetch cart data.');
      } finally {
        setIsLoadingCart(false);
      }
    };

    fetchCartData();
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    try {
      const card = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        throw new Error(error.message);
      }

      const res = await axios.post('http://localhost:5000/create-payment-intent', {
        payment_method: paymentMethod.id,
      });

      const { client_secret } = res.data;
      const confirm = await stripe.confirmCardPayment(client_secret);

      if (confirm.error) {
        throw new Error(confirm.error.message);
      }

      console.log('Payment Successful!');
      // Handle post-payment success, e.g., clearing the cart
    } catch (err) {
      setError(err.message || 'Payment failed. Please try again.');
    } finally {
      setIsProcessingPayment(false);
    }
  };

  if (isLoadingCart) return <p>Loading cart...</p>;
  if (error) return <p>{error}</p>;

  const totalItems = products.reduce((sum, product) => sum + (product.quantity || 0), 0);
  const totalPrice = products.reduce((sum, product) => sum + (product.price || 0) * (product.quantity || 0), 0);
  const estimatedTaxes = 200;
  const deliveryFee = 100;
  const estimatedTotal = totalPrice + estimatedTaxes + deliveryFee;

  return (
    <>
      <MainNav />
      <div className="cart-page">
        <h1>Your Cart: {totalItems} items</h1>
        <div className="cart-content">
          <div className="cart-products">
            {products.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <span>{product.name}</span>
                  <span>QTY: {product.quantity}</span>
                  <span>${(product.price || 0)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Subtotal: {totalItems} items</h3>
            <p>$ {totalPrice}</p>
            <h3>Est. taxes:</h3>
            <p>$ {estimatedTaxes}</p>
            <hr />
            <h3>Est. total</h3>
            <p>with delivery ${deliveryFee}</p>
            <h2>$ {estimatedTotal}</h2>
            <form onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': { color: '#aab7c4' },
                    },
                    invalid: { color: '#9e2146' },
                  },
                }}
              />
              <button
                className="checkout-btn"
                type="submit"
                disabled={!stripe || isProcessingPayment}
              >
                {isProcessingPayment ? 'Processing...' : 'Checkout'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const CartPage = () => (
  <Elements stripe={stripePromise}>
    <CartPageContent />
  </Elements>
);

export default CartPage;
