const productService = require('../../services/ProductService');

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};