import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/IB-Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function AppHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  // Close the navbar if a click is detected outside of it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expanded && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [expanded]);

  // When a nav link is clicked, if you're not on the main page, navigate there with the hash.
  // If already on the main page, scroll smoothly to the section.
  const handleNavClick = (sectionId) => {
    setExpanded(false);
    if (sectionId === "Faq") {
      navigate("/faq");
      return;
    }
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  

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
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} className="logo" alt="Logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Always show nav links */}
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavClick("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("about")}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("services")}>Services</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("pricing")}>Pricing</Nav.Link>
            {/* <Nav.Link onClick={() => handleNavClick("blog")}>Blog</Nav.Link> */}
            <Nav.Link onClick={() => handleNavClick("contact")}>Contact</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("Faq")}>FAQ</Nav.Link>


            <Link
              to="/startup"
              className="navbar-startups"
              onClick={() => setExpanded(false)}
            >
              Startup
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
