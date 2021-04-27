let temporada = (jogos) =>{
    let records = 0
    let score = 0
    let jogoMenorScore = 0

    for(let i = 0; i< jogos.length; i++){
        for(let u = 0; u< jogos.length; u++){
            if(jogos[i] > jogos[u] && jogos[u] <= jogoMenorScore){
                jogoMenorScore = 1+u
            }
        }
        if(i === 0){
            score = jogos[i]
        }else if(i > 0 && jogos[i]> score){
            score = jogos[i]
            records++
        }
    }
    console.log(records,jogoMenorScore)
}

let resultados = [30, 40, 20, 4, 51, 25, 42, 38, 56, 0]
temporada(resultados)