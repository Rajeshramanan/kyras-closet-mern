// src/components/TrendingNowSection.jsx
import React from 'react';
import ProductCard from './ProductCard';

const TRENDING_PRODUCTS = [
  { name: 'Menmai', price: 800, rating: 4.5, image: '/images/menmai_maroon.jpg' },
  { name: 'Ilai', price: 900, rating: 4.5, image: '/images/ilai_purple.jpg' },
  { name: 'Menmai (Red)', price: 800, rating: 4.5, image: '/images/menmai_red.jpg' },
  { name: 'Alaimagal', price: 1200, rating: 4.5, image: '/images/alaimagal.jpg' },
  { name: 'Akira', price: 700, rating: 4.5, image: '/images/akira_purple.jpg' },
  { name: 'Cotton Candy', price: 600, rating: 4.5, image: '/images/cotton_candy.jpg' },
];

const TrendingNowSection = () => {
  return (
    <div style={{ padding: '0 20px', margin: '0 auto', maxWidth: '1200px' }}>
      <h2 className="section-heading">Trending Now</h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {TRENDING_PRODUCTS.map((product, index) => (
          <div
            key={index}
            className="product-item-mobile-2col"
            style={{
              width: '32%',
              marginRight: (index % 3 !== 2) ? '2%' : '0',
              marginBottom: '30px',
              minWidth: '300px',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          style={{ backgroundColor: '#FF784B', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 40px', fontWeight: '500', cursor: 'pointer' }}
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default TrendingNowSection;
