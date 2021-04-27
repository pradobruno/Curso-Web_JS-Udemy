let valor
console.log(valor)//exite mas nao te valor definido
                  // undefined

valor = null
console.log(valor)//exite mas valor foi esvaziado
                  // null

//console.log(valor.toString())                  
//impossivel transformar valor nulo em string

const produto = {}
console.log(produto.preco)// undefined
console.log(produto)//obj vazio

produto.preco = 3.50
console.log(produto.preco)
console.log(produto)

produto.preco = undefined // nunca faça
console.log(produto.preco)
console.log(produto)

produto.preco = null
console.log(produto.preco)
console.log(produto)