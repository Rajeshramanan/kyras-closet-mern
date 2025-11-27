import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa'; 

const Header = () => {
  
  const iconStyle = { 
    color: '#333', 
    cursor: 'pointer',
    fontSize: '20px',
    transition: 'color 0.3s ease-in-out', // Add transition to icons too!
  };

  const iconNavLinkStyle = {
    paddingLeft: '8px',
    paddingRight: '8px'
  };
  
  // Hover handler for icons (since they are divs/buttons, simpler to handle hover with state or dedicated CSS classes)
  // For simplicity, we'll rely on global CSS on the <Nav.Link> wrapper for the links.

  return (
    <header>
      <Navbar style={{ backgroundColor: '#FFB895', padding: '15px 0' }} variant="light" expand="lg" collapseOnSelect>
        <Container>
          
          <LinkContainer to="/" style={{ marginRight: '1rem' }}>
            <Navbar.Brand style={{ color: '#FF784B', fontWeight: 'bold', fontSize: '1.5rem' }}>
              Kyra's Closet
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="mx-auto">
              {/* REMOVED INLINE STYLING for nav links so CSS takes over and hover works! */}
              <LinkContainer to="/"><Nav.Link className="font-weight-bold">Home</Nav.Link></LinkContainer>
              <LinkContainer to="/shop"><Nav.Link>Shop</Nav.Link></LinkContainer>
              <LinkContainer to="/orders"><Nav.Link>Orders</Nav.Link></LinkContainer>
              <LinkContainer to="/about"><Nav.Link>About & Contact</Nav.Link></LinkContainer>
            </Nav>

            
            <Nav className="d-flex flex-row align-items-center">
              
              {/* Icons wrapped in Nav.Link. Hover will work via CSS on this! */}
              
              {/* Search Icon */}
              <LinkContainer to="/search">
                <Nav.Link style={iconNavLinkStyle}>
                  {/* Added inline hover for icons since they are slightly different */}
                  <FaSearch 
                    style={iconStyle} 
                    onMouseEnter={e => e.target.style.color = '#FF5100'} 
                    onMouseLeave={e => e.target.style.color = '#333'}
                  />
                </Nav.Link>
              </LinkContainer>
              
              {/* Profile Icon */}
              <LinkContainer to="/login">
                <Nav.Link style={iconNavLinkStyle}>
                  <FaUser 
                    style={iconStyle}
                    onMouseEnter={e => e.target.style.color = '#FF5100'} 
                    onMouseLeave={e => e.target.style.color = '#333'}
                  />
                </Nav.Link>
              </LinkContainer>
           
              {/* Wishlist Icon */}
              <LinkContainer to="/favorites">
                <Nav.Link style={iconNavLinkStyle}>
                  <FaHeart 
                    style={iconStyle}
                    onMouseEnter={e => e.target.style.color = '#FF5100'} 
                    onMouseLeave={e => e.target.style.color = '#333'}
                  />
                </Nav.Link>
              </LinkContainer>
              
              {/* Cart Icon */}
              <LinkContainer to="/cart">
                <Nav.Link style={iconNavLinkStyle}>
                  <FaShoppingCart 
                    style={iconStyle}
                    onMouseEnter={e => e.target.style.color = '#FF5100'} 
                    onMouseLeave={e => e.target.style.color = '#333'}
                  />
                </Nav.Link>
              </LinkContainer>
              
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
};

export default Header;