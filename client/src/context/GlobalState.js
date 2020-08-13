import React, { useReducer } from "react";
import axios from "axios";
import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";
import { GET_SAVED_BOOKS, ADD_BOOK, REMOVE_BOOK, BOOK_ERROR } from "./types";

const GlobalState = (props) => {
  const initialState = {
    savedBooks: [],
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  const getBooks = async () => {
    try {
      const result = axios.get("/api/books");

      dispatch({
        type: GET_SAVED_BOOKS,
        payload: result.data,
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const saveBook = async (book) => {
    try {
      const result = axios.post("/api/books");

      dispatch({
        type: ADD_BOOK,
        payload: result.data,
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const deleteBook = async (id) => {
    try {
      // eslint-disable-next-line
      const result = axios.delete(`/api/books/${id}`);

      dispatch({
        type: REMOVE_BOOK,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        savedBooks: state.savedBooks,
        getBooks,
        saveBook,
        deleteBook,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
