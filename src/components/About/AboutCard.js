import React from "react";
import Card from "react-bootstrap/Card";
import { FaBeer } from 'react-icons/fa';  

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pavan Durga Kumar </span>
            from <span className="purple"> Vijayawada, Andhra Pradesh, India.</span>
            <br />Currently I'm pursuing 4th year B.Tech in the stream of Information Technology
            in Prasad V. Potluri Siddhartha institute of Technology. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity"> <FaBeer /> Playing cricket </li>
            <li className="about-activity"> <FaBeer /> Listening Music </li>
            <li className="about-activity"> <FaBeer /> Playing online games </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
