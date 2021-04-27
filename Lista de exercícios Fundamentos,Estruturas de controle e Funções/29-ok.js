let comparaValores = (intervalo) =>{
    let entreDezEVinte = 0
    let foraDoIntervalo = 0
    for(let i = 0; i < intervalo.length ; i++){
        if(intervalo[i] >= 10 && intervalo[i] <= 20){
            entreDezEVinte = entreDezEVinte + 1            
        }else{
            foraDoIntervalo = foraDoIntervalo + 1
        }
    }
    return console.log(`Foram ${entreDezEVinte} números entre 10 e 20 e ${foraDoIntervalo} números fora desse intervalo.`)
}

let valores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
comparaValores(valores)