/* 
FILTER
 -Cria um novo array, a partir do array percorrido(array original)
 -Cria um novo array apenas com os elementos filtrados (elementos que a gente decidi)
 -Aceita 3 parâmetros 
   -item 
   -index
   -array completo

   return true -> Item atual passa pro novo array
   return false -> Item atual não passa pro novo array

*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newlist = list.filter( number =>{
    if(number >100){
        return true
    } else{
        return false
    }
})





const companies = [{ name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
{ name: 'Intel', marketValue: 1900, CEO: 'Gustavo', foundedOn: 1968 },
{ name: 'Facebook', marketValue: 20, CEO: 'Mirian', foundedOn: 2006 },
{name: 'Microsoft', marketValue: 300, CEO: 'Marta', foundedOn: 1979}
]


const newcompanies = companies.filter(company =>{
    if(company.marketValue <200 && company.foundedOn >1990){
        return true
    } else{
        return false
    }
})

console.log(newcompanies)
