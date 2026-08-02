let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector("#msg");

let turn_o=true;
//it tells chance of which player Playerx or playery
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame=()=>{
    turn_o=true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn_o){
            box.innerText="X";
            turn_o=false;
        }else{
            box.innerText="O";
            turn_o=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.enabled=true;
        box.innerText="";
    }
}
const showWinner=()=>{
    msg.innerText=`Congratulation ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}
const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos1va2=boxes[pattern[1]].innerText;
        let pos1va3=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos1va2!="" &&  pos1va3!=""){
            if(pos1val===pos1va2 && pos1va2===pos1va3){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }

    }
};
newGamebtn.addEventListener("click",resetGame);
resetGame.addEventListener("click",resetGame);


