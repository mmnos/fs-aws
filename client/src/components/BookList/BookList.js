import React, { useContext } from "react";
import Book from "../Book/Book";
import GlobalContext from "../../context/globalContext";

const BookList = () => {
  const globalContext = useContext(GlobalContext);

  const { searchResults } = globalContext;

  return (
    <>
      {searchResults.items &&
        searchResults.items.map((book) => (
          <Book
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.saleInfo.buyLink}
          />
        ))}
    </>
  );
};

export default BookList;
