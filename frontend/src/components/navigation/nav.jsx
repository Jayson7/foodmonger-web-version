import React, { useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
function Navigation() {
  const [isMobile, setIsMobile] = useState("");

  return (
    <div>{isMobile ? <div className="navContainer"></div> : <div></div>}</div>
  );
}

export default Navigation;
