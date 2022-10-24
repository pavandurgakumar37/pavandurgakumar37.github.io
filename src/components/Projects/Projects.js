import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import numguess from "../../Assets/Projects/numguess.jpg";
import robot_car from "../../Assets/Projects/robot_car.jpg";
import Flightfare from "../../Assets/Projects/Flightfare.png";
import myportfolio from "../../Assets/Projects/myportfolio.png";
import mrcpu from "../../Assets/Projects/mrcpu.png";
import petcado from "../../Assets/Projects/petcado.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petcado}
              isBlog={false}
              title="Petcado"
              description="PETCADO is a MERN Stack website  where information about different breeds of Cats and Dogs are provided and basic useful information about pets.
              Our platform provides a link that redirects to the merchant."
              ghLink="https://github.com/pavandurgakumar37/Petcado"
              demoLink="https://github.com/pavandurgakumar37/Petcado"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mrcpu}
              isBlog={false}
              title="MrCPU"
              description="Know info about different processors get the details. We can compare, view and the details of famous CPUs and processors available in the market. This is a full stack project with techstack -  ExpressJS, nodeJS, MongoDB and Ejs at their best."
              ghLink="https://github.com/pavandurgakumar37/Mr.CPU"
              demoLink="http://mrcpu.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flightfare}
              isBlog={false}
              title="Flight Fare Prediction"
              description="Flight fare prediction is a machine learning project and the code is written in python language. coming to the description of the project, it show the fair price of the flight tickets and we can check the prices of flight tickets for different destinations from different sources on different dates."
              ghLink="https://github.com/pavandurgakumar37/Flight-Fare-Prediction"
              demoLink="https://flight-price-prediction-api.herokuapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myportfolio}
              isBlog={false}
              title="My Portfolio"
              description="This is my portfolio website which tells about my details and my work or projects and my educational details. 
              This portfolio is developed using ReactJs as a main techstack which has lots of advantages when we get a deep dive into it."
              ghLink="https://github.com/pavandurgakumar37/pdk-portfolio"
              demoLink="http://mrcpu.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={numguess}
              isBlog={false}
              title="Number Guessing Game"
              description="Number guessing game is program based game that is developed and written using C++ programming language. In this, a user can have initial amount and can bet a certian amount on a correct guess , if the guessed number is correct then the user is awarded or else the amount will be deducted."
              demoLink="https://github.com/pavandurgakumar37/Number-Guess-Game/blob/main/Guess_Game.cpp"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robot_car}
              isBlog={false}
              title="Arduino Robot Car"
              description="A arduino robot car using arduino uno and arduino software as well as hardware components. It is controlled wirelessly its directions and motion."
              ghLink="https://github.com/pavandurgakumar37/Arduino_Robot_car"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
