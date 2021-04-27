/* //sem valor inicial
Array.prototype.reduce2 = function(calback){
    let acumulador = this[0]
    for(let i = 1; i< this.length; i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

soma = (total,valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce(soma)) */


//com valor inicial
Array.prototype.reduce2 = function(calback,valorInicial){
    let indiciInicial = valorInicial ? 0:1
    let acumulador = valorInicial || this[0]
    for(let i = 1; i< this.length; i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

soma = (total,valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce(soma,21))