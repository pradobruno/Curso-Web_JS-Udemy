const inverso = function (entrada){
    if(entrada === true || entrada === false){
        return !entrada
    }else if(Number.isInteger(entrada)){
        if(Math.sign(entrada) == 1 || Math.sign(entrada) == 0){
            return -Math.abs(entrada)
        }else{
            return Math.abs(entrada)
        }        
    }else{
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof entrada}.`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso("false"))
console.log(inverso("15"))
console.log(inverso(20))
console.log(inverso(-20))