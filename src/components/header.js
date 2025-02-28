import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/IB-Logo.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
       <Link to='/'> <Navbar.Brand href="#home"> <img src={logo} className='logo'/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            {/* <Nav.Link href="#teams">Teams</Nav.Link> */}
            {/* <Nav.Link href="#testimonials">Testimonials</Nav.Link> */}
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Link to='startup'><Button variant="outline-primary"  style={{ borderRadius: '50px' }}  size="sm">Danger</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;