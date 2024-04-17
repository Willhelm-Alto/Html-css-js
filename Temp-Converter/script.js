let celsius = document.getElementById('celsius')
let farenheit = document.getElementById('farenheit')
let kelvin = document.getElementById('kelvin')

function toFarKev() {
    let toFar = (parseFloat(celsius.value) * 9/5) + 32
    let toKev = parseFloat(celsius.value) + 273.15
    
    farenheit.value = toFar.toFixed(2)
    kelvin.value = toKev.toFixed(2)
}

function toCelKev() {
    let toCel = (parseFloat(farenheit.value) - 32) * 5/9
    let toKev = (parseFloat(farenheit.value) - 32) * 5/9 + 273.15

    celsius.value = toCel.toFixed(2)
    kelvin.value = toKev.toFixed(2)
}

function toCelFar() {
    let toCel = parseFloat(kelvin.value) - 273.15
    let toFar = (parseFloat(kelvin.value) - 273.15) * 9/5 + 32

    celsius.value = toCel.toFixed(2)
    farenheit.value = toFar.toFixed(2)
}

/* function Convert(tempString) {
    let signal
    let convertedTemp
    let hasFarenheit = tempString.includes('F')
    let hasCelsius = tempString.includes('C')

    if(hasCelsius){
        convertedTemp = parseFloat(tempString) * 9/5 + 32
        signal = 'ºF'
    } else if(hasFarenheit){
        convertedTemp = (parseFloat(tempString) - 32) * 5/9
        signal = 'ºC'
    } else if(typeof(tempString) !== String){
        throw 'Não é uma String'
    } else{
        throw 'Formato Invalido!'
    }
    
    return console.log(convertedTemp +  ` ${signal}`);
} 
try{
    Convert('67F')
    Convert('23C')
} catch(e){
    console.log(e);
}

*/