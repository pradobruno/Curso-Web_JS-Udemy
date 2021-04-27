const removePropriedadeObj = function(obj,prop){
    const copia = {...obj}
    delete copia[prop]
    return copia
}

const obijeto = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
 }

console.log(removePropriedadeObj(obijeto,'descricao')) // retornará {id: 20, nome: "caneta"}
