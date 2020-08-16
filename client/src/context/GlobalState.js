import React, { useReducer } from "react";
import axios from "axios";
import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";
import {
  GET_SAVED_BOOKS,
  GET_SEARCH_RESULTS,
  ADD_BOOK,
  REMOVE_BOOK,
  BOOK_ERROR,
} from "./types";

const GlobalState = (props) => {
  const initialState = {
    savedBooks: [],
    searchResults: [],
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  const getBooks = async () => {
    try {
      const result = await axios.get("/api/books");
      dispatch({
        type: GET_SAVED_BOOKS,
        payload: result.data,
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err,
      });
    }
  };

  const getSearchResults = async (search) => {
    try {
      const result = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}`
      );
      dispatch({
        type: GET_SEARCH_RESULTS,
        payload: result.data,
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err,
      });
    }
  };

  const saveBook = async (book) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const result = await axios.post("/api/books", book, config);

      dispatch({
        type: ADD_BOOK,
        payload: result.data,
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err,
      });
    }
  };

  const deleteBook = async (id) => {
    try {
      // eslint-disable-next-line
      const result = await axios.delete(`/api/books/${id}`);

      dispatch({
        type: REMOVE_BOOK,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        savedBooks: state.savedBooks,
        searchResults: state.searchResults,
        getBooks,
        getSearchResults,
        saveBook,
        deleteBook,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
