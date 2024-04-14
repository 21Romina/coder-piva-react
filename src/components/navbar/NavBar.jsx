import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Puchi-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to='/category/decoracion'>Decoracion</Nav.Link>
            <Nav.Link as={NavLink} to='/category/textiles'>Textil</Nav.Link>
            <Nav.Link as={NavLink} to='/category/amigurumis'>Amigurumis</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/nuevos'>Nuevos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/mas vendidos'>Mas vendidos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/ofertas'>Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink to='/cart' className="text-decoration-none">
            <CartWidget counter={15}></CartWidget>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;