let getMaiorEMenor = (vetor) =>{
    let maiorNumero = Math.max(...vetor)
    let menorNumero = Math.min(...vetor)
    return console.log(`Maior Número do array é ${maiorNumero} e o menor é ${menorNumero}.`)
}
let valores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
getMaiorEMenor(valores)