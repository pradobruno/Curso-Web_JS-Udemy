function contarCaractere(caractereBuscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
    if (frase.charAt(i) === caractereBuscado)
    contador++
    return console.log(contador)
}

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1


/* function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
} */
    
    
