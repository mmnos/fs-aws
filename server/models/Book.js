const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: "Please provide a book title.",
  },
  authors: {
    type: String,
    required: "Please provide the name(s) of author(s).",
  },
  description: {
    type: String,
    required: "Please provide a description of the book.",
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  day: {
    type: Date,
    default: () => new Date(),
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
