const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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

let chat1 = new Chat({
  from: "Elon Musk",
  to: "Rahul Shaw",
  msg: "Please send me your resume",
  created_at: new Date(),
});

chat1
  .save()
  .then((res) => {
    console.log("✅Saved to DB:", res);
  })
  .catch((err) => {
    console.log("❌Error saving In DB:", err);
  });

app.get("/", (req, res) => {
  res.send("Root working");
});

app.listen(8080, () => {
  console.log("✅Listening to port :", 8080);
});
