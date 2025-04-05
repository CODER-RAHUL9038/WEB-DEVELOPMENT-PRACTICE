// let pencil  = 10;
// let eraser  =5;
// // NORMAL WAY TO CONCATENATE STRINGS AND EXPRESSION
// // output= "The total price is :"+ (pencil+eraser)  + " Rupees"
// // USING TEMPLATE LITERALS
// output = `The total price is ${pencil+eraser}  Rupees`
// console.log(output)

// ARiTHMETIC OPERATORlet 
// let a = 10;
// let b = 5;

// console.log(a+b)
// console.log(a%b)
// console.log(a-b)
// console.log(a/b)
// console.log(a*b)
// console.log(++a) // 11
// console.log(a++)//10

// let age =17;
// if (age>=18){
//     console.log("You can vote")
// }
// if (age<18) {
//     console.log("You cannot vote!")
// }

// TRAFFIC LIGHT SYSTEM
// let color = "red"
// if (color=="green") {
//     console.log("Go!")
    
// }
// else if (color=="yellow") {
//     console.log("Go Slow!")
    
// }
// else if (color=="red") {
//     console.log("Stop!")
    
// }


// let age =17;
//  if (age>=18){
//      console.log("You can vote")
// }
// else if (age < 18){
//     console.log("You cannot vote")
// }
// let marks = ;
// if (marks>=80) {
//     console.log("You got E")
// }


//  else if (marks>=70) {
//     console.log("You got A+")
// }
//  else if (marks>=50) {
//     console.log("You got B")
// }
//  else if (marks>=33) {
//     console.log("You got C")
// }
//  else if (marks<33) {
//     console.log("You Failed")
// }
// let month = "april"
// if (month=="janauary") {
//     console.log("winter is here")
// }
// else if(month=="april"){
//     console.log("welcome to Summer")
// }
// let age =18;
// if (age>=18) {
//     console.log("You can vote")
// }
// else{
//     console.log("You cannot Vote")
// }

// traffic light with if and else
//  let light = "1"
// if (light === "green") {
//     console.log("Go Ahead!")
//  }
//  else if (light === "yellow") {
//     console.log("Go slow!")
//  }
//  else if (light === "red") {
//     console.log("Stop!")
//  }
// else{
//     console.log("The light is Broken")
//  }

// Popcorn price based on based on their sizes

// let size = ""
// if (size === "xl") {
//     console.log("Price is Rs. 250")
// }
// else if (size === "l") {
//     console.log("Price is Rs. 200")
// }
// else if (size === "m") {
//     console.log("Price is Rs. 100")
// }
// else  {
//     console.log("Price is Rs. 50")
// }  

// NESTED IF else
// let marks = 95;
// if (marks >=33) {
//     console.log("Pass")
//     if (marks >= 80) {
//         console.log("Your grade is: O (outstanding)")
//     }
//     else{
//         console.log("The grade is: A")
//     }
// }
// else{
//     console.log("Failed")
// }

// console.log( (5>3 && 4>5 ))

// let str = "apple";
// if ((str[0]=="a") && (str.length > 3)) {
//     console.log("String is good");
// }
// else {
//     console.log("string is bad");
// }
// SWITCH STATEMENTS

// let color = "red";
// switch (color) {
//     case "red":
//         console.log("Stop!") 
//         break;
//     case "yellow":
//         console.log("Go slow !")
//         break;
//     case "green":
//         console.log("Go!")
//         break;

//     default:
//         console.log("The light is Broken")
//         break;
// }

// let day = 21;

// switch (day) {
//     case 1 :
//         console.log("Today is Sunday!") 
//         break;
//     case 2 :
//         console.log("Today is Monday! !")
//         break;
//     case 3 :
//         console.log("Today is Tuesday!")
//         break;
//     case 4 :
//         console.log("Today is Wednesday!")
//         break;
//     case 5 :
//         console.log("Today is Thursday!")
//         break;
//     case 6 :
//         console.log("Today is Friday!")
//         break;
//     case 7 :
//         console.log("Today is Saturday!")
//         break;

//     default:
//         // console.log("Sorry Wrong input")
//         alert("Wrong input")
//         break;
// }

// let first_name= prompt("Enter your first name :");
// console.log(first_name)

// let first_name= prompt("Enter your First name : ");
// let Last_name= prompt("Enter your last name : ");
// console.log(`Your Full Name is : ${first_name} ${Last_name}!`)

// Exercise-1

// let num = 101;
// if (num % 10 == 0) {
//     console.log("The number is Good")
// }
// else{
//     console.log("The number is Bad")
// }

// EXERCISE-2

// let username = prompt("Enter your Name") 
// let age = prompt("Enter your Age") 
// let msg = `${username} is ${age} years old`
// alert(msg)

// EXERCISE -3 
// let Quarter = 2
// switch (Quarter) {
//     case 1 :
//         console.log("Janauary, Februar and March")
//         break;
//     case 2 :
//         console.log("April, May and June")
//         break;
//     case 3 :
//         console.log("July, August and September")
//         break;
//     case 4 :
//         console.log("October, November and December")
//         break;
    

//     default:
//         console.log("Wrong Month's Quarter")
//         break;
        
// }

// EXERCISE- 4

// let str = "papplet"
// if (((str[0] == "A") || (start[0] == "a")) && (str.length > 5)) {
//     console.log("It is a Golden string")
// }
// else {
//     console.log("It is not a Golden string")
// }


// EXERCISE- 5

// 1ST APPROACH
// let a = Number(prompt("Enter the First number"))
// let b = Number(prompt("Enter the Second number"))
// let c = Number(prompt("Enter the Third number"))

// if ((a>b) && (a>c)) {
//     console.log("The First Number is the greatest number");
// }
// else if ((b>a) && (b>c)) {
//     console.log("The Second Number is the greatest number");
// }
// else{
//     console.log("The Third Number is the greatest number");
// }

// 2ND APPROACH

// let a = Number(prompt("Enter the First number"));
// let b = Number(prompt("Enter the Second number"));
// let c = Number(prompt("Enter the Third number"));
//  let greatest = a;
//  if (b > greatest) {
//     greatest = b;
//  } 
//  if (c > greatest) {
//     greatest = c;
//  }
// console.log(`The greatest  number is ${greatest}`);



// EXERCISE-6

// let numOne = 251;
// let numTwo = 6785;
// if ((numOne % 10) == (numTwo % 10)){
//     console.log("The both numbers have same last digit")
// }
// else{
//     console.log("The both numbers don't have same last digit")
// }


str = "threg"
console.log(start[0])