import React, { useContext } from "react";
import GlobalContext from "../../context/globalContext";

const BookList = () => {
  const globalContext = useContext(GlobalContext);

  const { searchResults, getSearchResults } = globalContext;

  console.log(searchResults);

  //   const [search, setSearch] = useState("space");
  //   const [currentSearch, setCurrentSearch] = useState([]);

  //   useEffect(() => {
  //     const getSearchedBooks = async (book) => {
  //       try {
  //         const result = await axios.get(
  //           `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.REACT_APP_API_KEY}`
  //         );
  //         console.log(result.data.items);
  //         setCurrentSearch(result.data.items);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getSearchedBooks(search);
  //   }, [search]);

  return (
    <>
      {/* {currentSearch.map((book) => (
        <Book key={book.id} title={book.volumeInfo.title} />
      ))} */}
      <h1>book list</h1>
    </>
  );
};

export default BookList;
