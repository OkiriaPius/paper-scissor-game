const containerDiv = document.querySelector(".container");
const announcing = document.querySelector(".announcing");
const annoucingWinner = document.querySelector(".annoucing-winner");

let computerScore = 0;
const buttons = document.querySelectorAll("button");
const displayResult = document.querySelector(".result-display");

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
    
let humanScore = 0;
const getHumanChoice = ()=>{
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click",()=>{
            getButtonId(button);
        });
        
    });
    function getButtonId(button) {
        return button.id;
    }
 } 
 


const playGame = ()=>{

    buttons.forEach((button) => {
        button.addEventListener("click",() => {
            
            const playRound = (humanChoice, computerChoice)=>{ 
                humanChoice = button.id;
                    announcing.innerText = `human: ${humanChoice}, computer: ${computerChoice}, `;
                if (humanChoice === "paper" && computerChoice === "rock") {
                    humanScore += 1;
                    announcing.innerText += `  paper beats rock, human wins with: ${humanScore}`;
                }else if (computerChoice === "paper" && humanChoice === "rock") {
                    computerScore += 1;
                    announcing.innerText += `  paper beats rock, computer wins with: ${computerScore}`;
                }else if (humanChoice === "scissors" && computerChoice === "paper") {
                    humanScore += 1;
                    announcing.innerText += `  scissor cuts paper, human wins with: ${humanScore}`;
                }else if (computerChoice === "scissors" && humanChoice === "paper") {
                    computerScore += 1;
                    announcing.innerText += `  scissor cuts paper, computer wins with: ${computerScore}`;
                }else if (humanChoice === "scissors" && computerChoice === "rock") {
                    computerScore += 1;
                    announcing.innerText += `  rock beats scissor, computer wins with: ${computerScore}`;
                }else if (computerChoice === "scissors" && humanChoice === "rock") {
                humanScore += 1;
                    announcing.innerText += `  rock beats scissor, human wins with: ${humanScore}`;
                }else if (humanChoice === computerChoice) {
                    announcing.innerText += `  It is a draw , no one won; human:  ${humanScore}, computer: ${computerScore}`;
                }else {
                    //incase of wrong input.
                    annoucingWinner.innerText = "Invalid Input";
                }

                displayResult.innerHTML = `<h2>Final Scores:</h2>
                <p>human got: <span>${humanScore}</span>, computer got: <span>${computerScore}</span></p>`;
                containerDiv.appendChild(displayResult);
                   
    
                if (computerScore == 5) {
                    annoucingWinner.innerText = "WOW! COMPUTER WON";
                }
                if (humanScore == 5) {
                    annoucingWinner.innerText = "WOW! YOU WON";
                }
            }
            
            const humanSelect = getHumanChoice();
            const computerSelect = getComputerChoice();
        
                 
            playRound(humanSelect, computerSelect );
            console.log(button.id);
            
        
        });
            
    });

}
playGame();

   
    
if (computerScore == 5) {
    annoucingWinner.innerText = "WOW! COMPUTER WON";
}
if (humanScore == 5) {
    annoucingWinner.innerText = "WOW! YOU WON";
}