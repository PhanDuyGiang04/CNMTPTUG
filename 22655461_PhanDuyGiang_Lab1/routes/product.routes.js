const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.index);

router.post('/add', productController.add);

router.get('/edit/:id', productController.editForm);
router.post('/edit/:id', productController.update);

router.get('/delete/:id', productController.delete);

module.exports = router;
