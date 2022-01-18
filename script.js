// Package import
var prompt = require('prompt-sync')();

const gameChoice = ["Rock", "Paper", "Scissor"];

let scoreComputer = 0;
let scoreUser = 0;

let computerChoice = "";
let userChoice = "";

function computerPlay() {
    let computerChoiceInt = Math.floor(Math.random() * 3);
    return gameChoice[computerChoiceInt];
}

function userPlay() {
    let userChoiceNbr = prompt("Enter a choice number - Rock (0), Paper (1) or Scissor(2)?");
    return gameChoice[userChoiceNbr];
}

function calculateScore() {
    // Selection of move
    computerChoice = computerPlay();
    userChoice = userPlay();

    let result = computerChoice + userChoice;

    switch (result) {
        case "ScissorRock":
            scoreUser++;
            console.log("User win!");
            break;
        case "PaperScissor":
            scoreUser++;
            console.log("User win!");
            break;
        case "RockPaper":
            scoreUser++;
            console.log("User win!");
            break;
        case "ScissorPaper":
            scoreComputer++;
            console.log("Computer win!");
            break;
        case "RockScissor":
            scoreComputer++;
            console.log("Computer win!");
            break;
        case "PaperRock":
            scoreComputer++;
            console.log("Computer win!");
            break;
        case "PaperPaper":
            console.log("It's a draw...");
            break;
        case "ScissorScissor":
            console.log("It's a draw...");
            break;
        case "RockRock":
            console.log("It's a draw...");
            break;
    }

    // Debugg
    console.log(result);
}


calculateScore();

// set the choices
// set the scores for user and computer
// create a function for computer to make a move
// create a function for user to make a move
// create a function to calculate who won and scoring
// function to increment score
// test for one round the logic
// set game score max

