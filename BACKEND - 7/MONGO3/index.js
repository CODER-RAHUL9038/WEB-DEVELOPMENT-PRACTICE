const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const { url } = require("inspector");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

main()
  .then((res) => {
    console.log("✅MongoDb conneted successfully.....");
  })
  .catch((err) => {
    console.log("❌Error:", err.message);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

//Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find({});
  console.log(chats);
  res.render("home.ejs", { chats });
});

//Post Route
app.get("/chats/new",(req,res)=>{
  res.send(" Chat New working")
})

app.get("/", (req, res) => {
  res.send("Root working");
});

app.listen(8080, () => {
  console.log("✅Listening to port :", 8080);
});
