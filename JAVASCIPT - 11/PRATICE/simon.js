let started = false;
let body = document.querySelector('body');
let h2 = document.querySelector('h2');
let level = 0;
let btns = ["red", "green", "yellow","purple" ]

body.addEventListener('keypress',startGame);
body.addEventListener('click',startGame);

function startGame(){
    if (started == false){
        level++
        h2.innerText = `Level ${level}`
        started=true;
        console.log("game started");
        gameFlash()

    }
}

function gameFlash(){
    let randIdx = Math.floor(Math.random()*4)
    let randColor = btns[randIdx]
    let randBtn = document.querySelector(`.${randColor}`)
    setTimeout(() => {
        randBtn.classList.add('gameflash')
    }, 400);
    setTimeout(() => {
        randBtn.classList.remove('gameflash')
    }, 800);

}


function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(() => {
        btn.classList.remove('userflash');
    }, 200); // Flash for 200ms
}





let allBtns = document.querySelectorAll('.btn')
for (let btn of allBtns){
    btn.addEventListener('click', btnPress)
}


function btnPress(){
    
}


