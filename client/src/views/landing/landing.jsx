import React from "react";
import {Link} from "react-router-dom"
// import "./landing.css";

function LandingPage() {
  return (
    <div>
      <div>
        <h1>Welcome</h1>
      </div>
      <Link to="/home">
        <button >Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
