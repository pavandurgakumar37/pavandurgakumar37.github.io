import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import userimage from "../../Assets/userimage.png";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm interested in learning new things and technologies.
              <br />
              <br />I am fluent in Problem solving with
                <b className="purple"> C/C++, Java (intermediate) and Python (intermediate) </b>
              <br />
              <br />
              My areas of Interest's are  &nbsp;
                <b className="purple">Web Technologies and Software related technologies </b> and
                also in areas related to{" "}
                <b className="purple">
                  AI and Machine Learning.
                </b>
              <br />
              <br />
              I started my passion for developing products
              with <b className="purple">Node.js and Ejs</b> and
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              &nbsp; like
                <b className="purple"> React.js</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={userimage} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>My Profiles</h1>
            <p>
              Feel free to <span className="purple">share your thoughts </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pavandurgakumar37"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/PavanDurgaKumar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gunti-pavan-durga-kumar-38980a201/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/the.pdk_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
