let gameSeq = [];
let userSec = [];


let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2=document.querySelector("h2");


let h1=document.querySelector("body");
h1.addEventListener("click",function(){

if(started==false){
console.log("game started");
started = true;


levelUp();

}


});


function gameFlash(btn) {
    btn.classList.add("flash"); // Remove '#' before 'flash'
    setTimeout(function() {
        btn.classList.remove("flash"); // Remove '#' before 'flash'
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash"); // Remove '#' before 'flash'
    setTimeout(function() {
        btn.classList.remove("userflash"); // Remove '#' before 'flash'
    }, 250);
}




function levelUp(){
    userSec=[];

level++;
h2.innerText=`Level ${level}`;

//random btn choose
let randIdx = Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randBtn=document.querySelector(` .${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randBtn);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randBtn);

}
function checkAns(idx){

   // console.log("curr level :",level);
//let idx = level-1;
if(userSec[idx]==gameSeq[idx]){
if(userSec.length==gameSeq.length){
 setTimeout(levelUp,1000);  
}
//   console.log("same value");  
}
else{
    h2.innerHTML=`Game Over!your score was <b>${level}</b>  Press any key to start or Refresh the browser`;
  
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";

  },150);

//reset();
    
}
}

function btnPress(){
//console.log(this);
    let btn = this;
userFlash(btn);

userColor = btn.getAttribute("id");
userSec.push(userColor);
//console.log(userColor);
checkAns(userSec.length-1);
}
let allBtns =document.querySelectorAll(".btn");
for (btn of allBtns) {

    btn.addEventListener("click",btnPress);
}

function reset() {

started=false;
gameSeq=[];
userSec=[];
level=0;


}