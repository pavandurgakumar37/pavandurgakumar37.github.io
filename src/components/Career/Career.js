import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CareerCard from "./CareerCard";
import aiml from "../../Assets/aiml.png";
import cyber from "../../Assets/cyber.png";
import Particle from "../Particle";
import aws_logo from "../../Assets/aws_logo.png";

function Career() {
    return (
              <Container fluid className="project-section">
                <Particle />
                <Container>
                  <h1 className="project-heading">
                    My <strong className="purple">Career - Internships and 
                    Experience</strong>
                  </h1>
                  
                  <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
                    <Col md={4} className="project-card">
                      <CareerCard
                        imgPath={cyber}
                        isBlog={false}
                        title="Cyber Security Virtual Intern"
                        Study="Company : AICTE"  
                        Year = "Time period : 08/2022 - 10/2022"
                        description="Learnt about Cyber security concepts and used palo alto logins."
                      />
                    </Col>
                    <Col md={4} className="project-card">
                    <CareerCard
                        imgPath={aiml}
                        isBlog={false}
                        title="AI ML Virtual Intern"
                        Study="Company : AICTE"  
                        Year = "Time period : 03/2022 - 05/2022"
                        description="Learnt about AI and ML concepts and implemented some basic implementations on them."
                      />
                    </Col>
          
                    <Col md={4} className="project-card">
                    <CareerCard
                        imgPath={aws_logo}
                        isBlog={false}
                        title="AWS Cloud Virtual Intern"
                        Study="Company : AICTE"  
                        Year = "Time period : 10/2021 - 12/2021"
                        description="Learnt about Services and applications provided by Amazon Web Services and implemented practically."
                      />
                    </Col>
                  </Row>
                </Container>
              </Container>
    )
}

export default Career; 