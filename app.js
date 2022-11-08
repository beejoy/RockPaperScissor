let userScore = 0;
let computerScore = 0;
const result_p = document.querySelector("#result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const resetScore = document.getElementById("reset-score");

const smallUser = "(user)".fontsize(3);
const smallComputer = "(computer)".fontsize(3);

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  return choices[Math.floor(Math.random() * 3)];
}

function letterToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissor";
}

function gameResult(status, userChoice, computerChoice) {
  let resultText = "";
  let classToAdd = "";

  if (status === "win") {
    userScore++;
    resultText = `${letterToWord(userChoice)}${smallUser} beats ${letterToWord(computerChoice)}${smallComputer}. You won!`;
    classToAdd = "glow-win";
  } else if (status === "lose") {
    computerScore++;
    resultText = `${letterToWord(userChoice)}${smallUser} loses to ${letterToWord(computerChoice)}${smallComputer}. You lose!`;
    classToAdd = "glow-lose";
  } else {
    resultText = `${letterToWord(userChoice)}${smallUser} equals ${letterToWord(computerChoice)}${smallComputer}. It's a draw!`;
    classToAdd = "glow-draw";
  }

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = resultText;

  document.getElementById(userChoice).classList.add(classToAdd);
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove(classToAdd);
  }, 1000);
}

function playGame(userChoice) {
  let computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    // Winning case
    case "rs":
    case "pr":
    case "sp":
      gameResult("win", userChoice, computerChoice);
      break;

    // Losing case
    case "rp":
    case "ps":
    case "sr":
      gameResult("lose", userChoice, computerChoice);
      break;

    // Draw case
    case "rr":
    case "pp":
    case "ss":
      gameResult("draw", userChoice, computerChoice);
      break;
  }
}

rock_div.addEventListener("click", function () {
  playGame("r");
});

paper_div.addEventListener("click", function () {
  playGame("p");
});

scissor_div.addEventListener("click", function () {
  playGame("s");
});

resetScore.addEventListener("click", function () {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = "0";
  computerScore_span.innerHTML = "0";
  result_p.innerHTML = "Let's begin the game!";
});
