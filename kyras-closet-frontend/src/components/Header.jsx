import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar style={{ backgroundColor: '#FFB895', padding: '15px 0' }} variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand style={{ color: '#FF784B', fontWeight: 'bold', fontSize: '1.5rem' }}>
              Kyra's Closet
            </Navbar.Brand>
          </LinkContainer>

          <Nav className="mx-auto">
            <LinkContainer to="/"><Nav.Link style={{ color: '#333' }} className="font-weight-bold">Home</Nav.Link></LinkContainer>
            <LinkContainer to="/shop"><Nav.Link style={{ color: '#333' }}>Shop</Nav.Link></LinkContainer>
            <LinkContainer to="/orders"><Nav.Link style={{ color: '#333' }}>Orders</Nav.Link></LinkContainer>
            <LinkContainer to="/about"><Nav.Link style={{ color: '#333' }}>About & Contact</Nav.Link></LinkContainer>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link style={{ color: '#333' }}><FaSearch size={20} /></Nav.Link>
            <Nav.Link style={{ color: '#333' }}><FaShoppingCart size={20} /></Nav.Link>
            <Nav.Link style={{ color: '#333' }}><FaUser size={20} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;