// literal
const obj1 = {}

//obj em js
const obj2 = new Object

//função construtora
function produto(nome,preco,desconto){
    // somente desse forma o atributo(nome no caso)
    // é usando o atificio 'this'
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1-desconto)
    }
}

// funcão factori
function criarFuncionario(nome, salarioBase, Faltas){
    return{
        nome,
        salarioBase,
        getSalario(){
            return (salarioBase/30) * (30-Faltas)
        }
    }
}

const f1 = criarFuncionario('João',7900,4)
const f2 = criarFuncionario('Maria',11400,1)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//JSONParse
const fromJson = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJson)