import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar({ categories = [] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="w-100"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container fluid>
        <img src="src/assets/abuelaestela.png" alt="Abuela Estela Comics" className="navbar-logo navbar-brand"/>
        <Nav className="me-auto">
            <NavDropdown title="Categories" id="categories-dropdown">
            <NavDropdown.Item
              as={Link}
              to="/"
              key="all"
            >
              All
            </NavDropdown.Item>
            <NavDropdown.Divider />
              {categories.map((cat) => (
                <NavDropdown.Item
                as={Link}                     
                to={`/category/${cat.name}`}
                key={cat.name}>
                {cat.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;