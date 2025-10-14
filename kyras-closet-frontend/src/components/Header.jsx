import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa'; 

const Header = () => {
  
  const iconStyle = { 
    color: '#333', 
    marginLeft: '15px', 
    cursor: 'pointer',
    fontSize: '20px'
  };

  return (
    <header>
      <Navbar style={{ backgroundColor: '#FFB895', padding: '15px 0' }} variant="light" expand="lg" collapseOnSelect>
        <Container>
          
          
          <LinkContainer to="/" style={{ marginRight: '1rem' }}>
            <Navbar.Brand style={{ color: '#FF784B', fontWeight: 'bold', fontSize: '1.5rem' }}>
              Kyra's Closet
            </Navbar.Brand>
          </LinkContainer>

          
          <div className="ms-auto d-flex align-items-center">
            
          
            <div style={iconStyle}><FaSearch /></div>
            
           
            <div style={iconStyle}><FaHeart /></div>
            
            
            <div style={iconStyle}><FaShoppingCart /></div>
            
          
            <div style={iconStyle}><FaUser /></div>
          </div>


         
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginLeft: '1rem' }} />


        
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              
              <LinkContainer to="/"><Nav.Link style={{ color: '#333' }} className="font-weight-bold">Home</Nav.Link></LinkContainer>
              <LinkContainer to="/shop"><Nav.Link style={{ color: '#333' }}>Shop</Nav.Link></LinkContainer>
              <LinkContainer to="/orders"><Nav.Link style={{ color: '#333' }}>Orders</Nav.Link></LinkContainer>
              <LinkContainer to="/about"><Nav.Link style={{ color: '#333' }}>About & Contact</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
};

export default Header;