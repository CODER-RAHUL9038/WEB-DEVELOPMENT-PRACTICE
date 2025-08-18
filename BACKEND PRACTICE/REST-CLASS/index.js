const express = require("express");
const app = express();

port = 8080;

app.listen(port, (req, res) => {
  console.log(`Listening at port : ${port}`);
});

app.get("/posts", (req, res) => {
  res.send("server working well");
});
