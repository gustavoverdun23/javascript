/* 
Estrutura de Repetição - Loop

FOR
   1 - INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial pra ela 
   2- CONDIÇÃO - Enquanto for true, o laço continuará iterando.
                 ele irá verificar antes de cada iteração.
   3- EXPRESSÃO FINAL- O que irá ocorrer a cada vez que o nosso laço der uma volta.


   for(inicialização ; condição; expressão final){
     seu código
   }

   length - tamanho do array
*/

const users = ["Mirian", "Gustavo", "Marta"]

for (let i = 0; i <users.length; i++){
      console.log(users[i])
}  