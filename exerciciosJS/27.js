/* function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto).map(parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(paresDeChaveValorInvertidos)
} */

function inverter(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach( parChaveValor => {
    const chave = 0, valor = 1
    objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })
    return console.log(objetoInvertido)
}

inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}