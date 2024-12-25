const { PriceHistory, Product } = require('../models');

// Get price history for a specific product
exports.getPriceHistory = async (req, res) => {
  const { productId } = req.params;

  try {
    // Validate product ID
    if (!productId || isNaN(productId)) {
      return res.status(400).json({ error: 'Invalid or missing product ID' });
    }

    // Check if product exists
    const productExists = await Product.findByPk(productId);
    if (!productExists) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Fetch price history
    const history = await PriceHistory.findAll({
      where: { product_id: productId },
      order: [['recorded_at', 'DESC']], // Latest prices first
    });

    if (history.length === 0) {
      return res.status(404).json({ error: 'No price history found for this product' });
    }

    // Transform data if necessary
    const response = history.map((entry) => ({
      price: entry.price,
      recorded_at: entry.recorded_at,
    }));

    res.json(response);
  } catch (error) {
    console.error('Error fetching price history:', error);
    res.status(500).json({ error: 'Unable to fetch price history' });
  }
};

exports.addPriceHistory = async (req, res) => {
  const { product_id, price } = req.body;

  try {
    //Validate input
    if (!product_id || !price || isNaN(price) || price <= 0) {
      return res.status(400).json({ error: 'Invalid or missing product_id or price' });
    }

    const productExists = await Product.findByPk(product_id);
    if (!productExists) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const newHistory = await PriceHistory.create({
      product_id,
      price,
      recorded_at: new Date(), 
    });

    res.status(201).json(newHistory);
  } catch (error) {
    console.error('Error creating price history:', error);
    res.status(500).json({ error: 'Unable to add price history' });
  }
};
