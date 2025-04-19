// ✅ Qs1.
// Write a JavaScript program to delete all occurrences of an element num in a given array.
// Example:
// If arr = [1, 2, 3, 4, 5, 6, 2, 3] and num = 2
// Result should be: arr = [1, 3, 4, 5, 6, 3]

// let arr = [1, 2, 3, 4, 5, 6, 2, 3]
// let num = 2
// for(i=0; i<arr.length; i++){
//     if (arr[i] == num){
//         arr.splice(i,1)
//         console.log(arr)
//     }
    
// }

// ✅ Qs2.
// Write a JavaScript program to find the number of digits in a given number.
// Example:
// If number = 287152
// Output: count = 6

// USIN STRING CONVERSION METHOD

// let number = 287152;
// let copy = number.toString().length
// console.log(`Length: ${copy}`)

// USING Math.FLOOR AND LOOP

// let number = 287152;
// count = 0
// while(number!==0){
//    number = Math.floor(number/10)
//     count++
// }
// console.log(count)

// ✅ Qs3.
// Write a JavaScript program to find the sum of digits in a number.
// Example:
// If number = 287152
// Output: sum = 25

// let number = 287152
// let sum = 0
// while(number !==0){
//     lastdigit= number%10
//     sum+=lastdigit
//     number = Math.floor(number / 10); 
// }
// console.log(`Sum of the number is ${sum}`)


// ✅ Qs4.
// Write a JavaScript program to print the factorial of a number n.
// Factorial of a number is the product of all positive integers less than or equal to it.
// Example:

// 7! = 1×2×3×4×5×6×7 = 5040

// 5! = 120

// 3! = 6

// 0! = 1

// let n = Number(prompt("Enter the No."))
// fact = 1
// for(i=1; i<=n; i++){
//     fact *= i
// }
// console.log(`Factorial of ${n} is ${fact}`)

// ✅ Qs5.
// Write a JavaScript program to find the largest number in an array containing only positive numbers.

let arr =[10,20,2,8,9,5,300]
let largest =0
for (i=0; i<arr.length;i++){
    if(largest<arr[i]){
        largest= arr[i]
    }
       
}
console.log(largest)