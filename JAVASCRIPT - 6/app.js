// DEFINING FUNCTION

function hello() {
    console.log("Hello")
}

// CALLING FUNCTION
hello();

// FUNTION -2 
function printName() {
    console.log("My Name Is Rahul")
}
printName()


// FUNTION -3
function print1to5() {
    for (i=0; i<=5; i++){
        console.log(i)
    }
}
print1to5()


// FUNTION -4
function isAdult() {
    let age = 59;
    if (age >= 18){
        console.log("Adult")
    }
    else{
        console.log("Not Adult")
    }
}

isAdult()

// DICE FUNCTION - 5
function dice() {
    let dice = Math.floor(Math.random() *6) + 1
    console.log("Dice :", dice)
}

dice()
// FUNCTION WITH ARGUMENT - 6
function printname(name) {
    console.log(name)
}
printname("rahul")

// FUNCTION WITH  MULTIPLE ARGUMENT - 7
function printinfo(name,age) {
    console.log(`${name}'s age is ${age} `)
}
printinfo("rahul",25)

// FUNCTION WITH  MULTIPLE ARGUMENT - 8
function sum(num1,num2) {
    console.log("sum :", num1+num2)
}
sum(2,5)


//  AVERAGE FUNCTION WITH  MULTIPLE ARGUMENT - 8
function avg(a,b,c) {
    console.log("The average is :", a+b+c)
}
avg(3,5,6)