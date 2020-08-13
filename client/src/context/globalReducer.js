import { GET_SAVED_BOOKS, ADD_BOOK, REMOVE_BOOK, BOOK_ERROR } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_SAVED_BOOKS:
      return {
        ...state,
        savedBooks: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        savedBooks: [action.payload, ...state.savedBooks],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        savedBooks: state.savedBooks.filter(
          (book) => book._id !== action.payload
        ),
      };
    case BOOK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
