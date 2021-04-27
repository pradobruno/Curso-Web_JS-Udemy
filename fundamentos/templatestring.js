const nome = 'Rebeca'
const concatencao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatencao)
console.log(template)

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUppercase()
console.log(`Ei... ${up('cuidado')}!`)