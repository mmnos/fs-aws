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
            bookId={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : "https://via.placeholder.com/400"
            }
            link={book.saleInfo.buyLink}
            book={book}
          />
        ))}
    </>
  );
};

export default BookList;
