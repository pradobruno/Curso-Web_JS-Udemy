function entre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}


console.log(entre(10, 100, 50)) // retornarĂ¡ true
console.log(entre(16, 100, 160)) // retornarĂ¡ false
console.log(entre(3, 150, 3)) // retornarĂ¡ false
console.log(entre(3, 150, 3, true)) // retornarĂ¡ true
