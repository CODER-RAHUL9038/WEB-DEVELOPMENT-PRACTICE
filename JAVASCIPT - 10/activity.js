let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let div = document.querySelector('div');


btn.addEventListener('click',function(){
    let randomColor = getRandomColor();
    h1.innerText = randomColor;
    div.style.backgroundColor = randomColor;
})

function getRandomColor (){
    red = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    let color = (`rgb(${red},${green},${blue})`);
    return color;
}