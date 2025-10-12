// kyras-closet-backend/src/controllers/productController.js

const Product = require('../models/Product'); // Import the Product Model

// Utility function to generate a random discount percentage (e.g., 5% to 30%)
const getRandomDiscount = () => {
    const min = 5;
    const max = 30;
    const discount = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${discount}%`;
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
};

const seedProducts = async (req, res) => {
    try {
        // Clear old data first
        await Product.deleteMany();
        
        const dummyProducts = [
            // --- TRENDING NOW SECTION (6 ITEMS) ---
            { name: 'Menmai', price: 800, rating: 4.5, image: '/images/menmai_maroon.jpg', category: 'Trending Now' },
            { name: 'Ilai', price: 900, rating: 4.5, image: '/images/ilai_purple.jpg', category: 'Trending Now' },
            { name: 'Menmai (Red)', price: 800, rating: 4.5, image: '/images/menmai_red.jpg', category: 'Trending Now' },
            { name: 'Alaimagal', price: 1200, rating: 4.5, image: '/images/alaimagal.jpg', category: 'Trending Now' }, 
            { name: 'Akira', price: 700, rating: 4.5, image: '/images/akira_purple.jpg', category: 'Trending Now' },
            { name: 'Cotton Candy', price: 600, rating: 4.5, image: '/images/cotton_candy.jpg', category: 'Trending Now' },
            
            // --- OFFERS SECTION (6 ITEMS) ---
            { name: 'Kalyani', price: 1200, rating: 4.5, image: '/images/kalyani_saree.jpg', category: 'Offers' },
            { name: 'Akira (Green)', price: 700, rating: 4.5, image: '/images/akira_green.jpg', category: 'Offers' }, 
            { name: 'Victoria', price: 2500, rating: 4.5, image: '/images/victoria_gown.jpg', category: 'Offers' }, 
            { name: 'Rachel', price: 800, rating: 4.5, image: '/images/rachel_top.jpg', category: 'Offers' },
            { name: 'Mathuri', price: 2500, rating: 4.5, image: '/images/mathuri_skirt.jpg', category: 'Offers' },
            { name: 'White Candy', price: 3000, rating: 4.5, image: '/images/white_candy.jpg', category: 'Offers' },
            
            // --- YOU MIGHT LIKE SECTION (6 ITEMS for scrolling) ---
            { name: 'Minnal', price: 5000, rating: 4.5, image: '/images/minnal.jpg', category: 'You Might Like' },
            { name: 'Shifali', price: 5000, rating: 4.5, image: '/images/shifali.jpg', category: 'You Might Like' },
            { name: 'Kayal', price: 3000, rating: 4.5, image: '/images/kayal.jpg', category: 'You Might Like' },
            { name: 'Pista', price: 3000, rating: 4.5, image: '/images/pista.jpg', category: 'You Might Like' },
            { name: 'Emerald', price: 4000, rating: 5.0, image: '/images/emerald.jpg', category: 'You Might Like' },
            { name: 'Ruby', price: 2800, rating: 4.0, image: '/images/ruby.jpg', category: 'You Might Like' },
        ];
        
        // Apply Random Discount to ALL products that have a price
        const productsWithDiscounts = dummyProducts.map(product => {
            if (product.price) {
                return { 
                    ...product, 
                    discount: getRandomDiscount() 
                };
            }
            return product;
        });

        const createdProducts = await Product.insertMany(productsWithDiscounts);
        res.status(201).json(createdProducts);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error seeding products' });
    }
};

module.exports = { 
    getProducts, 
    seedProducts 
};