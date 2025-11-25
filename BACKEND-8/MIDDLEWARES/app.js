const express = require("express");
const app = express();
const ExpressError = require("./expressError.js");

// app.use((req, res, next) => {
//   // middleware interfaring betweeen req and res
//   console.log("I am first middleware");
//   next();
// });
// app.use((req, res, next) => {
//   // middleware interfaring betweeen req and res
//   console.log("I am second middleware");
//   next();
// });

// //Logger function
// app.use((req, res, next) => {
//   req.time = new Date().toLocaleDateString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }

  console.log("Hacking attempt.....");
  throw new ExpressError(401, "Access Denied");
};

app.get("/api", checkToken, (req, res) => {
  console.log("Data provided of X user");
  res.send("This is the Private Data of out valuable customer");
});

app.use("/admin", (req, res) => {
  throw new ExpressError(403, "Access to Admin is forbidden");
});

//Async Wrap function
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// We can use the above asyncWrap function insteas of try and catch




//Handling Mongoose error
const handleValidationErr = (err) => {
  console.log("Validation Error Occured.Please Check the Schema Rules");
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name == "ValidationError") {
    err == handleValidation(err);
  }
  next(err);
});

app.get("/test", (req, res) => {
  res.send("Hi i am root");
});

app.listen(8080, (req, res) => {
  console.log("✅Server listening to port: 8080");
});
