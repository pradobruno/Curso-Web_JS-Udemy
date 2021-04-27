function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1+ imposto)} `
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

// chama direta
console.log(getPreco())

// chamada a partir de um obj
console.log(produto.getPreco())

// chamada a partir de um obj
const carro = { preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//pode ser parametros
console.log(getPreco.call(carro, 017, '$'))

//precisa ser array
console.log(getPreco.apply(carro, [0.17,'$']))