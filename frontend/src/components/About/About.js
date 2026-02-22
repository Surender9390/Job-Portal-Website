// src/components/About/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <h1>About Tech Talentry</h1>

        <p className="about-intro">
          Tech Talentry is a modern job portal designed to bridge the gap between
          talented professionals and forward-thinking companies.
        </p>

        <div className="about-sections">
          <div className="about-box">
            <h3>For Job Seekers</h3>
            <p>
              Explore opportunities that match your skills, experience, and
              career goals. Track applications and stay updated effortlessly.
            </p>
          </div>

          <div className="about-box">
            <h3>For Employers</h3>
            <p>
              Post jobs, manage listings, and connect with skilled candidates
              through a streamlined hiring process.
            </p>
          </div>

          <div className="about-box">
            <h3>Our Vision</h3>
            <p>
              To create a trusted platform where talent meets opportunity and
              careers grow with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
