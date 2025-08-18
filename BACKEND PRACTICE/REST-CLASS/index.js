// REQURING ALL THE LIBRARIES, PACKAGES AND MODULES
const express = require("express");
const app = express();
const path = require("path");

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

//  GET ROUTE - SHOWING ALL POSTS
app.get("/posts", (req, res) => {
  res.render("home.ejs", { posts });
});

// RAW DATA ANALOGOUS TO DATABASES
let posts = [
  {
    id: 123,
    username: "@rahul",
    content: "Creating Quoro",
  },
  {
    id: 121,
    username: "@rahuldev",
    content: "Using Restful Api ",
  },
  {
    id: 113,
    username: "@rahulWeb",
    content: "Performing CRUD operations",
  },
];
