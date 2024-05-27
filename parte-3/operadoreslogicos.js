/* 
operadores lógicos:
&& -> E -> Pessoa exigente 
    true && true = true
    ture && false= false
    false && false = false

|| -> OU -> Tanto faz 
    true || true = true
    true || false = true
    false|| false = false 
    

! -> negação 
   !true = false
   !false= true     
*/

const digitarASenha = true
const digitarOToken = true
const numeroDaConta = false

if(! (digitarASenha && digitarOToken && numeroDaConta )){
    console.log("logado com sucesso")
} else{
    console.log ("autenticação falhou")
}