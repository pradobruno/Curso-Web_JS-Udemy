function getAleatorio(min,max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0
// enquanto condição for != de verdadeira ele continua
// INFINITAMENTE SE FOR O CASO ENTAO ATENÇÃO
while(opcao != -1){
    opcao = getAleatorio(-1,10)
    console.log('Valor aleatório = '+ opcao)
}

console.log('Fim.')