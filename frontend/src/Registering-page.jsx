import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users', {
                email,
                password_hash: password,
            });
            if (response.data) {
                console.log("now from login  : ",response.data)
                login(response.data);
                console.log("Navigating with user from login:", response.data);
                
                navigate('/mainUser');
            }
        } catch (err) {
            console.error('Login failed:', err);
            setError('Login failed. Please check your credentials.');
        }
    };


    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                <p className="signup-link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
};


const SignUpForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [address, setAddress] = useState('');
const [username, setUsername] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const navigate = useNavigate();

const handleSubmitSignUp = async (e) => {
e.preventDefault();

const formData = {
    email,
    password_hash: password,
    address,
    username,
    firstName,
    lastName,
    phoneNumber,
};
try {
    const response = await axios.post('http://localhost:5000/api/users/signup', formData);

    if (response.status === 200) {

        navigate('/mainUser', { state: { user: formData } }); 
        alert("Your Account is Created");
    }
} catch (error) {
    alert("error")
}
console.log('Signup Form Data:', formData);

};

return (
<div className="login-container">
    <form className="login-form" onSubmit={handleSubmitSignUp}>
    <h2>Sign Up</h2>

    <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
        type="text"
        id="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
    </div>

    <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
        type="text"
        id="firstName"
        placeholder="Enter your first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        />
    </div>

    <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
        type="text"
        id="lastName"
        placeholder="Enter your last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        />
    </div>

    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
    </div>

    <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
    </div>

    <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
        type="text"
        id="address"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        />
    </div>

    <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
        type="tel"
        id="phoneNumber"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
        />
    </div>

    <button type="submit" className="login-button">Sign Up</button>
    </form>
</div>
);
};

export default {LoginForm,SignUpForm};