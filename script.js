const cpuChoice = document.getElementById('computer-choice')
const usrChoice = document.getElementById('user-choice')
const showResult = document.getElementById('result')

let usr
let cpu
let result

// Listen for clicks on all three buttons. This queries for buttons, so
// any buttons made later will be included. We could have added an id or class to
// the buttons to specify just these.
const usrChoices = document.querySelectorAll('button')

usrChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener('click', (e) => {
        usr = e.target.id
        usrChoice.innerHTML = usr
        getCpuChoice()
        getResult()
    })
)

function getCpuChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    const choices = ['rock', 'paper', 'scissors']
    cpu = choices[randomNumber]
    cpuChoice.innerHTML = cpu
}

function getResult() {
    if (usr == cpu) {
        result = 'tie'
    } else if (
        (usr == 'rock' && cpu == 'scissors') ||
        (usr == 'paper' && cpu == 'rock') ||
        (usr == 'scissors' && cpu == 'paper')
    ) {
        result = 'You win!'
    } else {
        result = 'Sorry, you lose!'
    }
    showResult.innerHTML = result
}
