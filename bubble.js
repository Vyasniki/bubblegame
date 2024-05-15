
var timer= 60;
var newhitval;
var score=0;

function makebubble(){
    var clutter="";

    for(var i =1;i<=147;i++){
   
    var rn = Math.floor(Math.random()*10);
     clutter += `<div id="bubble">${rn}</div>`;

}
document.querySelector("#pnlbottom").innerHTML = clutter;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}
function runtimer(){
    
   var timerval = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerval);
            document.querySelector("#pnlbottom").innerHTML= `<h1>GAME OVER <br>
            YOUR SCORE IS : ${score}</h1>`;
        }
    },1000)
}

function newhit(){
    newhitval=Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent=newhitval;
}



document.querySelector("#pnlbottom")
.addEventListener("click",function(details){
 var clickednum = Number(details.target.textContent);
 if(clickednum == newhitval)
 {
    increaseScore();
    makebubble();
    newhit();
    
 }
})

makebubble();
runtimer();
newhit();
