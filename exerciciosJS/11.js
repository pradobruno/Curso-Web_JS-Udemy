const retornaPrimeiroUltimo = function(arrayEntrada){
    let retorno =[arrayEntrada.shift(), arrayEntrada.pop()]
    console.log(retorno)
}

let valores = [1,2,3,4,5,6,7,8,9]

retornaPrimeiroUltimo(valores)