function computerPlay(){
    const computerOptions =['rock', 'paper', 'scissors'];
    const choiceNumber = Math.floor(Math.random()*3);
    const computerChoice = computerOptions[choiceNumber];
    return computerChoice;
    
}
function playRound(playerSelection, computerSelection){   
    let result;
    let result1;
    if(playerSelection === computerSelection){
        result = 'Tie';
        let result1 = 0;
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            result = 'You Lose! Paper beats Rock';
            let result1 = 2;
        }
        else{
            result = 'You won';
            let result1 = 1;
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            result = 'You Lose! Rock beats Scissors';
            let result1 = 2;
        }
        else{
            result = 'You won';
            let result1 = 1;
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            result = 'You Lose! Scissors beat Paper';
            let result1 = 2;
        }
        else{
            result = 'You won';
            let result1 = 1;
        }
    }
    return(result);
}
function playerChoice(){
    let pchoice = prompt("Choose Rock/Paper/Scissors");
    pchoice = pchoice.toLowerCase();
    return pchoice;
}

const computerSelection = computerPlay();
function game(){
    for (let i =0; i < 5; i++){
        let playerSelection = playerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

}
console.log(game());