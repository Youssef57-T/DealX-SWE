import express from 'express';
import User from '../models/User.js'; // Ensure the User model path is correct

const router = express.Router();

// Fetch a user profile by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['user_id', 'username', 'email', 'full_name', 'address', 'phone_number'],
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Error fetching user profile:', err.message);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Update a user profile by ID
router.put('/:id', async (req, res) => {
  const { username, email, full_name, address, phone_number } = req.body;

  try {
    const [updated] = await User.update(
      { username, email, full_name, address, phone_number },
      { where: { user_id: req.params.id } }
    );

    if (updated === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error('Error updating user profile:', err.message);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Delete a user profile by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { user_id: req.params.id },
    });

    if (deleted === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Profile deleted successfully' });
  } catch (err) {
    console.error('Error deleting user profile:', err.message);
    res.status(500).json({ error: 'Failed to delete profile' });
  }
});

export default router;
