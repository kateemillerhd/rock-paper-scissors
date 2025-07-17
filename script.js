const playGame = function () {
    let playerScore = 0;
    let computerScore = 0;

    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");

    const getRandomValue = function () {
        const randomValue = Math.random();
        if (randomValue < 0.33333) {
            return "rock";
        } else if (randomValue < 0.66666) {
            return "paper";
        } else {
            return "scissors";
        }
    };

    const getComputerChoice = function () {
        return getRandomValue();
    };

    const playRound = function (playerSelection) {
        if (playerScore >= 5 || computerScore >= 5) return;
        
        const computerSelection = getComputerChoice();
        let resultMessage = "";

        if (playerSelection === computerSelection) {
            resultMessage = `It's a tie! You both chose ${playerSelection}.`;
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerScore++;
            resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`
        } else {
            computerScore++;
            resultMessage = `You lose! ${computerSelection} beats ${playerSelection}.`
        }

        resultsDiv.textContent = resultMessage;
        scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

        if (playerScore === 5 || computerScore === 5) {
            const winner = playerScore === 5 ? "You won the game!" : "You lost the game!";
            const finalMessage = document.createElement("p");
            finalMessage.style.fontWeight = "bold";
            finalMessage.textContent = winner;
            resultsDiv.appendChild(finalMessage);
        }
    };

    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
};

playGame();
