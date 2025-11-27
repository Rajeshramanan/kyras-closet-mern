// kyras-closet-backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const cors = require('cors');

// Import the router
const productRoutes = require('./src/routes/productRoutes');

dotenv.config();
connectDB(); 

const app = express();
app.use(cors()); 
app.use(express.json()); 

// API Routes
app.use('/api/products', productRoutes); // Use the product routes

app.get('/', (req, res) => {
    res.send('Kyra\'s Closet Backend API is running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));