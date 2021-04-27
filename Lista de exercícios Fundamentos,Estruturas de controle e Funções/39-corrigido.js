/* identificar o ultimo index
inserir todos os outros
remover do index 0 até o ultimo
*/

function trocaDeLista(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let primeiroVetor = [1,2,3,4,5]
let segundoVetor = [6,7,8,9,10]

trocaDeLista(primeiroVetor,segundoVetor)