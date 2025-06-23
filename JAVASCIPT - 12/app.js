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

// CALLBACK HELL REPLACED WIT PROMISE


// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//  return  new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("Color Changed");
//     }, delay);
//   });
// }
// changeColor("red",1000)
//   .then((result) => {
//     console.log(result);
//     return changeColor("green",1000);
//   })
//   .then((result) => {
//     console.log(result);
//     return changeColor("blue",1000);
//   })
//   .then((result) => {
//     console.log(result);
//   })


// CALLBACK HELL REPLACED WITH ASYNC & AWAIT
let h1 = document.querySelector("h1");
function colorChange(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
        h1.style.color = color;
    resolve("color changed");
    }, delay);
  });
}

async function colorTimer(){
    await colorChange("orange",1000)
    await colorChange("green",1000)
    await colorChange("blue",1000)
}

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

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 11);
//     if (internetSpeed > 4) {
//       resolve("Success : Data was saved!"); // will be used as result in .then
//     } else {
//       reject("Failure : Weak connection"); // will be used as error in .catch
//     }
//   });
// }

// // let request = saveToDb("Data-1") //   req = promise
// // request.then(()=>{
// //    console.log("Promise was Fulfilled");
// // })
// // .catch(() =>{
// //     console.log("Promise was rejected")
// // })

// // COMPACT  AND IMPROVED VERSION

// saveToDb("Data-1")
//   .then((result) => {
//     console.log("Promise was Fulfilled.  Data-1 saved");
//     console.log("result :", result)
//     return saveToDb("Data-2"); // return 2nd promise
//   })
//   .then((result) =>{
//     console.log("Promise was Fulfilled.  Data-2 saved");
//    console.log("result :", result)
//      return saveToDb("Data-3"); // return 3RD promise
//   })
//   .then((result) =>{
//     console.log("Promise was Fulfilled.  Data-3 saved");
//     console.log("result :", result)
//   })

//   .catch((error) => {
//     console.log("Promise was rejected");
//     console.log("error : ",error)
//   });

// ATM CASH WITHDRAW USING PROMISE
// let balance = 1000;
// function withdrawCash(cash) {
//   return new Promise((resolve, reject) => {
//     if (cash <= balance) {
//       balance -= cash;
//       resolve(`Rupees ${cash} withdrawn. Your balance is ${balance}.`);
//     } else {
//       reject("Sorry! Your account balance is low");
//     }
//   });
// }

// withdrawCash(50)
//   .then((request) => {
//     console.log(request);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// SHORTHAND OF THE .THEN OR .CATCH CALLBACK
withdrawCash(510)
  .then(console.log)
  .catch(console.log)



  