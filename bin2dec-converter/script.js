const inputBinary = document.getElementById('input-binary')
const inputDecimal = document.getElementById('input-decimal')
const displayBinary = document.getElementById('displayResultBinary')
const displayDecimal = document.getElementById('displayResultDecimal')

function decimalToBinary(){
    let decimalNumber = inputDecimal.value
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
    displayBinary.innerHTML =  'Binary = ' + resultado
}

function binaryToDecimal() {
    let binaryNumber = inputBinary.value
    let base = 1
    let result = 0
    binaryNumber = binaryNumber.split('').reverse().forEach(char => {
        result += base * Number(char)
        base *= 2
    })
    displayDecimal.innerHTML = 'Decimal = ' + result
}