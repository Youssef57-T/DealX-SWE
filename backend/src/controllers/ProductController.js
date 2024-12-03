import Product from '../models/ProductCardModel.js';

export async function getProducts(req, res) {
try {
    const products = await Product.findAll();
    res.status(200).json(products);
} catch (error) {
    res.status(500).json({ message: 'Error fetching', error: error.message });
}
}
