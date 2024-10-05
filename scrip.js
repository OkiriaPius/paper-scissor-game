/* ---Create a new Git repository for your project.
Create a blank HTML document with a script tag.
Check if JavaScript is linked correctly:
Write console.log("Hello World") in JavaScript.
Check if “Hello World” is logged in the browser console once you open your webpage.
--------- 
console.log("Hello World");
*/

/* a function that randomly returns rock , paper, or scissor----------
1. name a function getComputerChoice
using Math.random method. ---- */

let computerScore = 0;
const getComputerChoice = ()=>{
    const computerInput = Math.random()*3;

    if (computerInput >= 0 && computerInput < 1){
        return "paper";
    }else if (computerInput >= 1 && computerInput < 2){
        return "scissors";
    }else {
        return "rock";
    }

}


/* ---- a function that takes the user choice and returns it.

1.Create a new function named getHumanChoice.
2.getHumanChoice will return one of the valid choices depending on what the user inputs.
Hint: Use the prompt method to get the user’s input. ---- */
let humanInput;
let humanScore = 0;
const getHumanChoice = ()=>{
   humanInput = prompt("Eeh What is your choice?" ).toLowerCase();
   return humanInput;
}


/* ----  Your game will be played round by round.write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

1.Create a new function named playRound.
2.Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
3.Make function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the roud winner.
-------------------  */

const playRound = (humanChoice, computerChoice)=>{ 
    console.log("human:",humanChoice , "computer:", computerChoice);
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        console.log("paper beats rock","human wins with:",humanScore);
    }else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1;
        console.log("paper beats rock, computer wins with:", computerScore);
    }else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        console.log("scissor cuts paper, human wins with:", humanScore);
    }else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1;
        console.log("scissor cuts paper, computer wins with:", computerScore);
    }else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        console.log("rock beats scissor, computer wins with:", computerScore);
    }else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore += 1;
        console.log("rock beats scissor, human wins with:", humanScore);
    }else if (humanChoice === computerChoice) {
        console.log("It is a draw , no one won human:", humanScore, "computer:",computerScore);
    }
}
const computerSelect = getComputerChoice();
const humanSelect = getHumanChoice();
playRound( humanSelect, computerSelect);
console.log(playRound());