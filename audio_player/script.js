let som = document.getElementById("som")
let go = document.getElementById("play")
let wait = document.getElementById("pause")

function backward(){
    som.currentTime -= 15
}

function slowDown(){
    som.playbackRate -= 0.1
}

function play(){
    som.play()
    go.style.display = "none"
    wait.style.display="inline-block"
}

function pause(){
    som.pause()
    go.style.display = "inline-block"
    wait.style.display = "none"
}

function stop(){
    som.pause()
    som.currentTime = 0
    go.style.display = "inline-block"
    wait.style.display = "none"
}
function speedUp(){
    som.playbackRate += 0.1
}

function forward(){
    som.currentTime += 15
}