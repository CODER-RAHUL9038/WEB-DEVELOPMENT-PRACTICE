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
//     if( arr[i] > largest){
//         largest = arr[i]
//     }
// }
// console.log(`Largest no is ${largest}`)

// 2. Find the minimum number in an array Write a program to find the minimum value in an array.

let arr = [ 10,200,31,50,87,96]
let largest = 0
for(i=0; i<arr.length; i++){
    if( arr[i] > largest){
        largest = arr[i]
    }
}
console.log(`Largest no is ${largest}`)