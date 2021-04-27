let contaPedido = (codigoProduto,qtdProduto) =>{
    switch(codigoProduto){
        case 100:
            return console.log(`Total a ser pago é R$ ${(qtdProduto * 3).toFixed(2)}`)
            break
        case 200:
            return console.log(`Total a ser pago é R$ ${(qtdProduto * 4).toFixed(2)}`)
            break
        case 300:
            return console.log(`Total a ser pago é R$ ${(qtdProduto * 5.5).toFixed(2)}`)
            break
        case 400:
            return console.log(`Total a ser pago é R$ ${(qtdProduto * 7.5).toFixed(2)}`)
            break
        case 500:
            return console.log(`Total a ser pago é R$ ${(qtdProduto * 3.5).toFixed(2)}`)
            break
        case 600:
            return console.log(`Total a ser pago é R$ ${(qtdProduto * 2.8).toFixed(2)}`)
            break
        default:
            return console.log('Código de produto inexistente.')
    }
}

contaPedido(100,5)
contaPedido(200,5)
contaPedido(300,5)
contaPedido(400,5)
contaPedido(500,5)
contaPedido(600,5)
contaPedido(700,5)