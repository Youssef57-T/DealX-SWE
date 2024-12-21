const { PriceAlerts, Product } = require('../models');

exports.createPriceAlert = async (req, res) => {
  const { product_id, user_id, target_price } = req.body;

  try {
    //Input validation
    if (!product_id || !user_id || !target_price) {
      return res.status(400).json({ error: 'All fields are required: product_id, user_id, target_price' });
    }

    if (target_price <= 0) {
      return res.status(400).json({ error: 'Target price must be a positive value' });
    }

    const productExists = await Product.findByPk(product_id);
    if (!productExists) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const alert = await PriceAlerts.create({ product_id, user_id, target_price });
    res.status(201).json(alert);
  } catch (error) {
    console.error('Error creating price alert:', error.message);
    res.status(500).json({ error: 'An error occurred while creating the price alert' });
  }
};
