let retonaConceito = (notas) =>{
    for(let i = 0 ; i < notas.length; i++){
        if(notas[i].toFixed(2) >= 0.0 && notas[i].toFixed(2) <= 4.9){
            console.log(`Nota ${notas[i].toString().replace('.',',')} conceito D.`)
        }else if(notas[i].toFixed(2) >= 5.0 && notas[i].toFixed(2) <= 6.9){
            console.log(`Nota ${notas[i].toString().replace('.',',')} conceito C.`)
        }else if(notas[i].toFixed(2) >= 7.0 && notas[i].toFixed(2) <= 8.9){
            console.log(`Nota ${notas[i].toString().replace('.',',')} conceito B.`)
        }else if(notas[i].toFixed(2) >= 9.0 && notas[i].toFixed(2) <= 10.0){
            console.log(`Nota ${notas[i].toString().replace('.',',')} conceito A.`)
        }else{
            console.log(`Nota ${notas[i]} inválida.`)
        }       
    }  
}

let valorNota = [0.3,1,5.2,8,9.8,11]
retonaConceito(valorNota)