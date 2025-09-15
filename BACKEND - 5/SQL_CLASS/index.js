const { faker } = require("@faker-js/faker");
const mysql = require("mysql2/promise");
const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

//HOME PAGE
app.get("/", async (req, res) => {
  try {
    const q = "select count(*) as total_user from user";
    const [rows] = await connection.query(q);
    const count = rows[0].total_user;
    res.send(count);
    // res.render("home.ejs", { count });
  } catch (error) {
    res.status(500).send("something Went Wrong!");
    console.log(error);
  }
});

//SETTING UP DATABASE AND SERVER

let connection;
async function initDb(retries = 3, delay = 2000) {
  for (let i = 1; i <= retries; i++) {
    try {
      // create a connection
      connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Jaicoder123@",
        database: "delta_app",
      });
      console.log("✅ DB connected");

      app.listen(8080, () => {
        console.log("listening to port : 8080");
      });
      return;
    } catch (error) {
      console.error(
        `❌ DB connection failed for ${i} attempt and pausing for ${
          delay / 1000
        } Seconds`,
        error.message
      );
      if (i < 3) {
        await new Promise((res) => setTimeout(res, delay));
      } else {
        console.log("❌ All retries failed. Exiting...");
        process.exit(1);
      }
    }
  }
}

initDb(5,6000);
