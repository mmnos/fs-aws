import React, { useContext } from "react";
import "./Book.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faHeart } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../context/globalContext";

const Book = ({ bookId, title, authors, description, image, link, book }) => {
  const imageStyle = {
    height: 400,
    width: "100%",
    borderRadius: "1%",
  };

  const globalContext = useContext(GlobalContext);

  const { saveBook } = globalContext;

  const handleSave = (thisBook) => {
    // console.log(thisBook);
    saveBook({
      bookId,
      title,
      authors,
      description,
      image,
      link,
    });
  };

  return (
    <>
      {authors && (
        <Col sm={6}>
          <div className="bookInfo">
            <img style={imageStyle} src={image} alt="thumbnail" />
            <hr />
            <h2 className="title">{title}</h2>
            <p className="author">
              {" "}
              Author(s) :{" "}
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
              <span className="save" onClick={() => handleSave(book)}>
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </p>
          </div>
        </Col>
      )}
    </>
  );
};

export default Book;
