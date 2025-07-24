import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import "./Portfoilo.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// Import images
import responsiveImg from "../assets/responsive.jpg";
import colorFlipperImg from "../assets/color flliper.jpg";
import indiaImg from "../assets/india.jpg";
import bmiImg from "../assets/BMI-Chart.jpg";
import foodImg from "../assets/food.jpg";
import booksImg from "../assets/Books.jpg";

// 🟢 Own Projects
const ownProjects = [
  {
    title: "Responsive Navbar",
    desc: "A responsive navbar menu is a crucial element of a website that adjusts its layout and appearance based on the screen size and device type used by the user.",
    img: responsiveImg,
    link: "https://navbar-response.netlify.app/",
  },
  {
    title: "Color Fliper",
    desc: "Tool that changes the background color of the HTML element by clicking a button.a function is run that generates a random colour on the set Background.",
    img: colorFlipperImg,
    link: "https://madhavan-19.github.io/color-flipers/",
  },
  {
    title: "India Trip's",
    desc: "One of the significant benefits of using React. js for tour and travels websites is the ability to create a single-page application (SPA).",
    img: indiaImg,
    link: "https://india-trips.netlify.app/",
  },
  {
    title: "BMI-Calculator",
    desc: " BMI (Body Mass Index) calculator using React JS is a web application that allows users to input their weight and height to calculate their BMI ",
    img: bmiImg,
    link: "https://madhavan-19.github.io/bmi/",
  },
  {
    title: "Maddy-FoodZ",
    desc: "This is a responsive food ordering website built using React for the frontend and Firebase for backend services like Authentication and Firestore (database). The app allows users to sign up, log in, and place food orders securely.",
    img: foodImg,
    link: "https://foodz-ordering.vercel.app/",
  },
  {
    title: "Library Stack",
    desc: "Add book cart show will add extra book minus and plus.Local storage Using in html ,css, Js.",
    img: booksImg,
    link: "https://madhavan-19.github.io/library-stack/",
  },
];

// 🔵 Working Projects (Dummy)
const workingProjects = [
  {
    title: "Dashboard UI",
    desc: "Admin dashboard design using Bootstrap 5.",
    img: responsiveImg,
    link: "#",
  },
  {
    title: "Login System",
    desc: "Secure login & register form with Firebase.",
    img: foodImg,
    link: "#",
  },
  {
    title: "E-commerce Template",
    desc: "Shopping cart layout with filter and cart logic.",
    img: booksImg,
    link: "#",
  },
  {
    title: "Blog CMS",
    desc: "React CMS blog with rich text and categories.",
    img: indiaImg,
    link: "#",
  },
  {
    title: "Chat App UI",
    desc: "Chat interface design using React and Socket.io.",
    img: colorFlipperImg,
    link: "#",
  },
  {
    title: "Portfolio Dark Mode",
    desc: "Portfolio template with dark/light theme toggle.",
    img: bmiImg,
    link: "#",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("own");

  const dataToDisplay = filter === "own" ? ownProjects : workingProjects;

  return (
    <section className="portofolio" id="portfolio" style={{ minHeight: '100vh', paddingBottom: '-120px' ,marginTop:'50px'}}>
      <Container>
        <h2 className="heading text-center mb-4">
          Latest <span style={{color:'#f50dfd'}}>Project</span>
        </h2>

        {/* Filter Buttons */}
        <div className="text-center mb-5">
       
            <Button
            className="multi-border-btn m-1"
              variant={filter === "own" ? "primary" : "outline-primary"}
              onClick={() => setFilter("own")}
            >
              Own Projects
            </Button>

            <Button
              className="multi-border-btn"
              variant={filter === "working" ? "primary" : "outline-primary"}
              // onClick={() => setFilter("working")}
            >
              Working Projects
            </Button>
        </div>

        <Row className="g-4">
          {dataToDisplay.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="portofolio-box">
                <img src={item.img} alt={item.title} className="img-fluid" />
                <div className="portofolio-layer">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
