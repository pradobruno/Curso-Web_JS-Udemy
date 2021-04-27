let numNegativos = (inteiros) =>{
    let somaTotal =0
    for(let i = 0; i < inteiros.length ; i++){
        somaTotal = somaTotal + inteiros[i]
    }
    return console.log(`Média do vetor informado é de ${somaTotal/inteiros.length}.`)
}

let valores = [1,2,3,4,5,6,7,8,9,10]

numNegativos(valores)
