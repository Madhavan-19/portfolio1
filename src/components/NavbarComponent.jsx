import React, { useState } from 'react';
import { Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaWhatsapp, FaGithub, FaLinkedin, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/madhavan-logo.png';
import './Navbars.css';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);
 const handleClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const email = "madhavans194@gmail.com";
    const url = isMobile
      ? `mailto:${email}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    window.open(url, "_blank");
  };

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar shadow-sm fixed-top bg-light py-2">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Madhavan" style={{ width: 40, height: 40 }} />
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          className="border-0" style={{color:'white'}}
        >
          {expanded ? <FaTimes size={20} /> : <FaBars size={20} />}
        </Navbar.Toggle>

        <Navbar.Collapse className="justify-content-between w-100">
          <Nav className="mx-auto text-center nav-links">
            <Nav.Link href="#home" style={{color:'white'}} onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#about" style={{color:'white'}} onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link href="#portfolio"style={{color:'white'}}  onClick={() => setExpanded(false)}>Portfolio</Nav.Link>
          </Nav>

          <div className="d-flex justify-content-end gap-3 align-items-center mt-3 mt-lg-0 social-icons">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-whatsapp">WhatsApp</Tooltip>}
            >
              <a
                href="https://wa.me/919626147404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={22} className="text-success" />
              </a>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-github">GitHub</Tooltip>}
            >
              <a
                href="https://github.com/Madhavan-19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} className="text-light"/>
              </a>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-linkedin">LinkedIn</Tooltip>}
            >
              <a
                href="https://linkedin.com/in/madhavan-19s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} className="text-primary" />
              </a>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-email">Send Email</Tooltip>}
            >
              <span
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      title="Send Email"
    >
      <FaEnvelope size={22} className="text-danger" />
    </span>

            </OverlayTrigger>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
