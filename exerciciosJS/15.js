const arreyEntrada = [1,2,3,4,10,70,22,43]


const retornaPar = function(numeros) {
    return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    })
}

console.log(retornaPar(arreyEntrada))