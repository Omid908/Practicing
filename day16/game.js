let playerScoreCount = 0;
let computerScoreCount = 0;

function playgame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const playerDisplay = document.getElementById("playerDisplay");
  const computerDisplay = document.getElementById("computerDisplay");
  const resultDisplay = document.getElementById("resultrDisplay");

  const playerScore = document.getElementById("playerScore");
  const computerScore = document.getElementById("computerScore");

  playerDisplay.textContent = `Player: ${capitalize(playerChoice)} ${emoji(
    playerChoice
  )}`;
  computerDisplay.textContent = `Computer: ${capitalize(
    computerChoice
  )} ${emoji(computerChoice)}`;

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie";
    resultDisplay.className = "tie";
    playerScore.className = "";
    computerScore.className = "";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win! 🎉";
    resultDisplay.className = "win";
    playerScoreCount++;
    playerScore.textContent = `Player Score: ${playerScoreCount}`;
    playerScore.className = "win";
    computerScore.className = "";
  } else {
    result = "You lose! 😞";
    resultDisplay.className = "lose";
    computerScoreCount++;
    computerScore.textContent = `Computer Score: ${computerScoreCount}`;
    computerScore.className = "win";
    playerScore.className = "";
  }

  resultDisplay.textContent = result;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function emoji(choice) {
  switch (choice) {
    case "rock":
      return "👊";
    case "paper":
      return "✋";
    case "scissors":
      return "✌";
    default:
      return "";
  }
}
