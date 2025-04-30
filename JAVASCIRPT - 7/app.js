// Learning This

// let student = {
//     Name : "Rahul",
//     Age : 25,
//     eng : 67,
//     math : 78,
//     che : 70,
//     getAvg(){ // IT is METHOD SHORTHAND 
//         let avg = (this.eng + this.math + this.che)/3 // HERE THIS IS USED TO ACCESS THE PARAMETERS OF THE OBJECT STUDENT USED INSIDE THE METHOD.
//         console.log(`${this.Name} got ${avg} as average marks`) 
//     }
// }

// student.getAvg()


// console.log(this) 
// this used globally will indicate to  window object which is the higher level object on a page or tab so alert.("Hello") and window.alert("Hello") are same just we don't type window. But everthing renders on window object itself.
// window.alert("Hello")
// alert("Hello")

// TRY AND CATCH
// console.log("Hello")
// console.log("Hello") 
// try {
//     console.log(a)
// } catch (error) {
//     console.log(error)
// }
// console.log("Hello1")
// console.log("Hello2")
// console.log("Hello3")

// ARROW FUNCTION
//  const sum =(a,b) => { 
//     console.log(a+b)
// }

// // CALLING
// sum(2,7)

// ARROW FUNCTION SUBSTRACTION
let sub = (a,b) =>{
    console.log(a-b)
}
// CALLING
sub(10,5)


const cube = (n) =>{
    return (n*n*n)
}
console.log(cube(3))

const power = (a,b) =>{
    console.log(a**b)
}
power(2,3)


// ARROW FUNCTION WITH EXPLICIT RETURN
 let mul = (a,b) => (
    a*b
);
console.log(mul(2,5))

// SET TIMEOUT
// console.log("first line")
// setTimeout (() =>{
//     console.log("This is line have appeared after 4 seconds")
// }, 4000)
// console.log("2ND  line")
// console.log("THIRD line")


// SET INTERVAL
console.log("first line")
 let id = setInterval (() =>{
    console.log("This is line have appeared after 2 seconds by again and again by 2  seconds")
}, 2000)
console.log("2ND  line")
console.log("THIRD line")