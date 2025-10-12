import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Homepage Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Placeholder Routes */}
        <Route path="/shop" element={<h1 className="text-center mt-5">Shop Page (Coming Soon)</h1>} />
        <Route path="/orders" element={<h1 className="text-center mt-5">Orders Page (Coming Soon)</h1>} />
        <Route path="/about" element={<h1 className="text-center mt-5">About & Contact Page (Coming Soon)</h1>} />
      </Routes>
    </Router>
  );
}

export default App;