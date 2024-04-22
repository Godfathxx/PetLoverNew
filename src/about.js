import React from "react";
import { BrowserRouter as Router, Route, Routes ,Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container mt-5 pt-5 pb-3">
        <div className="d-flex flex-column text-center mb-5">
          <h4 className="text-secondary mb-3">Team Member</h4>
          <h1 className="display-4 m-0">
            Meet Our <span className="text-primary">Team Members</span>
          </h1>
        </div>
          <div className="team card position-relative overflow-hidden border-0 mb-4">
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>Shreyash Joshi</h5>
                  <i>Founder & CEO</i>
                </div>
            
              </div>
            </div>
          <div className="team card position-relative overflow-hidden border-0 mb-4">
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>Mayank Pathak</h5>
                  <i>CTO</i>
                </div>
              </div>
            </div>
          <div className="team card position-relative overflow-hidden border-0 mb-4">
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>Suyash Agrawal</h5>
                  <i>President</i>
                </div>

              </div>
            </div>
          </div>
    </>
  );
};

export default About;
