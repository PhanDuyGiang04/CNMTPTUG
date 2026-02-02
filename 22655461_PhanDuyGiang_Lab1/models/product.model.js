const db = require('../db/mysql');

exports.getAll = () => {
    return db.query('SELECT * FROM products');
};

exports.getById = (id) => {
    return db.query('SELECT * FROM products WHERE id = ?', [id]);
};

exports.create = (name, price, quantity) => {
    return db.query(
        'INSERT INTO products(name, price, quantity) VALUES (?, ?, ?)',
        [name, price, quantity]
    );
};

exports.update = (id, name, price, quantity) => {
    return db.query(
        'UPDATE products SET name=?, price=?, quantity=? WHERE id=?',
        [name, price, quantity, id]
    );
};

exports.delete = (id) => {
    return db.query('DELETE FROM products WHERE id=?', [id]);
};
