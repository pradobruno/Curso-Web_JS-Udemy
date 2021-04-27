const produtos = [
    {nome:"Notebook", preco: 2499, fragil:true},
    {nome:"iPad Pro", preco: 4199, fragil:true},
    {nome:"Copo de Vidro", preco: 12.49, fragil:true},
    {nome:"Copo de Plástico", preco: 18.99, fragil:false}
]

/* console.log(produtos.filter(function(p){
    return p.preco > 100    
})) */

const pCaro = e => e.preco >= 500
const pFragil = e => e.fragil//já é verdadeiro ou falso

const retorno = produtos.filter(pCaro).filter(pFragil)
console.log(retorno)