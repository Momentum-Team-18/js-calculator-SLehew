// Event Listeners
let clear = document.querySelector(".clear");
console.log (clear)

clear.addEventListener('click', (event) => {
    console.log (event.target)
});

let numButtons = 
document.querySelectorAll(".numButtons");
console.log (numButtons)

let answerBox = document.querySelector("#answerBox")

let problem = ""

for (let numButton of numButtons) {
    numButton.addEventListener("click", (event) => {
        console.log(event.target.innerText);
        problem += event.target.innerText
        answerBox.innerText= problem;
    });
    
}



// Functions