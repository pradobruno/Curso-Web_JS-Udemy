let calcFatorial = (numero) =>{
    let total = numero
    let mult = numero - 1
    if(numero == 0){
        return console.log(1)
    }else if(numero <0){
        return console.log('número negativo.')
    }
    for(let i = mult; i > 1; i--){
        total *=i
    }
    return console.log(total)
}

calcFatorial(10)