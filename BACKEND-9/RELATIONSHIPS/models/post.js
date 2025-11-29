const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/relation";
const { Schema } = mongoose;

main()
  .then((res) => {
    console.log("✅Connected to MongoDB");
  })
  .catch((err) => {
    console.log("❌Error connecting to Db");
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

//User Schema
const userSchema = new Schema({
  name: String,
  email: String,
});

//Post Schema
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

//Model
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user = await User.findOne({name:"Adams"});
  let post2 = await new Post({
    content: "Hello World",
    likes: 1450,
  });

  post2.user = user;

  await post2.save();
};

// addData();

const findPost = async () => {
  let result = await Post.find().populate("user");
  console.log(result);
};
findPost();
