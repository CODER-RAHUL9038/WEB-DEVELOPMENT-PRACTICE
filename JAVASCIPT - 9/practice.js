let para1 = document.createElement('p')
para1.innerText = "I am a red para"
let body = document.querySelector('body')
body.append(para1)
para1.classList.add("red")

let h3 = document.createElement('h3')
h3.innerText = "I am a blue h3!"
body.append(h3)
h3.classList.add("blue")

let div = document.createElement('div')
let h1 = document.createElement('h1')
let para2 = document.createElement('p')

h1.innerText = "I am in a div"
para2.innerText = "MEE TOO!"


div.append(h1)
div.append(para2)
div.classList.add("design")




body.append(div)