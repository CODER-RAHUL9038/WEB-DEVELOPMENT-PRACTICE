// //  PRACTISING TO-DO APP 

// let todo = []
// req = prompt("Enter the request")

// while(true){
//     if ((req == "quit") || (req == null)) {
//         console.log("Quitting app....")
//         break;
//     }
//     else if(req == "list"){
//         for(i=0; i<todo.length; i++){
//             console.log( i, todo[i])
//         }
       
//     }
//     else if(req == "add"){
//         let task = prompt("Enter the task ")
//         todo.push(task)
//         console.log(`${task} is added`)
//     }
//     else if( req == "delete"){
//         idx = prompt("Enter the index for the deletion")
//         todo.splice(idx,1)
//         console.log(` Index :${idx} is deleted`)
//     }
//     else{
//         console.log("Wrong Input")
//     }
//     req = prompt("Enter the request")
// }


// 1. Find the maximum number in an array Write a program to find the maximum value in an array.
// let arr = [ 10,200,31,50,87,96]
// let largest = 0
// for(i=0; i<arr.length; i++){
//     if( largest < arr[i] ){
//         largest = arr[i]
//     }
// }
// console.log(`Largest no is ${largest}`)

// 2. Find the minimum number in an array Write a program to find the minimum value in an array.

// let arr = [ 1000,200,31,5,87,96]
// let smallest = arr[0]
// for(i=0; i<arr.length; i++){
//     if(smallest > arr[i] ){
//         smallest = arr[i]
//     }
// }
// console.log(`smallest no is ${smallest}`)

// 3. Count occurrences of a specific element in an array Write a program to count the number of times a specific element appears in an array.

// let arr = [ 10,20,31, 10, 5,87,96,10,10]
// let target = 10
// let count = 0
// for (i=0; i<arr.length; i++){
//     if(target == arr[i]){
//         count++
//     }
// }
// console.log(count)


// 4. Delete all occurrences of a given number from an array Write a program to remove all occurrences of a specific number from an array.

// let arr = [10,20,10,96,10,10]
// num = 10

// for (i=0; i<arr.length; i++){
//     if(num == arr[i]){
//         console.log(i,arr[i])
//        arr.splice(i,1)
//        i-- // i-- since splice shift element left by one position. 
// }
// console.log(`The Deleted array is ${arr}`)
// }

// PUSH METHOD
// let arr = [10,20,10,96,10,10]
// let numtoDelete = 10
// let  result = []
// for(let value of arr){
//     if(numtoDelete !== value){
//         result.push(value)
//     }
// }
// console.log(`The result after deleting ${numtoDelete} is ${result}`)

// 5. Create a new array with only even numbers from an existing array Write a program to create a new array that contains only even numbers from an existing array.

// let arr = [10,20,10,96,10,10,3,9,7,5]
// let newarr = []
// for(let value of arr){
//     if (value % 2 == 0){
//         newarr.push(value)
//     }
// }
// console.log(`The new array with only even value from the old array :is ${newarr}`)

// 6. Check if a string is a palindrome Write a program to check if a given string is a palindrome (like "madam").

// let str = "madam"
// if(str[0] == str[str.length-1]){
//     console.log("The string is Palindrome")
// }
// else{
//     console.log("The string is not palindrone")
// }

// 7. Calculate the factorial of a number using a loop
//  Write a program to calculate the factorial of a number (e.g., 5! = 5×4×3×2×1).

// USING WHILE LOOP
// let num = 5
// let printNum = num
// let factorial = 1
// while (num !== 0){
//     factorial  = factorial*num
//     num--
    
// }
// console.log(`The Factorial of ${printNum} is ${factorial}`)

// USING FOR LOOP 
// let num = 5
// let factorial = 1
// for (i=1;i<=num;i++){
//     factorial*=i
// }
// console.log(`The factorial of num ${num} is ${factorial}`)

// 8. Print Fibonacci series up to n terms
//  Write a program to print the Fibonacci series up to n terms.

// let num = 15
// let a = 0
// let b = 1
// for (i=1; i<=num; i++){
    
//     next = a+b
//     a=b
//     b=next
//     console.log(next)
// }


// 9. Find the sum of numbers from 1 to n
//  Write a program that finds the sum of numbers from 1 to a given number n.

let n = 5
result = 0
for (i=1; i<=5; i++){
    result = result+i
   
}
console.log(`The sum of first ${n} number is ${result}`)