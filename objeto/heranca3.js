const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha = Object.create(pai)
filha.nome = 'anna'

console.log(filha.nome, filha.corCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'bia', writable: false, enumerable: true}
})

console.log(filha2.nome, filha2.corCabelo)
console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
}