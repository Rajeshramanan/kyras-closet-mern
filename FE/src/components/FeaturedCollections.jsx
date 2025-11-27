import React from 'react';
import { Container, Image } from 'react-bootstrap';

const FEATURED_IMAGES = [
    '/featured/featured1.jpeg',
    '/featured/featured2.jpeg',
    '/featured/featured3.jpeg',
    '/featured/featured4.jpeg',
    '/featured/featured5.jpeg',
    '/featured/featured6.jpeg'
];

const FeaturedCollections = () => {
  return (
    <Container className="my-5">
      <h2 className="section-heading">Featured Collections</h2>

      <div className="auto-scroll-wrapper">
        <div className="auto-scroll-track">

          {/* First copy */}
          {FEATURED_IMAGES.map((img, i) => (
            <div key={i} style={{ minWidth: "300px" }}>
              <Image 
                src={img}
                fluid
                className="shadow-sm"
                style={{ height: "350px", objectFit: "cover", width: "100%" }}
              />
            </div>
          ))}

          {/* Duplicate copy for smooth loop */}
          {FEATURED_IMAGES.map((img, i) => (
            <div key={"dup-" + i} style={{ minWidth: "300px" }}>
              <Image 
                src={img}
                fluid
                className="shadow-sm"
                style={{ height: "350px", objectFit: "cover", width: "100%" }}
              />
            </div>
          ))}

        </div>
      </div>
    </Container>
  );
};

export default FeaturedCollections;
