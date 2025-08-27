const express = require("express");
const { url } = require("inspector");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

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
    id: uuidv4(),
    username: "@jhaplu",
    caption: "Mai hu JhaplaSurrrr",
    image: "/images/jhapluu.png",
  },
  {
    id: uuidv4(),
    username: "@taplu",
    caption: "Mai hu TaplaSurrrr",
    image: "/images/taplu.jpg",
  },
  {
    id: uuidv4(),
    username: "@paplu",
    caption: "Mai hu PaplaSurrrr",
    image: "/images/paplu.png",
  },
];

// Home page
app.get("/posts", (req, res) => {
  res.render("home.ejs", { posts });
});

// New post

// sending get request to render form
app.get("/posts/new", (req, res) => {
  let id = uuidv4();
  res.render("new.ejs", { id });
});

// serving the post request to create new post
app.post("/posts", (req, res) => {
  let id = uuidv4();
  let { username, caption } = req.body;
  let newPost = { id, username, caption };
  posts.push(newPost);
  res.redirect("/posts");
});

// View each post
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);

  if (post) {
    res.render("show.ejs", { post });
  } else {
    res.send("wrong id");
  }
});
