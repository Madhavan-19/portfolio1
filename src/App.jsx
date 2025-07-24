import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavbarComponent />
      <Home />
      <About />
      <Portfolio />
      {/* <Contact /> */}
      <Footer/>
    </>
  );
}

export default App;
