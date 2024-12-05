import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MY <span className="purple"> QUICK</span> INTRODUCTION
            </h1>
            <p className="home-about-body">
             
            I am deeply passionate about programming and the boundless opportunities it unlocks.
              <br />
              <br />With expertise in
              <i>
                <b className="purple">CSS, JavaScript, TypeScript, and UI/UX design , </b>
              </i>
              I constantly strive to push the boundaries of innovation and creativity.
              <br />
              <br />
              My interests center around crafting impactful &nbsp;
              <i>
                <b className="purple">web technologies and designing user-friendly websites.</b> 
              </i>
              <br />
              <br />
              Leveraging powerful libraries and frameworks like 
              <i>
                <b className="purple">
                  {" "}
                  React.js, Bootstrap, and Next.js, 
                </b>
              </i>
             
                I aim to create seamless, dynamic, and visually appealing digital experiences.
              
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>REACH ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sanyab03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sanyab03/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
