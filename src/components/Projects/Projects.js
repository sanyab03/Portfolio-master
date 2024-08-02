import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Foodfolio from "../../Assets/Projects/foodfolio.png";
import EcoEscapes from "../../Assets/Projects/Ecoescapes.png";
import Craftcuisine from "../../Assets/Projects/Craftcuisine.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Explore My <strong className="purple">Latest Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodfolio}
              isBlog={false}
              title="Food Folio"
              description="Foodfolio is a comprehensive food management website that enables users to donate food, manage inventory, organize recipes, and streamline meal planning , ensuring efficient and sustainable food management."
              demoLink="https://food-folio.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcoEscapes}
              isBlog={false}
              title="Eco Escapes"
              description="EcoEscapes is a vibrant travel website for eco-friendly travelers. It offers an intuitive interface for exploring sustainable destinations, booking green accommodations, and accessing travel guides, ensuring a user-friendly experience."
              demoLink="https://eco-escapes.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Craftcuisine}
              isBlog={false}
              title="Craft Cuisine"
              description="
              Craft Cuisine is a dynamic restaurant website with an intuitive interface for exploring menus and making reservations. It showcases high-quality dish images and customer reviews, ensuring an engaging and user-friendly experience for food enthusiasts."
              demoLink="https://craft-cuisine.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
