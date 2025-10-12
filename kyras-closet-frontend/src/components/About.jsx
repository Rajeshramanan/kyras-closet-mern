import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const ABOUT_IMAGE = '/about_model.png'; 

const About = () => {
  return (
    <Container className="my-5">
      <h2 className="section-heading">About Kyra</h2>
      <Row className="align-items-center">
        <Col md={6}>
            <div className="d-flex align-items-start mb-4">
                <div className="kyra-logo-box">
                    <h3>Kyra's Closet</h3>
                </div>
                <p 
                    className="mb-0" 
                    style={{ 
                        fontSize: '1.2rem', 
                        fontWeight: '600', 
                        color: '#333',
                        paddingTop: '10px',
                        lineHeight: '1.3'
                    }}
                >
                    "Where everyday fashion <br/> meets timeless elegance."
                </p>
            </div>

            <p style={{ lineHeight: '1.8', color: '#555', fontSize: '0.95rem' }}>
                At Kyra's Closet, we believe style should be effortless yet unforgettable. 
                From chic casuals to statement pieces, our collections are designed to 
                bring out your confidence and charm in every moment. Explore looks that 
                feel as good as they look.
            </p>
            
            <Button 
                variant="dark" 
                style={{ 
                    backgroundColor: '#FF784B', 
                    border: 'none', 
                    borderRadius: '5px', 
                    padding: '10px 30px',
                    fontWeight: '500'
                }}
            >
                Know More
            </Button>
        </Col>

        <Col md={6} className="text-center">
          <Image 
            src={ABOUT_IMAGE} 
            alt="About Kyra Model" 
            fluid 
            style={{ 
                maxHeight: '65vh', 
                objectFit: 'contain',
                transform: 'translateX(20px)',
                width: '100%',
                maxWidth: '450px' 
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;