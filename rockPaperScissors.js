const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
     console.log('Error!! Paper, Rock or Scissors only!');
  }

}

const getComputerChoice = () => {
  let compChoice = Math.floor(Math.random() * 3);
  if(compChoice === 0) {
    return 'rock';
  } else if(compChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb') {
    return 'You blew the computer up!!! You win!!!'
  }
  
  if(userChoice === computerChoice) {
    return 'Tie game!!';
  }

  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'The computer won!!';
    } else {
      return 'You won!!';
    }
  }

  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'The computer won!!';
    } else {
      return 'You won!!';
    }
  }

  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'The computer won!!';
    } else {
      return 'You won!!';
    }
  }
}

const playGame = () => {
   const userChoice = getUserChoice('scissors');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
playGame();
