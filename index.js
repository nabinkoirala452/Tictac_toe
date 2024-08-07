let boxes = document.querySelectorAll(".box");
let rebtn = document.querySelector("#regam");
let newgamebtn=document.querySelector("#newgame-btn");
let msgcontainer=document.querySelector(".msg-cont");
let msg=document.querySelector("#winner");
let turnmsg=document.querySelector("#turn");

let turn0 = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let count=0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.style.color="red";
      turn0 = false;
      turnmsg.innerHTML="It's Cross turn"
    } else {
      box.innerText = "X";
      box.style.color="#00FFD1";
      turn0 = true;
      turnmsg.innerHTML="It's Aalu turn"
    }
    box.disabled = true;
    checkWinner();
    count++;
    if(count==9){
disablebox();
msg.innerText="Draw!";
msgcontainer.classList.remove(".hide");

}
    
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
  let pos1val=boxes[pattern[0]].innerText;
  let pos2val=boxes[pattern[1]].innerText;
  let pos3val=boxes[pattern[2]].innerText;
  if(pos1val!="" && pos2val!="" && pos3val!=""){
    if(pos1val===pos2val && pos2val===pos3val){
 
      showWinner(pos1val);
    }
  }
  
  }
};
function showWinner (winner){
  count=0;
  if(winner=="O"){
    winr="Aalu"
  }
  else{
    winr="Cross";
  }
msg.innerText="Congratulation "+winr+" for winning!";
msgcontainer.classList.remove("hide");
disablebox();
turnmsg.classList.add("hide");
}
function disablebox(){
for(let box of boxes){
  box.disabled=true;
}
}
function enablebox(){
  for(let box of boxes){
    box.innerText="";
    box.disabled=false;
  }
}
function resetgame(){
  turn0=true;
  count=0;
  enablebox();
  msgcontainer.classList.add("hide");
}
newgamebtn.addEventListener("click",resetgame);
rebtn.addEventListener("click",resetgame);