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
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//   title: "Mathematics XII",
//   author: "Rd Sharma",
//   price: 1200,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log("✅Saved :", res);
//   })
//   .catch((err) => {
//     console.error("❌Error Saving :", err);
//   });

let book2 = new Book({
  title: "Gone Girl",
  author: "Cp kopnov",
  price: 1500,
});

book2
  .save()
  .then((res) => {
    console.log("✅Saved :", res);
  })
  .catch((err) => {
    console.error("❌Error Saving :", err);
  });
