const somaTudo = function(arreyEntrada){
    soma = (total,valor) => total + valor
    return console.log(arreyEntrada.reduce(soma))
}

const nums = [5,5,5,5]
somaTudo(nums)