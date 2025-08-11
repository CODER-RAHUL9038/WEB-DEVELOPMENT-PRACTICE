const express = require("express");
const app = express();
const port = 8080;

// Middleware for req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`Welcome ${user}!`);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  let { user, password } = req.body;
  res.send(`Welcome ${user}!`);
  res.send("Standard POST response");
});

app.listen(port, () => {
  console.log(`Listening port  ${port}`);
});
