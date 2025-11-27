// kyras-closet-backend/src/models/Product.js

const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String, // URL or file path to the image
            required: true,
        },
        category: {
            type: String, // e.g., 'Trending Now', 'Offers', 'You Might Like'
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;