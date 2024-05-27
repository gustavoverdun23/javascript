

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Marta', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Mirian', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Gustavo', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Renata', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Tiago', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Kassia', foundedOn: 1976 }
]

//Adicionar 10% de valor de mercado a todas as companhias ->Map
//Filtrar somente companhias fundadas abaixo de 1990 ->Filter
//Somar o valor de mercado das restantes ->Reduce

const marketValueOldCompanies = companies.map(company => {
    company.marketValue = company.marketValue + (company.marketValue / 10)

    return company
}).filter(company => company.foundedOn < 1990).reduce((acc, company) => acc + company.marketValue, 0)



console.log(marketValueOldCompanies)