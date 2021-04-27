let objetoParaArray1 ={
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    } // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
let objetoParaArray2 ={
    codigo: 11111,
    preco: 12000
    } // irá retornar [["codigo", 11111], ["preco", 12000]]

  
const objetoParaArray = function(objeto){
const chaves = Object.keys(objeto)
const resultado = chaves.map( chave => [chave, objeto[chave]] )
return resultado
}

console.log(objetoParaArray(objetoParaArray1))
console.log(objetoParaArray(objetoParaArray2))