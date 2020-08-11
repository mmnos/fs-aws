const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

// app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

const MONGO_URI = process.env.MONGO_ATLAS_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
