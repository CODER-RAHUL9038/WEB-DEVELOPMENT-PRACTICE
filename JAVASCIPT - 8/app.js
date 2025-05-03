// FOR EACH - HIGHER ORDER FUNCTION

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