
document.addEventListener("DOMContentLoaded", () => {
  const playerScoreEl = document.getElementById("player-score");
  const computerScoreEl = document.getElementById("computer-score");
  const resultText = document.querySelector(".result-text");
  const playerEmoji = document.querySelector(".player-display .emoji");
  const computerEmoji = document.querySelector(".computer-display .emoji");
  const choices = document.querySelectorAll(".emoji1");

 
  const emojiMap = {
    "✊": "rock",
    "✋": "paper",
    "✌️": "scissors"
  };


  const emojiChoices = Object.keys(emojiMap);

  let playerScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    return emojiChoices[Math.floor(Math.random() * emojiChoices.length)];
  }

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a Draw!";
    }
    if (
      (playerChoice === "✊" && computerChoice === "✌️") || 
      (playerChoice === "✋" && computerChoice === "✊") || 
      (playerChoice === "✌️" && computerChoice === "✋")
    ) {
      playerScore++;
      return "Player Wins!";
    } else {
      computerScore++;
      return "Computer Wins!";
    }
  }

  choices.forEach(choice => {
    choice.addEventListener("click", function () {
      const playerChoice = this.textContent.trim().charAt(0); 
      const computerChoice = getComputerChoice(); 


      playerEmoji.textContent = playerChoice;
      computerEmoji.textContent = computerChoice;

  
      const result = determineWinner(playerChoice, computerChoice);
      resultText.textContent = result;

    
      playerScoreEl.textContent = playerScore;
      computerScoreEl.textContent = computerScore;
    });
  });
});
