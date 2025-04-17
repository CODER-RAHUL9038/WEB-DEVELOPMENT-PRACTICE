// FOR LOOP
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// for (let i = 5; i >= 5; i++) {
//     console.log(i);
// }

// PRINT ALL ODD NUMBERS BETWEEN 1-15

// for( let i = 1; i<=15;i=i+2)
//     console.log(i)

// PRINT ALL EVEN NUMBERS BETWEEN 1-10

// for (let i = 2; i <=10; i= i+2) {
//     console.log(i);
// }

// PRINT ALL EVEN NUMBERS BETWEEN 1-10 BACKWARDS

// for (let i = 10; i>=2; i= i-2) {
//     console.log(i);
// }

// PRINT ALL ODD NUMBERS BETWEEN 1-15 BACKWARDS

// for( let i = 15; i>=1; i=i-2)
// console.log(i)

// PRINT ALL MULTIFICATION TABLE OF 5
// n= Number(prompt("Enter the Number"))
// for( let i = n; i<=(n*10); i=i+n)
// console.log(i)


// NESTED FOR LOOP

// for (let i =1; i<=3; i++){
//     console.log(`Outer Loop ${i}`) // will tell outer loop no
//     for (let j =1; j<=3; j++){
//         console.log(j)
//     }
// }

// WHILE LOOP
// // PRINT 1- 5
// let i =1;
// while (i<=5) {
//     console.log(i)
//     i++
// }

// PRINT 1- 5  BACKWARDS
// let i =5;
//         while (i>=1) {
//             console.log(i)
//             i--
//         }

// PRINT 1- 20  BACKWARDS

// let i =1;
// while (i<=20) {
//     console.log(i)
//     i++
// }

// GUESS THE FAVOURITE MOVIE NAME AND USER ENTERS "QUIT " AND CAN QUIT THE GAME

// let userInput = prompt("Guess the movie name (Type 'Quit' to exit)")
// let movie = "pk"
// while ((userInput !== movie) && (userInput !== "quit") && (userInput !== null)){
//         console.log(" You are Wrong!")
//         userInput = prompt(` ${userInput} is Wrong Answer! Enter the Movie name again`)
     
// }
// if (userInput == "quit") {
//     console.log("You are logged out")
// }
// else if (userInput == null){
//     console.log("Thanks for participating. Exiting....")
    
// }

// else{
//     console.log(` ${userInput} is corect answer`)
// }



// ✅ JS Game: Limited Attempts Movie Guessing
// let movie = "pk"
// let attempts = 3;
// let userInput;
// while (attempts>0){
//     userInput = prompt(`Enter the movie name (Attempts left: ${attempts}) or type 'quit' to exit:`);
//     if (userInput == movie) {
//         console.log(`Woah! ${userInput} is correct answer`)
//         break;
//     }
//     else if (userInput == "quit"){
//         console.log("You are logged out")
//         break;
//     }
//     else {
//         attempts --
//         if (attempts == 0) {
//             console.log("🚫 No attempts left. Game over!");
//         } else {
//             console.log(`${userInput} is Wrong input. Try again`);
//         }
//     }
// }

// LOOPS WITH ARRAY
//  let fruit = ["Mango", "apple", "banana", "litchi", "orange"]
//  fruit.push("pineapple")
// for( i=0; i<fruit.length; i++){
//     console.log(i , fruit[i])
// }

// IN REVERSE ORDER
  let fruit = ["Mango", "apple", "banana", "litchi", "orange"]
fruit.push("pineapple")
for( i=fruit.length-1; i>=0; i--){
    console.log(i , fruit[i])
}

