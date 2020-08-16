import React from "react";
import "./Book.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faHeart } from "@fortawesome/free-solid-svg-icons";

const Book = ({ title, authors, description, image, link }) => {
  const imageStyle = {
    height: 400,
    width: "100%",
    borderRadius: "1%",
  };

  return (
    <Col sm={6}>
      <div className="bookInfo">
        <img style={imageStyle} src={image} alt="thumbnail" />
        <hr />
        <h2 className="title">{title}</h2>
        <p className="author">
          {" "}
          Written by :{" "}
          {authors.map((author) => (
            <span key={author}>{author}, </span>
          ))}
        </p>
        <hr />
        <p className="description"> {description} </p>
        <hr />
        <p className="links">
          <span>
            {link && (
              <a
                className="buyLink"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDollarSign} />{" "}
              </a>
            )}
          </span>
          <span>
            <a className="save" href="#">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </span>
        </p>
      </div>
    </Col>
  );
};

export default Book;
