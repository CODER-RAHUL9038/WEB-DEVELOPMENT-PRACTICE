const express = require("express");
const app = express(); // App is an object

let port = 3000; // or 8080

app.listen(port, () => {
  // listen is also an object which listens incomming api servers
  console.log(`app is listening on port:${port}`);
});

// RECEVING REQUEST FROM CLIENT SIDE- BROWSER
// app.use((req, res) => {  // same response acrros all routes
//   console.log("request received");
//   res.send({
//     Name: "Rahul Shaw",
//     Designation: "web Developer"  // sending object as response. can send any data type.
//   });
// });

// LEARNING GET
// app.get("/", (req, res) => {
//   res.send("I am root");
// });

// app.get("/fruit", (req, res) => {
//   res.send("You cantacted the fruit path");
// });

// app.get("/apple", (req, res) => {
//   res.send("You cantacted the apple path");
// });

// app.get(/.*/, (req, res) => {
//   res.send("This page does not exist");
// });

// app.get(/.*/, (req, res) => {
//   res.send("This page does not exist");
// });

// LEARNING PATH PARAMETER

app.get("/", (req, res) => {
  res.send("I am root");
});

// ADDING VARIABLE
app.get("/:username/:id", (req, res) => {
  let {username , id} = req.params
  let htmlStr = `<h1>Welcome to the page of @ ${username}</h1>`
  res.send(htmlStr)
});

//QUERY STRING
app.get("/search" , (req,res) =>{
  let {q} = req.query
    
  let htmlRes = `<h1>These are the search result of : ${q}</h1>`
  res.send(htmlRes)
})
