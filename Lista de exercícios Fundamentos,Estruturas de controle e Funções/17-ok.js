let calcAumento = (funcionario) =>{
    switch(funcionario.plano.toLowerCase()){
        case 'a':{
            let novoSalario = funcionario.salario +((funcionario.salario / 100)*10)
            return console.log(`Novo salário do funcionário ${funcionario.nome} é de ${novoSalario}`)
            break
        }
        case 'b':{
            let novoSalario = funcionario.salario +((funcionario.salario / 100)*15)
            return console.log(`Novo salário do funcionário ${funcionario.nome} é de ${novoSalario}`)
            break
        }
        case 'c':{
            let novoSalario = funcionario.salario +((funcionario.salario / 100)*20)
            return console.log(`Novo salário do funcionário ${funcionario.nome} é de ${novoSalario}`)
            break
        }
        default:
            return console.log('Valor do Plano Salarial é inválido.')
    }
}

let usuario1 = {
    nome:'Bruno',
    salario:1000,
    plano:'A'
}
let usuario2 = {
    nome:'Josi',
    salario:1000,
    plano:'b'
}
let usuario3 = {
    nome:'Pedro',
    salario:1000,
    plano:'C'
}
let usuario4 = {
    nome:'João',
    salario:1000,
    plano:'S'
}
calcAumento(usuario1)
calcAumento(usuario2)
calcAumento(usuario3)
calcAumento(usuario4)