import React, { useState, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Homepage/home";

import "./nav.css"; // Ensure to create and import CSS for styling

function Navigation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <nav className="navContainer">
        <button
          className="mobileMenuButton"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? "Close" : "Menu"}
        </button>
        <div className={`navLinks ${isMobile ? "mobile" : ""}`}>
          <Link to="/" onClick={() => setIsMobile(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMobile(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsMobile(false)}>
            Contact
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
