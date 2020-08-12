const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_ATLAS_URI;
const apiRoutes = require("./routes/api-routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use("/api", apiRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("../client/build"));
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
