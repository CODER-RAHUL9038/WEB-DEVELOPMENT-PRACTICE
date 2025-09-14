const { faker } = require("@faker-js/faker");
const mysql = require("mysql2/promise");

async function main() {
  try {
    // create a connection
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Jaicoder123@",
      database: "delta_app",
    });

    //INSERTING NEW DATA
    const commands = "insert into user(id, username, email, password) values ?";
    const users = [
      [12238, "12368_newuser", "abnbcg@gmail.com", "1228abc"],
      [1234, "1234_newuser", "abc@gmail.com", "126abc"],
    ];

    //DESTRUCTURING DATA AFTER EXECUTION
    const [rows] = await connection.query(commands, [users]);
    // TO ONLY SEE THE TALBE NAMES
    // const row = rows.map((r) => Object.values(r)[0])
    // console.log(row);
    console.log(rows);
    // console.log(fields); //metadata
    // console.log("array length :", rows.length);
    await connection.end();
  } catch (error) {
    console.log(error);
  }
}

main();

//USING FAKER
let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
