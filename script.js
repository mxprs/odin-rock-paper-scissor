// Package import
var prompt = require('prompt-sync')();

const gameChoice = ["Rock", "Paper", "Scissor"];

let scoreComputer = 0;
let scoreUser = 0;

let computerChoice = "";
let userChoice = prompt("Enter a choice number - Rock (0), Paper (1) or Scissor(2)?");

function computerPlay() {
    let computerChoiceInt = Math.floor(Math.random() * 3);
    return gameChoice[computerChoiceInt];
}

computerChoice = computerPlay();

console.log(userChoice);

// set the choices
// set the scores for user and computer
// 