import React from 'react';
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container" style={{ color: '#ccc', paddingTop: '40px', paddingBottom: '10px' }}>
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 style={{ color: '#fff', fontWeight: '700', fontSize: '1.2rem' }}>Visit Our Shop</h5>
            <p className="mt-3 mb-1" style={{ fontSize: '0.9rem', color: '#e0e0e0' }}>Kyra's Closet</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.2rem', color: '#e0e0e0' }}>426/D Anna Nagar</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.2rem', color: '#e0e0e0' }}>Chennai-600048, Tamil Nadu.</p>
            <p style={{ fontSize: '0.9rem', color: '#e0e0e0' }}>Phone - 9003726265</p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 style={{ color: '#fff', fontWeight: '700', fontSize: '1.2rem' }}>Categories</h5>
            <ListGroup variant="flush">
              {['Kurthis', 'Lehengas', 'Half Sarees', 'Ethnic wears', 'Gowns'].map((cat, index) => (
                <ListGroup.Item key={index} className="p-0 border-0" style={{ backgroundColor: 'transparent', color: '#ccc', fontSize: '0.9rem', lineHeight: '2' }}>
                  {cat}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={4} className="mb-4">
            <h5 style={{ color: '#fff', fontWeight: '700', fontSize: '1.2rem' }}>Subscribe To Our Emails</h5>
            <Form className="mt-3">
              <Form.Group controlId="formEmail" className="mb-2">
                <Form.Control type="email" placeholder="email" style={{ borderRadius: '0', backgroundColor: '#444', borderColor: '#666', color: '#fff' }} />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100" style={{ backgroundColor: '#FF784B', border: 'none', borderRadius: '5px', fontWeight: '600' }}>
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
        
        <hr style={{ borderColor: '#666' }} />

        <Row className="text-center pt-2">
            <Col>
                <div className="mb-3">
                    <FaFacebook size={20} className="mx-2" style={{ cursor: 'pointer', color: '#ccc' }} />
                    <FaInstagram size={20} className="mx-2" style={{ cursor: 'pointer', color: '#ccc' }} />
                    <FaWhatsapp size={20} className="mx-2" style={{ cursor: 'pointer', color: '#ccc' }} />
                </div>
                
                <p style={{ fontSize: '0.8rem', color: '#999' }}>
                    © 2025, Kyra's Closet · <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Signin & Register</a> · <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Terms & Conditions</a> · <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Privacy Policy</a> · <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Shipping Policy</a> · <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Refund Policy</a>
                </p>
            </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;