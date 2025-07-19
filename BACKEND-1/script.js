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
const info = require("./fruits");
console.log(info[0].Name);  // This will log the array of fruit objects   
