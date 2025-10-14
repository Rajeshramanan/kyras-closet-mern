import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';


const OFFERS_PRODUCTS = [
    { name: 'Kalyani', price: 1200, rating: 4.5, image: '/images/kalyani_saree.jpg', discount: '10%' },
    { name: 'Akira (Green)', price: 700, rating: 4.5, image: '/images/akira_green.jpg', discount: '20%' }, 
    { name: 'Victoria', price: 2500, rating: 4.5, image: '/images/victoria_gown.jpg', discount: '20%' }, 
    { name: 'Rachel', price: 800, rating: 4.5, image: '/images/rachel_top.jpg', discount: '15%' },
    { name: 'Mathuri', price: 2500, rating: 4.5, image: '/images/mathuri_skirt.jpg', discount: '25%' },
    { name: 'White Candy', price: 3000, rating: 4.5, image: '/images/white_candy.jpg', discount: '5%' },
];


const ProductCard = ({ product }) => (
    <div style={{
        backgroundColor: 'white',
        border: '1px solid #eee',
        borderRadius: '4px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        width: '100%',
        marginBottom: '20px',
    }}>
        <div style={{ position: 'relative' }}>
            
            {product.discount && <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#A15843', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600', zIndex: 10 }}>{product.discount} Off</div>}
            
            <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
                onError={(e) => { e.target.onerror = null; e.target.src="/placeholder.png"; e.target.style.backgroundColor='#f0f0f0' }}
            />
           
            <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}>
                <FaHeart size={16} color="#666" />
            </button>
        </div>
        <div style={{ padding: '10px 15px' }}>
            <h5 style={{ fontWeight: '600', fontSize: '1.1rem', margin: '10px 0' }}>{product.name}</h5>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontWeight: 'bold', margin: '0', color: '#333' }}>Rs.{product.price.toLocaleString()}</p>
                <div style={{ backgroundColor: '#FF784B', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
                    {product.rating} <FaStar size={10} style={{ marginLeft: '4px' }} />
                </div>
            </div>
        </div>
    </div>
);


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
                            boxSizing: 'border-box'
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