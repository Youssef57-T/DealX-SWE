import Product from '../models/products.js'; 
import { Op } from 'sequelize'; 

const searchProducts = async (req, res) => {
  const { query } = req.query;

  try {
    const products = await Product.findAll({
      where: {
        description: {
          [Op.iLike]: `%${query}%`,
        },
      },
      order: [['price', 'ASC']],
    });

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found.' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

export { searchProducts };
