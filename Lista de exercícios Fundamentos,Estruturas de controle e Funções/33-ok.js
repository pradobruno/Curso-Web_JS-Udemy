let vetorInteiro = [1,2,3,4]
let vetorString = ['Um','Dois','Três','Quatro']
let vetorDouble = [1.1,2.2,3.3,4.4]

let concat1 = vetorInteiro.concat(vetorString,vetorDouble)
console.log(concat1)

let concat2 =[]
for(let i = 0 ; i < vetorInteiro.length ; i++){
    concat2.push(vetorInteiro[i],vetorString[i],vetorDouble[i])
}
console.log(concat2)