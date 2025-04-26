// // DEFINING FUNCTION

// function hello() {
//     console.log("Hello")
// }

// // CALLING FUNCTION
// hello();

// // FUNTION -2 
// function printName() {
//     console.log("My Name Is Rahul")
// }
// printName()


// // FUNTION -3
// function print1to5() {
//     for (i=0; i<=5; i++){
//         console.log(i)
//     }
// }
// print1to5()


// // FUNTION -4
// function isAdult() {
//     let age = 59;
//     if (age >= 18){
//         console.log("Adult")
//     }
//     else{
//         console.log("Not Adult")
//     }
// }

// isAdult()

// // DICE FUNCTION - 5
// function dice() {
//     let dice = Math.floor(Math.random() *6) + 1
//     console.log("Dice :", dice)
// }

// dice()
// // FUNCTION WITH ARGUMENT - 6
// function printname(name) {
//     console.log(name)
// }
// printname("rahul")

// // FUNCTION WITH  MULTIPLE ARGUMENT - 7
// function printinfo(name,age) {
//     console.log(`${name}'s age is ${age} `)
// }
// printinfo("rahul",25)

// // FUNCTION WITH  MULTIPLE ARGUMENT - 8
// function sum(num1,num2) {
//     console.log("sum :", num1+num2)
// }
// sum(2,5)


// //  AVERAGE FUNCTION WITH  MULTIPLE ARGUMENT - 8
// function avg(a,b,c) {
//     console.log("The average is :", a+b+c)
// }
// avg(3,5,6)

// //  MULIPLICATION TABLE  FUNCTION WITH  MULTIPLE ARGUMENT - 8
// function table(n) {
//     for(let i=n; i<=n*10; i=i+n){
//         console.log(i)
//     }
//     console.log("------")
    
// }
// table(2)
// table(7)

// //    FUNCTION WILL RETURN THE SUM OF NUMBERRS FROM 1 TO N - 9
// function printSum(n) {
//     let sum = 0
//     for(let i=1; i<=n; i++){
//         sum = sum+i
//      }
//     return sum
// }
// console.log(printSum(5))

// // FUNCTION TO CONCATENATE ALL  THE STRINGS IN AN ARRAY -10
// let arr = ["one","Two","Three","Four"]
// function concat(arr) {
//     let join = arr[0]
//     for(i=1; i<arr.length; i++){
//         join = join + arr[i]
//     }
//     return join
// }
// console.log(concat(arr))

// LEXICAL SCOPE -11
function outerfunc(){
    let x = 5;
    let y = 6;
    function innerfunc(){
        console.log(x)
    }
    innerfunc()   
}

// FUNCTION EXPRESSION- NAMELESS -12
let a = function (a,b){
    return  a+b
}

// FUNCTION EXPRESSION- 13

let hello = function(){
    console.log("Rahul")

}
// UPDATING FUNCTION LIKE A VARIABLE
hello = function()
{
    console.log("shaw")
}

// HIGHER ODER FUNCTION

let greet = function(){
    console.log("Hello")
}

let funcgreet = function(func,count){
    for(i=1; i<=count; i++)
    func()
}

funcgreet(greet,3)

