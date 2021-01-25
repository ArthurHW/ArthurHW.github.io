import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from "./snake.js"
import { update as updateFood, draw as drawFood} from "./food.js"
import { outsideGrid } from "./grid.js"

let gameOverLayer = document.getElementById('gameOverScreen')
let restartButton = document.getElementById('restartButton')

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById("game-board")

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
    updateFood()
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










