// Package import
var prompt = require('prompt-sync')();

const gameChoice = ["Rock", "Paper", "Scissor"];

let scoreComputer = 0;
let scoreUser = 0;

function computerPlay() {
    let computerChoiceInt = Math.floor(Math.random() * 3);
    return gameChoice[computerChoiceInt];
}

function userPlay() {
    let userChoiceNbr = prompt("Enter a choice number - Rock (0), Paper (1) or Scissor(2): ");
    return gameChoice[userChoiceNbr];
}

function gameLogic() {
    // Selection of move
    let computerChoice = computerPlay();
    let userChoice = userPlay();

    let result = computerChoice + userChoice;

    //set logic of the game and who won through result variable
    switch (result) {
        case "ScissorRock":
        case "PaperScissor":
        case "RockPaper":
            scoreUser++;
            console.log("User win!");
            break;
        case "ScissorPaper":
        case "RockScissor":
        case "PaperRock":
            scoreComputer++;
            console.log("Computer win!");
            break;
        case "PaperPaper":
        case "ScissorScissor":
        case "RockRock":
            console.log("It's a draw...");
            break;
        default:
            console.log("Error value in choices: [result == ??]");
            break;
    }

    // Debugg
    console.log(`[USER]${userChoice} | [COMPUTER]${computerChoice}`);
}


function calculateScore(nbrGame) {
    // while score max is not achieved then keep playing
    while (nbrGame > (scoreComputer + scoreUser)) {
        console.log(`[USER] Score = ${scoreUser} - [COMPUTER] Score = ${scoreComputer}`)
        gameLogic();
    }

    // Announce winner
    if (scoreComputer > scoreUser) {
        console.log("You lost against the computer...");
    } else if (scoreComputer < scoreUser) {
        console.log("You WON!!");
    } else {
        console.log("It's a draw....")
    }
}


function startGame(nbrGame) {
    console.log("Game starts....");

    calculateScore(nbrGame);

    console.log(`[USER] Score = ${scoreUser} - [COMPUTER] Score = ${scoreComputer}`)

    console.log("Game finished!");

}

startGame(5);

// set the choices
// set the scores for user and computer
// create a function for computer to make a move
// create a function for user to make a move
// create a function to calculate who won and scoring
// function to increment score
// test for one round the logic
// set game score max

