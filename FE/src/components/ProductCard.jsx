// src/components/ProductCard.jsx
import React from 'react';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { useFavorites, useCart } from '../contexts/AppStateContext';

/**
 * ProductCard
 * - shows product image, name, price, rating
 * - heart button toggles favorite via context
 * - "Add to Cart" uses cart context
 */
const ProductCard = ({ product }) => {
  const id = product._id ?? product.name;
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  const favorited = isFavorite(id);

  return (
    <div className="product-card-inner" style={{
      backgroundColor: 'white',
      border: '1px solid #eee',
      borderRadius: 6,
      overflow: 'hidden',
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ position: 'relative' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: 350, objectFit: 'cover', display: 'block' }}
          onError={(e) => { e.target.onerror = null; e.target.src = "/placeholder.png"; e.target.style.backgroundColor = '#f0f0f0'; }}
        />

        {/* Heart toggle (top-right) */}
        <button
          aria-label={favorited ? "Remove from favorites" : "Save to favorites"}
          onClick={() => toggleFavorite(id)}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: favorited ? '#FF784B' : 'rgba(255,255,255,0.9)',
            color: favorited ? '#fff' : '#333',
            border: 'none',
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
          }}
        >
          {favorited ? <FaHeart /> : <FaRegHeart />}
        </button>

        {/* discount badge if present */}
        {product.discount && (
          <div style={{
            position: 'absolute',
            top: 10,
            left: 10,
            background: '#A15843',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 12
          }}>
            {product.discount} Off
          </div>
        )}
      </div>

      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div>
          <h5 style={{ fontWeight: 700, margin: '8px 0 6px', fontSize: '1.05rem' }}>{product.name}</h5>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <div style={{ color: '#333', fontWeight: 700 }}>Rs.{product.price?.toLocaleString()}</div>
            <div style={{ backgroundColor: '#FF784B', color: '#fff', padding: '4px 8px', borderRadius: 6, fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span>{product.rating}</span>
              <FaStar size={12} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => addToCart(product, 1)}
            style={{
              background: '#FF784B',
              color: '#fff',
              border: 'none',
              padding: '10px 14px',
              borderRadius: 6,
              fontWeight: 700,
              cursor: 'pointer',
              flex: 1
            }}
          >
            Add to Cart
          </button>

          <button
            onClick={() => toggleFavorite(id)}
            style={{
              background: '#fff',
              border: '1px solid #eee',
              padding: '10px 12px',
              borderRadius: 6,
              cursor: 'pointer'
            }}
          >
            {favorited ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
