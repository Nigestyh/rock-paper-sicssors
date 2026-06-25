const choiceBtns = document.querySelectorAll(".choice-btn");
const playerResult = document.getElementById("player-result");
const computerResult = document.getElementById("cpu-result");
const gameTitle = document.getElementById("game-title");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("cpu-score");

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
    setTimeout(() => {
      playerResult.textContent = choiceEmoji[playerChoiceValue];
      computerResult.textContent = choiceEmoji[computerChoiceValue];
      showGameResult();
    }, 1500);
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

function showGameResult() {
  if (playerChoiceValue === computerChoiceValue) {
    gameTitle.textContent = "Draw";
  } else if (
    (playerChoiceValue === "rock" && computerChoiceValue === "scissors") ||
    (playerChoiceValue === "paper" && computerChoiceValue === "rock") ||
    (playerChoiceValue === "scissors" && computerChoiceValue === "paper")
  ) {
    gameTitle.textContent = "You Won!";
    playerScore.textContent++;
  } else {
    gameTitle.textContent = "You Lost!";
    computerScore.textContent++;
  }
  checkWinner();
}

function checkWinner() {
  if (Number(playerScore.textContent) === 3) {
    gameTitle.textContent = " 🎉 You won the match!";
    setTimeout(() => {
      playerScore.textContent = 0;
      computerScore.textContent = 0;
      playerResult.textContent = "✊🏼";
      computerResult.textContent = "✊🏼";
      gameTitle.textContent = "Let's Play!";
    }, 3000);
  } else if (Number(computerScore.textContent) === 3) {
    gameTitle.textContent = "Computer won the match!";
    setTimeout(() => {
      playerScore.textContent = 0;
      computerScore.textContent = 0;
      playerResult.textContent = "✊🏼";
      computerResult.textContent = "✊🏼";
      gameTitle.textContent = "Let's Play!";
    });
  }
}
