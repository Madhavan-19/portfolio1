import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBootstrap
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiAntdesign } from 'react-icons/si';
import './About.css';
import cloudLogo from '../assets/Cloud-Garage-ai.png'; // adjust if needed

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <ul>
            <li><strong>B.Tech Information Technology</strong><br />2020–2024<br />8.28 CGPA</li>
            <li><strong>12th Standard</strong><br />2020<br />60%</li>
            <li><strong>10th Standard</strong><br />2018<br />74%</li>
          </ul>
        );
      case 'skills':
        return (
          <div className="skills-grid">
            <div className="skill-icon"><FaHtml5 style={{ color: '#e34c26' }} /></div>
            <div className="skill-icon"><FaCss3Alt style={{ color: '#264de4' }} /></div>
            <div className="skill-icon"><FaJs style={{ color: '#f0db4f' }} /></div>
            <div className="skill-icon"><FaReact style={{ color: '#61DBFB' }} /></div>
            <div className="skill-icon"><SiTailwindcss style={{ color: '#38bdf8' }} /></div>
            <div className="skill-icon"><FaBootstrap style={{ color: '#563d7c' }} /></div>
            <div className="skill-icon"><SiRedux style={{ color: '#764abc' }} /></div>
            <div className="skill-icon"><SiAntdesign style={{ color: '#1890ff' }} /></div>
            <div className="skill-icon"><FaGitAlt style={{ color: '#f34f29' }} /></div>
          </div>
        );
      case 'experience':
        return (
          <div className="experience-item d-flex align-items-center gap-3 text-start justify-content-center flex-wrap">
            <img src={cloudLogo} alt="Cloud Garage Logo" className="company-logo" />
            <div>
              <strong>Cloud Garage LLP</strong><br />
              ReactJS Frontend Developer<br />
              <span className="text-muted">Currently Working</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="about-section py-5 bg-light" style={{ paddingTop: '70px' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <h1 className="mb-3 heading">About <span style={{color:'#f50dfd'}}>Me!</span></h1>
            <p className='heading-2'>
              I'm Madhavan  from Veeraganur, Salem District, with a First Class B.Tech in <strong >Information Technology</strong>, building responsive and user-focused web apps using ReactJS, Redux, Tailwind CSS, and Bootstrap.
              I'm passionate about clean code, teamwork, and continuous learning, and I aim to grow as a full-stack developer by contributing to impactful projects.
            </p>

            {/* Tabs */}
            <div className="tab-links">
              <p className={`tab-link ${activeTab === 'education' ? 'active-tab' : ''}`} onClick={() => setActiveTab('education')}>Education</p>
              <p className={`tab-link ${activeTab === 'skills' ? 'active-tab' : ''}`} onClick={() => setActiveTab('skills')}>Skills</p>
              <p className={`tab-link ${activeTab === 'experience' ? 'active-tab' : ''}`} onClick={() => setActiveTab('experience')}>Experience</p>
            </div>

            {/* Dynamic Content */}
            <div className="about-content">{renderContent()}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
