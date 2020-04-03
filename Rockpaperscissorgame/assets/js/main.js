let options = document.getElementsByClassName("option");
let choices = ["rock","paper","scissors"];
// Rock means player chose rock
let winState = {rock:"scissors",paper:"rock",scissors:"paper"};
let battle_elem = document.getElementById("battle");
let reset_elem = document.getElementById("reset");
let aiScore=0;
let score = 0;
let storage = window.localStorage;

if(storage.getItem("score")){
    score = storage.getItem("score");
}
if(storage.getItem("aiScore")){
    aiScore = storage.getItem("aiScore");
}


let score_elem = document.getElementById("score");
let aiScore_elem = document.getElementById("aiScore");
score_elem.innerHTML= score;
aiScore_elem.innerHTML= aiScore;


for (let i = 0; i< options.length; i++){
    let option = options[i];
//console.log(option);

     option.addEventListener("click",function(){
         this.classList.add("selected");
         disableOptions();
         battle(this);   
     }); 
}
function battle(option){
    let choice = option.dataset.choice;
    let aiChoice = choices[returnChoiceInt(2,0)];
    // console.log(aiChoice);
    // console.log(choice);
    if(choice === aiChoice){

        //console.log("its a draw");
        option.classList.add("draw");
    }else if(aiChoice=== winState[choice]){
        option.classList.add("winner");
        score++;
        storage.setItem("score",score);
        score_elem.innerHTML=score;
        //console.log("Player Wins");
    }else{
        //console.log("Ai wins");
        option.classList.add("loser");
        aiScore++;
        storage.setItem("aiScore",aiScore);
        aiScore_elem.innerHTML=aiScore;
    }
    
    
    DisplayChoices(choice,aiChoice);
}


function DisplayChoices(player,ai){
    //<div class="option rock" data-choice="rock"></div>
    let choice_elem = document.createElement("div");
    choice_elem.classList.add("aiChoice",ai);
//Once the battle has happened
    battle_elem.appendChild(choice_elem);
    reset_elem.classList.remove("hide");
   
 
}
function returnChoiceInt(max, min){
    return Math.floor(Math.random()*(max-min +1)) + min;

}

function disableOptions(){
    for (let i = 0; i< options.length; i++){
        let option = options[i];
        if(!option.classList.contains("selected")){
            option.classList.add("disabled");
        }

     
         } 
}

reset_elem.addEventListener("click",reset);

function reset(){
    for (let i = 0; i< options.length; i++){
        let option = options[i];
       
            option.classList.remove("selected");
            option.classList.remove("disabled");
            option.classList.remove("winner");
            option.classList.remove("loser");
            option.classList.remove("draw");
            
         } 
         battle_elem.innerHTML = "<h3> A.I's Choice</h3>";
         reset_elem.classList.add("hide");

}