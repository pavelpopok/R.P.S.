// choose a random AI selection
function computerPlay() {
    let anyPick = Math.random();
    if (anyPick < 0.3) {
      return "Rock";
    }
    if (anyPick > 0.3 && anyPick < 0.6) {
      return "Paper";
    }
    if (anyPick > 0.6) {
      return "Scissors";
    }
}

// set starter counter
    let aiScore = 0;
    let playerScore = 0;

// ask the user to make a choice and compare it with the choice of the AI, 
// also assign the number of victories
function battleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection.toLowerCase()) {
      return "None of you are win or lose, cuz it is an equal!";
    }
    if (playerSelection === "rock" && computerSelection === "Scissors") {
      playerScore += 1;
      return "You Win! Rock beats Scissors";
    }
    if (playerSelection === "rock" && computerSelection === "Paper") {
      aiScore += 1;
      return "You Loose! Paper beats Rock";
    }
    if (playerSelection === "paper" && computerSelection === "Scissors") {
      aiScore += 1;
      return "You Loose! Scissors cut Paper";
    }
    if (playerSelection === "paper" && computerSelection === "Rock") {
      playerScore += 1;
      return "You Win! Paper beats Rock";
    }
    if (playerSelection === "scissors" && computerSelection === "Paper") {
      playerScore += 1;
      return "You Win! Scissors cut Paper";
    }
    if (playerSelection === "scissors" && computerSelection === "Rock") {
      aiScore += 1;
      return "You Loose! Rock beats Scissors";
    } else return "U misspelled, try again";
  }