const sorteio = function(pNum){
    const numRandon = Math.floor(Math.random() * (10 - 1)) + 1
    if(numRandon == pNum){
        return console.log(`Parabéns! O número sorteado foi o ${numRandon}.`)
    }else{
        return console.log(`Que pena! O número sorteado foi o ${numRandon}.`)
    }
}

sorteio(1)
sorteio(2)
sorteio(3)
sorteio(4)
sorteio(5)
sorteio(6)
sorteio(7)
sorteio(8)
sorteio(9)
sorteio(10)