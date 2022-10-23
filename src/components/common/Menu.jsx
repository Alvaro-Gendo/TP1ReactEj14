import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white" >
          RC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  >
          <Nav className="me-auto">
            <NavLink to="/" className="nav-item nav-link text-white" >
              Inicio
            </NavLink>
            <NavLink to="/administrador" className="nav-item nav-link text-white">
              Admin
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
