

let inputBlock = document.getElementById('input')
let display = document.getElementById('displayResult')

function decimalToBinary(){
    let decimalNumber = inputBlock.value
    let auxiliar
    let iterations = 0
    let resultado = ''
    let rest
    let bit
    let negative 
    
    if (decimalNumber < 0){
        negative = true
        decimalNumber = Math.abs(decimalNumber)
    } 

    else if (decimalNumber == 0){
        resultado = '0'
    }

    auxiliar = decimalNumber

    if (decimalNumber >= 1){
        do {
            auxiliar = auxiliar / 2
            iterations++
        } while (auxiliar >= 1)
        
    }
    console.log(iterations)

    for (let i = 0; i < iterations; i++){
        rest = decimalNumber % 2
        if (rest == 1) {
            decimalNumber -=1
            bit = '1'
        } else {
            bit = '0'
        }
        decimalNumber /= 2
        resultado = resultado + bit
        
    }

    if (negative){
        resultado += " 1"
    } else {
        resultado += " 0"
    }

    resultado = resultado.split('').reverse().join('')
    display.innerHTML =  resultado
}