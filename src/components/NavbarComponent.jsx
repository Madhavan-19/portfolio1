import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaWhatsapp, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/madhavan-logo.png';
import './Navbars.css';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar shadow-sm fixed-top bg-light py-2">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Madhavan" style={{ width: 40, height: 40 }} />
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          className="border-0"
        >
          {expanded ? <FaTimes size={20} /> : <FaBars size={20} />}
        </Navbar.Toggle>

       <Navbar.Collapse className="justify-content-between w-100">
  <Nav className="mx-auto text-center nav-links">
    <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
    <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
    <Nav.Link href="#portfolio" onClick={() => setExpanded(false)}>Portfolio</Nav.Link>
    {/* <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link> */}
  </Nav>

  <div className="d-flex justify-content-end gap-3 align-items-center mt-3 mt-lg-0 social-icons">
  <a
  href="https://wa.me/919626147404"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp size={22} className="text-success" />
</a>

    <a href="https://github.com/Madhavan-19" target="_blank" rel="noopener noreferrer">
      <FaGithub size={22} className="text-dark" />
    </a>
    <a href="https://linkedin.com/in/madhavan-19s" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={22} className="text-primary" />
    </a>
  </div>
</Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
