let div =document.querySelector('div')
let ul = document.querySelector('ul')
let list = document.querySelectorAll('li')

div.addEventListener('click', function(){
    console.log(" Div was clicked")
})

ul.addEventListener('click', function(){
    console.log(" Ul was clicked")
})

for (items of list){
    items.addEventListener('click', function(){
    console.log(" Li was clicked")
})
}