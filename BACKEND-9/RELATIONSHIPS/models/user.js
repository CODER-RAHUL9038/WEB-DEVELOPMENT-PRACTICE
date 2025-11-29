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

const userSchema = new Schema({
  username: String,
  address: [{ _id: false, location: String, city: String }],
});

//Model
const User = mongoose.model("User", userSchema);

//One to few relation approach
const addUsers = async () => {
  const user1 = new User({
    username: "David",
    address: [
      {
        location: "Nigeria",
        city: "London",
      },
    ],
  });
  user1.address.push({ location: "P18", city: "Kolkata" });
  let result = await user1.save();
  console.log(result);
};

addUsers();
