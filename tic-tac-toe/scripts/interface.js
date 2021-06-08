let player1 = "Player 1"
let player2 = "Player 2"

let scorePlayer1 = 0
let scorePlayer2 = 0


document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function updateScores(){
    let scoreDisplay1 = document.getElementById("scorePlayer1")
    let scoreDisplay2 = document.getElementById("scorePlayer2")

    scoreDisplay1.innerHTML = scorePlayer1
    scoreDisplay2.innerHTML = scorePlayer2
}

function changeNamePlayer1(){
    player1 = document.getElementById("player1").value + " ⚔️"
    let display = document.getElementById("displayPlayer1")
    display.innerHTML = player1 
}

function changeNamePlayer2(){
    player2 = document.getElementById("player2").value + " 🛡️"
    let display = document.getElementById("displayPlayer2")
    display.innerHTML = player2 
}

function handleClick(event) {


    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {

        setTimeout(() => {
            let winner
            if (playerTime == 0){
                winner = player1
                scorePlayer1++
            } else{
                winner = player2
                scorePlayer2++
            }
            updateScores()
            gameOverFunction(winner)
        }, 10);

    };
    updateSquare(postion);
}

function gameOverFunction(winner){
    let gameOverLayer = document.getElementById('gameOver')
    let winnerMessageDisplay = document.getElementById('winnerMessage')

    gameOverLayer.style.display = 'flex'
    winnerMessageDisplay.innerHTML = `O Jogo Acabou => O Vencedor foi ${winner}`

}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        } else if(square.firstChild != undefined){
            square.removeChild(square.firstChild)
        }
    })

}

function playAgain(){
    let gameOverLayer = document.getElementById('gameOver')
    gameOverLayer.style.display = 'none'

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    updateSquares();
}