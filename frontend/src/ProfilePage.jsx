import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [profile, setProfile] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/profile/${userId}`)
            .then((response) => {
                setProfile(response.data);
                setFormData(response.data);
            })
            .catch((error) => console.error('Error fetching profile:', error));
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdateProfile = () => {
        axios
            .put(`http://localhost:5000/api/profile/${userId}`, formData)
            .then(() => {
                alert('Profile updated successfully');
                setProfile(formData);
                setEditMode(false);
            })
            .catch((error) => console.error('Error updating profile:', error));
    };

    const handleDeleteProfile = () => {
        if (window.confirm('Are you sure you want to delete your profile?')) {
            axios
                .delete(`http://localhost:5000/api/profile/${userId}`)
                .then(() => {
                    alert('Profile deleted');
                    localStorage.removeItem('userId');
                    navigate('/');
                })
                .catch((error) => console.error('Error deleting profile:', error));
        }
    };

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
