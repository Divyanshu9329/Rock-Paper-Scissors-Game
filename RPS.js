let score = JSON.parse(localStorage.getItem('score')) ||{
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playMove){

  const computerMove = pickNumber();

  let result = ' ';
  
  if(playMove === 'scissors'){
    if(computerMove === 'Rock'){
        result = 'You lose.';
      }
    else if(computerMove === 'Paper'){
       result = 'You win.';
      }
    else{
      result = 'Tie.';
    }
  }
  else if (playMove === 'paper'){
    if(computerMove === 'Rock'){
        result = 'You win.';
       }
       else if(computerMove === 'Paper'){
        result = 'Tie.';
       }
       else{
        result = 'You lose.';
       }
  }
  else{
    if(computerMove === 'Rock'){
        result = 'Tie.';
       }
       else if(computerMove === 'Paper'){
        result = 'You lose.';
       }
       else{
        result = 'You win.';
       }
  }

  if(result === 'You win.'){
    score.wins += 1;
  }
  else if(result === 'You lose.'){
    score.losses += 1;
  }
  else{
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  computer`;
}

//       alert(`You picked ${playMove}. Computer picked ${computerMove}. ${result}
// wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);


function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function pickNumber() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  }
  else {
    computerMove = 'Scissors';
  }

  return computerMove;
}