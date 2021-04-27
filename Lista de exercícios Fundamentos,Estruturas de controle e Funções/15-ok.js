let compraVeiculos = (tipo) =>{
    switch(tipo.toLowerCase()){
        case 'hatch':
            return console.log('Compra efetuada com sucesso.')
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            return console.log('Não trabalhamos com esse tipo de automóvel aqui')
            break
    }
}

compraVeiculos('bugg')