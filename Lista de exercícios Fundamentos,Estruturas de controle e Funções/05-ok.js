const fixe = (a) => console.log(`R$ ${a.toFixed(2).toString().replace('.',',')}`)
// to string e replace serve para colocar dentro da regra de pontuação do portugues
let numero = 10.123456789
fixe(numero)
console.log(numero)

