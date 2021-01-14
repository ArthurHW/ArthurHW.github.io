const sunMoonContainer = document.querySelector('.sun-moon-container')


document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
    let currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
})