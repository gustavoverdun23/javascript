/* 
REDUCE 
  -Retorna um valor( pode ser um novo array, um objeto, string, number, etc.)
  -Aceita 4 parâmetros
    -acumulador -> uma variável onde nós vamos adicionando valor dentro dela, mas no reduce eu preciso avisar qual é o valor inical do acumulador.
    -valor atual (item)
    -index
    -array completo

No Reduce tem dois valores obrigatórios que é o acamulador e o valor atual.    
*/

const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)



const companies = [{ name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
{ name: 'Intel', marketValue: 1900, CEO: 'Gustavo', foundedOn: 1968 },
{ name: 'Facebook', marketValue: 2000, CEO: 'Mirian', foundedOn: 1950 },
{name: 'Microsoft', marketValue: 300, CEO: 'Marta', foundedOn: 1979}
]

const marketValue = companies.reduce((acc, value) =>{
    return acc + value.marketValue
}, 0)



const cart = [{productName: 'Abóbora', pricePerKg: 5, Kg: 1},
{productName: 'Pepino', pricePerKg: 3.55, Kg: 1.3},
{productName: 'Limão', pricePerKg: 1.2, Kg: 2},
{productName: 'Abacate', pricePerKg: 5.4, Kg: 1.67},
{productName: 'Morango', pricePerKg: 11.9, Kg: 3}
]

const finalValue = cart.reduce((acc, value) =>{
    const result = value.pricePerKg * value.Kg
    return acc + result
}, 0)

console.log(`O valor total da compra deu: ${finalValue.toFixed(2)}`)