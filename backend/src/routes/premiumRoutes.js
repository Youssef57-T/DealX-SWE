import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// Subscribe user to premium
router.put('/api/subscribe/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId); // Fetch user by primary key
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.is_premium = true;
        await user.save(); // Save changes
        res.status(200).json({ message: 'You are now a premium member!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update premium status' });
    }
});

// Check if user is premium
router.get('/api/check-premium/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ is_premium: user.is_premium });
    } catch (err) {
        res.status(500).json({ error: 'Error checking premium status' });
    }
});

// Unsubscribe from premium
router.put('/api/unsubscribe/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.is_premium = false;
        await user.save();
        res.status(200).json({ message: 'You are no longer a premium member.' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to cancel premium membership' });
    }
});

export default router;
