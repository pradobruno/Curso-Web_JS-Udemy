//armazendando uma função numa variavel
const imprimirSoma = function(a,b){
    console.log(a+b)
}
imprimirSoma(1,2)

//armazenando uma função arrow em uma variavel
const soma = (a,b) =>{
    return a+b
}
console.log(soma(2,3))

//retono implicito
const subtracao = (a,b) => a-b
console.log(subtracao(3,2))

//exemplo de arrow
const imprimirA = a => console.log(a)
imprimirA('olokomeu')