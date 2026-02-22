// src/components/Home/Home.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <span className="badge">Hiring Made Simple</span>

        <h1>
          Discover Opportunities <br />
          That Shape Your Career
        </h1>

        <p>
          Tech Talentry is a modern job platform connecting skilled professionals
          with companies that value innovation, growth, and talent.
        </p>

        <div className="stats">
          <div>
            <h3>5k+</h3>
            <span>Jobs Posted</span>
          </div>

          <div>
            <h3>2k+</h3>
            <span>Companies</span>
          </div>

          <div>
            <h3>10k+</h3>
            <span>Candidates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
