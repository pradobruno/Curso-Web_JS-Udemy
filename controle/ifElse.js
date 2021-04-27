const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!!!')
    } else{
        console.log('Reprovado!!!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!!!')
// sempre compara tipo ou tratar por ser
// fracamente tipado