const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

// Start the game after user clicks button


//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());

optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });
let playerChoice;
let playerScore = 0;
let computerScore = 0;
// Fuction to generate  a random for computer
function computerPlay(){
    const computerOptions =['rock', 'paper', 'scissors'];
    const choiceNumber = Math.floor(Math.random()*computerOptions.length);
    const computerChoice = computerOptions[choiceNumber];
    return computerChoice;
}


// Function to play one round
const computerSelection = computerPlay();
function playRound(playerSelection, computerSelection){   
    
    if(playerSelection === computerSelection){
        roundResults.textContent = "Tie! Both chose " + playerSelection;
        
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            computerPoints.textContent = ++computerScore;
            roundResults.textContent = "You lose! " +computerSelection+ " beats " +playerSelection;
            
        }
        else{
            playerPoints.textContent = ++playerScore;
            roundResults.textContent = "You win! "+playerSelection +" beats " +computerSelection;
            
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            computerPoints.textContent = ++computerScore;
            roundResults.textContent = "You lose! " +computerSelection+ " beats " +playerSelection;
            
        }
        else{
            playerPoints.textContent = ++playerScore;
            roundResults.textContent = "You win! "+playerSelection +" beats " +computerSelection;
            
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            computerPoints.textContent = ++computerScore;
            roundResults.textContent = "You lose! " +computerSelection+ " beats " +playerSelection;
            
        }
        else{
            playerPoints.textContent = ++playerScore;
            roundResults.textContent = "You win! "+playerSelection +" beats " +computerSelection;
            
        }
    }
    checkWinner();
}



function checkWinner() {
    if (computerScore === 5 || playerScore === 5) {
      if (computerScore === playerScore){
        roundResults.textContent = "The game is a Tie!"
      }else{
        roundResults.textContent = (computerScore > playerScore) ? 'You lost to a computer' : 'Congrats! You won!!';
        
      }
      optionBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
      });
    }
  }
  // Function to get player
function getPlayerChoice(e){  
    let playerSelection= (e.target.id);
    playerChoice = e.target.textContent;
    console.log(playerChoice);   
    playRound(playerSelection, computerPlay());    
}