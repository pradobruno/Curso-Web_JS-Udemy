const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// pais china e genero f
const fPais = e => e.pais == "China"
const fGenero = e => e.genero == "F"
const rMenorSalario = (pfunc, pFuncatual) =>{
    return pfunc.salario < pFuncatual.salario ? pfunc : pFuncatual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    /* const retorno = funcionarios.filter(fPais).filter(fGenero)
    //console.log(retorno)

    // menor salario
    const resultado = retorno.reduce(rMenorSalario)
    console.log(resultado) */

    const func = funcionarios
    .filter(fPais)
    .filter(fGenero)
    .reduce(rMenorSalario)

    console.log(func)
})