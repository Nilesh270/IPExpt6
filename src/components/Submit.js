import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import { useParams } from "react-router-dom";



function Submit() {
  const {name}= useParams();
  return (
    <section>
      <Container style={{height:"90vh"}}>
        <Particle />
        <Container className="home-content">
          <Row >
            <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <h1>
                Thank you {name} for Submitting Form
              </h1>


            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Submit;
