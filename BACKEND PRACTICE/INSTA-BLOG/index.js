const express = require("express");
const app = express();
const path = require("path");

// Setting middlewares
// Setting EJS
app.set("view ngine", "ejs");
app.set("view", path.join(__dirname, "Views"));

// Setting middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

port = 8080;

// Starting server

app.listen(port, (req, res) => {
  console.log(`Listening on port : ${port}`);
});

app.get("/", (req, res) => {
  res.send("Get request working on port 8080");
});
