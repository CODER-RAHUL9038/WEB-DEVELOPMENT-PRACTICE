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

// Post middleware alwayd written before model creation
CustomerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
  ``;
});

// Customer Model
const Customer = mongoose.model("Customer", CustomerSchema);
//Model
const Order = mongoose.model("Order", orderSchema);

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
    name: "Rajiv Sukha",
  });

  let newOrder = new Order({
    item: "Masala",
    price: 165,
  });
  newCustomer.orders.push(newOrder);
  await newOrder.save();
  await newCustomer.save();
  console.log("added new cutomerand order");
};
// addData();

//findByIdAndDelete will call findOneAndDelete and execute pre or post middleware
const delCust = async () => {
  let data = await Customer.findOneAndDelete({
    _id: "692c6a7b103dc4a0f895813b",
  });
};

delCust();
