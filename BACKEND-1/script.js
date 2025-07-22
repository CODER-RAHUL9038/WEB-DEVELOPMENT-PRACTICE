// let n =5 
// for (let i=0; i<n; i++){
//     console.log("Hello World " + i);                    
    
// }
// LEARNING ARGUMENTS IN NODE JSON
//  let args = process.argv.slice(2);
//  for( let arg of args){
//     console.log("Hello", arg)
//  }

//  IMPORTING MODULES
// const math = require("./math.js");
// console.log(math);  


// IMPORTING MODULES
// const math = require("./math.js");
// console.log(math.sum(5, 10));
// console.log(math.mul(5, 10));
// console.log(math.g);    
// console.log(math.pi);
// console.log(math);  // This will log the entire object with all properties


// IMPORTING DIRECTORIES/FOLDER IN SCRIPTS JS VIA  INDEX.JS
// const info = require("./fruits");
// console.log(info[0].Name);  // This will log the array of fruit objects   



// JUST TO CHECK IF FIGLET WORKS OUTISDE THE FIGLET FOLDER
// const figlet = require('figlet');
// figlet("THANK YOU!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// }); 

// LEARNING IMPORT MODULE IN Node.JS
// import {sum,pi} from "./math.js";
// console.log(sum(5,10));  // This will log the sum of 5 and 10
// console.log(pi);  // This will log the value of pi (3.14)

// USING RANDOM WORD PACKAGE INSTALLED IN BACKEND-1 DIRECTORY

import { generate,count} from "random-words";
console.log(generate({minLength:3, maxLength:5})); // Generates a random word with length between 3 and 5
console.log(count()); // Counts the number of words generated
//output: 'army'