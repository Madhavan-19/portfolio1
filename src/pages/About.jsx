import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBootstrap
} from 'react-icons/fa';
import {
  SiTailwindcss, SiRedux, SiAntdesign, SiFirebase,
  SiJira, SiFigma, SiReactrouter
} from 'react-icons/si';
import './About.css';
import cloudLogo from '../assets/Cloud-Garage-ai.png';
// import otherLogo from '../assets/other-company.png'; // Add your second logo if needed

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const experiences = [
    {
      company: "Cloud Garage LLP",
      role: "ReactJS Frontend Developer",
      logo: cloudLogo,
      startDate: "2025-03-10",
      endDate: null, // current
    },
    
  ];

  const calculateExperienceDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const startMonth = start.toLocaleString('default', { month: 'short' });
    const startYear = start.getFullYear();
    const endMonth = end.toLocaleString('default', { month: 'short' });
    const endYear = end.getFullYear();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }

    const yearStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const monthStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';
    const duration = [yearStr, monthStr].filter(Boolean).join(' ');

    const endStr = endDate ? `${endMonth} ${endYear}` : 'Present';
    return `${startMonth} ${startYear} – ${endStr} · ${duration}`;
  };

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
            <div className="skill-icon"><SiFirebase style={{ color: '#FFCA28' }} /></div>
            <div className="skill-icon"><SiJira style={{ color: '#0052CC' }} /></div>
            <div className="skill-icon"><SiFigma style={{ color: '#F24E1E' }} /></div>
            <div className="skill-icon"><SiReactrouter style={{ color: '#CA4245' }} /></div>
          </div>
        );

      case 'experience':
        return (
          <>
          <Row className="g-4 justify-content-center">
  {experiences.map((exp, idx) => (
    <Col
      key={idx}
      md={6}
      xs={12}
      className={`d-flex ${idx === 0 ? 'justify-content-center' : 'justify-content-center'} justify-content-center`}
    >
      <div
        className="d-flex align-items-center gap-3 flex-wrap text-start experience-item"
        style={{ maxWidth: '100%' }}
      >
        <img
          src={exp.logo}
          alt={`${exp.company} Logo`}
          className="company-logo"
          style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: '8px',border:'2px solid white',background:'white' }}
        />
        <div>
          <strong>{exp.company}</strong><br />
          {exp.role}<br />
          <span className="text" style={{color:'gray'}}>
            {calculateExperienceDuration(exp.startDate, exp.endDate)}
          </span>
        </div>
      </div>
    </Col>
  ))}
</Row>

          </>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="about-section py-5 " style={{ paddingTop: '70px' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <h1 className="mb-3 heading">About <span style={{ color: '#f50dfd' }}>Me!</span></h1>
            <p className='heading-2'>
              I'm Madhavan from Veeraganur, Salem District, with a First Class B.Tech in <strong>Information Technology</strong>, building responsive and user-focused web apps using ReactJS, Redux, Tailwind CSS, and Bootstrap.
              I'm passionate about clean code, teamwork, and continuous learning, and I aim to grow as a full-stack developer by contributing to impactful projects.
            </p>

            <div className="tab-links">
              <p className={`tab-link ${activeTab === 'education' ? 'active-tab' : ''}`} onClick={() => setActiveTab('education')}>Education</p>
              <p className={`tab-link ${activeTab === 'skills' ? 'active-tab' : ''}`} onClick={() => setActiveTab('skills')}>Skills</p>
              <p className={`tab-link ${activeTab === 'experience' ? 'active-tab' : ''}`} onClick={() => setActiveTab('experience')}>Experience</p>
            </div>

            <div className="about-content">
              {renderContent()}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
