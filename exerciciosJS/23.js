const contaPalavras = function(pFrase){
    const palavras = pFrase.split(" ")
    return console.log(`Essa frase tem ${palavras.length} palavra(s).`)
}

contaPalavras("Sou uma frase") // retornarĂ¡ 3
contaPalavras("Me divirto aprendendo a programar") // retornarĂ¡ 5
