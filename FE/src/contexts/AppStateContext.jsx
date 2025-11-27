// src/contexts/AppStateContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();
export const useFavorites = () => useContext(FavoritesContext);

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const AppStateProvider = ({ children }) => {
  // favorites as Set saved in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem('kyra_favs');
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });

  // cart: { [id]: { product, qty } }
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('kyra_cart');
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  // persist favorites
  useEffect(() => {
    try {
      localStorage.setItem('kyra_favs', JSON.stringify(Array.from(favorites)));
    } catch {}
  }, [favorites]);

  // persist cart
  useEffect(() => {
    try {
      localStorage.setItem('kyra_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  // favorites helpers
  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const copy = new Set(prev);
      if (copy.has(productId)) copy.delete(productId);
      else copy.add(productId);
      return copy;
    });
  };
  const isFavorite = (productId) => favorites.has(productId);

  // cart helpers
  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const next = { ...prev };
      const id = product._id ?? product.name;
      if (next[id]) {
        next[id] = { product: next[id].product, qty: next[id].qty + qty };
      } else {
        next[id] = { product, qty };
      }
      return next;
    });
  };

  const setItemQty = (productId, qty) => {
    setCart(prev => {
      const next = { ...prev };
      if (!next[productId]) return next;
      if (qty <= 0) {
        delete next[productId];
      } else {
        next[productId] = { ...next[productId], qty };
      }
      return next;
    });
  };

  const incrementQty = (productId) => {
    setCart(prev => {
      const next = { ...prev };
      if (!next[productId]) return next;
      next[productId] = { ...next[productId], qty: next[productId].qty + 1 };
      return next;
    });
  };

  const decrementQty = (productId) => {
    setCart(prev => {
      const next = { ...prev };
      if (!next[productId]) return next;
      const newQty = next[productId].qty - 1;
      if (newQty <= 0) delete next[productId];
      else next[productId] = { ...next[productId], qty: newQty };
      return next;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  const clearCart = () => setCart({});

  const cartCount = Object.values(cart).reduce((s, x) => s + (x.qty || 0), 0);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      <CartContext.Provider value={{
        cart, addToCart, setItemQty, incrementQty, decrementQty, removeFromCart, clearCart, cartCount
      }}>
        {children}
      </CartContext.Provider>
    </FavoritesContext.Provider>
  );
};
