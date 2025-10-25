import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./Portfoilo.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BiChevronRight } from "react-icons/bi";

// 🔗 Image imports
import responsiveImg from "../assets/responsive.jpg";
import colorFlipperImg from "../assets/color flliper.jpg";
import indiaImg from "../assets/india.jpg";
import bmiImg from "../assets/BMI-Chart.jpg";
import foodImg from "../assets/food.jpg";
import booksImg from "../assets/Books.jpg";


import saddam from "../assets/saddam.jpg";
import suhaa from "../assets/suhaagalaxy.png";
import sdc from "../assets/sdc.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("own");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const ownProjects = [
     {
      title: "Library Stack",
      desc: "Add book cart show will add extra book minus and plus.Local storage Using in html ,css, Js.",
      img: booksImg,
      link: "https://madhavan-19.github.io/library-stack/",
    },
        {
      title: "Maddy-FoodZ",
      desc: "This is a responsive food ordering website built using React for the frontend and Firebase for backend services like Authentication and Firestore (database). The app allows users to sign up, log in, and place food orders securely.",
      img: foodImg,
      link: "https://foodz-ordering.vercel.app/",
    },
     {
      title: "India Trip's",
      desc: "One of the significant benefits of using React. js for tour and travels websites is the ability to create a single-page application (SPA).",
      img: indiaImg,
      link: "https://india-trips.netlify.app/",
    },
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
      title: "BMI-Calculator",
      desc: " BMI (Body Mass Index) calculator using React JS is a web application that allows users to input their weight and height to calculate their BMI ",
      img: bmiImg,
      link: "https://madhavan-19.github.io/bmi/",
    },
   
  ];

  const workingProjects = [
    {
      title: "Saddam Nasikandar",
      desc: "Admin dashboard design and userdashboard",
      img: saddam,
      tools: [
        "ReactBootstrap",
        "HTML",
        "CSS",
        "JavaScript",
        "antd",
        "Reactjs",
        "Firebase",
      ],
    },
    {
      title: "Suhaa Gallaxy",
      desc: "Business dashboard with inventory & reports.",
      img: suhaa,
      tools: ["Html", "css", "Javascript"],
    },
    {
      title: "Sri Dhanalakshmi",
      desc: "Order tracking dashboard with analytics.",
      img: sdc,
      tools: [
        "Reactjs",
        "Firebase",
        "Html",
        "Css",
        "Antd UI",
        "Figma",
        "TailwindCSS",
      ],
    },
  ];


  const dataToDisplay = filter === "own" ? ownProjects : workingProjects;

  const paginatedData = dataToDisplay.slice(currentIndex, currentIndex + itemsPerPage);

  const handleShowModal = (project) => {
    setModalContent(project);
    setShowModal(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    const maxIndex = dataToDisplay.length - itemsPerPage;
    setCurrentIndex((prev) => Math.min(prev + itemsPerPage, maxIndex));
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-opened");
    } else {
      document.body.classList.remove("modal-opened");
    }
  }, [showModal]);

  useEffect(() => {
    setCurrentIndex(0); // Reset index when filter changes
  }, [filter]);

  return (
    <section className="portofolio" id="portfolio" style={{background:'black'}}>
      <Container>
        <h2 className="heading text-center mb-4">
          Latest <span style={{ color: "#f50dfd" }}>Project</span>
        </h2>

        <div className="text-center mb-5">
          <Button
  className={`multi-border-btn m-1 ${filter === "own" ? "active" : ""}`}
  onClick={() => setFilter("own")}
>
  Own Projects
</Button>
<Button
  className={`multi-border-btn ${filter === "working" ? "active" : ""}`}
  onClick={() => setFilter("working")}
>
  Working Projects
</Button>

        </div>

        <Row>
          {paginatedData.map((project, idx) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={idx}>
              <div className="portofolio-box">
                <img
                  src={project.img}
                  alt={project.title}
                  className="img-fluid"
                />
                <div className="portofolio-layer">
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <FaArrowUpRightFromSquare />
                    </a>
                  ) : (
                    <span
                      className="text-light small"
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      onClick={() => handleShowModal(project)}
                    >
                      Click to view
                    </span>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Pagination Buttons */}
        <div className="d-flex justify-content-center mt-3">
          <Button
            variant="secondary"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{color:"#f50dfd",background:"white"}}
            className="me-2"
          >
            &#8592;
          </Button>
          <Button
            variant="secondary"
            onClick={handleNext}
            style={{color:"#f50dfd",background:"white"}}
            disabled={currentIndex + itemsPerPage >= dataToDisplay.length}
          >
            &#8594;
          </Button>
        </div>
      </Container>

      {/* 🔵 MODAL only for Working Projects */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="heading fs-3" style={{color:'black',textDecoration:'underline'}}>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={modalContent.img}
            alt={modalContent.title}
            className="img-fluid mb-3 mx-auto d-block"
            style={{ maxWidth: "70%", height: "auto", borderRadius: "10px" }}
          />
          <p>{modalContent.desc}</p>

          {modalContent.tools && (
            <div>
              <h6
                className="mt-3 heading-2 fs-5"
                style={{ color: "#f50dfd", textDecoration: "underline" }}
              >
                Tools Used:
              </h6>
              <div className="row">
                {modalContent.tools.map((tool, idx) => (
                  <div key={idx} className="col-6 d-flex align-items-start mb-2">
                    <span>
                      <BiChevronRight />
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Portfolio;
