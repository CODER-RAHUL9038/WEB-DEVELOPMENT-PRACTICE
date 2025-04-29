// ✅ Q1. Find Array Elements Greater Than a Given Number
// Task:
// Create a JavaScript function that takes two inputs:

// An array of numbers

// A single number

// The function should return a new array that only contains the elements from the original array that are greater than the given number.

// LOGIC
// let arr = [ 20,40,3,67,56,34]
// let num = 10
// let newarr = []
// for (i=0; i<arr.length; i++){
//     if(arr[i] > num){
//       newarr.push(arr[i])
//     }
// }
// console.log(`The New array is ${newarr}`)

// NOW CREATING FUNCTION
// let arr = [ 20,40,3,67,56,34]
// let checkarrElement = function(arr,num){
//     let newarr = []
//     for (i=0; i<arr.length; i++){
//         if(arr[i] > num){
//             newarr.push(arr[i])
//         }
//     }
//     // console.log(`The New array is ${newarr}`) LOGGING NOT NEEDED HERE
//     return newarr;  // gives back result for further use
// }
// greaterarr = checkarrElement(arr,5)
// console.log((` 1. The New array is ${greaterarr}`) )


// ✅ Q2. Extract Unique Characters from a String
// Task:
// Write a function that takes a string as input and returns another string that contains only the unique characters (removing repeated ones).

// 📝 Example Input: "abcdabcdefgggh"
// ✅ Expected Output: "abcdefgh"

// USING INCLUDES METHOD

// let str = "abcdabcdefgggh"

// let uniquechar = function(str){
//     let result = "" // added inside function not globally since it make the function reusable.
//     for (i=0; i<str.length;i++){
//         if(!(result.includes(str[i]))){
//             result = result + str[i]
//         }
//     }
//     return result
// }

// let filteredStr = uniquechar(str)
// console.log(` 2. The Filtered new String is ${filteredStr}`)

// USING INDEXOF METHOD

// let str = "abcdabcdefgggh"

// let uniquechar = function(str){
//     let result = "" // added inside function not globally since it make the function reusable.
//     for (i=0; i<str.length;i++){
//         if((result.indexOf(str[i]) == -1)){
//             result = result + str[i]
//         }
//     }
//     return result
// }

// let filteredStr = uniquechar(str)
// console.log(` 2. The Filtered new String is ${filteredStr}`)


// ✅ Q3. Find the Longest Country Name
// Task:
// Create a JavaScript function that takes an array of country names and returns the one with the most characters.

// 📝 Example:
// Input: ["Australia", "Germany", "United States of America"]
// Output: "United States of America"

let arr = ["Australia", "Germany", "Indianaada", "United States of America", "Africa"]

// LOGIC

// let largest = arr[0]
// for (i=0; i<arr.length; i++){
//      if ( largest.length < arr[i].length){
//         largest = arr[i]
//     }
// }
// return largest


// let largestcountry = function (arr) {
//     let largest = arr[0]
//     for (i = 0; i < arr.length; i++) {
//         if (largest.length < arr[i].length) {
//             largest = arr[i]
//         }
//     }
//     return largest
// }
// let filtered = largestcountry(arr)

// console.log(`The largest country with max character is ${filtered}`)


// ✅ Q4. Count Total Vowels in a String
// Task:
// Write a function that receives a string and counts how many vowels (a, e, i, o, u) it contains. Return the total count.

let str = "aoeihaeiiii"
let countVowels = function (str) {
    let vowel = ["a", "e", "i", "o", "u"]
    let count = 0
    for (i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            count++
        }
    }
    return count
}

let vowelscount = countVowels(str)
console.log(`The no. of vowels count in a string is ${vowelscount}`)

// ✅ Q5. Generate a Random Number Within a Range
// Task:
// Create a JavaScript function that takes two numbers as input — start and end.
// The function should return a random number between those two numbers, including both start and end.

let Random_number = function(start, end){
    let num = Math.floor(Math.random()*(end-start+1))+ start
    return num
}

let randomNo = Random_number(100,200)
console.log(`The random no between  ${randomNo}`)