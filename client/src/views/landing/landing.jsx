import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

function LandingPage() {
  return (
    <div>
      
      
      <div className="button-container">
        
      </div>
      <Link to="/home">
        <button className="button">Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;

