import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from "./snake.js"
import { update as updateFood, draw as drawFood} from "./food.js"
import { outsideGrid } from "./grid.js"

let gameOverLayer = document.getElementById('gameOverScreen')
let restartButton = document.getElementById('restartButton')
let score = 0
let topScore = localStorage.getItem('topScoreSnakeGame')
let scoreDisplay = document.getElementById('scoreDisplay')
let topScoreDisplay = document.getElementById('topScoreDisplay')

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById("game-board")

if (topScore == null){
    topScoreDisplay.innerHTML = 'HIGHEST SCORE: 0'
} else{
    topScoreDisplay.innerHTML = 'HIGHEST SCORE: ' + topScore
}


function main(currentTime){

    if (gameOver){
        gameOverLayer.style.display = 'flex'
        return
    }

    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    
    update()
    draw()
}


window.requestAnimationFrame(main)

function update(){
    updateSnake()
    if (updateFood()) {
        updateScore()
    }
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

restartButton.addEventListener('click', () => {
    window.location = './'
})

function updateTopScore(){
    topScore = score
    localStorage.setItem('topScoreSnakeGame', topScore)
    topScoreDisplay.innerHTML = 'HIGHEST SCORE: ' + topScore
}

function updateScore(){
    score++
    if (score > topScore){
        updateTopScore()
    }
    scoreDisplay.innerHTML = 'SCORE: ' + score.toString()
}

window.addEventListener('keydown',e => {
    if (gameOver){
        switch(e.key) {
            case 'Enter':
            case 'Escape':
            case ' ':
                window.location = './'
                break
        }
    }
})








