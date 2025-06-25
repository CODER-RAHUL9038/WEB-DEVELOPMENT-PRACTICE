// ********************ASYNC KEYWORD*********************

// async function greet() {
//   // abc : abcd()
//   throw "404 page not found"
// //   return "hello";
// }
// greet()
// // .then(console.log)
// // .catch(console.log)

// .then((result) => {
//     console.log("Promise was resolved")
//     console.log("Result was :", result)
// })
// .catch((error) =>{
//     console.log("promised was rejected with error: ", error)
// })

// ASYNC WITH ARROW FUNCTION

// let demo = async () => {
//     return 5;
// }

// console.log(demo())

// *******************AWAIT KEYWORD******************************

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 11);
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
// }

// COLOR CHANGE USING ASYNC FUNCTION
// let h1 = document.querySelector("h1");
// function colorChange(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 11);
//       if (num > 3) {
//         reject("promise rejected");
//       }
//       h1.style.color = color;
//       console.log("colr changed to :", color);
//       resolve("color changed");
//     }, delay);
//   });
// }

// async function colorTimer() {
//   try {  // HANDLING REJECTION IN ASYNC AND AWAIT -> WE PUT TRY AND CATCH
//     await colorChange("orange", 1000);
//     await colorChange("green", 1000);
//     await colorChange("blue", 1000);
//   } catch (error) {
//     console.log("error caught :", error);
//   }
//   let a = 5;
//   console.log(a);
//   console.log("new number = ", a + 3);
// }


// JSON DATA PARSING INTO OBJECT

// let jsonData = '{"fact":"After humans, mountain lions have the largest range of any mammal in the Western Hemisphere.","length":92}'

// let validJson = JSON.parse(jsonData)
// console.log(validJson)
// console.log(validJson.fact)
// console.log(validJson.length)


// JSON DATA PARSING INTO STRING

let student = {
  Name : "Rahul",
  marks : 100
}
let stringJson = JSON.stringify(student)
console.log(stringJson)


