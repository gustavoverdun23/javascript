/* 
operadores type of e delete

typeof -> tipo do dado
delete -> deleta algum parametro
*/

const myObject ={
    name: "Gustavo",
    age: 30,
    address:"Rua dos bobos, n0"
}
delete myObject.address
console.log(typeof myObject)