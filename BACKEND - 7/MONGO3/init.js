const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let allChat = [
  {
    from: "Elon Musk",
    to: "Rahul Shaw",
    msg: "Please send me your resume",
    created_at: new Date(),
  },
  {
    from: "Rahul Shaw",
    to: "Elon Musk",
    msg: "Sure Elon, sending it right now!",
    created_at: new Date(),
  },
  {
    from: "Steve Jobs",
    to: "Rahul Shaw",
    msg: "Keep learning, stay hungry, stay foolish.",
    created_at: new Date(),
  },
  {
    from: "Bill Gates",
    to: "Rahul Shaw",
    msg: "I’d love to discuss your latest project idea.",
    created_at: new Date(),
  },
  {
    from: "Rahul Shaw",
    to: "Bill Gates",
    msg: "Thanks sir, it would be an honor!",
    created_at: new Date(),
  },
  {
    from: "Mark Zuckerberg",
    to: "Rahul Shaw",
    msg: "We’re hiring developers with your skills!",
    created_at: new Date(),
  },
  {
    from: "Rahul Shaw",
    to: "Mark Zuckerberg",
    msg: "That’s awesome! Please share the details.",
    created_at: new Date(),
  },
  {
    from: "Sundar Pichai",
    to: "Rahul Shaw",
    msg: "Would you like to join our next coding challenge?",
    created_at: new Date(),
  },
  {
    from: "Rahul Shaw",
    to: "Sundar Pichai",
    msg: "I’d love to! Please send me the link.",
    created_at: new Date(),
  },
  {
    from: "Jeff Bezos",
    to: "Rahul Shaw",
    msg: "I heard you’re mastering MERN — impressive!",
    created_at: new Date(),
  },
];

Chat.insertMany(allChat)
  .then((res) => {
    console.log("✅Saved to DB:", res);
  })
  .catch((err) => {
    console.log("❌Error saving In DB:", err);
  });
