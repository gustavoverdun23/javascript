/* 
Estrutura de repetição 
    FOR IN- Serve para iterar objetos.
*/

const users = { name:"Gustavo", age: 33, street: "Rua dos Bobos"}

//users.name -->GUSTAVO
// users["name"]->Gustavo

for (const key in users) {
    console.log(`${key} : ${users[key]}`)
}

