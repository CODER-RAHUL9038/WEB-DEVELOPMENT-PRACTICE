// *********** CALL STACK*********************

// function hello(){
//     console.log("hello")
// }

// function demo(){
//     hello()
// }

// demo()

// function even (n){
//     if(n%2 == 0){
//         return even
//     }
// }

// ************** VISUALISING CALSTACK*******************

// function one(){
//     return 1;
// }
//  function two(){
//     return one() + one();
// }
//  function three(){
//     let ans = two() + one();
//     console.log(ans)
// }

// three()

// ************** SINGLE THREADED**********************
//  let a = 25;
//  console.log(a)
//  let b =50;
//  console.log(b)
//   let c =100;
//  console.log(c)
//  SO EACH LINE IS EXECUTING LINE BY LINE AT A TIME

// ASYNCHRONOUS NATURE OF JAVASCRIPT
// setTimeout(() => {
//     console.log("API RECEIVED.......")
// }, 2000);

// console.log("hello")

// *************** CALLBACK HELL********************

// WANT TO CHANGE THE COLOR OF H1 AFTER 1 SECOND EACH BUT DON'T TO REMEMBER THE SETIMEOUT TIME OF EACH LIKE 1000 THEN 2000 -> 3000
// h1  = document.querySelector('h1')

// function changeColor(color,delay,nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange() // means there is nextColorChange function exist then only call it.
//     }, delay);

// }
// changeColor("red",1000, ()=>{
//     changeColor("blue",1000, ()=> {
//         changeColor("green",1000);
//     }); // CALLED CALLBACK HELL -> NESTING IN CALLBACK
// });

// ******************* CALLBACK HELL EXAMPLE*********************

// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 11);
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
// saveToDb(
//   "Data1...",
//   () => {
//     console.log("Succes1 : Your data Was Saved");
//     saveToDb(
//       "Data2....",
//       () => {
//         console.log("Succes2 : Your data2 Was Saved");
//         saveToDb(
//           "data3....",
//           () => {
//             console.log("Succes3 : Your data3 Was Saved");
//           },
//           () => {
//             console.log("Failure : Weak Connection. Data3 not saved");
//           }
//         );
//       },
//       () => {
//         console.log("Failure : Weak Connection. Data2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("Failure : Weak Connection. Data not saved");
//   }
// );

// *******************  PROMISES  *********************

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 11);
    if (internetSpeed > 4) {
      resolve("Success : Data was saved!");
    } else {
      reject("Failure : Weak connection");
    }
  });
}

// let request = saveToDb("Data-1") //   req = promise
// request.then(()=>{
//    console.log("Promise was Fulfilled");
// })
// .catch(() =>{
//     console.log("Promise was rejected")
// })

// COMPACT  AND IMPROVED VERSION

saveToDb("Data-1")
  .then(() => {
    console.log("Promise was Fulfilled.  Data-1 saved");
    return saveToDb("Data-2"); // return 2nd promise
  })
  .then(() =>{
    console.log("Promise was Fulfilled.  Data-2 saved");
     return saveToDb("Data-3"); // return 3RD promise
  })
  .then(() =>{
    console.log("Promise was Fulfilled.  Data-3 saved");
  })

  .catch(() => {
    console.log("Promise was rejected");
  });
