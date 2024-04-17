const divs = document.querySelectorAll(".container div")
const btn = document.querySelector("#generate")

let types = [
    'semi-circle', 
    'semi-circle-2', 
    'semi-circle-3',
    'semi-circle-4', 
    'circle', 
    'triangle', 
    'triangle-2',
    'triangle-3',
    'triangle-4',
    'square'  
]
let colors = ['#0e60e6', '#e6c60e', '#0ee6c6', '#e6880e', '#e82910', '#10e35a', '#64e310']

let generateDivs =  () => {
    divs.forEach((div) =>{
        div.className = ""
        let i = Math.floor(Math.random() * types.length)
        let j = Math.floor(Math.random() * colors.length)
        div.classList.add(types[i])
        div.style.backgroundColor = colors[j] 
    })
}
   
btn.addEventListener("click", generateDivs)