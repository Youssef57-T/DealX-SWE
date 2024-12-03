import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
const [profile, setProfile] = useState(null);
const [editMode, setEditMode] = useState(false);
const [formData, setFormData] = useState({});
const [error, setError] = useState(null);
const navigate = useNavigate();

useEffect(() => {
    const fetchProfile = async () => {
    try {
    const response = await axios.get('http://localhost:5000/profile', { withCredentials: true });
    console.log(response);
    setProfile(response.data.existingUser); 
    setFormData(response.data.existingUser); 
    } catch (err) {
    if (err.response?.status === 401) {
        setError('Unauthorized: Please log in.');
        navigate('/login');
    } else {
        setError('An error occurred while fetching profile data.');
    }
    }
};

fetchProfile();
}, [navigate]);


const handleInputChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleUpdateProfile = async () => {
try {
    await axios.put(`/api/profile/${profile.id}`, formData, {
    withCredentials: true,
    });
    alert('Profile updated successfully');
    setProfile(formData);
    setEditMode(false);
} catch (error) {
    console.error('Error updating profile:', error);
    alert('Failed to update profile. Please try again.');
}
};

const handleDeleteProfile = async () => {
if (window.confirm('Are you sure you want to delete your profile?')) {
    try {
    await axios.delete(`/api/profile/${profile.id}`, {
        withCredentials: true,
    });
    alert('Profile deleted successfully');
    navigate('/login'); 

} catch (error) {
    console.error('Error deleting profile:', error);
    alert('Failed to delete profile. Please try again.');
    }
}
};

if (error) {
return <div className="error-message">{error}</div>;
}

if (!profile) {
return <div>Loading...</div>;
}

return (
<div className="profile-container">
    <h1 className="profile-heading">My Profile</h1>
    <div className="profile-card">
    {!editMode ? (
        <div className="profile-view">
        <p>
            <strong>Username:</strong> {profile.username}
        </p>
        <p>
            <strong>Email:</strong> {profile.email}
        </p>
        <p>
            <strong>Full Name:</strong> {profile.full_name}
        </p>
        <p>
            <strong>Address:</strong> {profile.address}
        </p>
        <p>
            <strong>Phone Number:</strong> {profile.phone_number}
        </p>
        <div className="button-group">
            <button
            className="btn edit-btn"

            onClick={() => setEditMode(true)}
            >
            Edit Profile
            </button>
            <button
            className="btn delete-btn"
            onClick={handleDeleteProfile}
            >
            Delete Profile
            </button>
            
        </div>
        </div>
    ) : (
        <div className="profile-edit">
        <input
            type="text"
            name="username"
            value={formData.username || ''}
            onChange={handleInputChange}
            placeholder="Username"
            className="form-input"
        />
        <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            placeholder="Email"
            className="form-input"
        />
        <input
            type="text"
            name="full_name"
            value={formData.full_name || ''}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form-input"
        />
        <textarea
            name="address"
            value={formData.address || ''}
            onChange={handleInputChange}
            placeholder="Address"
            className="form-textarea"
        />
        <input
            type="text"
            name="phone_number"
            value={formData.phone_number || ''}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="form-input"
        />
        <div className="button-group">
            <button
            className="btn save-btn"
            onClick={handleUpdateProfile}
            >
            Save Changes
            </button>
            <button
            className="btn cancel-btn"
            onClick={() => setEditMode(false)}
            >
            Cancel
            </button>
        </div>
        </div>
    )}
    </div>
</div>
);
};

export default ProfilePage;
