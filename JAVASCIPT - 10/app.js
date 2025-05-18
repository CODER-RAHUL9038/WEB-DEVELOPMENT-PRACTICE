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




let btn = document.querySelector('button') 
let h2 = document.querySelector('h2')  
let h3 = document.querySelector('h3')  
let p = document.querySelector('p')  

function changeColor(){
    console.dir(this.innerText) // this will be the defined object itself
    this.style.backgroundColor = "blue"
}



btn.addEventListener('click',changeColor) // changeColor is passed as callback
h2.addEventListener('click',changeColor)
h3.addEventListener('click',changeColor)
p.addEventListener('click',changeColor)


