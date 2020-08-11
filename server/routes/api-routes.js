const router = require("express").Router();
const Book = require("../models/Book");

router.get("/books", async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (err) {
    res.json(err);
  }
});

router.post("/books", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.remove(req.params.id);
    res.json(`This book was successfully deleted -----> ${book}`);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
