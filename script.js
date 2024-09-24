"use strict";

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice = prompt("Select Rock, Paper, or Scissors").toLowerCase();
    if (!choices.includes(choice)) {
        alert("Not a correct choice.");
        return;
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`A draw, ${humanChoice} and ${computerChoice} are the same`);
        return 0;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert(`You lose, ${humanChoice} loses to ${computerChoice}`);
        return -1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert(`You win, ${humanChoice} beats ${computerChoice}`);
        return 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert(`You win, ${humanChoice} beats ${computerChoice}`);
        return 1;

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert(`You lose, ${humanChoice} loses to ${computerChoice}`);
        return -1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert(`You lose, ${humanChoice} loses to ${computerChoice}`);
        return -1;
    } else {
        alert(`You win, ${humanChoice} beats ${computerChoice}`);
        return 1;
    }
}

function playGame(numberOfRounds) {
    let humanChoice;
    let computerChoice;
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < numberOfRounds; i++) {
        humanChoice = getHumanChoice();
        while (humanChoice === undefined) {
            humanChoice = getHumanChoice();
        }
        computerChoice = getComputerChoice();
        let status = playRound(humanChoice, computerChoice);
        if (status === 1) {
            humanScore++;
        } else if (status === -1) {
            computerScore++;
        }
    }
    alert(`Final score is ${humanScore} - ${computerScore}`);
}

playGame(5);
