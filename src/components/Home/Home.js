import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sidelogo from "../../Assets/sidelogo.png";
import Particle from "../Particle";
import Home2 from "./Home2";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Pavan Durga Kumar</strong>
              </h1>
              <p style={{marginLeft : "47px"}}>IT Student &nbsp;|&nbsp; MERN Stack Developer &nbsp;|&nbsp; Programmer</p>
              
            </Col>
            
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={sidelogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
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
