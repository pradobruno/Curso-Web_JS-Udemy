let anuidadeComJuros = (mesPgt,valorAnuidade) =>{
    if(mesPgt <= 0 || mesPgt >= 13){
        return console.log('Mês inválido.')
    }else if(mesPgt == 1){
        return console.log(`O total a ser pago é de R$ ${valorAnuidade.toFixed(2)}`)
    }else{
        let qtdMesAtraso = mesPgt -1
        return console.log(`O total a ser pago é de R$ ${(valorAnuidade*(Math.pow((1+(5/100)),qtdMesAtraso))).toFixed(2)}`)
    }
}

anuidadeComJuros(1,100)
anuidadeComJuros(5,100)
anuidadeComJuros(10,100)