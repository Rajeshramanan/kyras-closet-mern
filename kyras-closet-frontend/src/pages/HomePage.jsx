  // kyras-closet-frontend/src/pages/HomePage.jsx - FINAL COMPLETE CODE

  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import Header from '../components/Header';
  import Hero from '../components/Hero';
  import About from '../components/About';
  import FeaturedCollections from '../components/FeaturedCollections';
  import TrendingNowSection from '../components/TrendingNowSection'; 
  import OffersSection from '../components/OffersSection'; 
  import YouMightLikeSection from '../components/YouMightLikeSection'; 
  import Reviews from '../components/Reviews'; 
  import Footer from '../components/Footer'; 
  // Note: Container is not imported here to avoid conflicting with internal layout

  const BASE_URL = 'http://localhost:5000/api/products'; 

  const HomePage = () => {
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
          const fetchProducts = async () => {
              try {
                  // Ensure backend is running and returns data
                  const { data } = await axios.get(BASE_URL);
                  setProducts(data);
                  setLoading(false);
              } catch (err) {
                  console.error("Backend Fetch Error:", err); 
                  setError('Failed to fetch product data. Ensure the backend server is running and seeded.');
                  setLoading(false);
              }
          };

          fetchProducts();
      }, []);

      if (loading) return <h1 className="text-center mt-5">Loading Kyra's Closet...</h1>;
      
      if (error) return (
          <div className="text-center mt-5 p-4 bg-danger text-white">
              <h1>Initialization Error 🔴</h1>
              <p>{error}</p>
              <p>Try running: <code>npm run server</code> in your backend folder and POSTing to /api/products/seed.</p>
          </div>
      );

      return (
          <>
              <Header />
              <main>
                  <Hero />
                  <div style={{ backgroundColor: '#f0f0f0' }}> 
                      <About />
                      <FeaturedCollections />
                      <TrendingNowSection products={products} /> 
                      <OffersSection products={products} />
                      <Reviews /> 
                      <YouMightLikeSection products={products} />
                  </div>
              </main>
              <Footer />
          </>
      );
  };

  export default HomePage;