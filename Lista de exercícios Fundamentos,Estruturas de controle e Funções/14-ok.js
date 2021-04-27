let feiraDaFruta = (fruta) =>{
    switch(fruta.toLowerCase()){
        case 'maça':
            return console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            return console.log('Estamos com escassez de kiwis.')
            break
        case 'melancia':
            return console.log('Aqui está, são R$ 3,00 o quilo.')
            break
        default:
            return console.log('Opção não é valida, somente: maça, kiwi e melancia.')
    }
}

feiraDaFruta("Banana")