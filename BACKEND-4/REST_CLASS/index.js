const express = require("express");
const app = express();

port = 8080;
app.listen(port, (req, res) => {
  console.log(`listening on port : ${port}`);
});
