// console.log('Hello World');


// computerChoice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);

    let computerChoice;
    // computer choices are 0-rock, 1-paper, 2-scissors
    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }

    console.log("Computer :", computerChoice)
    return computerChoice;
}

// getComputerChoice();


// humanChoice
function getHumanChoice() {
    let humanChoice = prompt("What's your weapon against AI? Rock, Paper or Scissors?").toLowerCase();
    console.log("Human :", humanChoice);
    return humanChoice;
}

// getHumanChoice();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    // playround
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            // console.log("You Won!");
            console.log(`Your Score is: ${humanScore}`);
            console.log(`AI's Score is: ${computerScore}`)
        } else if (humanChoice == "scissors" && computerChoice == "rock" ||
            humanChoice == "paper" && computerChoice == "scissors" ||
            humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            // console.log("AI Won!, You lost the battle!");
            console.log(`Your Score is: ${humanScore}`);
            console.log(`AI's Score is: ${computerScore}`);
        } else {
            console.log("It's a tie!");
        }
    }

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Round ${i} finished!`);
        console.log("-------------------------------------");
    }

    if (humanScore > computerScore) {
        console.log(`After 5 rounds, You won by ${humanScore} points`);
    } else if (humanScore < computerScore) {
        console.log(`After 5 rounds, AI Won!, You lost by ${computerScore} points`);
    } else if (humanScore == computerScore) {
        console.log("After 5 rounds, It's still a tie, Try again")
    }
}


playGame();


