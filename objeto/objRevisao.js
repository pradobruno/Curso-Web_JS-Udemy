// coleção dinamica de pares chave/valor
// podende ser obj, vetores, funções etc
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)