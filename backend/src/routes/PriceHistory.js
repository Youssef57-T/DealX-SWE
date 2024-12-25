const express = require('express');
const { body, param, validationResult } = require('express-validator');
const {
  getPriceHistory,
  addPriceHistory,
} = require('../controllers/priceHistoryController');

const router = express.Router();

// Middleware for handling validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// get price history
router.get(
  '/:productId',
  param('productId').isInt().withMessage('Product ID must be an integer'),
  handleValidationErrors,
  getPriceHistory
);

router.post(
  '/',
  [
    body('product_id').isInt().withMessage('Product ID must be an integer'),
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Price must be a positive number'),
  ],
  handleValidationErrors,
  addPriceHistory
);

module.exports = router;
