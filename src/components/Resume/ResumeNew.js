import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import "./Contact.css";
import laptopImg from "../../Assets/about.png";
import { useNavigate } from "react-router-dom";

function ResumeNew() {
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nameValue = e.target.elements.Name.value;
    navigate(`/submit/${nameValue}`);
  }

  return (
    <div>
      <Container fluid className="resume-section" style={{ display: "flex", justifyContent: "center" }}>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div className="container">
            <div className="item">
              <div className="contact">
                <div className="first-text">Let's Get in touch</div>
                <img src={laptopImg} className="img-fluid" alt="about" style={{ marginTop: "50px" }} />
              </div>
              <div className="submit-form">
                <div className="Contact-text">Contact Us</div>
                <form onSubmit={handleFormSubmit}>
                  <div className="input-box">
                    <input type="text" className="input" placeholder="Name" name="Name" autoComplete="off" />
                  </div>
                  <div className="input-box">
                     <input type="email" className="input" placeholder="Email" name="Email" autocomplete="off" />
                  </div>
                  <div className="input-box">
                    <input type="text" className="input" placeholder="Subject" name="Subject" autocomplete="off" />
                  </div>
                  <div className="input-box">
                    <textarea className="input" id="message" rows="10" cols="30" placeholder="Message" name="Message" autocomplete="off"></textarea>
                  </div>
                  <button type="submit" className="btn btn-danger">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
