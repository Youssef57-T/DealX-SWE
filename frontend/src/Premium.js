import React, { useState, useEffect } from 'react';
import axios from './axiosConfig'; // Centralized Axios configuration
import './Premium.css';

const Premium = () => {
    const [isPremium, setIsPremium] = useState(false);
    const userId = localStorage.getItem('userId'); // Retrieve user ID

    // Check if the user is a premium member
    useEffect(() => {
        axios.get(`/api/check-premium/${userId}`)
            .then(response => {
                setIsPremium(response.data.is_premium);
            })
            .catch(error => console.error('Error checking premium status:', error));
    }, [userId]);

    // Handle subscribing to premium
    const handleSubscribe = () => {
        axios.put(`/api/subscribe/${userId}`)
            .then(() => {
                alert('You are now a premium member!');
                setIsPremium(true);
            })
            .catch(error => console.error('Error subscribing to premium:', error));
    };

    // Handle unsubscribing from premium
    const handleUnsubscribe = () => {
        if (window.confirm('Are you sure you want to unsubscribe from premium?')) {
            axios.put(`/api/unsubscribe/${userId}`)
                .then(() => {
                    alert('You are no longer a premium member.');
                    setIsPremium(false);
                })
                .catch(error => console.error('Error unsubscribing from premium:', error));
        }
    };

    return (
        <div className="premium-container">
            <h1>Premium Membership</h1>
            {isPremium ? (
                <div>
                    <p>You are a premium member! Enjoy exclusive benefits.</p>
                    <button className="premium-btn unsubscribe" onClick={handleUnsubscribe}>Unsubscribe</button>
                </div>
            ) : (
                <div>
                    <p>Become a premium member to unlock exclusive features!</p>
                    <button className="premium-btn subscribe" onClick={handleSubscribe}>Subscribe</button>
                </div>
            )}
        </div>
    );
};

export default Premium;
