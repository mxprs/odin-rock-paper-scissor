
let scoreComputer = 0;
let scoreUser = 0;

function computerPlay() {
    const gameChoice = ["Rock", "Paper", "Scissor"];
    let computerChoiceInt = Math.floor(Math.random() * 3);
    return gameChoice[computerChoiceInt];
}

function gameLogic(userMove) {
    // Selection of move
    let computerChoice = computerPlay();
    let userChoice = userMove;

    let result = computerChoice + userChoice;

    //set logic of the game and who won through result variable
    switch (result) {
        case "ScissorRock":
        case "PaperScissor":
        case "RockPaper":
            scoreUser++;
            //console.log(`User win! [${userChoice} vs ${computerChoice}]`);
            resultDiv.textContent = `User win! [${userChoice} vs ${computerChoice}]`;
            break;
        case "ScissorPaper":
        case "RockScissor":
        case "PaperRock":
            scoreComputer++;
            //console.log(`Computer win! [${userChoice} vs ${computerChoice}]`);
            resultDiv.textContent = `Computer win! [${userChoice} vs ${computerChoice}]`;
            break;
        case "PaperPaper":
        case "ScissorScissor":
        case "RockRock":
            //console.log("It's a draw...");
            resultDiv.textContent = "It's a draw...";
            break;
        default:
            console.log("Error value in choices: [result == ??]");
            break;
    
        }
    }

//-------------------------------------------------------

const btns = document.querySelectorAll('button');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
btns.forEach(btn => btn.addEventListener('click', function(){
    gameLogic(btn.textContent);
    if (scoreUser + scoreComputer === 5 && scoreUser > scoreComputer) {
        scoreDiv.style.color = 'green';
        scoreDiv.textContent = `User wins with a score of: ${scoreUser}/${scoreComputer}`;
        
        // reset UI & params
        scoreUser = 0;
        scoreComputer = 0;
        resultDiv.textContent = '';

    } else if (scoreUser + scoreComputer === 5 && scoreUser < scoreComputer) {
        scoreDiv.style.color = 'red';
        scoreDiv.textContent = `Computer wins with a score of: ${scoreComputer}/${scoreUser}`;
        
        // reset UI & params
        scoreUser = 0;
        scoreComputer = 0;
        resultDiv.textContent = '';
    }
    
    
})) 
    
    // while sum(scoreComputer, scoreUser) = 5(X)
    // then keep playing
    // after one play update the score div to display score
    