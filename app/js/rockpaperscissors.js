////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
// 'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}
function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
      winner = 'tie';
    } else if (playerMove === 'rock') {
      if (computerMove === 'scissors') {
        winner = 'player';
      } else {
        winner = 'computer';
      }
    } else if (playerMove === 'scissors') {
      if (computerMove === 'paper') {
        winner = 'player';
      } else {
        winner = 'computer';
      }
    } else {
      if (computerMove === 'rock') {
        winner = 'player';
      } else {
        winner = 'computer';
      }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    var playerMove;
    var computerMove;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
      playerMove = getPlayerMove('');
      computerMove = getComputerMove('');
      winner = getWinner(playerMove,computerMove);
      switch (winner) {
        case 'computer':
          computerWins += 1;
          console.log("Computer Wins with " + computerMove)
          break;
        case 'player':
          playerWins += 1;
          console.log("Player Wins, computer had " + computerMove)
          break;
        default:
          console.log("Game finished in a " + winner)
      }
    }
    return [playerWins, computerWins];
}
function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var x;
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    var playerMove;
    var computerMove;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < x && computerWins < x) {
      playerMove = getPlayerMove('');
      computerMove = getComputerMove('');
      winner = getWinner(playerMove,computerMove);
      switch (winner) {
        case 'computer':
          computerWins += 1;
          console.log("Computer Wins with " + computerMove)
          break;
        case 'player':
          playerWins += 1;
          console.log("Player Wins, computer had " + computerMove)
          break;
        default:
          console.log("Game finished in a " + winner)
      }
    }
    return ['player ' + playerWins, 'computer ' + computerWins];
}
