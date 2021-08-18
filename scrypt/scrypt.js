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