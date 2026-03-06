import { useState } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar({ categories = [] }) {
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const grouped = categories.reduce((acc, cat) => {
    const type = cat.type || 'Other';
    if (!acc[type]) acc[type] = [];
    acc[type].push(cat);
    return acc;
  }, {});

  const numCols = Object.keys(grouped).length || 1;

  const close = () => setDropdownOpen(false);

  return (
    <>
      <style>{`
        .ae-dropdown-menu {
          display: grid !important;
          padding: 8px !important;
          gap: 0 !important;
          background-color: #fff;
          border-radius: 4px;
        }
        .dropdown-col {
          display: flex;
          flex-direction: column;
          padding: 0 4px;
          border-left: 1px solid #e9ecef;
        }
        .dropdown-col:first-of-type {
          border-left: none;
        }
        .dropdown-section-title {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #adb5bd;
          padding: 8px 12px 4px;
          pointer-events: none;
        }
        .ae-all-item, .ae-divider {
          grid-column: 1 / -1;
        }
      `}</style>

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
          <img
            as={Link}
            to="/"
            src="src/assets/abuelaestela.png"
            alt="Abuela Estela Comics"
            className="navbar-logo navbar-brand"
          />
          <Nav className="me-auto">
            <NavDropdown
              title="Categories"
              id="categories-dropdown"
              show={dropdownOpen}
              onClick={() => setDropdownOpen(prev => !prev)}
              onMouseLeave={close}
            >
              {/* El estilo de columnas va inline para que se actualice con los datos */}
              <div
                className="ae-dropdown-menu"
                style={{
                  gridTemplateColumns: `repeat(${numCols}, minmax(140px, 1fr))`,
                  minWidth: `${numCols * 160}px`,
                }}
              >
                <NavDropdown.Item as={Link} to="/" className="ae-all-item" onClick={close}>
                  All
                </NavDropdown.Item>
                <NavDropdown.Divider className="ae-divider" />

                {Object.entries(grouped).map(([type, cats]) => (
                  <div className="dropdown-col" key={type}>
                    <span className="dropdown-section-title">{type}</span>
                    {cats.map((cat) => (
                      <NavDropdown.Item
                        as={Link}
                        to={`/category/${cat.name}`}
                        key={cat.name}
                        onClick={close}
                      >
                        {cat.name}
                      </NavDropdown.Item>
                    ))}
                  </div>
                ))}
              </div>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
