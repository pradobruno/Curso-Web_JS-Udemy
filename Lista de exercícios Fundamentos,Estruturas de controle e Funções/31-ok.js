let numNegativos = (inteiros) =>{
    let qtdNegativos =0
    for(let i = 0; i < inteiros.length ; i++){
        if(inteiros[i] < 0){
            qtdNegativos = qtdNegativos + 1
        }
    }
    return console.log(`Vetor possui ${qtdNegativos} de números negativos.`)
}

let valores = [1,2,-3,4,5,-6,7,8,9,-10,11,12,-13,14,15,-16,17,-18,19,20]

numNegativos(valores)
