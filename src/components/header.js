import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/IB-Logo.png';
import { Link, useLocation } from 'react-router-dom';

function AppHeader() {
  const location = useLocation();
  const hideNavLinks = location.pathname === '/startup';
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  // Close the navbar if a click is detected outside of it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [expanded]);

  return (
    <Navbar
      ref={navbarRef}
      bg="light"
      expand="lg"
      collapseOnSelect
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Link to='/'>
          <Navbar.Brand>
            <img src={logo} className="logo" alt="Logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {!hideNavLinks && (
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link href="#services" onClick={() => setExpanded(false)}>
                Services
              </Nav.Link>
              <Nav.Link href="#pricing" onClick={() => setExpanded(false)}>
                Pricing
              </Nav.Link>
              <Nav.Link href="#blog" onClick={() => setExpanded(false)}>
                Blog
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
