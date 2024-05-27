/* 
Functions / funções

função void (vazia), não retorna nada. Executa o que tem que executar dentro da função e acabou, mas não retorna nada para quem chamou.

função return, retorna um valor para quem chamou a função. tem que ser sempre a ultima coisa da função, porque quando encontra o return ela para de rodar.
*/

//function sum(value, value2){ // void
//console.log(value + value2)
//}


//function sub(value, value2){ //return
//const result = value - value2
// return result
//}

//sum(10,20)


//const myResult= sub(20, 5)
//console.log(myResult + " resultado")




/* 
Calcula Desconto:
Todos os produtos acima de R$ 30,00 tem desconto de 10%.
*/

const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0
let finalValueWithoutDiscount = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}


cart.forEach(value => {

    finalValueWithoutDiscount = finalValueWithoutDiscount + value

    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - discount)
    } else {
        finalValueWithDiscount = finalValueWithDiscount + value
    }
});

const amountSaved = finalValueWithoutDiscount - finalValueWithDiscount


console.log(`O valor final da compra foi de R$:${finalValueWithoutDiscount.toFixed(2)},
porém você teve desconto, irá pagar apenas R$:${finalValueWithDiscount.toFixed(2)},
você economizou R$:${amountSaved.toFixed(2)}. `)
