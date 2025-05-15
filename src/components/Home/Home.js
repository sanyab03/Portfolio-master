import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/profile2.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Sanya Bansal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
          <img
            src={homeLogo}
            alt="home pic"
            className="img-fluid floating-image"
            style={{
              maxHeight: "400px",
              borderRadius: "550px", 
              boxShadow: "10px 10px 0 rgb(31, 1, 31)", 
              transform: "translateY(-10px)", 
            }}
          />
        </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
