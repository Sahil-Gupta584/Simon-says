let p = document.querySelector('h3')
let level = 0;
let btns = document.querySelectorAll('.game-container div')
let gameSqs = [];
let userSeq = [];
let gameStarted = false;

document.addEventListener('keypress', 
 function (params) {
    if (gameStarted == false ){
        levelUp()
    }
}
);

function levelUp(params) {
    gameStarted == true;
    userSeq = [];
    console.log('l')
    level++;
    p.innerText = `Level ${level}`
    let btnInd = Math.floor(Math.random() * 3);
    let btn = btns[btnInd];
    gameSqs.push(btn)
    console.log(gameSqs)
    gameFlash(btn)
}

function gameFlash(btn) {
    btn.classList.add('gameFlash');
    setTimeout(
        function (params) {
            btn.classList.remove('gameFlash')
        }, 250)
}

function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(
        function () {
            btn.classList.remove('userFlash')
        }, 250)
}



for (const btn of btns) {
    btn.addEventListener('click', btnPress)
}

function btnPress() {
    let btn = this
    userFlash(btn)
    userSeq.push(btn)
    console.log(userSeq)

    checkAns(userSeq.length-1)
}
function checkAns(idx) {
    if(userSeq[idx] == gameSqs[idx]){
        if (userSeq.length == gameSqs.length) {
           setTimeout( levelUp, 1000)
        }
    }else{
        p.innerHTML = `Game Over! Your Score is <b> ${level}<b>, <br> Please try again.`
        document.querySelector('body').style.backgroundColor = 'red'
        setTimeout(
            function () {
                document.querySelector('body').style.backgroundColor = 'white'
                
            },150
        )
        gameStarted == false
        level = 0;
        gameSqs=[]
    }
}



