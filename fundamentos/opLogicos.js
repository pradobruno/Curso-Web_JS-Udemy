function compras(trabalho1,trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const commprarrTv32 = !!(trabalho1 ^ trabalho2)
    // comparador bit a bit de booleanos
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaldavel = !comprarSorvete

    // retorno em um obj dinamico
    // quando omite chave ele usa o nome da const
    // poderia ser = Sorvete: ComprarSorvete
    return { comprarSorvete , comprarTv50 , comprarTv32, manterSaldavel }
}

console.log(compras(true,true))