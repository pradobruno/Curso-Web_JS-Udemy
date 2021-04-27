const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caderno", "preco": 7.50}'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => (`R$ ${produto.preco}`).replace('.',',')

const result = carrinho.map(paraObj).map(apenasPreco)
console.log(result)