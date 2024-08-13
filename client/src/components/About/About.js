import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//Component for Website Features Information
function About() {
  const navigate = useNavigate();
  if (Cookies.get("p_token") === undefined) {
    return navigate("/login");
  }
  return (<div className="about-container mt-5">
  <h1 className="about-title mt-5">About Our Website</h1>
  <div className="card">
    <h2>Responsive and Dynamic</h2>
    <p>
      This website is responsive and dynamic, offering a seamless user experience across devices.
    </p>
  </div>
  <div className="card">
    <h2>Signup and Login Features</h2>
    <p>
      Implemented Signup and Login pages for user authentication. Includes input elements like radio, checkbox, file upload, and more.
    </p>
  </div>
  <div className="card">
    <h2>Backend Integration</h2>
    <p>
      User data is stored in a MongoDB database via RESTful API during signup. Users receive tokens and QR codes after login.
    </p>
  </div>
  <div className="card">
    <h2>Home and Account Pages</h2>
    <p>
      Interactive home page with mouse-responsive images. The account page displays user data fetched from the API.
    </p>
  </div>
  <div className="card">
    <h2>Technologies Used</h2>
    <p>
      Built with the MERN stack: React, Node.js, Express, and MongoDB. Uses various libraries for UI and backend functionality.
    </p>
  </div>
</div>)
}

export default About;
