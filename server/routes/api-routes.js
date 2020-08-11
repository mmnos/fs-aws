const router = require("express").Router();
const Book = require("../models/Book");

// GET route for all books in the database
router.get("/books", async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (err) {
    res.json(err);
  }
});

// POST route for users who choose to save a book
router.post("/books", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json("This book was successfully saved to the database!");
  } catch (err) {
    res.json(err);
  }
});

// DELETE route for users who no longer want a book in their saved list
router.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.deleteOne({ _id: req.params.id });
    res.json(`This book was successfully deleted from the database!`);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
