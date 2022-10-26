import React from "react";
import Card from "react-bootstrap/Card";

function EducationCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.Study}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.Year}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default EducationCards;
