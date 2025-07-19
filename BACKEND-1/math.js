// const sum = ((a,b) => a+b);
// const mul = (a,b) => a*b;
// const g = 9.8
// const pi = 3.14;

// EXPORING MODULES
// module.exports = 123

// 1st way
// const obg = {
//     sum:sum,
//     mul:mul,
//     g:g,
//     pi:pi

// }
// module.exports = obg;

// 2nd way
// module.exports  = {
//     sum:sum,
//     mul:mul,
//     g:g,
//     pi:pi

// }

// *************SHORTHAND FOR EXPORTING*************

// module.exports  = {sum,mul,g,pi}
// // This is a shorthand for the above object
// // This will export an object with properties sum, mul, g, and pi

// 3RD way

// exports.sum = ((a,b) => a+b);
// exports.mul = (a,b) => a*b;
// exports.g = 9.8
// exports.pi = 3.14;
// This will log the sum, multiplication, and constants g and pi from the math module
// The math module is imported from the math.js file, and its properties are accessed and logged
// When requiresd , it will return function name as anonymous function since the functions are nameless in arrow functions

// MOST EFFICIENT WAY TO EXPORT MODULES

// module.exports = {
//   sum: (a, b) => a + b,
//   mul: (a, b) => a * b,
//   g: 9.8,
//   pi: 3.14,
// };
