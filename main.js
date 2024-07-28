let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red" , "skyblue" , "purple" , "yellow"];
let body = document.querySelector('body');

let h2 = document.querySelector('h2');
document.addEventListener("keypress", () => {
    if(started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    }, 250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() *4);
    let randomColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randomColor}`);
    console.log(randomIdx)
    console.log(randomColor);
    console.log(randBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    }, 250);
}

function checkAns(idx){
    // console.log("curr level : ",level)
    // let idx = level - 1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was ${level} Press any key to start`;
        body.style.backgroundColor = "red";
        setTimeout(reset,500);
            
    }
}
function bodyBackgroundColor(){
    body.style.backgroundColor = "red";
}

function userCheck(){
    console.log("curr level : ",level);
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);

    checkAns(userSeq.length -1);
}

let buttons = document.querySelectorAll(".btn");
for(btn of buttons){
    // console.log(this);
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
    body.style.backgroundColor = "white";
}