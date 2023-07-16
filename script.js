const rock = document.getElementById("rock-btn")
const paper = document.getElementById("paper-btn")
const scissor = document.getElementById("scissor-btn")
const message = document.getElementById("message")
const showPlayerChoice = document.getElementById("player-choice")
const showComputerChoice = document.getElementById("computer-choice")
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
const restartBtn = document.getElementById("new-btn")

let playerChoice = ""
let comChoice = ""

let playerCount = 0
let computerCount = 0

const options = ["rock", "paper", "scissor"]

rock.addEventListener("click", function(){
    playerChoice = "rock"
    let comChoice = computerChoice()
    let result = compare()
    message.textContent = result
    showComputerChoice.textContent = `${comChoice}`
    showPlayerChoice.textContent = `${playerChoice}`

})
paper.addEventListener("click", function(){
    playerChoice = "paper"

    let comChoice = computerChoice()
    let result = compare()
    message.textContent = result
    
    showComputerChoice.textContent = `${comChoice}`
    showPlayerChoice.textContent = `${playerChoice}`
})
scissor.addEventListener("click", function(){
    playerChoice = "scissor"
    let comChoice = computerChoice()
    let result = compare()
    // console.log(result)
    message.textContent = result
    showComputerChoice.textContent = `${comChoice}`
    showPlayerChoice.textContent = `${playerChoice}`
})

function computerChoice() {
    const randomChoice = Math.floor(Math.random() * 3)

     comChoice = (options[randomChoice])
    // console.log(comChoice)
    return comChoice

}

function compare() {
    if ((playerChoice === "rock" && comChoice === "scissor") || (playerChoice === "paper" && comChoice === "rock") || (playerChoice === "scissor" && comChoice === "paper"))
    {
        playerScore.textContent = ++playerCount
        return "Player won the game 🥳"

    }
    else if((playerChoice === "rock" && comChoice === "paper") || (playerChoice === "paper" && comChoice === "scissor") || (playerChoice === "scissor" && comChoice === "rock"))
    {
        computerScore.textContent = ++computerCount
        return "Computer won the game 😭"
        
    }
    else {
        return "Its a draw"

    }

}

restartBtn.addEventListener("click", function() {
    playerCount = 0
    computerCount = 0
    playerScore.textContent = 0
    computerScore.textContent = 0
    message.textContent = ""
    showComputerChoice.textContent = ""
    showPlayerChoice.textContent = ""
})

