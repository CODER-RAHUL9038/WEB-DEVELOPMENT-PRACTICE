1. // CREATING ELEMENTS
let newInput = document.createElement('input')
let btn = document.createElement('button')
let body  = document.querySelector('body')

btn.innerText = "Click Me!"

// APPENDING VALUES
body.append(newInput)
body.append(btn)


2. // SETTING  ATTRIBUTES TO  ELEMENT
newInput.setAttribute("placeholder","Username")
btn.setAttribute("id","btn")

3. // ADDING CLASSLIST TO BUTTON WITH ATTRIBUTES
let button = document.querySelector("#btn")
button.classList.add("design")

4.// CREATING H1 AND SETTING VALUE
let h1 = document.createElement('h1')
h1.innerText = "DOM Practice"

// ADDING CLASSLIST TO H1
h1.classList.add("underline")
body.append(h1)

5.// CREATING P AND SETTING VALUE
let para = document.createElement('p')
para.innerHTML = "Apna College <b>Delta </b> Practice"
body.append(para)


