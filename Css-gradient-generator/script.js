const body = document.querySelector('body')
let code = document.querySelector('textarea')
let colorA = document.querySelector('#color-a')
let colorB = document.querySelector('#color-b')
let directions = document.querySelectorAll(".button-container button")

let currentDirection = 'to bottom'

function setDirection(value, _this){
    for(let i of directions){
        i.classList.remove('active')
    }
    _this.classList.add('active')
    currentDirection = value
}

function apply(){
    body.style = `background-image: linear-gradient(${currentDirection}, ${colorA.value}, ${colorB.value})`
    code.innerText = `background-image: linear-gradient('${currentDirection}', ${colorA.value}, ${colorB.value})`
}

apply()

