const playGame = function () {
    let playerScore = 0;
    let computerScore = 0;

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

    const getHumanChoice = function (message) {
        let userInput = prompt(message);
        return userInput.toLowerCase();
    };

    const playRound = function () {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice("rock, paper, or scissors?");

        console.log("Player choice: " + humanChoice);
        console.log("Computer choice: " + computerChoice);

        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            console.log("You lose! Paper beats rock");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            playerScore += 1;
            console.log("You win! Rock beats scissors");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            playerScore += 1;
            console.log("You win! Paper beats rock");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            console.log("You lose! Scissors beats paper");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            console.log("You lose! Rock beats scissors");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            playerScore += 1;
            console.log("You win! Scissors beats paper");
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else {
            console.log("Invalid input");
        }

        console.log(`Current Score -> Player: ${playerScore}, Computer: ${computerScore}`);
    };

  

    console.log(`\nFinal Score -> Player: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a tie!");
    }
};

playGame();
