const input = document.getElementById("item");
const submitButton = document.getElementById("submit");
const list = document.getElementById("list");
const generateButton = document.getElementById("generate");
const generated = document.getElementById("generated");

//Storing input in an array
let itemsArray = [];

submitButton.addEventListener("click",() =>{
    let itemName = input.value;
// If value of input text field is not an empty string then put in itemName variable
    if (itemName != "") {
        itemsArray.push(itemName);
        let itemElem = document.createElement("div");
        itemElem.classList.add("list-item");
        itemElem.innerText= itemName;
        list.appendChild(itemElem);
        input.value="";
        //console.log(itemsArray);
        return;
    }
    //Else show alert
    alert("Please add an item");
    
});

generateButton.addEventListener("click",() => {
    generated.innerText = itemsArray[randomIndex(0,itemsArray.length)];
});
/* 
function randomIndex(min,max){
    min= Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min + 1))+min;
} */
// this function will make a random number out of total items in the length of
// the array index as a whole number
function randomIndex(min,max){
    return Math.floor(Math.random() * (max-min) +min);
}