const express = require("express");
const app = express();
const path = require("path"); // importing path module
const port = 8080;

// IMPORTING UUID PACKAGE
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true })); // setting middleware for data parsing

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, (req, res) => {
  console.log(`listening on port : ${port}`);
});

let posts = [
  {
    id: uuidv4(),
    username: "Rahulshaw",
    content: "I love coding and can do anything for it ",
  },
  {
    id: uuidv4(),
    username: "Scaduu",
    content: " This is my first API creation",
  },
  {
    id: uuidv4(),
    username: "Birju",
    content: " I am the training head of the program",
  },
];

// Render Posts home page
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// Rendering Form page
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

// Creating new Post
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

// Rettriving Id and showing content based on the id

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  if (post) {
    res.render("show.ejs", { post });
  } else {
    res.send("Sorry wrong Id");
  }
});

//PATCH REQUEST
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  let newContent = req.body.content;
  post.content = newContent;
  console.log(id);
  console.log(post);
  res.send("Patch request working");
});

// Route for editing posts

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});
