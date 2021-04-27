function tratarErroLancar(erro){
    //throw new Error('')
    //throw 10
    // pode ser inclusive um obj
    throw true
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroLancar(e)
    } finally{
        console.log('Final!')
    }
}

const obj = {nome:'Roberto'}
imprimirNomeGritado(obj)

