import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-2 ">
      <Container>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col xs={12} md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0" style={{fontSize:'12px'}}>&copy; 2025 by <strong>Madhavan</strong> | All Rights Reserved</p>
          </Col>

          {/* Scroll to Top Button */}
          <Col xs={12} md={6} className="text-center text-md-end">
            <a href="#home" className="btn btn-outline-light scroll-top-btn rounded-circle">
              <FaArrowUp />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
