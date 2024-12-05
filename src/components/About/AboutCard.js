import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="purple">Sanya Bansal, </span>
            a passionate front-end developer from <span className="purple">Delhi, India.</span>
            <br />
            I specialize in creating seamless, user-friendly UI/UX designs that deliver engaging digital experiences.
            <br />
            <br />
            When I’m not coding, I love indulging in creative and enriching activities like:
          </p>
          <ul>
            <li className="about-activity">
              <FaStar style={{ color: "#B88FDA" }} /> Reading
            </li>
            <li className="about-activity">
              <FaStar style={{ color: "#B88FDA" }} /> Painting
            </li>
            <li className="about-activity">
              <FaStar style={{ color: "#B88FDA" }} /> Exploring new technologies
            </li>
            <li className="about-activity">
              <FaStar style={{ color: "#B88FDA" }} /> Traveling
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            Let’s connect and create something amazing together!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
