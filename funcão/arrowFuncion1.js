// padrap
let dobro = function(a){
    return 2*a
}

//1 exemplo
dobro = (a) => {
    return 2*a
}

//2 exemplo = return implicito
dobro = a => 2*a

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}
ola = () => 'Olá'
ola = _ => 'Olá'

console.log(ola())