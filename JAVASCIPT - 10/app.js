// EVENT ON ONE BUTTON


// let btn  = document.querySelector('button')
 
// btn.onclick =function(){
//     console.log("Button was clicked")
//     alert("Button was clicked")
// }

// EVENT ON MULTIPLE BUTTON
// let btns  = document.querySelectorAll('button')
// for(btn of btns){
//     btn.onclick = sayHello
//     // onmouseenter
//     btn.onmouseenter = function(){
//         console.log("You clicked Button Unknowingly")
//     }
// }

// function sayHello(){
//     alert("Hello!")
// }

// EVENT LISTENER -FOR MULTIPLE VALUE FOR SAME PROPERTY WHICH IS NOT POSSIBLE WITHOUT EVNE EVENT LISTENER   

// let btns  = document.querySelectorAll('button')
// for (btn of btns){
//     // btn.addEventListener("click",sayHello)
//     // btn.addEventListener("click",sayName)

//     // HERE EVENT IS DOUBLECLICK  MEANS WHEN DOUBLE CLICKED
//     btn.addEventListener("dblclick", () =>{
//         console.log("Button double clicked")
//     })
// }

// function sayHello(){
//     alert("Hello!")
// }
// function sayName(){
//     alert("Rahul")
// }


// let p  =document.querySelector('p')
// p.addEventListener('click',function(){
// console.log('The paragraph was clicked')
// })


// let box =document.querySelector('.box')
// box.addEventListener("mouseenter",function(){
//     console.log("Mouse inside box")
// })
    

// this is event listener




// let btn = document.querySelector('button') 
// let h2 = document.querySelector('h2')  
// let h3 = document.querySelector('h3')  
// let p = document.querySelector('p')  

// function changeColor(){
//     console.dir(this.innerText) // this will be the defined object itself
//     this.style.backgroundColor = "blue"
// }



// btn.addEventListener('click',changeColor) // changeColor is passed as callback
// h2.addEventListener('click',changeColor)
// h3.addEventListener('click',changeColor)
// p.addEventListener('click',changeColor)


// *******************KEYBOARD EVENTS*******************************

// let btn = document.querySelector('button') 
// btn.addEventListener('arrow',function(event){ // a default argument is always present called as event or evt or e
//     console.log(event)
// })


// KEYDOWN
// let input = document.querySelector('input')
// input.addEventListener('keydown', function(){
//     console.log("key was pressed")
    

// })

// KEYUP

// let input = document.querySelector('input')
// input.addEventListener('keyup', function(event){
//     console.dir(event.key)
//     console.dir(event.code)
//      console.log("key was released")
    

// })

// SIMPLE ARROW GAME

// let input = document.querySelector('input')
// input.addEventListener("keydown",function(Event){
//     console.log(Event.code)
//     if (Event.code == "ArrowUp"){
//         console.log("Move forward")
//     }
//     else if (Event.code == "ArrowDown"){
//         console.log("Move Backward")
//     }
//     else if (Event.code == "ArrowLeft"){
//         console.log("Move Left")
//     }
//     else if (Event.code == "ArrowRight"){
//         console.log("Move Right")
//     }
// })





// *****************FORM EVENTS***************************


// let form = document.querySelector('form')
// form.addEventListener('submit',function(event){
//     event.preventDefault() //prevent loading to new page
//     console.log("Form Submitted")
// })



// accessing form data


// let form = document.querySelector('form')
// form.addEventListener('submit',function(event){
//     event.preventDefault() //prevent loading to new page
//     let inp = document.querySelector('input')
//     console.dir(inp);
//     console.log(inp.value);
// })

// accessing form data in the form of username and password
// let form = document.querySelector('form')
// form.addEventListener('submit',function(event){
//     event.preventDefault() //prevent loading to new page
//     let user = document.querySelector('#user')
//     let pass = document.querySelector('#password')
//     console.log(user.value)
//     console.log(pass.value)
  
// alert(`Hi! ${user.value}, your password is set to  ${pass.value}`)
// })



// accessing form data in the form using ELEMENTS without defining each element with their id.

// let form = document.querySelector('form')
// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     console.dir(form)

//     let user = this.elements[0] // = form.elements[0]
//     let pass = this.elements[1]
//     console.log(user.value)
//     console.log(pass.value)
// })

// CHANGE AND INPUT EVENT

// CHANGE EVENT
 
// let input = document.querySelector('#user')
// input.addEventListener('change',function(event){
//     event.preventDefault();
//     console.log("Input changed")
//     console.log(` FinaL value ${this.value}`)
// })


// INPUT EVENT

// let input = document.querySelector('#user')
// input.addEventListener('input',function(event){
//     event.preventDefault();
//     console.log("Input changed")
//     console.log(` FinaL value ${this.value}`)
// })

// SMALL ACTIVITY
let inp = document.querySelector('#text')
let para = document.querySelector('p')

inp.addEventListener('input', function(){
    console.log(this.value)
    para.innerText = this.value
})
