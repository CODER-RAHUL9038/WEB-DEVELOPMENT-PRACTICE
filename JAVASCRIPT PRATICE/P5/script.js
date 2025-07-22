// function sum (...args) {
//     console.log(args.reduce((sum, el) => sum * el))
// }
// sum(2, 2); // returns 24


let arr = ["rahul" , 3, 4, 4, 5, 6, 7, 8, 9, 10];
let [Name, ...numbers] = arr
console.log(Name); // "rahul"
console.log("Numbers:" , numbers); // ["3", "4", "4", "5", "6