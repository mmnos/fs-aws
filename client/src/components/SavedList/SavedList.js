import React, { useContext, useEffect } from "react";
import SavedBook from "../SavedBook/SavedBook";
import GlobalContext from "../../context/globalContext";

const SavedList = () => {
  const globalContext = useContext(GlobalContext);

  const { savedBooks, getBooks } = globalContext;

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {savedBooks &&
        savedBooks.map((book) => (
          <SavedBook
            key={book._id}
            id={book._id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
          />
        ))}
    </>
  );
};

export default SavedList;
