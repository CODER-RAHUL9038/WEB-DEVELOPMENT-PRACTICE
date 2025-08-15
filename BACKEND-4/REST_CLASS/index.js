const express = require("express");
const app = express();
const path = require("path"); // importing path module
const port = 8080;

app.use(express.urlencoded({ extended: true })); // setting middleware for data parsing

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "Rahulshaw",
    content: "I love coding",
  },
  {
    username: "Scaduu",
    content: " This is my first API creation",
  },
  {
    username: "Birju",
    content: " I am the training head of the program",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req,res) =>{
  console.log(req.body)
  res.send("post request working")
})

app.listen(port, (req, res) => {
  console.log(`listening on port : ${port}`);
});
