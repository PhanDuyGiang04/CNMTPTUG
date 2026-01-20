const Product = require('../models/product.model');

exports.index = async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    const [products] = await Product.getAll();
    res.render('products', { products });
};

exports.add = async (req, res) => {
    const { name, price, quantity } = req.body;
    await Product.create(name, price, quantity);
    res.redirect('/');
};

exports.editForm = async (req, res) => {
    const [rows] = await Product.getById(req.params.id);
    res.render('edit', { product: rows[0] });
};

exports.update = async (req, res) => {
    const { name, price, quantity } = req.body;
    await Product.update(req.params.id, name, price, quantity);
    res.redirect('/');
};

exports.delete = async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/');
};
