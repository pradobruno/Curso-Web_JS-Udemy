let imparesIntervalo = (valor1=0, valor2=100) =>{

    let maxMin = [valor1,valor2]
    let valorInicial = Math.min.apply(null,maxMin)
    let valorFinal = Math.max.apply(null,maxMin)

    for(let i = valorInicial; i < valorFinal ; i++){
        if(i%2 != 0){
            console.log(`Número ${i} é ímpar.`)
        }
    }
}

imparesIntervalo(2,10)
imparesIntervalo(10,2)
imparesIntervalo()