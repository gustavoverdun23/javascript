/* 
Operadores Ternário

? if (se)
: else (se não)
&& (if sem else)

Usar o ternário quando o codigo for uma linha só.
*/

const salary = 11000

/*if(salary <3000){
    console.log("O colaborador é Junior")
} else if (salary >= 3000 && salary <10000) {
    console.log("Ele é Senior")
} else {
    console.log("Ele é diretor")
}*/

// IF salary <3000 && console.log("O colaborador é Junior")

// IF/ELSE- salary <3000 ? console.log("O colaborador é Junior") : console.log ("Ele é Senior")

// ELSE IF
salary <3000 ? console.log("O colaborador é Junior") : salary >= 3000 && salary <10000 ? console.log("Ele é Senior") :  console.log("Ele é diretor")

