/*
FOREACH ->(ITEM, INDEX, ARRAY)

Serve para iterar array.

item- é obrigatório, index e array é opcional.

index - posição do array.
*/ 

const users =[
    {name: "Gustavo", age:33, contact: "(53) 99131-0689"},
    {name: "'Mirian", age:34, contact: "(53) 99131-0898"},
    {name: "'Roberta", age:36, contact: "(53) 99131-0550"}
]

users.forEach((item, index) => {
    console.log(`${index + 1}) Nome: ${item.name}, Idade:${item.age}, Contato:${item.contact}`)
});