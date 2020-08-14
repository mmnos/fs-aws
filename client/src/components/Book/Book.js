import React from "react";
import { Col } from "react-bootstrap";

const Book = ({ title, authors, description, image, link }) => {
  const imageStyle = {
    height: 200,
    width: "100%",
  };

  return (
    <Col sm={4}>
      <img style={imageStyle} src={image} alt="thumbnail" />
      <h2>{title}</h2>
      <p>
        {authors.map((author) => (
          <span key={author}>{author},</span>
        ))}
      </p>
      <p> {description} </p>
      {link && <a href={link}>Buy Here</a>}
    </Col>
  );
};

export default Book;
