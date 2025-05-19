
// 🔥 JS (Part 10) - Practice Questions


// ✅ Qs1: Try out the following events using addEventListener on your own:
// mouseout

// keypress

// scroll

// load

// 👉 Tip: Use MDN Web Docs to understand and implement each event.

// MOUSEOUT
// let div = document.querySelector('div')
// div.addEventListener('mouseout',function(){
//     console.log("The cursor is outside the box")
// })



// KEYDOWN
// let inp = document.querySelector('input')
// inp.addEventListener('keydown',function(event){
//     console.log("You pressed :" , event.key)
    
// })

// KEYUP
// let inp = document.querySelector('input')
// inp.addEventListener('keyup',function(event){
//     console.log("You pressed :" , event.key)
    
// })

// SCROLLING

// let para = document.querySelector('p')
// para.addEventListener('scroll',function(){
//     console.log("The Page is scrolled")
// })

// LOAD 

// window.addEventListener('load',function(){
//     console.log("The page is fully loaded")
// })



// ✅ Qs2: Create a button on the page using JavaScript.
// Add an event listener to the button.

// When the button is clicked, change its color to green.


// let btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     // this.style.backgroundColor = "green" using inline style
//     this.classList.add('green') // using  add classlist
//     console.log("The button is clicked")

// })



// ✅ Qs3: Create an input element with a placeholder “enter your name” and an <h2> heading on the page.
// The input should accept only letters (a-z, A-Z) and spaces.

// All other characters should be ignored (not displayed).

// As the user types, dynamically update the <h2> heading with their name.
let inp = document.querySelector('#input')
let h2 = document.querySelector('h2')
inp.addEventListener('input',function(){
    console.log("You entered :", this.value)
    let filtered = inp.value.replace(/[^a-zA-Z ]/g, '')
    h2.innerText = filtered
})