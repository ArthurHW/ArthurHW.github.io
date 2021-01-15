const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"
let theme

function switchTheme(){

    if (theme == 'white'){
        theme = 'black'
    } else{
        theme = 'white'
    }
    localStorage.setItem('theme', theme)

    updateTheme()
}

function updateTheme(){

    let body = document.getElementsByTagName('body')[0]
    let title = document.getElementById("title")
    let cards = document.getElementsByClassName("card")
    let header = document.getElementById("header")
    let themeSwitcher = document.getElementById("theme-switcher")

    if (theme == 'white'){

        themeSwitcher.classList.remove("dark")
        header.classList.remove("dark")
        for(card of cards){
            card.classList.remove("dark")
        }
        title.classList.remove("dark")
        body.classList.remove("dark")
        console.log('a')

    } else{
        themeSwitcher.classList.add("dark")
        header.classList.add("dark")
        for(card of cards){
            card.classList.add("dark")
        }
        title.classList.add("dark")
        body.classList.add("dark")
    }
}


startGame()

function startGame(){

    theme = localStorage.getItem('theme')
    
    initializeCards(game.createCardsFromTechs())
    console.log(theme)
    if (theme == null){
        theme = 'white'
        localStorage.setItem('theme', theme)
    }

    updateTheme()


}

function initializeCards(){
     let gameBoard = document.getElementById("gameBoard")

     gameBoard.innerHTML = ''
     
    game.cards.forEach((card) => {

        let cardElement = document.createElement('div')
        cardElement.id = card.id
        cardElement.classList.add(CARD)
        if (theme == 'black'){
            cardElement.classList.add('dark')
        }
        cardElement.dataset.icon = card.icon

        createCardContent(card, cardElement)

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement)

    })

}

function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)

}

function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face)
    if (face == FRONT){
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON)
        iconElement.src = "./assets/images/" + card.icon + ".png"
        cardElementFace.appendChild(iconElement)
    } else{
        cardElementFace.innerHTML = "&lt/&gt"
    }
    element.appendChild(cardElementFace)

}


function flipCard(){

    if(game.setCard(this.id)){
        this.classList.add("flip")

        if(game.secondCard){
            if(game.checkMatch()){
                game.clearCards()
                if(game.checkGameOver()){
                    let gameOverLayer = document.getElementById("gameOver")
                    
                    gameOverLayer.style.display = 'flex'

                }

            } else{
    
                setTimeout(()=>{
    
                let firstCardView = document.getElementById(game.firstCard.id)
                let secondCardView = document.getElementById(game.secondCard.id)
                
                firstCardView.classList.remove('flip')
                secondCardView.classList.remove('flip')
                game.unflipCards()
                }, 1000)
            }
        }
        
    }
}

function restart(){
    startGame()
    let gameOverLayer = document.getElementById('gameOver')
    gameOverLayer.style.display = 'none'
}
