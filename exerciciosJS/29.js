const retornaSegundoMaior = function(pArray){
    const primeiroMaior = Math.max(...pArray)
    pArray = pArray.filter(numero => numero != primeiroMaior)
    return console.log(Math.max(...pArray))
}

retornaSegundoMaior([12, 16, 1, 5]) // retornarĂ¡ 12
retornaSegundoMaior([8, 4, 5, 6]) // retornarĂ¡ 6
