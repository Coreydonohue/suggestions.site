import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <Navbar expand="lg" bg="dark" variant="dark" className="nav">
        <Container>
          <Navbar.Brand href="#home">Build your watch list</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <div className="navHeader">Home</div>
              </Link>
              <Link to="/mylist">
                <div  className="navHeader">My List</div>
              </Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown"  className="navHeader">
                <Link to="/bookranking">
                  <div>Book Rankings</div>
                </Link>

                <Link to="/movieranking">
                  <div>Movie Rankings</div>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
