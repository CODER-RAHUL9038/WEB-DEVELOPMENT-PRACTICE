const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

// create a connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jaicoder123@",
  database: "delta_app",
});

try {
  connection.query("show tables", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (error) {
  console.log(error);
}
connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
