function getAleatorio(min,max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = -1
// do faz pelo menos 1 passagem no bloco de codigo
do {
    opcao = getAleatorio(-1,10)
    console.log('Valor aleatório = '+ opcao)
}while(opcao != -1)

console.log('Fim.')