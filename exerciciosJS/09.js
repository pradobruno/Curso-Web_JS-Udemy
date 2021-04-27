const repete = function(valor,qtdRepeticao){
    let resultado = []
    for (let i = 0; i < qtdRepeticao; i++){
        resultado.push(valor)
    }
    return console.log(resultado)
}

repete("5",10)