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

//INSERTING MANY DOCUMENTS AT ONCE----
// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Peter", email: "peter@gmail.com", age: 85 },
//   { name: "Pulian", email: "pulian@gmail.com", age: 25 },
// ])
//   .then((result) => console.log("✅ Saved:", result))
//   .catch((err) => console.log("❌ Error:", err));

// FINDING MODEL(COLLECTION) IN NEW INSTANCE OF MODEL(DOCUMENT)
//FINDING ALL USER
// User.find({})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

//FINDING USER BASED ON CONDITION
// User.find({age:{$gt:30}})
// .then((res) => {
//   console.log(res[1].name);
// })
// .catch((err) => {
//   console.error(err.message);
// });

// //FINDING ONE USER BASED ON CONDITION
// User.findOne({age:{$gt:47}})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.error(err.message);
// });

// //FINDING  USER BASED ON ID
// User.findOne({ _id :"690e352c3f26c3984c086751" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// //FINDING  USER BASED ON ID
// User.findById("690e32349c539bfbad341aea")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// //UPDATE  USER BASED ON FILTER
// User.updateOne({name:"Tony"},{age:85})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

//   //UPDATE  MANY USER BASED ON FILTER
// User.updateMany({age:{$gt:45}},{age:120})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// //UPDATE  USER BASED ON FIND ONE AND UPDATE
// User.findOneAndUpdate({name:"Tony"},{age:65},{new:true})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// //UPDATE  USER BASED ON FIND BY ID AND UPDATE
// User.findByIdAndUpdate("690e3390749254ae23725e44",{age:10},{new:true})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// //DELETE USER DELETEONE
// User.deleteOne({name:"Panama"})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// //DELETE USER DELETEMANY
// User.deleteMany({age:120})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// //DELETE USER BY FIND BY AND DELETE
// User.findByIdAndDelete("690e352c3f26c3984c086753")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

  
//DELETE USER FIND ONE AND DELETE
User.findOneAndDelete({name:"Tony"})
  .then((res) => {
    console.log("❌DELETED", res);
  })
  .catch((err) => {
    console.error(err.message);
  });

  