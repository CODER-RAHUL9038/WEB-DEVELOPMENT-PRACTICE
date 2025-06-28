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

// let student = {
//   Name : "Rahul",
//   marks : 100
// }
// let stringJson = JSON.stringify(student)
// console.log(stringJson)

// LEARNING ADDING INFORMATION IN URLS

// https://www.google.com/search?q=query+string

// OUR FIRST API REQUEST

// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     return res.json(); // parsing --> makes body readable and returns as promise
//   })
//   .then((data1) => {
//     console.log("data1:", data1.fact);
//     return fetch(url);
//   })
//   .then(res => res.json())  // implicit returns
//   .then(data2 => console.log("data2 :", data2.fact))  // implicit returns
//   .catch(console.log);

// API CALL USING ASYNC & AWAIT
// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//      let res1 = await fetch(url);
//     let data1 = await res1.json();
//     console.log(data1.fact);

//   } catch (error) {
//     console.log("error caught :", error)
//   }
// }

// console.log(getFacts());

// ************API CALL USING AXIOS AND SHOWING ON WEBPAGE***************

// let btn = document.querySelector("button");
// let h2 = document.querySelector("h2");
// let p = document.querySelector("#result");

// btn.addEventListener("click", async() => {
//   let fact = await getFacts();
//   console.log(fact)
//   p.innerText = fact
// });

// *********GETFACT FUNCTION************

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return (res.data.fact);
//   } catch (error) {
//     console.log("error caught :", error);
//     return "No fact found"
//   }
// }

// ************API CALL USING then() AND SHOWING ON WEBPAGE***************

// let btn = document.querySelector("button");
// let h2 = document.querySelector("h2");
// let p = document.querySelector("#result");

// btn.addEventListener("click", () => {
//   getFacts().then((fact) => {
//     p.innerText = fact;
//   });
// });

// let url = "https://catfact.ninja/fact";
// function getFacts() {
//   return axios
//     .get(url)
//     .then((res) => res.data.fact)
//     .catch((e) => {
//       console.log("Error caught :", e);
//       return "No facts found";
//     });
// }

// DOG API CALLS

// let btn = document.querySelector("button");
// let h2 = document.querySelector("h2");
// let image = document.querySelector("#image");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//   let link = await getImages();
//   // image.src = img; // 1st way to add image
//   image.setAttribute('src',link) // 2nd way to add image  
// });

// async function getImages() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch (error) {
//     console.log(error);
//     return "No image found";
//   }
// }

// SENDING HEADER 
let url = "https://icanhazdadjoke.com/"

 async function getJokes(){
  const header = {headers : {Accept : "application/json"}}
  let res = await axios.get(url,header)
  console.log(res.data.joke)
}

console.log(getJokes())
