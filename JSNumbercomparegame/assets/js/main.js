const current_elem= document.getElementById("current");
const btns=document.getElementsByClassName("btn");
const result_elem=document.getElementById("result");
const score_elem = document.getElementById("score");

let last_number=0;
let current_number = getRandomInt();//random Number Generator;
let score = 0;
current_elem.innerText=current_number;

for(let i=0;i< btns.length;i++){
    btns[i].addEventListener("click",function(){
        PlayGame(this.dataset.value);
    });
}
function PlayGame(choice){
    last_number=current_number;
    current_number=getRandomInt();
    current_elem.innerText=current_number;

    let comparison;
    if(last_number < current_number){
        comparison="higher";

    }else if (last_number > current_number){
        comparison = "lower";

    }else {
        comparison = "SameNumber";
    }
    if(choice == comparison){
        score++;
        score_elem.innerText=score;

        result_elem.innerText="Correct";
        result_elem.classList.add("correct");
        result_elem.classList.remove("hide");

        setTimeout(function(){
            result_elem.classList.add("hide");
            result_elem.classList.remove("correct");
        },750)//750 is the quarter of second so 750 milliseconds
    }else if (comparison=="match"){
        result_elem.innerText="Match";
        result_elem.classList.remove("hide");

        setTimeout(function(){
            result_elem.classList.add("hide");
        },750)
    } else {
        score--;
        score_elem.innerText=score;

        result_elem.innerText="Incorrect";
        result_elem.classList.add("incorrect");
        result_elem.classList.remove("hide");

        setTimeout(function(){
            result_elem.classList.add("hide");
            result_elem.classList.remove("incorrect");
        },750)
    }
}

function getRandomInt(){
    return Math.floor(Math.random()*10);
}