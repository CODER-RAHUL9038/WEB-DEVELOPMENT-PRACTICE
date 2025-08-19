// REQURING ALL THE LIBRARIES, PACKAGES AND MODULES
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

port = 8080;

// SETTING SERVER
app.listen(port, (req, res) => {
  console.log(`Listening at port : ${port}`);
});

// SETTING VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARES
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// RAW DATA ANALOGOUS TO DATABASES
let posts = [
  {
    id: uuidv4(),
    username: "@rahul",
    content: "Creating Quoro",
  },
  {
    id: uuidv4(),
    username: "@rahuldev",
    content: "Using Restful Api ",
  },
  {
    id: uuidv4(),
    username: "@rahulWeb",
    content: "Performing CRUD operations",
  },
];

//  GET ROUTE - SHOWING ALL POSTS
app.get("/posts", (req, res) => {
  res.render("home.ejs", { posts });
});

// CREATING NEW POST
// 1. Get  request to serve the form

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

//  2. NEW POST ROUTE
app.post("/posts", (req, res) => {
  id = uuidv4();
  let { username, content } = req.body;
  if (!username.startsWith("@")) {
    username = "@" + username;
  }
  let newPost = { id, username, content };
  posts.push(newPost);
  res.redirect("/posts");
});

// SHOW EACH POST
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  if (post) {
    res.render("show.ejs", { post });
  } else {
    res.send("Sorry the id is wrong");
  }
});

// SENDING GET REQUEST TO PATCH
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

//PATCH ROUTE
app.patch("/posts/:id", (req, res) => {
  let { content } = req.body;
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  post.content = content;
  res.redirect("/posts");
});

// SENDING GET REQUEST TO DELETE
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});
