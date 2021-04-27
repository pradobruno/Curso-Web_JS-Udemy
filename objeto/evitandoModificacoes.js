/// prevenir de criar mais atributos mas permite excluir e alterar
const produto = Object.preventExtensions({
    nome:'Qualquer', preco:'1,99', tag:'Promocao'
})

console.log(`Extensivel:`, Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descrição = 'Borracha Branca'
delete produto.tag
console.log(produto)

/// impede de excluir e incluir mas deixa alterar
const pessoa = {nome:'Bruno', idade:35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'prado'
delete pessoa.nome
pessoa.idade = 32
console.log(pessoa)

/// impede de excluir, incluir e alterar
Object.freeze(pessoa)
pessoa.nome = 'mudei'
console.log('Congelado:', Object.isFrozen(pessoa))
console.log(pessoa)