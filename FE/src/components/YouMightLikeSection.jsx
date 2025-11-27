// src/components/YouMightLikeSection.jsx
import React from 'react';
import ProductCard from './ProductCard';

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

const YouMightLikeSection = () => {
  return (
    <div style={{ padding: '0 20px', margin: '0 auto', maxWidth: '1200px' }}>
      <h2 className="section-heading">You Might Like</h2>

      <div className="auto-scroll-wrapper-cards">
        <div className="auto-scroll-track-cards">
          {MIGHT_LIKE_PRODUCTS.map((product, index) => (
            <div key={index} style={{ minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
              <ProductCard product={product} />
            </div>
          ))}

          {/* duplicate for smooth loop */}
          {MIGHT_LIKE_PRODUCTS.map((product, index) => (
            <div key={'dup-' + index} style={{ minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouMightLikeSection;
