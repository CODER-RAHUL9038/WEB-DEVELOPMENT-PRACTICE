let started = false;
let h2 = document.querySelector('h2');
let level = -1;
let btns = ["red", "green", "yellow","purple" ]
let userSeq = []
let gameSeq  =[]

document.addEventListener('keypress',startGame);
document.addEventListener('touchstart',function(e){
    if(!started && !e.target.classList.contains('btn')){
        startGame()
        e.preventDefault()
    }
},{passive:false} );    

function startGame(){
    if (started == false){
       levelUp()

    }
}

function levelUp(){
    
    level++
    userSeq = []
    h2.innerText = `Level ${level}`
    started=true;
    gameFlash()
    

}

function gameFlash(){
    let randIdx = Math.floor(Math.random()*4)
    let randColor = btns[randIdx]
    let randBtn = document.querySelector(`.${randColor}`)
    setTimeout(() => {
        randBtn.classList.add('gameflash')
    }, 500);
    setTimeout(() => {  
        randBtn.classList.remove('gameflash')
    }, 800);
    gameSeq.push(randColor)
     console.log(gameSeq)  // GAME SEQUENCE
    
}


function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(() => {
        btn.classList.remove('userFlash');
    }, 200); // Flash for 200ms
}

let allbtns = document.querySelectorAll('.btn')
for (btn of allbtns){
    btn.addEventListener('click', btnPress)
}

function checkAns(){
    idx = userSeq.length-1
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500)
            
        }
    }
    else{
        h2.innerHTML = `GameOver! Your Score is <b>${level}</b> <br>Press any key to start again`
        reset()
    }
}

function btnPress(){
    if(!started) return;
    let btn =this
    userColor = btn.getAttribute('id')
    userFlash(btn)
    userSeq.push(userColor)
    console.log(userSeq) // USER SEQUENCE
    setTimeout(checkAns,200)
}



function reset(){
    started = false;
    userSeq = []
    level = -1;
    gameSeq = []
}