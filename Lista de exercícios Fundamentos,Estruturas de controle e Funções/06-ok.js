let porcent = (valor, porcentagem)=>{
    return valor + ((valor/100)*porcentagem)
}

let juroSimples = (capital,taxaJuros,tempo) =>{
    return console.log(`O montante de juros simple é de R$ ${((porcent(capital,taxaJuros))*tempo).toFixed(2)}`)
}

let juroComposto = (capital,taxaJuros,tempo) =>{
    return console.log(`O montante de juros composto é de R$ ${(capital*(Math.pow((1+(taxaJuros/100)),tempo))).toFixed(2)}`)
}

juroSimples(100,10,2)
juroComposto(1000,2,2)