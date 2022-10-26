import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCards";
import pvpsit from "./pvpsit.jpg";
import Particle from "../Particle";
import interclg from "../../Assets/interclg.jpg";

function Education() {
    return (
              <Container fluid className="project-section">
                <Particle />
                <Container>
                  <h1 className="project-heading">
                    My <strong className="purple">Education</strong>
                  </h1>
                  
                  <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
                    <Col md={4} className="project-card">
                      <EducationCard
                        imgPath={pvpsit}
                        isBlog={false}
                        title="Prasad V. Potluri Siddhartha institute of Technology"
                        Study="Study : B.Tech - Information Technology"  
                        Year = "Year : 2019 - 2023"
                        CGPA="CGPA : 8.93/10.00"
                        website="https://www.pvpsiddhartha.ac.in/index.html"
                      />
                    </Col>
                    <Col md={4} className="project-card">
                    <EducationCard
                        imgPath={interclg}
                        isBlog={false}
                        title="Narayana Junior College"
                        Study="Study : Intermediate - MPC"  
                        Year = "Year : 2017 - 2019"
                        CGPA="CGPA : 10.00/10.00"
                        website="#"
                      />
                    </Col>
          
                    <Col md={4} className="project-card">
                    <EducationCard
                        imgPath={interclg}
                        isBlog={false}
                        title="Vijeta High School"
                        Study="Study : SSC - 10th Standard"  
                        Year ="Year : 2016 - 2017"
                        CGPA="CGPA : 10.00/10.00"
                        website="#"
                      />
                    </Col>
                  </Row>
                </Container>
              </Container>
    )
}

export default Education; 