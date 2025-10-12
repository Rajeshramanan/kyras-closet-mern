// kyras-closet-frontend/src/components/YouMightLikeSection.jsx - FULLY SELF-CONTAINED CODE

import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';

// --- HARDCODED DATA (Replaces props/backend connection) ---
const MIGHT_LIKE_PRODUCTS = [
    { name: 'Minnal', price: 5000, rating: 4.5, image: '/images/minnal.jpg', discount: '15%' },
    { name: 'Shifali', price: 5000, rating: 4.5, image: '/images/shifali.jpg', discount: '10%' },
    { name: 'Kayal', price: 3000, rating: 4.5, image: '/images/kayal.jpg', discount: '20%' },
    { name: 'Pista', price: 3000, rating: 4.5, image: '/images/pista.jpg', discount: '5%' },
    { name: 'Emerald', price: 4000, rating: 5.0, image: '/images/emerald.jpg', discount: '12%' },
    { name: 'Ruby', price: 2800, rating: 4.0, image: '/images/ruby.jpg', discount: '25%' },
    { name: 'mul', price: 3200, rating: 4.8, image: '/images/Mul.jpg', discount: '10%' },
    { name: 'lehenga', price: 1800, rating: 4.2, image: '/images/Lehenga.jpg', discount: '18%' },
    { name: 'Topaz', price: 4500, rating: 4.7, image: '/images/shifali.jpg', discount: '22%' },
    { name: 'Jade', price: 2100, rating: 4.1, image: '/images/white_candy.jpg', discount: '7%' },
];

// --- INTEGRATED PRODUCT CARD (Uses internal CSS) ---
const ProductCard = ({ product }) => {
    const { name, price, rating, image, discount } = product;
    return (
        <div style={{
            backgroundColor: 'white',
            border: '1px solid #eee',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
            width: '100%',
            marginBottom: '20px',
        }}>
            <div style={{ position: 'relative' }}>
                {/* Discount Badge */}
                {discount && <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#A15843', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600', zIndex: 10 }}>{discount} Off</div>}
                
                <img 
                    src={image} 
                    alt={name} 
                    style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
                    onError={(e) => { e.target.onerror = null; e.target.src="/placeholder.png"; e.target.style.backgroundColor='#f0f0f0' }}
                />
                {/* Heart/Favorite Icon */}
                <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}>
                    <FaHeart size={16} color="#666" />
                </button>
            </div>
            <div style={{ padding: '10px 15px' }}>
                <h5 style={{ fontWeight: '600', fontSize: '1.1rem', margin: '10px 0' }}>{name}</h5>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', margin: '0', color: '#333' }}>Rs.{price.toLocaleString()}</p>
                    <div className="product-card-rating">
                        {rating} <FaStar size={10} style={{ marginLeft: '4px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- MAIN COMPONENT ---
const YouMightLikeSection = () => {
    return (
        <div style={{ padding: '0 20px', margin: '0 auto', maxWidth: '1200px' }}>
            <h2 className="section-heading">You Might Like</h2>
            
            {/* Horizontal Scroll Layout */}
            <div className="horizontal-scroll-container p-3">
                {MIGHT_LIKE_PRODUCTS.map((product, index) => (
                    <div key={index} style={{ minWidth: '300px' }}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouMightLikeSection;