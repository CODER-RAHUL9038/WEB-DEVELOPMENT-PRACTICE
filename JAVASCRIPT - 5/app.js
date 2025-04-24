// OBJECT
// let student = {
//     Name : "Rahul",
//     age : 25,
//     marks : 100


// }
// console.log(student)

// CREATE A TWITTER POST

const post = {
    Username : "rahul",
    content : "I am Aspiring Full Stack developer",
    like : 10,
    reposts : "100k",
    tags : ["#webdeveloper", "#Delta", "#frontend developer"]
}


let obj = {
    1 : "a",
    2 : "b",
    null : "c"

}

const student ={
    Name : "Rahul",
    age : 25,
    marks : 95,
    city : "Kolkata"

}

// UPDATE VALUES IN OBJECT
student.city = "Mumbai" 

 //ADD NEW KEY VALUE IN OBJECT
 student.gender = "female"

  //DELETE KEY VALUE IN OBJECT
delete student.gender

// OBJECT OF OBJECTS OR NESTING IN OBJECT
// let classInfo = {
//     Rahul : {
//         grade : "A+",
//         City : "Delhi"
//     },
//     Aman : {
//         grade : "A+",
//         City : "Kolkata"
//     },
//     Priya : {
//         grade : "A+",
//         City : "Mumbai"
//     }
// }

// ARRAY OF OBJECTS

// let classInfo = [
//      {  Name : "Rahul",
//         grade : "A+",
//         City : "Delhi"
//     },
//     {   Name : "Aman",
//         grade : "A+",
//         City : "Kolkata"
//     },
//     {   Name : "Karan",
//         grade : "A+",
//         City : "Mumbai"
//     }
// ];

// MATH PROPERTIES
// a = Math.PI
// b = Math.E

// MATH OBJECTS

// c = Math.pow(2 , 4)
// d = Math.random()
// e = Math.floor(5.555)
// f = Math.ceil(5.555)
// g = Math.abs(-5.555)

// LOGIC OF GENERATING ANY NUMBER UPTO N

let num = Math.floor(Math.random()*100) +1
console.log(num)