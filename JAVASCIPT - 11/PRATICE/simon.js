let started = false
let userSeq = []
let gameSeq = []
let btns = ["red","yellow","green","purple"]
let level = -1
let h2 = document.querySelector('h2')
let body = document.querySelector('body')
let h3 = document.querySelector('h3')

document.addEventListener('keypress',startGame)
    document.addEventListener('touchstart', function(e){
    if (started == false   && !e.target.classList.contains('btn')){
    e.preventDefault()
    startGame()
    }
},{passive:false})


function startGame(){
    if (started == false){
        levelUp()
        started = true
    }
}

function levelUp(){
    userSeq = []
    level++
    h2.innerText = `level ${level}`
    gameFlash()
    
}

function gameFlash(){
    let randIdx  = Math.floor(Math.random()*4)
    let randColor = btns[randIdx]
    let randBtn = document.querySelector(`.${randColor}`)
    setTimeout(gameSound,400)
    setTimeout(() => {
        randBtn.classList.add('gameFlash')
    }, 500);
    setTimeout(() => {
        randBtn.classList.remove('gameFlash')
    }, 800);
    gameSeq.push(randColor)
}
function userFlash(btn){
    
    setTimeout(() => {
        btn.classList.add('userFlash')
    }, 100);
    setTimeout(() => {
        btn.classList.remove('userFlash')
    }, 300);
}



function checkAns(){
    let idx = userSeq.length-1
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,400)
        }
    }
    else{
        h2.innerHTML = `Game over! Your score is ${level}<br/> Press or tap to Start again`
        wrongSound()
        bgFlash()
        setTimeout(reset,200)
        maxScore()
    }
}

function btnPress(){
    if(!started) return
    let btn =this
    setTimeout(btnClick,100)
    userFlash(btn)
    let userColor = btn.getAttribute('id')
    userSeq.push(userColor)
    checkAns()

}
let allbtns = document.querySelectorAll('.btn')
for (let btn of allbtns){
    btn.addEventListener('click',btnPress)
}


// TRACK HEIGHT SCORE
function maxScore(){
    h3.innerText = `Top Score : ${level}`
}


function bgFlash(){
    setTimeout(() => {
        body.classList.add('wrong')
    }, 100);
    setTimeout(() => {
        body.classList.remove('wrong')
    }, 1200);
}

function btnClick(){
    let click = new Audio('asset/button.mp3')
    click.play()
}

function gameSound(){
    let click = new Audio('asset/game.mp3')
    click.play()
}

function wrongSound(){
    let click = new Audio('asset/wrong.mp3')
    click.play()
}
function reset (){
    started = false
    userSeq = []
    gameSeq = []
    level = -1
}


