// "THIS" CONCEPT

const student = {
  Name: "Rahul",
  marks: 95,
  prop: this, // ❗this is evaluated BEFORE the object is assigned to student hence global scope i.e window
  getName: function () {
    console.log(this); // calling object - student
    return this.Name;
  },
  getMarks: () => {
    console.log(this); // LEXICAL SCOPE - OBJECT OF CALLING OBJECT MEANS WINDOW WHICH IS THE PARENT SCOPE
    return this.marks;
  },
  // ARRPOW FUNCTION WITH JS INBUILT FUNCTIONS RUNNING ON WINDOW OBJECT
  id: setTimeout(() => {
    console.log(this); //
    return this.Name;
  }, 2000),
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // ARROW DON'T HAVE OWN "THIS" THEY INHERIT FROM THIER PARENT'S "THIS" ,  HERE PARENT IS FUNCTION() AND FUNCTION()'S "THIS " IS IT'S CALLING OBJECT - STUDENT
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // HERE REGULAR FUNCTION IS USED AND REGULAR FNCTION HAVE THEIR OWN "THIS" WHICH IS THIER CALLING OBJECT HERE THE CALLING  OBJECT IS SETTIMEOUT WHICH IS WINDOW OBJECT
    }, 2000);
  },
};
// ❗ IMPORTANT
//  ✅ FINAL RULE:
//  WE USE:

//  🔹 REGULAR FUNCTIONS FOR OBJECT METHODS — SO THIS REFERS TO THE CALLING OBJECT
//  🔹 ARROW FUNCTIONS INSIDE HIGHER-ORDER FUNCTIONS (LIKE SETTIMEOUT, SETINTERVAL, ARRAY METHODS) — SO THIS IS INHERITED FROM THE LEXICAL SCOPE, AVOIDING UNWANTED THIS BINDING

// WRITE AN ARROW FUNCTION THAT RETURNS THE SQUARE OF A NUMBER  "n"
let sqr = (n) => n * n;
console.log(sqr(2));


// WRITE A FUNCTION THAT PRINTS HELLO WORLD 5 TIMES AT AN INTERVAL OF OF 2S EACH

let id = setInterval(() =>{
    console.log("Hello World")
  },2000);

setTimeout(() => {
  clearInterval(id)
  console.log("Clear interval ran")
}, 10000);



