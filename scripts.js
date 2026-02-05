const result = document.querySelector('.result')
const humanSocore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

const humanChoiceImg = document.querySelector('#human-choice')
const machineChoiceImg = document.querySelector('#machine-choice')

let humanPoints = 0
let machinePoints = 0

const images = {
    rock: 'img/pedra.png',
    paper: 'img/papel.png',
    scissors: 'img/tesoura.png'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    humanChoiceImg.src = images[human]
    machineChoiceImg.src = images[machine]

    console.log(`Você: ${human} - PC: ${machine}`)

    if (human === machine) {
        result.innerHTML = "Empate!"
    } else if ((human === 'rock' && machine === 'scissors') ||
               (human === 'paper' && machine === 'rock') ||
               (human === 'scissors' && machine === 'paper')) {

        humanPoints++
        humanSocore.innerHTML = humanPoints
        result.innerHTML = "Você ganhou!"

    } else {
        machinePoints++
        machineScore.innerHTML = machinePoints
        result.innerHTML = "Você perdeu para o PC!"
    }
}

