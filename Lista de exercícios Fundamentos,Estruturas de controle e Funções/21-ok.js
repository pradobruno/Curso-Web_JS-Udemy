let valorTotal = (idade) =>{
    if(idade <10 && idade > 0){
        return console.log(`Total refente a idade abaixo de 10 anos, R$ ${180.00}`)
    }else if(idade >10 && idade <30){
        return console.log(`Total refente a idade entre 10 e 30 anos, R$ ${150.00}`)
    }else if(idade >30 && idade <60){
        return console.log(`Total refente a idade entre 30 e 60 anos, R$ ${195.00}`)
    }else if(idade >60){
        return console.log(`Total refente a idade acima de 60 anos, R$ ${230.00}`)
    }else{
        return console.log('Idade informada não é válida.')
    }
}

valorTotal(9)
valorTotal(20)
valorTotal(50)
valorTotal(80)
valorTotal(-3)