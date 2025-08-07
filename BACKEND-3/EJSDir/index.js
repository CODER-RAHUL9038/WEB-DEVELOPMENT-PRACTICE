const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

// SETTING EJS
app.use(express.static(path.join(__dirname, "/public")))  // To Render static files runned outside the EJSDir 
app.use(express.static(path.join(__dirname, "/public")))  // To Render static files runned outside the EJSDir 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

//PARSING DATA IN EJS USING DICE ROLL EXAMPLE
app.get("/roledice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 7);
  //   res.render("roleDice.ejs", { num: diceValue }); // passing second argument as object whose key will be used in parsing data in ejs
  //   res.render("roleDice.ejs", { diceValue: diceValue }); //same key name can be used
  res.render("roleDice.ejs", { diceValue }); //Above line can be written as single value also
});

// CREATING INSTGRAM PAGE UISNG EJS
app.get("/:ig/:username", (req, res) => {
  let { username } = req.params;
  let instaData = require("./data.json");
  let data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { data });
  }
  else{
     res.render("error.ejs");
  }
});
