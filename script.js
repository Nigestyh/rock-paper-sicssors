const choiceBtns = document.querySelectorAll(".choice-btn");
const playerResult = document.getElementById("player-result");
const computerResult = document.getElementById("cpu-result");

let playerChoiceValue = "";
let computerChoiceValue = "";

const choiceEmoji = {
  rock: "✊🏼",
  paper: "✋🏼",
  scissors: "✌🏼",
};

choiceBtns.forEach((choiceBtn) => {
  choiceBtn.addEventListener("click", () => {
    playerChoiceValue = choiceBtn.value;
    computerChoiceValue = getComputedResult();

    playerResult.textContent = choiceEmoji[playerChoiceValue];
    computerResult.textContent = choiceEmoji[computerChoiceValue];
  });
});

function getComputedResult() {
  const computerOptionChoices = ["rock", "paper", "scissors"];
  const computerRandomChoice =
    computerOptionChoices[
      Math.floor(Math.random() * computerOptionChoices.length)
    ];
  return computerRandomChoice;
}
