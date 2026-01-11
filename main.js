const rpsBtns = document.querySelectorAll('button');
const roundStat = document.querySelector('#round');
const humanStat = document.querySelector('#human');
const computerStat = document.querySelector('#computer');
const humanSelection = document.querySelector('.humanSelection');
const computerSelection = document.querySelector('.computerSelection');
const heading = document.querySelector('h1');
const headingPara = document.querySelector('.header > p');
const log = document.querySelector('.right > p');

let humanScore = 0;
let computerScore = 0;
let round = 0;

for (const btn of rpsBtns) {
	btn.addEventListener('click', playRound);
}

// computerChoice
function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);

	let computerChoice;
	switch (randomNumber) {
		case 0:
			computerChoice = 'rock';
			break;
		case 1:
			computerChoice = 'paper';
			break;
		case 2:
			computerChoice = 'scissors';
			break;
	}

	console.log('Computer :', computerChoice);
	return computerChoice;
}

// playRound
function playRound(humanChoice, computerChoice) {
	humanChoice = this.id;
	console.log('human :', humanChoice);
	computerChoice = getComputerChoice();

	round++;
	roundStat.textContent = round;
	humanSelection.textContent = humanChoice;
	computerSelection.textContent = computerChoice;

	if (
		(humanChoice == 'rock' && computerChoice == 'scissors') ||
		(humanChoice == 'scissors' && computerChoice == 'paper') ||
		(humanChoice == 'paper' && computerChoice == 'rock')
	) {
		humanScore++;
		// console.log("You Won!");
		humanStat.textContent = humanScore;
		log.innerText = `
            round: ${round}\n\n
            your choice: ${humanChoice.toUpperCase()}\n  
            your score: ${humanScore}\n\n 
            computer choice: ${computerChoice.toUpperCase()}\n
            computer score: ${computerScore}\n\n
            YOU WON!!!\n
        `;
		console.log(`Your Score is: ${humanScore}`);
		console.log(`AI's Score is: ${computerScore}`);
	} else if (
		(humanChoice == 'scissors' && computerChoice == 'rock') ||
		(humanChoice == 'paper' && computerChoice == 'scissors') ||
		(humanChoice == 'rock' && computerChoice == 'paper')
	) {
		computerScore++;
		computerStat.textContent = computerScore;
		// console.log("AI Won!, You lost the battle!");
		log.innerText = `
            round: ${round}\n\n
            your choice: ${humanChoice.toUpperCase()}\n  
            your score: ${humanScore}\n\n
            computer choice: ${computerChoice.toUpperCase()}\n
            computer score: ${computerScore}\n\n 
            AI WON!!!\n
        `;
		console.log(`Your Score is: ${humanScore}`);
		console.log(`AI's Score is: ${computerScore}`);
	} else {
		console.log("It's a tie!");
		log.innerText = `
            round: ${round}\n\n
            both of you chose same\n
            IT'S A TIE.\n\n 
            your score: ${humanScore}\n\n
            computer score: ${computerScore}\n\n 
        `;
	}

	if (humanScore === 5 || computerScore === 5) {
		for (const btn of rpsBtns) {
			btn.removeEventListener('click', playRound);

			if (humanScore > computerScore) {
				heading.textContent = 'you won!';
				heading.style.color = '#9ece6a';
				headingPara.textContent = `after ${round} rounds, you won by ${humanScore - computerScore} ${humanScore - computerScore > 1 ? 'points' : 'point'}`;
			} else if (humanScore < computerScore) {
				heading.textContent = 'you lost!';
				heading.style.color = '#f7768e';
				headingPara.textContent = `after ${round} rounds, AI Won!, you lost by ${computerScore - humanScore} ${computerScore - humanScore > 1 ? 'points' : 'point'}`;
			}
		}
	}
}
