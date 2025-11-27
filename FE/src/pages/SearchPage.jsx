// src/pages/SearchPage.jsx
import React, { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { TRENDING_PRODUCTS, OFFERS_PRODUCTS, MIGHT_LIKE_PRODUCTS } from '../data/products';

const ALL_PRODUCTS = [...TRENDING_PRODUCTS, ...OFFERS_PRODUCTS, ...MIGHT_LIKE_PRODUCTS];

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter(p => (p.name || '').toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="page-container-wide">
      <h2 className="section-heading">Search Products</h2>

      <div style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center', maxWidth: 720 }}>
        <input
          aria-label="Search products"
          placeholder="Type product name, e.g. 'Menmai' or 'Akira'..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            flex: 1,
            padding: '12px 14px',
            borderRadius: 8,
            border: '1px solid #e6e6e6',
            fontSize: 16,
            boxSizing: 'border-box'
          }}
        />
        <button
          onClick={() => setQuery('')}
          style={{ padding: '10px 14px', borderRadius: 8, border: 'none', background: '#FF784B', color: '#fff', cursor: 'pointer' }}
        >
          Clear
        </button>
      </div>

      <div style={{ marginBottom: 12, color: '#666' }}>
        Showing <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''} {query ? `for “${query}”` : ''}
      </div>

      <div className="results-grid" role="list">
        {results.map((p, i) => (
          <div key={p._id ?? `${p.name}-${i}`} className="product-card-flex" role="listitem">
            <div className="product-card-inner">
              <ProductCard product={p} />
            </div>
          </div>
        ))}
      </div>

      {results.length === 0 && (
        <div style={{ marginTop: 30, textAlign: 'center', color: '#888' }}>
          No products found — try a shorter or different keyword.
        </div>
      )}
    </div>
  );
}
