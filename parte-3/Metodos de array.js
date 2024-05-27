/* 
Array's
 -push -> Adiciona mais um item ao array
 -length ->Mostra o tamanho do array
 -sort ->Orgnaiza o array
 -delete -> Deleta o item de uma posição do array
 -every -> Esse método testa se todos os elementos do array passam por uma condição.Passamos uma função que retorna true ou false.Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true. Se algum item não estiver de acordo, ele retornará false.
 -some -> faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. O .some() retorna true se pelo menos um elemento do Array passar no teste.
 -fill -> Preenche posições do array como desejarmos.
 -find -> find: Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
 -findIndex-> Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.

 -concat -> Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.
 -includes -> Esse método nos diz se há ou não um determinado item no array. Retorna true ou false.

 -join -> O método join() junta todos os elementos de um array.
 -slice -> O método slice() retorna um novo array, apenas com as informações escolhidas
 -splice -> Esse metódo remove ou adiciona elementos em um array em uma posição específica.
 -pop -> Remove o último elemento de um array.
 -shift -> Remove o primeiro elemento de um array.
*/

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3)

