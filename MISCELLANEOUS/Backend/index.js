const express = require("express");
const app = express();

const port = 8080;

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`Welcome ${user}!`);
});

app.post("/register", (req, res) => {
  res.send("Standard POST response");
});

app.listen(port, () => {
  console.log(`Listening port  ${port}`);
});
