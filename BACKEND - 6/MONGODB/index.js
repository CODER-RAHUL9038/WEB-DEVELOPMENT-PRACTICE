const mongoose = require("mongoose");

//MAKING CONNECTION WITH THE MONGODB SERVER
main()
  .then((result) => {
    console.log("✅ MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("Connection Error", err.message);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//CREATING SCHEMA
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// CREATING MODEL OR INSTANCES
const User = mongoose.model("User", userSchema);

// //CREATING DOCUMENT FROM MODEL CLASS IN TEMP MEMORY. CHECK TEMP MEMORY WITH .LOAD INDEX.JS IN INSIDE NODE REPL
// const user1 = new User({
//   name: "adam",
//   email: "adam@yahoo.in",
//   age: 48,
// });

// const user2 = new User({
//   name: "Panama",
//   email: "panama@google.in",
//   age: 98,
// });

// // SAVING IN DB AND RETURNS PROMISE
// user2.save()
//   .then(result => console.log("✅ Saved:", result))
//   .catch(err => console.log("❌ Error:", err));

//INSERTING MANY DOCUMENTS AT ONCE
User.insertMany([
  { name: "Tony", email: "tony@gmail.com", age: 50 },
  { name: "Peter", email: "peter@gmail.com", age: 85 },
  { name: "Pulian", email: "pulian@gmail.com", age: 25 },
])
  .then((result) => console.log("✅ Saved:", result))
  .catch((err) => console.log("❌ Error:", err));
