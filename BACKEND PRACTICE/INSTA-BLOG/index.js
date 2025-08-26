const express = require("express");
const app = express();
const path = require("path");

// Setting middlewares
// Setting EJS
app.set("view ngine", "ejs");
app.set("views", path.join(__dirname, "Views"));

// Setting middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

port = 8080;

// Starting server



app.listen(port, (req, res) => {
  console.log(`Listening on port : ${port}`);
});


let posts = [
  {
    id :"sd",
    username : "@rahul",
    content : "Creating Instablog",
    image : "image"
  },
  {
    id :"sff",
    username : "@rahul",
    content : "Creating Instablog with image",
    image : "image"
  },
  {
    id :"dsd",
    username : "@rahul",
    content : "Will learn uploading image",
    image : "image"
  }
]



app.get("/posts", (req, res) => {
  res.render("home.ejs", {posts})
});
