// içamento da declaração mas nao da atribuição
// de VAR
console.log('a = ', a)
var a = 2
console.log('a = ', a)

// nao acontece içamento com LET
console.log('b = ', b)
//ReferenceError: Cannot access 'b' before
//initialization
let b = 3
console.log('b = ', b)