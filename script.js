const choiceBtns = document.querySelectorAll(".choice-btn");

let playerChoiceValue = "";
let computerChoiceValue = "";

choiceBtns.forEach((choiceBtn) => {
  choiceBtn.addEventListener("click", () => {
    playerChoiceValue = choiceBtn.value;
    computerChoiceValue = getComputedResult();
  });
});
