// Q1. Square each element of an array using an arrow function, then calculate and return the average of the squared elements.
// let arr = [2,4]
// let result = arr.reduce((sum,el)=>(sum+(el*el)),0)
// let average = result/arr.length
// console.log(average)

// USING MAP AND REDUCE
// let arr = [2,4]
// let squared = arr.map((num) => num*num)
// let sum = squared.reduce((sum,el)=>(sum+el))
// let average = sum/arr.length
// console.log(average)


// Q2.Create a new array using the map() function where each element is equal to the original element plus 5.

// let num = [1,2,3,4]
// let newNum = num.map((el) =>el+5)
// console.log(newNum)


// Q3.  Given an array of words, create a new array where each element is the uppercase version of the original word.

// let arr = ["apple","mango","orange","lemon"]
// let newArr = arr.map((words)=>{
//     return words.toUpperCase()
// })
// console.log(newArr)


// Q4.Write a function called doubleAndReturnArgs that takes an initial array and any number of additional arguments.
// The function should return a new array containing all elements of the original array followed by the doubled values of the additional arguments.

// USING VARIABLES
// let arr = [ 1,3,5,6]

// doubleAndReturnArgs = function(arr,...arg){
//     let newArr = arr.map((el) => el)
//     let doublearg = arg.map((el)=>el*2)
//     let result  = [...newArr,...doublearg]
//     return result
// }
// console.log(doubleAndReturnArgs(arr,5,4)) // (6) [1, 3, 5, 6, 10, 8]

// SHORTCUT WITH ARROW FUNCTION

// let arr = [ 1,3,5,6]
//  doubleAndReturnArgs = (arr,...arg) =>[
//     ...arr,
//     ...arg.map((el) => el*2)
// ]
// console.log(doubleAndReturnArgs(arr,5,4)) // (6) [1, 3, 5, 6, 10, 8]


// Q5. Write a function called mergeObjects that accepts two objects and returns a new object containing all the keys and values from both input objects.

// let student = {
//     Name : "Rahul",
//     Age : 25,
//     Class : 9
// }
// let details = {
//     Roll_No : 18,
//     Subject : ["Math","physics","Biology"],
//     Marks : 90
// }

// let result = {...student,...details}
// console.log(result)


// USING FUNCTION
// const mergeobj = ((student,details)=>({...student, ...details}) )
// console.log(mergeobj(student,details))