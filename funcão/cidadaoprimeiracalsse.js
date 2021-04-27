// função em js é First-class object(citizens)
// higher-order function
// js trata função como dados
// Orientação a obj e funcional paradigmas diferentes

//criação literal
function fun1(){}

//armazenando em variável
const fun2 = function(){}

//armazenando em array
const arrei = [function(a,b){return a+b},fun1,fun2]
console.log(arrei[0](2,3))

//armazendo em atributo de obj
const obj = {}
obj.falar = function(){return 'Falamemogurizao'}
console.log(obj.falar())

//passando como parametro
function run(fun){
    fun()
}
run(function(){console.log('Executando')})

//retornar como parametro e conter uma funçao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4) // chama assim
const cincoMais = soma(2,3) // ou assim
cincoMais(4)

