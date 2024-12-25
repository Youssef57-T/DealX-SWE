const express = require('express');
const { body, validationResult } = require('express-validator');
const { createPriceAlert } = require('../controllers/priceAlertsController');

const router = express.Router();

// Middleware for input validation
const validatePriceAlert = [
  body('product_id').isInt().withMessage('Product ID must be an integer'),
  body('user_id').isInt().withMessage('User ID must be an integer'),
  body('target_price')
    .isFloat({ gt: 0 })
    .withMessage('Target price must be a positive number'),
];

router.post(
  '/',
  validatePriceAlert,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createPriceAlert
);

module.exports = router;
