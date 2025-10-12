import React from 'react';
import { Container, Image } from 'react-bootstrap';

const FEATURED_IMAGES = [
    '/featured/featured1.jpeg',
    '/featured/featured2.jpeg',
    '/featured/featured3.jpeg',
    '/featured/featured4.jpeg',
    '/featured/featured5.jpeg',
    '/featured/featured6.jpeg', 
];

const FeaturedCollections = () => {
  return (
    <Container className="my-5">
        <h2 className="section-heading">Featured Collections</h2>
        
        <div className="horizontal-scroll-container p-3"> 
            {FEATURED_IMAGES.map((imgSrc, index) => (
                <div key={index} style={{ minWidth: '300px' }}>
                    <Image 
                        src={imgSrc} 
                        fluid 
                        className="shadow-sm"
                        style={{ height: '350px', objectFit: 'cover', width: '100%' }}
                        onError={(e) => { e.target.onerror = null; e.target.src="/placeholder.png" }}
                    />
                </div>
            ))}
        </div>
    </Container>
  );
};

export default FeaturedCollections;