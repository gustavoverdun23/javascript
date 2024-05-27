/* 
AddEventListener
*/
const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

function troqueiValor(abacate){
    console.log(abacate)
}

select.addEventListener("change", troqueiValor)


const result = Math.pow(2,6)
console.log(result)