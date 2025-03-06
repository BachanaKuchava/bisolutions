import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/IB-Logo.png';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';


function AppHeader() {
  const location = useLocation();
  // Adjust the path according to your route.
  const hideNavLinks = location.pathname === '/startup';
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to='/'>
          <Navbar.Brand>
            <img src={logo} className='logo' alt="Logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Conditionally render Nav links */}
          {!hideNavLinks && (
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              {/* You can also include other elements like buttons */}
            </Nav>
          )}
                {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
