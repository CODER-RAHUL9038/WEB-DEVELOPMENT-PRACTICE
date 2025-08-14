const express = require("express");
const app = express();
const path = require('path') // importing path module
const port = 8080;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "Views"))
app.set(express.static(path.join(__dirname, "/public")))

app.use(express.urlencoded({extended : true})) // setting middleware for data parsing 

app.get("/" , (req ,res) =>{
  res.send("Server working well")
})

app.listen(port, (req, res) => {
  console.log(`listening on port : ${port}`);
});
