const { faker } = require("@faker-js/faker");
const mysql = require("mysql2/promise");
const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const id = uuidv4();
const methodOverride = require("method-override");
const { connect } = require("http2");

// SETTING EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// MIDDLEWARES
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//HOME PAGE

app.get("/", async (req, res) => {
  try {
    const user = [];
    const q = "select count(*) as total_user from user";
    const [rows] = await connection.query(q);
    const count = rows[0].total_user;
    res.render("home.ejs", { count });
  } catch (error) {
    res.status(500).send("Some error went in this page!");
    console.log(error);
  }
});

// SHOW ALL USERS ROUTE
app.get("/user", async (req, res) => {
  try {
    const q = "select * from user";
    const [users] = await connection.query(q);
    res.render("show_user", { users });
  } catch (error) {
    res.status(500).send("Some error occured in Home Page!");
    console.log(error);
  }
});

//EDIT USERNAME

// GET EDIT USERNAME FORM
app.get("/user/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    const q = `select * from user where id = ?`;
    const [rows] = await connection.query(q, [id]);
    let user = rows[0];
    res.render("edit.ejs", { user });
  } catch (error) {
    res.status(500).send("Some error occured in Edit form page!");
    console.log(error);
  }
});

// PATCH REQUEST FOR USERNAME
app.patch("/user/:id", async (req, res) => {
  try {
    //FETCHING USER BASED ON CORRECT ID
    let { id } = req.params;
    const q = `select * from user where id = ?`;
    const [rows] = await connection.query(q, [id]);
    let user = rows[0];
    if (!user) return res.send("User not found");

    //  FETCHING FORM DATA
    let { username: newUsername, password: formPass } = req.body;
    //CHECKING DB AND FORM PASSWORD
    if (formPass != user.password) {
      res.render("wrong_pass.ejs");
    } else {
      const q1 = "update user set username = ? where id = ? ";
      const [result] = await connection.query(q1, [newUsername, id]);
      res.redirect("/user");
    }
  } catch (error) {
    res.status(500).send("Some error occured in Update Page!");
    console.log(error);
  }
});

// ADDING NEW USER
app.get("/user/new", (req, res) => {
  res.render("add.ejs");
});

//POST ROUTE FOR NEW USER
app.post("/user", async (req, res) => {
  try {
    let { username: newUser, email: formEmail, password: formPass } = req.body;
    let id = uuidv4();
    let q = ` insert into user values ?`;
    values = [[id, newUser, formEmail, formPass]];
    let rows = await connection.query(q, [values]); // will return and array of array.
    console.log(rows[0]);
    res.redirect("/user");
  } catch (error) {
    console.log(error);
    res.status(500).send("Some error occured in adding new user!");
  }
});

//DELETE ROUTE

// GET REQUEST TO SERVE DELET FORM
app.get("/user/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const q = `select * from user where id = ?`;
    const [rows] = await connection.query(q, [id]);
    let user = rows[0];
    res.render("delete.ejs", { user });
  } catch (error) {
    console.log(error);
    res.status(500).send("Some error occured in adding new user!");
  }
});

//DELETE ROUTE TO DELETE USER AFTER VERIFYING PASSWORD
app.delete("/user/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { password } = req.body;
    const q = `select * from user where id = ?`;
    const [rows] = await connection.query(q, [id]);
    let user = rows[0];
    if (password != user.password) {
      res.render("wrong_pass.ejs"); 
    } else {
      let q1 = `delete from user where id = ?`;
      let result = await connection.query(q1, [id]);
      console.log(`Deleted User : ${user.username}`);
      res.redirect("/user");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Some error occured in  delete user page!");
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
        multipleStatements: true, // 👈 must enable this
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

initDb(5, 2000);

// // FOR BULK DATA CREATION. AUXILLARY PROGRAM
// function getUser() {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// }

// for (i = 1; i < 6; i++) {
//   user.push(getUser());
// }
