var a = 3
let b = 4 // prefencialmente use o 'let'
var a = 30
//let b = 40
//não sobrescreve variavel de mesmo nome
//mas permite alterar valor
b = 40
console.log(a, b)

a = 300
b = 400
console.log(a, b)

const c = 5
//c= 50
//erro ao tentar alterar
//o valor constante
// nem sobrescreve variavel de mesmo nome
console.log(c)