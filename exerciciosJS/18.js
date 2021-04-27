const obj1 =[
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
] // retornará 239.99
const obj2 =[
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
] // retornará 34599.89



function retornaPrecoTotal(itens) {
    const getPreco = item => item.preco
    const soma  = (acumulador, valorAtual) => acumulador + valorAtual
    return console.log(itens.map(getPreco).reduce(soma))
}

retornaPrecoTotal(obj1)
retornaPrecoTotal(obj2)