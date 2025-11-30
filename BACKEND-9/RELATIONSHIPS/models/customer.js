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

//Order Schema
const orderSchema = new Schema({
  item: String,
  price: Number,
});

//Model
const Order = mongoose.model("Order", orderSchema);

// //One to many relation approach
// const addUsers = async () => {
//   const res = await Order.insertMany([
//     { item: "samosa", price: 30 },
//     { item: "Chips", price: 60 },
//     { item: "Tomato", price: 50 },
//   ]);
//   console.log(res);
// };

// addUsers();

//Customer Schema
const CustomerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// Customer Model
const Customer = mongoose.model("Customer", CustomerSchema);

// const addCustomer = async () => {
//   const customer1 = new Customer({
//     name: "Rahul",
//   });

//   let order1 = await Order.findOne({ item: "samosa" });
//   let order2 = await Order.findOne({ item: "Tomato" });

//   customer1.orders.push(order1);
//   customer1.orders.push(order2);

//   let result = await customer1.save();
//   console.log(result);
// };

// addCustomer();

// // Using Populate to Replace reference id to original object using result[0]
// const findCustomer = async () => {
//   let result = await Customer.find({ name: "Rahul" }).populate("orders");
//   console.log(result[0]);
// };
// findCustomer();

const addData = async () => {
  let newCustomer = new Customer({
    name: "Karan Singh",
  });

  let newOrder = new Order({
    item: "Pizza",
    price: 250,
  });
  newCustomer.orders.push(newOrder);
  await newOrder.save();
  await newCustomer.save();
  console.log("added new cutomerand order");
};



addData();
