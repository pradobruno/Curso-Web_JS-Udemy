const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro:'Rua abc',
        numero: 1000
    }
}

const {nome, idade} = pessoa // aqui
console.log(nome, idade)

const {nome: n, idade: i}= pessoa // aqui
console.log(n,i)


// com tratativa de retorno vazio
const {sobrenome, bemHumorada= true} = pessoa
console.log(sobrenome, bemHumorada)

// com tratativa de retorno vazio
const {endereco: {logradouro,numero,cep='N/D'}} = pessoa
console.log(logradouro,numero,cep)