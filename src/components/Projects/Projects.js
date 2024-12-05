import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Foodfolio from "../../Assets/Projects/foodfolio.png";
import Movie from "../../Assets/Projects/movie platform.png"
import Health from "../../Assets/Projects/health dashobard.png"
import Finance from "../../Assets/Projects/finance yes.png"


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
        <h2 className="purple">
          Front End Development Projects
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodfolio}
              isBlog={false}
              title="FoodFolio - Food Management Website"
              description="Foodfolio streamlines food management with surplus donations, inventory tracking, recipe organization, and meal planning, promoting efficiency, reducing waste, and sustainability."
              demoLink="https://food-folio.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="CineCore - Movie Platform Website"
              description="
              CineCore is an interactive platform for discovering movies and shows, offering detailed information, trending recommendations, and a seamless browsing experience."
              demoLink="https://cinecore-sanya-bansals-projects.vercel.app/"              
            />
          </Col>
         
        </Row>
        <h2 className="purple">
          UI / UX Design Projects
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Health}
              isBlog={false}
              title="HealthMate - Personalized Health Dashboard"
              description="HealthMate is a personalized health dashboard tracking fitness, sleep, and well-being, helping users monitor goals, analyze trends, and improve lifestyles."
              demoLink="https://medium.com/@sanya.bansal.bbb/personalized-health-dashboard-a-data-driven-approach-to-tracking-fitness-sleep-and-well-being-2f48b6d38275"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Finance}
              isBlog={false}
              title="MercuryMoney - Finance Dashboard"
              description="
              MercuryMoney is a sleek financial dashboard offering expense tracking, budget planning, and insights, empowering users to manage finances effortlessly."
              demoLink="https://medium.com/@sanya.bansal.bbb/mercury-money-dashboard-designing-a-seamless-financial-experience-3cc55fa6b1ce"
            />
          </Col>

          </Row>

      </Container>
    </Container>
  );
}

export default Projects;
