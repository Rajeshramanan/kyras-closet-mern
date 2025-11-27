// src/components/OffersSection.jsx
import React from 'react';
import ProductCard from './ProductCard';

const OFFERS_PRODUCTS = [
  { name: 'Kalyani', price: 1200, rating: 4.5, image: '/images/kalyani_saree.jpg', discount: '10%' },
  { name: 'Akira (Green)', price: 700, rating: 4.5, image: '/images/akira_green.jpg', discount: '20%' },
  { name: 'Victoria', price: 2500, rating: 4.5, image: '/images/victoria_gown.jpg', discount: '20%' },
  { name: 'Rachel', price: 800, rating: 4.5, image: '/images/rachel_top.jpg', discount: '15%' },
  { name: 'Mathuri', price: 2500, rating: 4.5, image: '/images/mathuri_skirt.jpg', discount: '25%' },
  { name: 'White Candy', price: 3000, rating: 4.5, image: '/images/white_candy.jpg', discount: '5%' },
];

const OffersSection = () => {
  return (
    <div style={{ padding: '0 20px', margin: '0 auto', maxWidth: '1200px' }}>
      <h2 className="section-heading">Offers</h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {OFFERS_PRODUCTS.map((product, index) => (
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
          View All Offers
        </button>
      </div>
    </div>
  );
};

export default OffersSection;
