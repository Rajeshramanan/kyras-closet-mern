// src/pages/FavoritesPage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { useFavorites } from '../contexts/AppStateContext';
import { TRENDING_PRODUCTS, OFFERS_PRODUCTS, MIGHT_LIKE_PRODUCTS } from '../data/products';

// combine master product list (static)
const MASTER_PRODUCTS = [...TRENDING_PRODUCTS, ...OFFERS_PRODUCTS, ...MIGHT_LIKE_PRODUCTS];

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const favArray = Array.from(favorites); // array of ids (names or _id)

  // find products matching saved ids
  const favProducts = MASTER_PRODUCTS.filter(p => favArray.includes(p._id ?? p.name));

  return (
    <div style={{ maxWidth: 1200, margin: '30px auto', padding: '0 20px', boxSizing: 'border-box' }}>
      <h2 className="section-heading">Saved Items</h2>

      {favProducts.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#666', padding: 40 }}>
          <p style={{ fontWeight: 700 }}>No saved items yet</p>
          <p>Tap the heart on a product to save it here.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {favProducts.map((p, i) => (
            <ProductCard key={p._id ?? `${p.name}-${i}`} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
