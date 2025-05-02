// Q1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

// let arravg = [10 ,20 , 30 ,40, 50]
// const arrayAverage = (arravg) => {
//     let sum = 0
//     let result
//     for (i=0; i<arravg.length; i++){
//         sum = sum + arravg[i]

//     }
//     result = sum/arravg.length
//     return result

// }
// console.log(arrayAverage(arravg))

// USING FOR OF SINCE INDEXING NOT REQUIRED

let arravg = [10, 20, 30, 40, 50];
const arrayAverage = (arravg) => {
  let sum = 0;
  let result;
  for (number of arravg) {
    sum = sum + number;
  }
  result = sum / arravg.length;
  return result;
};

// console.log(arrayAverage(arravg))

// Q2. Write an arrow function named isEven that takes a single number as an argument and returns whether it is even or not.

const isEven = (n) => {
  if (n % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Not Even");
  }
};

console.log(isEven(35));

// Q3.
// What is the output of the following code?

// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//       console.log(this.message); // will be calling object WHEN WE  TRY object.logMessage() TO GET THE OUTPUT. BUT IT IS WINDIOW WHEN WE TRIED THIS-->  setTimeout(object.logMessage, 1000);
//       console.log(this);

//     }
//   };

//   setTimeout(object.logMessage, 1000); //Function is detached NOT CALLING OBJECT JUST LIKE CALLING FUNCTION DEFINED IN GLOBAL

// SO TO GET THE CORRECT OUTPUT

const object = {
  message: "Hello, World!",
  logMessage() {
    console.log(this.message); // NOW IT IS CALLING OBJECT HENCE OBSERVED THAT THIS DEPENDS ON HOW IT IS CALLED NOT WHERE IT IS DEFINED
    
  },
};

setTimeout(() => {
  object.logMessage();
}, 1000); //Function is detached NOT CALLING OBJECT JUST LIKE CALLING FUNCTION DEFINED IN GLOBAL
