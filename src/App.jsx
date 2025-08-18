import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader">
          <div className="ripple">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      <div className={`app-content ${loading ? "blur" : ""}`}>
        <NavbarComponent />
        <Home />
        <About />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
