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

    //USING FAKER
    let getData = () => {
      return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
      ];
    };
    // INSERTING BULK DATA
    let data = [];
    for (i = 0; i <= 100; i++) {
      data.push(getData());
    }

    //INSERTING NEW DATA
    const commands = "insert into user(id, username, email, password) values ?";
    // const users = [
    //   [12238, "12368_newuser", "abnbcg@gmail.com", "1228abc"],
    //   [1234, "1234_newuser", "abc@gmail.com", "126abc"],
    // ];

    //DESTRUCTURING DATA AFTER EXECUTION
    const [rows] = await connection.query(commands, [data]);
    

    // TO ONLY SEE THE TALBE NAMES
    // const row = rows.map((r) => Object.values(r)[0])
    // console.log(row);
    await connection.end();
  } catch (error) {
    console.log(error);
  }
}

main();
