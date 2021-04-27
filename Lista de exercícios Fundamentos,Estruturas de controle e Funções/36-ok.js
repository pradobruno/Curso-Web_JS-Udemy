let multiplica = (vetorParametro,inteiro) =>{
    let resultado1 =[]
    for(let i = 0 ; i < vetorParametro.length ; i++){
        resultado1.push(vetorParametro[i]*inteiro)
    }
    return console.log(resultado1)
}
let multiplicaMultiplo5 = (vetorParametro,inteiro) =>{
    let resultado1 =[]
    for(let i = 0 ; i < vetorParametro.length ; i++){
        if(vetorParametro[i] > 5){
            resultado1.push(vetorParametro[i]*inteiro)
        }
    }
    return console.log(resultado1)
}


let vetorMultiplica = [2,4,6,8]

multiplica(vetorMultiplica,2)
multiplicaMultiplo5(vetorMultiplica,2)