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
             
            I am deeply passionate about programming and the endless possibilities it offers.
              <br />
              <br />I have honed my skills in
              <i>
                <b className="purple">CSS, JavaScript, and UI/UX design </b>
              </i>
              , continually striving for excellence.
              <br />
              <br />
              My interests lie in building &nbsp;
              <i>
                <b className="purple">web technologies and designing websites.  </b> 
              </i>
              <br />
              <br />
              I frequently use  
              <i>
                <b className="purple">
                  {" "}
                  libraries and frameworks
                </b>
              </i>
              &nbsp; such as 
              <i>
                <b className="purple"> React.js and Bootstrap</b>
              </i>
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
