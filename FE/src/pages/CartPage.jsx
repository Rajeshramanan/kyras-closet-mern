// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../contexts/AppStateContext';

const CartPage = () => {
  const { cart, incrementQty, decrementQty, removeFromCart, clearCart } = useCart();
  const items = Object.values(cart);
  const total = items.reduce((s, it) => s + (it.product.price * (it.qty || 1)), 0);

  return (
    <div style={{ maxWidth: 1000, margin: '30px auto', padding: '0 20px' }}>
      <h2 className="section-heading">Your Cart</h2>

      {items.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>Your cart is empty. Add items from product listings.</p>
      ) : (
        <>
          <div style={{ display: 'grid', gap: 12 }}>
            {items.map(it => {
              const id = it.product._id ?? it.product.name;
              return (
                <div key={id} style={{ display: 'flex', gap: 12, alignItems: 'center', border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
                  <img src={it.product.image} alt={it.product.name} style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 6 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{it.product.name}</div>
                    <div style={{ color:'#666', marginTop:6 }}>Rs.{it.product.price}</div>

                    <div style={{ marginTop: 10, display: 'flex', gap: 8, alignItems: 'center' }}>
                      <button onClick={() => decrementQty(id)} style={qtyBtnStyle}>−</button>
                      <div style={{ minWidth: 36, textAlign: 'center', fontWeight: 700 }}>{it.qty}</div>
                      <button onClick={() => incrementQty(id)} style={qtyBtnStyle}>+</button>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 700 }}>Rs.{(it.product.price * (it.qty || 1)).toLocaleString()}</div>
                    <button onClick={() => removeFromCart(id)} style={{ marginTop: 8, background: '#fff', border: '1px solid #eee', padding: '6px 10px', cursor: 'pointer' }}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Total: Rs.{total.toLocaleString()}</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={clearCart} style={{ background: '#fff', border: '1px solid #eee', padding: '8px 12px', cursor: 'pointer' }}>Clear Cart</button>
              <button style={{ background: '#FF784B', color: '#fff', border: 'none', padding: '8px 16px', cursor: 'pointer' }}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const qtyBtnStyle = {
  border: '1px solid #eee',
  background: '#fff',
  padding: '6px 10px',
  borderRadius: 6,
  cursor: 'pointer',
  fontWeight: 700,
  minWidth: 36,
  textAlign: 'center'
};

export default CartPage;
