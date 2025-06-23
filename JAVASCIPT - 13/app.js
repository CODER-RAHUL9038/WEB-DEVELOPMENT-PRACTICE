async function greet() {
  // abc : abcd()
  throw "404 page not found" 
//   return "hello";
}
greet()
// .then(console.log)
// .catch(console.log)

.then((result) => {
    console.log("Promise was resolved")
    console.log("Result was :", result)
})
.catch((error) =>{
    console.log("promised was rejected with error: ", error)
})  

// ASYNC WITH ARROW FUNCTION

let demo = async () => {
    return 5;
}

console.log(demo())