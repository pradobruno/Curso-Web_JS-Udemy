const identificaPalavra = function(inicio, palavras) {
    const resultado = []
    for (let palavra of palavras)
    if (palavra.includes(inicio))
    resultado.push(palavra)
    return console.log(resultado)
    }

identificaPalavra("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
identificaPalavra("python", ["javascript", "java", "c++"]) // retornará []
