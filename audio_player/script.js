const audio = document.getElementById('music')
const start = document.querySelector('.start')
const end = document.querySelector('.end')
const progressBar = document.querySelector('.progress-bar')
const now = document.querySelector('.now')
const go = document.getElementById("play")
const wait = document.getElementById("pause")
const playback = document.querySelector('.playback-rate-display')
const background = document.querySelector('#background')

function conversion (value) {
    let minute = Math.floor(value / 60)
    minute = minute.toString().length === 1 ? ('0' + minute) : minute
    let second = Math.round(value % 60)
    second = second.toString().length === 1 ? ('0' + second) : second
    return `${minute}:${second}`
}

function updatePlaybackRateDisplay() {
    playback.innerHTML = 'Audio Speed: ' + String(audio.playbackRate.toFixed(1))
}

background.addEventListener('click', () => {
    if (audio.paused) {
        play()
    } else {
        pause()
    }
})

progressBar.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    console.log(coordEnd)
    console.log(coordStart)
    let p = (coordEnd - coordStart) / this.offsetWidth
    now.style.width = p.toFixed(3) * 100 + '%'

    audio.currentTime = p * audio.duration
    play()
})

setInterval(() => {
    start.innerHTML = conversion(audio.currentTime)
    now.style.width = audio.currentTime / audio.duration.toFixed(3) * 100 + '%'
}, 1000)


function backward(){
    audio.currentTime -= 15
}

function slowDown(){
    audio.playbackRate -= 0.1
    updatePlaybackRateDisplay()
}

function play(){
    audio.play()
    go.style.display = "none"
    wait.style.display="inline-block"
}

function pause(){
    audio.pause()
    go.style.display = "inline-block"
    wait.style.display = "none"
}

function stop(){
    audio.pause()
    audio.currentTime = 0
    go.style.display = "inline-block"
    wait.style.display = "none"
}
function speedUp(){
    audio.playbackRate += 0.1
    updatePlaybackRateDisplay()
}

function forward(){
    audio.currentTime += 15
}

function updateProgressBar() {
    end.innerHTML = conversion(audio.duration)
    start.innerHTML = conversion(audio.currentTime)
}

updateProgressBar()