import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="purple">Sanya Bansal </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
           
            I specialize in front-end development and excel in crafting engaging UI/UX designs.
            <br />
            <br />
            Beyond coding, here are some activities I'm passionate about!
          </p>
          <ul>
            <li className="about-activity">
             Reading
            </li>
            <li className="about-activity">
            Painting
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
