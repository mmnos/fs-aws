import React, { useContext } from "react";
import "./SavedBook.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faTrash } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../context/globalContext";

const SavedBook = ({ id, title, authors, description, image, link }) => {
  const imageStyle = {
    height: 400,
    width: "100%",
    borderRadius: "5%",
    margin: 5,
    padding: 5,
  };

  const globalContext = useContext(GlobalContext);

  const { deleteBook } = globalContext;

  const handleDelete = (id) => {
    deleteBook(id);
  };

  return (
    <>
      <Col sm={4}>
        <img style={imageStyle} src={image} alt="thumbnail" />
      </Col>
      <Col sm={8}>
        <div className="savedBookInfo">
          <h2 className="title"> {title} </h2>
          <p className="author">
            {" "}
            Author(s) :{" "}
            {authors.map((author) => (
              <span key={author}>{author}, </span>
            ))}
          </p>
          <hr />
          <p className="description">{description}</p>
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
            <span className="delete" onClick={() => handleDelete(id)}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </p>
        </div>
      </Col>
    </>
  );
};

export default SavedBook;
