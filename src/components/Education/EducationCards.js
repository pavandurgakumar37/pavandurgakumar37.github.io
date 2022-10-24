import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsChevronRight } from "react-icons/bs";

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
          {props.CGPA}
        </Card.Text>
        <Button variant="primary" href={props.website} target="_blank">
          <BsChevronRight /> &nbsp;
          {props.isBlog ? "Blog" : "Website"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default EducationCards;
