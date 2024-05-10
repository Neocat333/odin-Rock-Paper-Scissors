function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

function getHumanChoice() {
    while (true) {
        const choice = prompt("Enter your choice:").toLowerCase()

        if (["rock", "paper", "scissors"].includes(choice)) {
            return choice
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return [0, 0]
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        return [1, 0]
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        return [1, 0]
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        return [1, 0]
    }
    return [0, 1]
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let humanChoice = ""
    let computerChoice = ""
    let round = []
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice()
        console.log("human: " + humanChoice)
        computerChoice = getComputerChoice()
        console.log("comp: " + computerChoice + "\n")
        round = playRound(humanChoice, computerChoice)
        humanScore += round[0]
        computerScore += round[1]
    }
    if (humanScore == computerScore) {
        console.log("tie")
    } else if (humanScore > computerScore) {
        console.log("human wins")
    } else {
        console.log("computer wins")
    }
}
playGame()
