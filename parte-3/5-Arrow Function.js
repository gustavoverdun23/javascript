/* 
Functions / funções

function padrão -> function() {}
arrow function -> () => {}

Não escrevemos "function".
Além disso, usamos o sinal "=>" para criá-la,
o que lembra uma flecha, fazendo jus ao nome"Arrow Functions".
*/

function sayMyName(name){ //function
    return `Seu Nome é ${name}`
}


const sayMyName2 = (name) => `Seu Nome é ${name}` //arrow function
 
    

console.log(sayMyName("Gustavo"))
console.log(sayMyName2("Mirian"))