const express = require("express");
const app = express(); // App is an object
console.dir(app);

let port = 3000; // or 8080

app.listen(port, () => { // listen is also an object which listens incomming api servers
  console.log(`app is listening on port:${port}`);
});

// RECEVING REQUEST FROM CLIENT SIDE- BROWSER
app.use((req, res) => {
    console.log("request received")
})