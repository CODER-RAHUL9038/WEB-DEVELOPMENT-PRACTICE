// *********** FOR EACH - HIGHER ORDER FUNCTION ********

//  FUNCTION NAME INSIDE ARRAY.FOR EACH

// let arr = [ 1,2,3,4,5];

// let print = function (el){
//     console.log(el)
// };

// arr.forEach(print)

// OR  DIRECTLY FUNCTION INSIDE ARRAY.FOR EACH

// let arr = [ 1,2,3,4,5];

// arr.forEach( function print (el){
//     console.log(el)
// });

// CAN ALSO USE ARROW FUNCTION

// let arr = [ 1,2,3,4,5];

// let print = (el) =>{
//     console.log(el)
// };

// arr.forEach(print)

// IMPORTANT
// FOR EACH FOR ARRAY OF OBJECT

// let arr = [{
//     Name : "Rahul",
//     marks : 95
// },
// {
//     Name : "Rohit",
//     marks : 87
// },
// {
//     Name : "Aman",
//     marks : 50
// }

// ]

// let print = (student) => {
//     console.log(student.marks)
// }

// arr.forEach(print)

// array.forEach(element => {

// });

// MAP

// WITH ARROW FUNCTION

// let  num = [1,2,3,4]
// let double = num.map((el) =>{
//     return el*2
// })

// WITH NORMAL FUNCTION
// let  num = [1,2,3,4]
// let double = num.map( function(el){
//     return el*el
// })

// console.log(double)

// let students = [{
//         Name : "Rahul",
//         marks : 95
//     },
//     {
//         Name : "Rohit",
//         marks : 87
//     },
//     {
//         Name : "Aman",
//         marks : 50
//     }

// ]

// let updatestudent = students.map((el) =>{
//     return {
//     el,
//     cgpa : (el.marks)/10}
// })

// console.log(updatestudent)

//   *************** FILTER ***********************

// let nums = [1, 3, 56, 12, 20, 56, 7, 90];
// let ans = nums.filter((el) => {
//   return el % 2 == 0;
// });
// console.log(ans); // (5) [56, 12, 20, 56, 90] all even

// *********** EVERY = LOGICAL AND  ************************* 

// EVEN 

// let num = [2,4,6] ADD ANY ODD VALUE TO GET FALSE 
// let result = num.every((el)=>{
//     return (el % 2 == 0) //EVEN     
// })
// console.log(result)


// ODD 
// let num = [1,3,5]
// let result = num.every((el)=>{
//     return (el % 2 !== 0) //ODD  
// })
// console.log(result)

// *********** SOME = LOGICAL OR  ************************* 

// let num = [1,3,4,2]

// let result = num.some ((el) =>{
//     return (el % 2 == 0) //Even

    
// })

// console.log(result)

// *********** REDUCE = CONVERT TO INGLE VALUE  ************************
// let num  = [1,2,3,4]
// let result = num.reduce((res, el) =>{
//     return res+el
    
// });
// console.log(result) // sum of all element of array

// MAX NO IN AN ARRAY USING REDUCE METHOD

// let num  = [10,2,3,4,50]
// let result = num.reduce((max,el) =>{
//     if(el > max){
//         return el
//     }
//     else{
//         return max
//     }
// })
// console.log(result)


// USING TERNARY OPERATOR
// let num  = [10,2,3,4,50]
// let result = num.reduce((max, el) => (max< el ? el: max)) // curly bracket not used as not using only return
// console.log(result)


// CHECK IF ALL ELEMENTS IN AN ARRAY IS MULTIPLE OF 10 OR NOT
// FOR THIS WE NEED EVERY METHOD

// let num = [ 20,50,40,500]
// let result = num.every((el) =>{
//     return el % 10 == 0
// });
// console.log(result)

// CREATA A FUNCTION TO FIND THE MINIMUM NO IN AN ARRAY USING REDUCE

// let num = [ 10,20,30,5]
//  let getMinimum = function(num){
//     let result = num.reduce((min,el) =>{
//         if(min > el){
//             return el
//         }
//         else{
//             return min
//         }
//     })
//     return result
//  }
// console.log(getMinimum(num))

    // SAME PROBLEM USING TERNARY OPERATOR

//  let num = [ 10,20,30,5]
//  let getMinimum = function(num){
//     let result = num.reduce((min, el) => min > el? el : min )
//     return result
//  }
//  console.log(getMinimum(num))


