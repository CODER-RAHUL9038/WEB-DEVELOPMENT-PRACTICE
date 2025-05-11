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


// *****************DEFAULT PARAMETER***************

// function sum(a,b = 5){
//     return a+b
// }
// console.log(sum(1,4)) // 5 SINCE B IS DEFINED AS 4 DEFAULT VALUE NOT USED HERE

// console.log(sum(2)) // DEFAULT USED HERE SINCE VALUE OF B IS NOT DEFINED HERE SO DEFAULT IS USED HERE

 
// //  SPREAD
// let arr = [ 0,1,4,7,2,4]
// let result  = Math.min(...arr)
// console.log(result)  // 0 

// // SPREAD WITH STRING
// let str = "Rahul"
// console.log(...str) // R a h u l

// SPREAD WITH ARRAY LITERALS
// let arr = [ 0,1,4,7,2,4]
// let newArr = [...arr]
// console.log(newArr)

// // WITH STRINGS

// let str = [..."Hello"]

// console.log(str)


//  ****************SPREAD WIH OBJECT LITERALS*************

const data = {
    email : "Raone@gmail.com",
    password : "abcd"
};

const dataCopy =  {...data, id : 123, country : "India"}
console.log(dataCopy)

// CONVERTING ARRAY TO OBJECT USING SPREAD

let arr = [ 0,1,4,7,2,4]
let obj1 = {...arr}
console.log(obj1) // KEY WILL BE REPLACED WITHT THE INDEX NO AND SINCE ARRAYS DON'T HAVE THEIR OWN KEYS 


// *************** REST *************************
// function sum(...args){
//     let result =  args.reduce((sum,el) =>{
//          return sum+el
//     })
//     return result

// }
// console.log(sum (1,2,3,1))

// SHORTER VERSION OF REST WITH FUNCTION WITH IMPLICIT RETURN
// function sum(...args){
//     return args.reduce((sum,el) =>sum+el)
// }
// console.log(sum (1,2,3,1))

// REST WITH OTHER PARAMETER

// function sum( msg,...args){
//     console.log(msg) // Hello
//     return args.reduce((sum,el) =>sum+el)
// }
// console.log(sum ("Hello", 1,2,3,1))


// **************DESTRUCTURING**************************
// let names = ["Rahul", "Brjesh","Rohan","Mohan"]
// let [Winner,RunnerUp] = names
// console.log(Winner)
// console.log(RunnerUp)



// **************DESTRUCTURING WITH REST**************************
// let names = ["Rahul", "Brjesh","Rohan","Mohan"]
// let [Winner,RunnerUp,...others] = names
// console.log(Winner)
// console.log(RunnerUp)
// console.log(others)


// **************DESTRUCTURING WITH OBJECT**************************


// const student = {
//     Name : "Rahul",
//     age : 14,
//     class : 9,
//     subjects : ["hindi","Eng","math","science"],
//     username : "Rahul@123",
//     password : 1356

// };

// WHEN SEARCHING THE OBJECT WITH THE SAME KEY NAME LIKE USERNAME AND PASSWORD ANS ALSO STORING IN THE SAME
// let {username,password} = student
// console.log(username)
// console.log(password)

// BUT WHEN SEARCHING THE OBJECT WITH THE SAME KEY NAME BUT STORING THE VALUE IN DIFFERENT VARIABLE NAME WE HAVE TO FOLLOW THIS FORMAT

// let {username : user, password: pass} = student
// console.log(user)
// console.log(pass)

// **** IF WE WANT TO SEARCH AND STORE CITY IN VARIABLE BUT CITY IS NOT PRESENT IN THE OBJECT THEN WE CAN ADD A DEFAULT TO CITY AS ******
let {username : user, password: pass, city = "Kolkata"} = student
// console.log(user)
// console.log(pass)
 