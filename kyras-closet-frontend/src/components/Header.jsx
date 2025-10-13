// kyras-closet-frontend/src/components/Header.jsx - FINAL FINAL RESPONSIVE ICON FIX

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// Added FaHeart to the import!
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa'; 

const Header = () => {
  // Common style for spacing between the icons
  const iconStyle = { 
    color: '#333', 
    marginLeft: '15px', // Adds space to the left of each icon
    cursor: 'pointer',
    fontSize: '20px' // Ensures consistent size
  };

  return (
    <header>
      <Navbar style={{ backgroundColor: '#FFB895', padding: '15px 0' }} variant="light" expand="lg" collapseOnSelect>
        <Container>
          
          {/* 1. BRAND/LOGO */}
          <LinkContainer to="/" style={{ marginRight: '1rem' }}>
            <Navbar.Brand style={{ color: '#FF784B', fontWeight: 'bold', fontSize: '1.5rem' }}>
              Kyra's Closet
            </Navbar.Brand>
          </LinkContainer>

          {/* 2. ICONS (Always Visible and Aligned Right of Logo) */}
          {/* Using 'ms-auto' (margin-left: auto) to push the icon group to the right */}
          <div className="ms-auto d-flex align-items-center">
            
            {/* Search Icon */}
            <div style={iconStyle}><FaSearch /></div>
            
            {/* NEW: Favorite (Heart) Icon */}
            <div style={iconStyle}><FaHeart /></div>
            
            {/* Cart Icon */}
            <div style={iconStyle}><FaShoppingCart /></div>
            
            {/* User Icon */}
            <div style={iconStyle}><FaUser /></div>
          </div>


          {/* 3. TOGGLE BUTTON (The Hamburger Icon) */}
          {/* Margin on the toggle ensures it's spaced correctly from the icons on mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginLeft: '1rem' }} />


          {/* 4. COLLAPSABLE CONTENT (Contains ONLY the main Nav Links) */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {/* Main Nav Links: These are hidden on mobile until the hamburger is clicked */}
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