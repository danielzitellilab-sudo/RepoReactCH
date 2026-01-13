import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import CartWidget from './CartWidget'

function NavBar(){
  const [expanded, setExpanded] = useState(false);
  const categories = [
  { id: 1, name: 'Comics', path: '/categoria/comics' },
  { id: 2, name: 'Libros', path: '/categoria/libros' },
  { id: 3, name: 'Remeras', path: '/categoria/remeras' },
  { id: 4, name: 'Merch', path: '/categoria/merch' }];
  
  return (
    <Navbar 
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="w-100"
    >
      <Container fluid>
        <Navbar.Brand href="/">Abuela Comics</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {categories.map(cat => (
              <Nav.Link key={cat.id} href={cat.path}>
                {cat.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
};

export default NavBar;