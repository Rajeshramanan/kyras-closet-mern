// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
// If you later add FavoritesPage, OrdersPage, UserPage, import them here

import { AppStateProvider } from './contexts/AppStateContext';

import './index.css';
import './App.css';

const App = () => {
  return (
    <AppStateProvider>
      <Router>
        {/* header appears on all pages */}
        <Header />

        <main style={{ minHeight: '70vh' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            {/* fallback: redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </AppStateProvider>
  );
};

export default App;
