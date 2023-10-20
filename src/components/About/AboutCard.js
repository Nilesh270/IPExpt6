import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nilesh Balotiya </span>
            from <span className="purple"> Mumbai, India.</span>
            <br /> I am a third year B.E Information Technology Student
            <br />
            Additionally, I am currently employed as a software developer <br />at
            SUD-Life Insurance Company.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
