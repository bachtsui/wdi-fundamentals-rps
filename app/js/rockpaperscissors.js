////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var ret=move;

    if (ret===null){
        ret=getInput();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return ret;
}

function getComputerMove(move) {
    var ret=move;

    if (ret===null){
        ret=randomPlay();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return ret;
}

function getWinner(playerMove,computerMove) {
    var winner;
    var player=0;
    var computer=1;
    var tie=2;

    if (playerMove=="rock" && computerMove=="rock"){
        winner=tie;
    } 
    else if (playerMove=="rock" && computerMove=="paper"){
        winner=computer;
    }
    else if (playerMove=="rock" && computerMove=="scissors"){
        winner=player;
    }
    else if (playerMove=="paper" && computerMove=="paper"){
        winner=tie;
    }
    else if (playerMove=="paper" && computerMove=="scissors"){
        winner=computer;
    }
    else if (playerMove=="paper" && computerMove=="rock"){
        winner=player;
    }
    else if (playerMove=="scissors" && computerMove=="scissors"){
        winner=tie;
    }
    else if (playerMove=="scissors" && computerMove=="rock"){
        winner=computer;
    }
    else if (playerMove=="scissors" && computerMove=="paper"){
        winner=player;
    }
    
    return winner;
    
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
}

function playToFive() {
   
    var playerWins = 0;
    var computerWins = 0;

   console.log("Let's play Rock, Paper, Scissors");
    
    while (playerWins<5 && computerWins<5){
        var playerInput=getInput();
        var computerInput=randomPlay();
        var winner=getWinner(playerInput,computerInput);

        if(winner===0){
            playerWins+=1;
        }
        else if(winner===1){
            computerWins+=1;
        }
        else{
            console.log("It was a tie! Go again.");
        }

        console.log('Player Move: ' + playerInput + ' Computer Move: ' + computerInput);
        console.log('Player Score: ' + playerWins + ' Computer Score: ' + computerWins + '\n');
    }


    //If Player wins increase variable playerWins by +=1
    //If computerWins increase variable computerWins by +=1
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
   return [playerWins, computerWins];
}

playToFive();