/* const filtrarPorDigitos = function(numeros, quantidadeDesejada) {
    return numeros.filter(numero => {
    const quantidadeDeDigitos = String(numero).length
    return quantidadeDeDigitos === quantidadeDesejada
    })
} */

function filtrarPorDigitos(numeros, quantidadeDesejada) {
    let resultado = []
    for(numero of numeros){
    const quantidadeDeDigitos = String(numero).length
    if(quantidadeDeDigitos === quantidadeDesejada)
    resultado.push(numero)
    }
    return console.log(resultado)
}

filtrarPorDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
