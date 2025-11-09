const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

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

app.get("/", (req, res) => {
  res.send("Root working");
});

app.listen(8080, () => {
  console.log("✅Listening to port :", 8080);
});
