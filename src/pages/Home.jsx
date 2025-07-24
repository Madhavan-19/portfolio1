import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import pdf from '../assets/Madhavan-s.pdf';
import profilePic from '../assets/madhavan.jpg';
import './Home.css';

const roles = ['Web Developer', 'ReactJS Developer', 'UI Developer / Figma', 'Frontend Developer'];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="home-section d-flex align-items-center"
      style={{ minHeight: '100vh', paddingTop: '70px' }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h3 className="intro-text">Hello, It's Me!</h3>
            <h1 className="fw-bold">MADHAVAN S</h1>
            <h3>
              And I'm a <span>{roles[currentRoleIndex]}</span>
            </h3>
          <p>
   I am a passionate <strong>React.js</strong> developer with a strong foundation in frontend development and  currently learning backend technologies. 
 <br/> I'm also actively working on real-time projects.
            </p>


            <a href={pdf} download>
              <Button className="mt-3 multi-border-btn">
                <FaDownload className="me-2" />
                Download CV
              </Button>
            </a>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center">
            <Image src={profilePic} alt="Madhavan S" className="profile-img" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
