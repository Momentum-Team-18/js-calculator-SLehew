// Event Listeners
let clear = document.querySelector(".clear");
console.log (clear)

clear.addEventListener('click', (event) => {
    console.log (event.target)
    answerBox.innerText = "0"

});


let numButtons = document.querySelectorAll(".numButtons");
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

let equalsButton = document.querySelector(".equalsButton");
console.log (equalsButton)

equalsButton.addEventListener("click", (event) => {
    console.log(event.target.innerText);
      let answer = math.evaluate(problem)
       console.log(answer)
       answerBox.innerText= answer
       problem = answer
}

)




// Functions

