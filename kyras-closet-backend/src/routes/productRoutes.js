// kyras-closet-backend/src/routes/productRoutes.js

const express = require('express');
const router = express.Router();
const { getProducts, seedProducts } = require('../controllers/productController');

// @route GET /api/products
router.route('/').get(getProducts);

// @route POST /api/products/seed - Use this once to populate the database
router.route('/seed').post(seedProducts); 

module.exports = router;