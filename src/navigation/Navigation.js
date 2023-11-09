
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/bootstrap.min.css';
import './Navigation.css';
export default function Navigation() {
  return (
    <div className='Navigation' >
      <Navbar data-bs-theme="dark" bg="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >GPU Help</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/compare">Compare</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link href="#compare">Compare</Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
    
  );
}
