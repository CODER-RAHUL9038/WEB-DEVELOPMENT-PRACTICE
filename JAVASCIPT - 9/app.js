
// ACCESSING BBY CLASSNAME
// let smallImges =  (document.getElementsByClassName("oldImg"));
// for (i=0; i<smallImges.length;i++){
//     console.dir(smallImges[i])
// }

// CHANGING THE PROPERTY LIKE IMAGE HERE
// let smallImges =  (document.getElementsByClassName("oldImg"));
// for (i=0; i<smallImges.length;i++){
//     smallImges[i].src = "assets/spiderman_img.png"
//     console.log(`Value of image no. ${i} is changed`)
// }

// QUERY SELECTOR
// console.dir(document.querySelector("h1"))
// console.dir(document.querySelector("#description"))
// console.dir(document.querySelector(".oldImg"))
// console.dir(document.querySelector("div a"))
// console.dir(document.querySelectorAll("div a"))
 

// MANIPULATING INNERHTML ,INNERTEXT AND TEXTCONTENT
    // let heading = document.querySelector("h1")
    // console.log(heading.innerHTML = `<u> ${heading.innerText}</u>`)

// GET AND SET ATTRIBUTE - GETTER AND SETTER
// let img = document.querySelector("img")
//  console.log(img.getAttribute("id"))
 
//  CHANGING ATTRIBUTE VALUE
//  img.setAttribute("id","smallImg")
//  console.log(img.getAttribute("id"))

// ASSIGNING NEW ATTRIBUTES
//  console.log(img.getAttribute("class"))
//   img.setAttribute("class","Images")
//   console.log(img.getAttribute("class"))

// MANIPULATING STYLE (CSS)
// let heading = document.querySelector("h1")
// heading.style.color = "yellow"
// heading.style.backgroundColor = "black"

let anchor = document.querySelectorAll(".box a")
// // USING FOR LOOP

// for(i=0;i<anchor.length;i++){
// anchor[i].style.color = "purple" // changed in inline style 
// }

// USING FOR OF

// for(color of anchor){
// color.style.color = "green" // changed in inline style 
// }
