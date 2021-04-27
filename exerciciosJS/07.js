function entre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}


console.log(entre(10, 100, 50)) // retornará true
console.log(entre(16, 100, 160)) // retornará false
console.log(entre(3, 150, 3)) // retornará false
console.log(entre(3, 150, 3, true)) // retornará true
