console.log("o que eu quiser")

/* 
variaveis 
let
const
*/

const abacate = 40

console.log(abacate)

/* 
strings ("", '', ``)
*/

const texto1 = "ola js"
const texto2 = 'tudo bem'
const texto3 = `eu sou gustavo`

console.log(texto1)
console.log(texto2)
console.log(texto3)

/*
template string/literals
*/
const myAge = 30
const myCar = `Audi`
const myString = `Minha idade é ${myAge}, to ficando velho mas to andando de ${myCar}.`

console.log(myString)

/* 
Numbers
*/

const number1 = 32 / 2
console.log(number1)

/*
Object (objetos)
*/

const gustavo = {
    name: "Gustavo",
    age: "23",
    address: {
        street: "frei caneca",
        number: 464,
        country: "brasil"
    }
}

gustavo.name = "mirian"

console.log(gustavo)

/* 
Null & Undefined
*/

const user = {
    nome: "Gustavo",
    idade: 30,
    nomeDoConjuge: "Mirian",
    id: null
}

console.log(user.abacate)

/* 
Array
*/

const users = [
    {
        nome: "Gustavo",
        idade: 30,
        nomeDoConjuge: "Mirian",
        id: null,
    },

    {
        nome: "Mirian",
        idade: 23,
        nomeDoConjuge: "Gustavo",
        id: null,
    },
]

const number = [25, 250, 500]

console.log(number[1])

/* 
if & else
*/

const notaDoAluno = 3
const notaDeCorte = 5

if (notaDoAluno > notaDeCorte) {
    console.log("Parabéns,vocêp passou de ano.")
} else {
    console.log("Você foi reprovado")
}

/* 
functions (função)
*/

function nomeNaTela() {
    console.log("Gustavo")
}
nomeNaTela()

/* 
document -> HTML

getElementByld - Trás um elemento pelo id
*/
const input = document.getElementById("main-input")

console.log(input)
/* 
getElementByClassName - trás todos os elementos com essa classe
*/

const elements = document.getElementsByClassName("paragraph-js")

console.log(elements)

/*
getElementByTagName - trás todos os elementos com essa tag
*/

const tags = document.getElementsByTagName("h1")
console.log(tags)

/* 
queryselector - trás um elemento, o primeiro que encontrar
*/
const seletor = document.querySelector("#main-input")
console.log(seletor)
/* 
alterando elementos
*/
const doc = document.querySelector("#main-input")

doc.placeholder = "Agora é esse texto"

console.log(doc.placeholder)

/* 
alterando textos
textcontent- pega todo conteúdo / só html
innertext- pega apenas o texto / leva em conta css
innerhtml- permite adicionar html e texto / trás tudo
*/

const texto = document.querySelector(".paragraph-js")


console.log(texto.textContent)
console.log(texto.innerText)
console.log(texto.innerHTML)

/* 
alterando css (estilos)
*/

const button = document.querySelector(".main-button")
button.style.color = "white"


