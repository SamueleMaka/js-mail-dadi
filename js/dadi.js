// ========== DADI ========== 
let PcNumber = Math.floor(Math.random() * 6) + 1;
let HumanNumber = Math.floor(Math.random() * 6) + 1;
if(PcNumber > HumanNumber){
    console.log("Computer Wins");
}else if(PcNumber < HumanNumber){
    console.log("Human Wins");
}else{
    console.log("Tie")
}

