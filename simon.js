let  gameseq=[];
let userseq = [];
let started = false;
let level = 0;
highest_score = 0;
let btns = ["yellow","red","purple","green"];

let h2 = document.querySelector("h2");
 document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }
 });

 function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
 }
 
 function userflash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
       btn.classList.remove("userflash");
   },200);
}
// function for level up
 function levelup(){
   userseq=[];
    level++;
    highest_score++;
    h2.innerText = `level is ${level}`;
    let randomindx= Math.floor(Math.random() * 4);
    let randcolor = btns[randomindx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(randcolor);
    gameflash(randbtn);
 }

 function checkAns(idx){
   
   if(userseq[idx] == gameseq[idx]){
      console.log("same value");
      if(userseq.length == gameseq.length){
         setTimeout(levelup,1000);
      }

   }
   else{
      h2.innerHTML=`Game over your score was <b>${level}</b> </br> The highest score was ${highest_score} </br>Press any key to restart the game again`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor = "white"; 
      },150);
      reset();
   }
 }

 function btnpress(){
   console.log(this);
   let btn = this;
   userflash(btn);

   userColor = btn.getAttribute("id");
   //console.log(userColor);
   userseq.push(userColor);

   checkAns(userseq.length-1);
 }

 let allbtns = document.querySelectorAll(".btn");
 for(btn of allbtns){
   btn.addEventListener("click",btnpress);
 }

 function reset(){
   gameseq=[];
   userseq = [];
   started = false;
   level = 0;
 };
