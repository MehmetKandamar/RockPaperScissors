let ending = window.prompt("Determine ending score");
let userScore = 0;
let computerScore = 0;
const userScore1 = document.getElementById("user-score");
const computerScore1 = document.getElementById("computer-score");
const result_p = document.querySelector(".result >p");
const rock1 = document.getElementById("r");
const paper1 = document.getElementById("p");
const scissors1 = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
   const randomNumber = Math.floor(Math.random()*3);
   return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore1.innerHTML= userScore;
  computerScore1.innerHTML = computerScore;

  result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ".You got this round!";
  if (userScore == ending && computerScore < ending){
      userScore -= userScore;
      computerScore -= computerScore;
      result_p.innerHTML = "GAME OVER!!!  YOU WON...";
  }
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore1.innerHTML= userScore;
    computerScore1.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ".Computer got this round!";

    if (computerScore == ending && userScore < ending){
        userScore -= userScore;
        computerScore -= computerScore;
        result_p.innerHTML = "GAME OVER!!!  YOU LOST..... ";
    }

}

function draw(){
    userScore1.innerHTML= userScore;
    computerScore1.innerHTML = computerScore;
    result_p.innerHTML = "Both of you made same move there is a draw";
}

function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
    break;
    case"rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
        break;
}

}

function main() {
    rock1.addEventListener('click', function () {
        game('r');
    })
    paper1.addEventListener('click', function () {
        game('p');
    })
    scissors1.addEventListener('click', function () {
        game('s');
    })
}
main();