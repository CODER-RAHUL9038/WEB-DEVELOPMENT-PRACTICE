// EVENT BUBBLING

let div =document.querySelector('div')
let ul = document.querySelector('ul')
let list = document.querySelectorAll('li')

div.addEventListener('click', function(){
    console.log(" Div was clicked")
})

ul.addEventListener('click', function(event){
    event.stopPropagation() // To stop event bubbling
    console.log(" Ul was clicked ")
})

for (items of list){
    items.addEventListener('click', function(event){
    event.stopPropagation() // To stop event bubbling
    console.log(" Li was clicked ")
})
}