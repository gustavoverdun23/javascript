/* 
MAP => Mapear o nosso array.
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
      - item do array
      - index
      - array completo
*/

const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map(item => {
    return item *2
})
//console.log(number)
//console.log(double)

const list=[
    {name: 'Gustavo' , vip: true},
    {name: 'Mirian', vip: false},
    {name: 'Marta', vip: true},
    {name: 'Renata', vip:true},
    {name: 'Tiago', vip:false},
]

const newList = list.map(user =>{
    const newUser ={
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

    return newUser
})

console.log(newList)


const students = [
    {name: 'Gustavo' , testGrade: 7},
    {name: 'Mirian', testGrade: 5},
    {name: 'Marta', testGrade: 8},
    {name: 'Renata', testGrade:2},
    {name: 'Tiago', testGrade:1},
]

const newStudens = students.map(student =>{
    return{
        name: student.name,
        studentStatus: student.testGrade >= 5? 'Promovido' : 'Reprovado'
    }
})

console.log(newStudens)


