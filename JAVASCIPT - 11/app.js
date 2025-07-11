// EVENT BUBBLING

// let div =document.querySelector('div')
// let ul = document.querySelector('ul')
// let list = document.querySelectorAll('li')

// div.addEventListener('click', function(){
//     console.log(" Div was clicked")
// })

// ul.addEventListener('click', function(event){
//     event.stopPropagation() // To stop event bubbling
//     console.log(" Ul was clicked ")
// })

// for (items of list){
//     items.addEventListener('click', function(event){
//     event.stopPropagation() // To stop event bubbling
//     console.log(" Li was clicked ")
// })
// }

//******************* Todo **********************

// let input = document.querySelector('input')
// let btn = document.querySelector('button')
// let ul = document.querySelector('ul')

// // ADDING ELEMENTS IN TODO
// btn.addEventListener('click', function(){
//     li = document.createElement('li');
//     li.innerText = input.value
//     input.value = ""
//     ul.appendChild(li)

//     // ADDING DELETE BUTTON
//     delBtn = document.createElement('button');
//     delBtn.innerText = "Delete"
//     delBtn.classList.add('delete') // needed for part-2 logic
//     li.appendChild(delBtn)

// })

// ul.addEventListener('click',function(event){
//     if(event.target.nodeName == "BUTTON"){
//         let listItems = event.target.parentElement
//         listItems.remove()
//         console.log("Deleted")
//     }
// })

// ***************************************************************

let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// ADDING ITEMS
btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;
  ul.append(item);
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  item.append(delBtn);
  delBtn.classList.add("delete");
  input.value = "";
});

ul.addEventListener("click", function (e) {
  if (e.target.classList == "delete") {
    // condition to add check that event handler dont delete all items when click anywhere inside ul
    e.target.parentElement.remove();
  }
});

// ADDING DELETE FUNCTION

// part -2
// LOGIC ONLY APPLICABLE ON EXISTIING LIST ITEMS

// let delBtns = document.querySelectorAll('.delete')
// for(delBtn of delBtns){
//     delBtn.addEventListener('click', function(){
//     let par = this.parentElement;
//     par.remove();
//     })
// }
