const multiplica = function(num1 = 0, num2 = 0){
    if(num1 < 0 || num2 <0){
        return console.log('Multiplica somente com números maiores que zero.')
    }else if(num2 == 0){
        return console.log(0)
    }

    let resultado = num1
    for (let i = 1; i < num2; i++){
        console.log(i)
        resultado += num1
    }
    return console.log(resultado)
}

multiplica(0,3)

