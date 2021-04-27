console.log(module.exports === this)
console.log(module.exports === exports)

// formas de deixar visivel fora do modulo
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'teste'
}
console.log(module.exports)

module.exports ={publico: true}