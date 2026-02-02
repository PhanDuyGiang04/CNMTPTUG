const Product = require("../models/product.model");

exports.findAll = async (req, res) => {
    try {
        const products = await Product.getAll();
        res.json(products);
    } catch (err) {
        res.status(500).json(err);
    }
};
