const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const { url } = require("inspector");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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
  let chats = await Chat.find().sort({ created_at: -1 });
  res.render("home.ejs", { chats });
});

//Post Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//Handling data recieved from form body
app.post("/chats", async (req, res) => {
  let { from, msg, to } = req.body;
  let chat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date(),
  });
  chat
    .save()
    .then((res) => {
      console.log("✅Message Saved to DB:", res);
    })
    .catch((err) => {
      console.log("❌Error saving message In DB:", err);
    });
  res.redirect("/chats");
});

//Edit Chat
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

// Handle form body from edit page
app.put("/chats/:id", (req, res) => {
  let { id } = req.params;
  let { from, msg, to } = req.body;

  let chat = Chat.findByIdAndUpdate(
    id,
    { msg: msg, from: from, to: to },
    { runValidators: true, new: true }
  )
    .then((res) => {
      console.log("✅Message Updated in DB:", res);
    })
    .catch((err) => {
      console.log("❌Error Updating message In DB:", err);
    });
  res.redirect("/chats");
});

//Handle route
app.delete("/chats/:id", (req, res) => {
  let { id } = req.params;
  let chat = Chat.findByIdAndDelete(id, { new: true })
    .then((res) => {
      console.log("✅Message Deleted from DB:", res);
    })
    .catch((err) => {
      console.log("❌Error Deleting message from DB:", err);
    });
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("Root working");
});

app.listen(8080, () => {
  console.log("✅Listening to port :", 8080);
});
