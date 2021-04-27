Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0 ; i<this.length ; i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caderno", "preco": 7.50}'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => (`R$ ${produto.preco}`).replace('.',',')

const result = carrinho.map2(paraObj).map2(apenasPreco)
console.log(result)